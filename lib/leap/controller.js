/*
 * cylon-leapmotion Leap Controller class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

var Frame = require('./frame');

var WebSocket = require('ws'),
    EventEmitter = require('events').EventEmitter;

var Cylon = require('cylon');

var Controller = module.exports = function Controller(opts) {
  if (opts == null) {
    opts = {};
  }

  if (opts.initialize == null) {
    opts.initialize = true;
  }

  this.leap = null;

  if (opts.initialize) {
    this.setupSocket();
  }
}

Cylon.Utils.subclass(Controller, EventEmitter);

Controller.prototype.setupSocket = function() {
  var self = this;

  this.leap || (this.leap = new WebSocket('ws://127.0.0.1:6437'));

  this.leap.onopen = function() {
    self.leap.send(JSON.stringify({ enableGestures: true }));
  };

  this.leap.on('message', function(data, flags) {
    var message = JSON.parse(data);

    if ((message.id != null) && (message.timestamp != null)) {
      self.parseFrame(message);
    }
  });
};

Controller.prototype.parseFrame = function(frame) {
  var frame = new Frame(frame);

  this.emit('frame', frame);

  for (var i = 0; i < frame.hands.length; i++) {
    this.emit('hand', frame.hands[i]);
  }

  for (var i = 0; i < frame.pointables.length; i++) {
    this.emit('pointable', frame.pointables[i]);
  }

  for (var i = 0; i < frame.gestures.length; i++) {
    this.emit('gesture', frame.gestures[i]);
  }

  return frame;
};

Controller.prototype.close = function() {
  return this.leap.terminate();
};
