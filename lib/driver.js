/*
 * cylon-leapmotion driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var namespace = require('node-namespace');

require('./cylon-leapmotion');

namespace('Cylon.Drivers', function() {
  this.LeapMotion = (function(klass) {
    subclass(LeapMotion, klass);

    function LeapMotion() {
      LeapMotion.__super__.constructor.apply(this, arguments);
    }

    LeapMotion.prototype.start = function(callback) {
      Logger.info("LeapMotion " + this.device.name + " starting.");
      var events =  ['connect', 'frame', 'hand', 'pointable', 'gesture'];

      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        this.defineDriverEvent({ eventName: event });
      }

      return LeapMotion.__super__.start.apply(this, arguments);
    };

    return LeapMotion;

  })(Cylon.Driver);
});
