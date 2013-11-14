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
      }

      Hand.prototype.toString = function() {
        return "[Cylon::Leap::Hand]";
      };

      return Hand;

    })();
  });

}).call(this);
