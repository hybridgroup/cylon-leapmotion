"use strict";

var leapmotion = source("cylon-leapmotion");

describe("Cylon.Leapmotion", function() {
  it("should be able to register", function() {
    expect(leapmotion.register).to.be.a('function');
  });

  it("should be able to create adaptor", function() {
    expect(leapmotion.adaptor({ initialize: false })).to.be.a('object');
  });

  it("should be able to create driver", function() {
    expect(leapmotion.driver({ device: {} })).to.be.a('object');
  });
});
