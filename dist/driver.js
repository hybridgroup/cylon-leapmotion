/*
 * cylon-leapmotion driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  "use strict";
  var namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace = require('node-namespace');

  require('./cylon-leapmotion');

  namespace('Cylon.Drivers', function() {
    var _ref;
    return this.LeapMotion = (function(_super) {
      __extends(LeapMotion, _super);

      function LeapMotion() {
        _ref = LeapMotion.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      LeapMotion.prototype.start = function(callback) {
        var event, _i, _len, _ref1;
        Logger.info("LeapMotion " + this.device.name + " starting.");
        _ref1 = ['connect', 'frame', 'hand', 'pointable', 'gesture'];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          event = _ref1[_i];
          this.defineDriverEvent({
            eventName: event
          });
        }
        return LeapMotion.__super__.start.apply(this, arguments);
      };

      return LeapMotion;

    })(Cylon.Driver);
  });

}).call(this);
