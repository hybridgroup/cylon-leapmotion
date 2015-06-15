"use strict";

var Driver = lib("driver");

var Cylon = require("cylon");

describe("Cylon.Drivers.LeapMotion", function() {
  var driver = new Driver({ device: { connection: {} } });

  it("subclasses Cylon.Driver", function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
    expect(driver).to.be.an.instanceOf(Driver);
  });

  describe("#start", function() {
    beforeEach(function() {
      stub(driver, "defineDriverEvent");
      driver.start(function() { });
    });

    afterEach(function() {
      driver.defineDriverEvent.restore();
    });

    it("defines driver events", function() {
      expect(driver.defineDriverEvent).to.be.calledWith("frame");
      expect(driver.defineDriverEvent).to.be.calledWith("hand");
      expect(driver.defineDriverEvent).to.be.calledWith("gesture");
    });
  });
});
