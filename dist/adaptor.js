/*
 * cylon-leapmotion adaptor
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

  require('./leap');

  namespace('Cylon.Adaptors', function() {
    return this.LeapMotion = (function(_super) {
      __extends(LeapMotion, _super);

      function LeapMotion(opts) {
        if (opts == null) {
          opts = {};
        }
        LeapMotion.__super__.constructor.apply(this, arguments);
        this.connector = this.leap = new Leap.Controller(opts);
      }

      LeapMotion.prototype.connect = function(callback) {
        var event, _i, _len, _ref;
        _ref = ['frame', 'hand', 'pointable', 'gesture'];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          event = _ref[_i];
          this.defineAdaptorEvent({
            eventName: event
          });
        }
        return LeapMotion.__super__.connect.apply(this, arguments);
      };

      LeapMotion.prototype.disconnect = function() {
        return this.leap.close();
      };

      return LeapMotion;

    })(Cylon.Adaptor);
  });

}).call(this);
