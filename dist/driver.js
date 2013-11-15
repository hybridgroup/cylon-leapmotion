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

  namespace('Cylon.Driver', function() {
    return this.LeapMotion = (function(_super) {
      __extends(LeapMotion, _super);

      function LeapMotion(opts) {
        LeapMotion.__super__.constructor.apply(this, arguments);
        this.device = opts.device;
        this.connection = this.device.connection;
      }

      LeapMotion.prototype.start = function(callback) {
        Logger.info("" + this.device.name + " started");
        this.defineDriverEvent({
          eventName: 'frame'
        });
        this.defineDriverEvent({
          eventName: 'hand'
        });
        this.defineDriverEvent({
          eventName: 'pointable'
        });
        this.defineDriverEvent({
          eventName: 'gesture'
        });
        return callback(null);
      };

      LeapMotion.prototype.commands = function() {
        return [];
      };

      return LeapMotion;

    })(Cylon.Basestar);
  });

}).call(this);
