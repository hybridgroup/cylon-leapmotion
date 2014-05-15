"use strict";

var module = source("cylon-leapmotion");

describe("Cylon.Leapmotion", function() {
  it("should be able to register", function() {
    expect(module.register).to.be.a('function');
  });

  it("should be able to create adaptor", function() {
    expect(module.adaptor({ initialize: false })).to.be.a('object');
  });

  it("should be able to create driver", function() {
    expect(module.driver({ device: {} })).to.be.a('object');
  });
});
