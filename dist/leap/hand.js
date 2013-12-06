/*
 * cylon-leapmotion Leap Hand class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  "use strict";
  var namespace;

  namespace = require('node-namespace');

  namespace('Leap', function() {
    return this.Hand = (function() {
      function Hand(data) {
        var key, value;
        for (key in data) {
          value = data[key];
          this[key] = value;
        }
        if (this.palmPosition) {
          this.palmX = this.palmPosition[0];
        }
        if (this.palmPosition) {
          this.palmY = this.palmPosition[2];
        }
        if (this.palmPosition) {
          this.palmZ = this.palmPosition[1];
        }
      }

      Hand.prototype.toString = function() {
        return "[Cylon::Leap::Hand]";
      };

      return Hand;

    })();
  });

}).call(this);
