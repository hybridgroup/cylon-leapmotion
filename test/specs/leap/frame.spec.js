"use strict";

source('leap/frame');

describe('Leap', function() {
  describe('Frame', function() {
    var frame = new Leap.Frame(frameJSON);

    it("extracts the frame's ID", function() {
      expect(frame.id).to.be.a('number');
      expect(frame.id).to.be.equal(99943);
    });

    it("extracts the frame's timestamp", function() {
      expect(frame.timestamp).to.be.a('number');
      expect(frame.timestamp).to.be.equal(4729292670);
    });

    it("stores the raw frame data", function() {
      expect(frame.raw).to.be.equal(frameJSON);
    });

    it("extracts rotation data from the frame", function() {
      expect(frame.rotation).to.be.a('object');
      expect(frame.rotation.axis).to.be.a('array');
      expect(frame.rotation.angle).to.be.a('array');
      expect(frame.rotation.matrix).to.be.a('array');
    });

    it("extracts scale factor data from the frame", function() {
      expect(frame.scaleFactor).to.be.a('number');
    });

    it("extracts translation factor data from the frame", function() {
      expect(frame.translation).to.be.a('array');
    });

    it("stores the detected hands in an array", function() {
      expect(frame.hands).to.be.a('array');
    });

    it("stores the detected gestures in an array", function() {
      expect(frame.gestures).to.be.a('array');
    });

    it("stores the detected pointables in an array", function() {
      expect(frame.pointables).to.be.a('array');
    });

    describe('object mappings', function() {
      var hand = frame.hands[0],
          gesture = frame.gestures[0],
          pointables = frame.pointables;

      it('allows accessing the gesture from the hand', function() {
        expect(hand.gesture).to.be.eql(gesture);
      });

      it('allows accessing the pointables from the hand', function() {
        expect(hand.pointables).to.be.an('array');
      });

      it('allows accessing the hand from the pointables', function() {
        for (var i = 0; i < hand.pointables.length; i++) {
          var pointer = hand.pointables[i];
          expect(pointer.hand).to.be.eql(hand);
        }
      });

      it('allows accessing the gesture from the pointables', function() {
        for (var i = 0; i < gesture.pointables.length; i++) {
          var pointer = gesture.pointables[i];
          expect(pointer.gesture).to.be.eql(gesture);
        }
      });

      it('allows accessing the pointables from the gesture', function() {
        expect(gesture.pointables).to.be.an('array');
      });

      it('allows accessing the hands from the gesture', function() {
        expect(gesture.hands[0]).to.be.eql(hand);
      });
    });

    it("exposes a toString function", function() {
      expect(frame.toString).to.be.a('function');
    });

    describe('#anyHands', function() {
      context("when there are hands in the frame", function() {
        it("returns true", function() {
          expect(frame.anyHands()).to.be["true"];
        });
      });

      context("when there are no hands in the frame", function() {
        var originalHands = null;

        before(function() {
          originalHands = frame.hands;
          frame.hands = [];
        });

        after(function() {
          frame.hands = originalHands;
        });

        it("returns false", function() {
          frame.hands = [];
          expect(frame.anyHands()).to.be["false"];
        });
      });
    });
  });
});
