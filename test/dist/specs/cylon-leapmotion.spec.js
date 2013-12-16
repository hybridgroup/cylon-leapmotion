(function() {
  'use strict';
  var leapmotion;

  leapmotion = source("cylon-leapmotion");

  describe("Cylon.Leapmotion", function() {
    it("should be able to register", function() {
      return leapmotion.register.should.be.a('function');
    });
    it("should be able to create adaptor", function() {
      return leapmotion.adaptor.should.be.a('function');
    });
    return it("should be able to create driver", function() {
      return leapmotion.driver.should.be.a('function');
    });
  });

}).call(this);
