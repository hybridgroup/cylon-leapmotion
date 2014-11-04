"use strict";

var module = source("cylon-leapmotion");

var Adaptor = source('adaptor'),
    Driver = source('driver');

describe("Cylon.Leapmotion", function() {
  describe("#adaptors", function() {
    it('is an array of supplied adaptors', function() {
      expect(module.adaptors).to.be.eql(['leapmotion']);
    });
  });

  describe("#drivers", function() {
    it('is an array of supplied drivers', function() {
      expect(module.drivers).to.be.eql(['leapmotion']);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the LeapMotion adaptor", function() {
      expect(module.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the LeapMotion driver", function() {
      expect(module.driver({ device: { connection: {} } })).to.be.an.instanceOf(Driver);
    });
  });
});
