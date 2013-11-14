(function() {
  "use strict";
  var namespace;

  namespace = require('node-namespace');

  namespace('Leap', function() {
    return this.Pointable = (function() {
      function Pointable(data) {
        var key, value;
        for (key in data) {
          value = data[key];
          this[key] = value;
        }
      }

      Pointable.prototype.toString = function() {
        return "[Cylon::Leap::Pointable]";
      };

      return Pointable;

    })();
  });

}).call(this);
