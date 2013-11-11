(function() {
  'use strict';
  var leapmotion;

  leapmotion = source("cylon-leapmotion");

  describe("basic tests", function() {
    return it('can say hello', function() {
      return leapmotion.hello().should.be.equal("Hello, World!");
    });
  });

}).call(this);
