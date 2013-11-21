/*
 * cylon-leapmotion Leap Controller class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  var EventEmitter, WebSocket, namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace = require('node-namespace');

  require('./frame');

  WebSocket = require('ws');

  EventEmitter = require('events').EventEmitter;

  namespace('Leap', function() {
    return this.Controller = (function(_super) {
      __extends(Controller, _super);

      function Controller(opts) {
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

      Controller.prototype.setupSocket = function() {
        var _this = this;
        this.leap || (this.leap = new WebSocket('ws://127.0.0.1:6437'));
        this.leap.onopen = function() {
          return _this.leap.send(JSON.stringify({
            enableGestures: true
          }));
        };
        return this.leap.on('message', function(data, flags) {
          var message;
          message = JSON.parse(data);
          if ((message.id != null) && (message.timestamp != null)) {
            return _this.parseFrame(message);
          }
        });
      };

      Controller.prototype.parseFrame = function(frame) {
        var gesture, hand, pointable, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
        frame = new Leap.Frame(frame);
        this.emit('frame', frame);
        _ref = frame.hands;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          hand = _ref[_i];
          this.emit('hand', hand);
        }
        _ref1 = frame.pointables;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          pointable = _ref1[_j];
          this.emit('pointable', pointable);
        }
        _ref2 = frame.gestures;
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          gesture = _ref2[_k];
          this.emit('gesture', gesture);
        }
        return frame;
      };

      Controller.prototype.close = function() {
        return this.leap.terminate();
      };

      return Controller;

    })(EventEmitter);
  });

  module.exports = Leap.Controller;

}).call(this);
