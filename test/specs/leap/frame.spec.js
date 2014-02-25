(function() {
  "use strict";

  source('leap/frame');

  describe('Leap', function() {
    return describe('Frame', function() {
      var frame;
      frame = new Leap.Frame(frameJSON);
      it("extracts the frame's ID", function() {
        frame.id.should.be.a('number');
        return frame.id.should.be.equal(99943);
      });
      it("extracts the frame's timestamp", function() {
        frame.timestamp.should.be.a('number');
        return frame.timestamp.should.be.equal(4729292670);
      });
      it("stores the raw frame data", function() {
        return frame.raw.should.be.equal(frameJSON);
      });
      it("extracts rotation data from the frame", function() {
        frame.rotation.should.be.a('object');
        frame.rotation.axis.should.be.a('array');
        frame.rotation.angle.should.be.a('array');
        return frame.rotation.matrix.should.be.a('array');
      });
      it("extracts scale factor data from the frame", function() {
        return frame.scaleFactor.should.be.a('number');
      });
      it("extracts translation factor data from the frame", function() {
        return frame.translation.should.be.a('array');
      });
      it("stores the detected hands in an array", function() {
        return frame.hands.should.be.a('array');
      });
      it("stores the detected gestures in an array", function() {
        return frame.gestures.should.be.a('array');
      });
      it("stores the detected pointables in an array", function() {
        return frame.pointables.should.be.a('array');
      });
      describe('object mappings', function() {
        var gesture, hand, pointables;
        hand = frame.hands[0];
        gesture = frame.gestures[0];
        pointables = frame.pointables;
        it('allows accessing the gesture from the hand', function() {
          return hand.gesture.should.be.eql(gesture);
        });
        it('allows accessing the pointables from the hand', function() {
          return hand.pointables.should.be.an('array');
        });
        it('allows accessing the hand from the pointables', function() {
          var pointer, _i, _len, _ref, _results;
          _ref = hand.pointables;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            pointer = _ref[_i];
            _results.push(pointer.hand.should.be.eql(hand));
          }
          return _results;
        });
        it('allows accessing the gesture from the pointables', function() {
          var pointer, _i, _len, _ref, _results;
          _ref = gesture.pointables;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            pointer = _ref[_i];
            _results.push(pointer.gesture.should.be.eql(gesture));
          }
          return _results;
        });
        it('allows accessing the pointables from the gesture', function() {
          return gesture.pointables.should.be.an('array');
        });
        return it('allows accessing the hands from the gesture', function() {
          return gesture.hands[0].should.be.eql(hand);
        });
      });
      it("exposes a toString function", function() {
        return frame.toString.should.be.a('function');
      });
      return describe('#anyHands', function() {
        context("when there are hands in the frame", function() {
          return it("returns true", function() {
            return expect(frame.anyHands()).to.be["true"];
          });
        });
        return context("when there are no hands in the frame", function() {
          var originalHands;
          originalHands = null;
          before(function() {
            originalHands = frame.hands;
            return frame.hands = [];
          });
          after(function() {
            return frame.hands = originalHands;
          });
          return it("returns false", function() {
            frame.hands = [];
            return expect(frame.anyHands()).to.be["false"];
          });
        });
      });
    });
  });

}).call(this);
