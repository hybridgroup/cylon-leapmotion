(function() {
  'use strict';
  var leapmotion, namespace;

  namespace = require('node-namespace');

  namespace('Cylon', function() {
    return this.Basestar = (function() {
      function Basestar() {}

      return Basestar;

    })();
  });

  leapmotion = source("cylon-leapmotion");

  describe("cylon-leapmotion", function() {
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
