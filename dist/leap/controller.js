/*
 * cylon-leapmotion Leap Controller class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  var WebSocket, namespace;

  namespace = require('node-namespace');

  WebSocket = require('ws');

  require('./frame');

  namespace('Leap', function() {
    return this.Controller = (function() {
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
          return _this.parseFrame(JSON.parse(data));
        });
      };

      Controller.prototype.parseFrame = function(frame) {
        return new Leap.Frame(frame);
      };

      return Controller;

    })();
  });

  module.exports = Leap.Controller;

}).call(this);
