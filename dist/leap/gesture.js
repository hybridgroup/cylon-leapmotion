(function() {
  "use strict";
  var namespace;

  namespace = require('node-namespace');

  namespace('Leap', function() {
    return this.Gesture = (function() {
      function Gesture(data) {
        var key, value;
        for (key in data) {
          value = data[key];
          this[key] = value;
        }
      }

      Gesture.prototype.toString = function() {
        return "[Cylon::Leap::Gesture - " + this.type + "]";
      };

      return Gesture;

    })();
  });

}).call(this);
