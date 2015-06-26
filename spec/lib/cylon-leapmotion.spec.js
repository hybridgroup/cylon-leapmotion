"use strict";

var leapmotion = lib("../");

var Adaptor = lib("adaptor"),
    Driver = lib("driver");

describe("Cylon.Leapmotion", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(leapmotion.adaptors).to.be.eql(["leapmotion"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(leapmotion.drivers).to.be.eql(["leapmotion"]);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the LeapMotion adaptor", function() {
      expect(leapmotion.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the LeapMotion driver", function() {
      var driver = leapmotion.driver({ device: { connection: {} } });
      expect(driver).to.be.an.instanceOf(Driver);
    });
  });
});
