"use strict";

var Driver = source('driver');

var Cylon = require('cylon');

var EventEmitter = require('events').EventEmitter;

describe('Cylon.Drivers.LeapMotion', function() {
  var driver = new Driver({ device: new EventEmitter });

  it('subclasses Cylon.Driver', function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
    expect(driver).to.be.an.instanceOf(Driver);
  });

  describe("#start", function() {
    beforeEach(function() {
      stub(driver, 'defineDriverEvent');
      driver.start(function() { });
    });

    afterEach(function() {
      driver.defineDriverEvent.restore();
    });

    it("defines driver events", function() {
      expect(driver.defineDriverEvent).to.be.calledWith('frame');
      expect(driver.defineDriverEvent).to.be.calledWith('hand');
      expect(driver.defineDriverEvent).to.be.calledWith('gesture');
    });
  });
});
