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

  namespace('Leap', function() {
    return this.Controller = (function() {
      function Controller() {
        this.leap = new WebSocket('ws://127.0.0.1:6437');
        this.setupSocket();
      }

      Controller.prototype.setupSocket = function() {
        var _this = this;
        this.leap.onopen = function() {
          return _this.leap.send(JSON.stringify({
            enableGestures: true
          }));
        };
        return this.leap.on('message', function(data, flags) {
          return _this.parseData(JSON.parse(data));
        });
      };

      Controller.prototype.parseData = function(data) {
        return console.log(data);
      };

      return Controller;

    })();
  });

  module.exports = Leap.Controller;

}).call(this);
