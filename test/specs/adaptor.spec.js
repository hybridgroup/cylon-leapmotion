"use strict";

var Adaptor = source('adaptor');

var Cylon = require('cylon'),
    Leap = require('leapjs');

describe('Adaptor', function() {
  var adaptor = new Adaptor();

  it("subclasses Cylon.Adaptor", function() {
    expect(adaptor).to.be.an.instanceOf(Cylon.Adaptor);
    expect(adaptor).to.be.an.instanceOf(Adaptor);
  });

  describe("#connect", function() {
    var conn, handlers

    beforeEach(function() {
      conn = adaptor.connection = { emit: spy() };

      stub(Leap, 'loop');
      adaptor.connect(function() {});

      handlers = Leap.loop.args[0][0];
    });

    afterEach(function() {
      Leap.loop.restore();
    });

    it("attaches a frame function to the LeapMotion event loop", function() {
      handlers.frame('frame');
      expect(conn.emit).to.be.calledWith('frame', 'frame');
    });

    it("attaches a hand function to the LeapMotion event loop", function() {
      handlers.hand('hand');
      expect(conn.emit).to.be.calledWith('hand', 'hand');
    });
  });
});
