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

    it("emits gestures if they occur", function() {
      var gesture1 = {}, gesture2 = {};

      handlers.frame({ gestures: [gesture1, gesture2] });

      expect(conn.emit).to.be.calledWith('gesture', gesture1);
      expect(conn.emit).to.be.calledWith('gesture', gesture2);
    });

    it("attaches a hand function to the LeapMotion event loop", function() {
      handlers.hand('hand');
      expect(conn.emit).to.be.calledWith('hand', 'hand');
    });

    it("adds palm position accessors to the hand", function() {
      var parsed = {
        palmPosition: [ 0, 1, 2 ],
        _rotation: [ 0, 1, 2 ],

        palmX: 0,
        palmY: 1,
        palmZ: 2,

        rotation: {
          axis: 0,
          angle: 1,
          matrix: 2
        }
      }

      handlers.hand({ palmPosition: [ 0, 1, 2 ], _rotation: [ 0, 1, 2 ] });

      expect(conn.emit).to.be.calledWith('hand', parsed);
    })
  });
});
