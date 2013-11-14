var namespace = require('node-namespace');

namespace('Cylon', function() {
  return this.Basestar = (function() {
    function Basestar() {}
    return Basestar;
  })();
});
