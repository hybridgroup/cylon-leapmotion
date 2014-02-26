/*
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var namespace = require('node-namespace');

require('./cylon-leapmotion');
require('./leap');

namespace('Cylon.Adaptors', function() {
  this.LeapMotion = (function(klass) {
    subclass(LeapMotion, klass);

    function LeapMotion(opts) {
      if (opts == null) { opts = {}; }
      LeapMotion.__super__.constructor.apply(this, arguments);
      this.connector = this.leap = new Leap.Controller(opts);
    }

    LeapMotion.prototype.connect = function(callback) {
      var events = ['frame', 'hand', 'pointable', 'gesture'];

      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        this.defineAdaptorEvent({ eventName: event });
      }

      return LeapMotion.__super__.connect.apply(this, arguments);
    };

    LeapMotion.prototype.disconnect = function() {
      return this.leap.close();
    };

    return LeapMotion;

  })(Cylon.Adaptor);
});
