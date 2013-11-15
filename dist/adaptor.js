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

  require('./leap');

  namespace('Cylon.Adaptor', function() {
    return this.LeapMotion = (function(_super) {
      __extends(LeapMotion, _super);

      function LeapMotion(opts) {
        if (opts == null) {
          opts = {};
        }
        LeapMotion.__super__.constructor.apply(this, arguments);
        this.connection = opts.connection;
        this.leap = new Leap.Controller;
        this.connector = this.leap;
        this.name = opts.name;
      }

      LeapMotion.prototype.connect = function(callback) {
        this.defineAdaptorEvent({
          eventName: 'frame'
        });
        this.defineAdaptorEvent({
          eventName: 'hand'
        });
        this.defineAdaptorEvent({
          eventName: 'pointable'
        });
        this.defineAdaptorEvent({
          eventName: 'gesture'
        });
        callback(null);
        return this.connection.emit('connect');
      };

      LeapMotion.prototype.commands = function() {
        return [];
      };

      LeapMotion.prototype.disconnect = function() {
        return this.leap.close();
      };

      return LeapMotion;

    })(Cylon.Basestar);
  });

}).call(this);
