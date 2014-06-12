"use strict";

var Adaptor = source('adaptor');

var EventEmitter = require('events').EventEmitter;

describe('Cylon.Adaptors.Leapmotion', function() {
  var adaptor = new Adaptor({ initialize: false });

  it("provides a 'connect' function", function() {
    expect(adaptor.connect).to.be.a('function');
  });

  it("provides a 'disconnect' function", function() {
    expect(adaptor.disconnect).to.be.a('function');
  });
});
