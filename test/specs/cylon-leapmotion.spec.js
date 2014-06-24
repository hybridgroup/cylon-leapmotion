"use strict";

var module = source("cylon-leapmotion");

var Adaptor = source('adaptor'),
    Driver = source('driver');

describe("Cylon.Leapmotion", function() {
  describe("#register", function() {
    var robot, adaptor, driver;

    beforeEach(function() {
      robot = { registerAdaptor: spy(), registerDriver: spy() };

      adaptor = robot.registerAdaptor;
      driver = robot.registerDriver;

      module.register(robot);
    });

    it("registers the LeapMotion adaptor", function() {
      expect(adaptor).to.be.calledWith('cylon-leapmotion', 'leapmotion');
    });

    it("registers the LeapMotion driver", function() {
      expect(driver).to.be.calledWith('cylon-leapmotion', 'leapmotion');
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the LeapMotion adaptor", function() {
      expect(module.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the LeapMotion driver", function() {
      expect(module.driver({ device: {} })).to.be.an.instanceOf(Driver);
    });
  });
});
