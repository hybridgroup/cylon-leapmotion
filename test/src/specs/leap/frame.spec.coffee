"use strict"

source 'leap/frame'

frameJSON = require '../../../support/frame'

describe 'Leap', ->
  describe 'Frame', ->
    frame = new Leap.Frame(frameJSON)

    it "extracts the frame's ID", ->
      frame.id.should.be.a 'number'
      frame.id.should.be.equal 99943

    it "extracts the frame's timestamp", ->
      frame.timestamp.should.be.a 'number'
      frame.timestamp.should.be.equal 4729292670

    it "stores the raw frame data", ->
      frame.raw.should.be.equal frameJSON

    it "extracts rotation data from the frame", ->
      frame.rotation.should.be.a 'object'
      frame.rotation.axis.should.be.a 'array'
      frame.rotation.angle.should.be.a 'array'
      frame.rotation.matrix.should.be.a 'array'

    it "extracts scale factor data from the frame", ->
      frame.scaleFactor.should.be.a 'number'

    it "extracts translation factor data from the frame", ->
      frame.translation.should.be.a 'array'

    it "stores the detected hands in an array", ->
      frame.hands.should.be.a 'array'

    it "stores the detected gestures in an array", ->
      frame.gestures.should.be.a 'array'

    it "stores the detected pointables in an array", ->
      frame.pointables.should.be.a 'array'

    describe 'object mappings', ->
      hand = frame.hands[0]
      gesture = frame.gestures[0]
      pointables = frame.pointables

      it 'allows accessing the gesture from the hand', ->
        hand.gesture.should.be.eql gesture

      it 'allows accessing the pointables from the hand', ->
        hand.pointables.should.be.an 'array'

      it 'allows accessing the hand from the pointables', ->
        for pointer in hand.pointables
          pointer.hand.should.be.eql hand

      it 'allows accessing the gesture from the pointables', ->
        for pointer in gesture.pointables
          pointer.gesture.should.be.eql gesture

      it 'allows accessing the pointables from the gesture', ->
        gesture.pointables.should.be.an 'array'

      it 'allows accessing the hands from the gesture', ->
        gesture.hands[0].should.be.eql hand

    it "exposes a toString function", ->
      frame.toString.should.be.a 'function'

    describe '#anyHands', ->
      context "when there are hands in the frame", ->
        it "returns true", ->
          expect(frame.anyHands()).to.be.true

      context "when there are no hands in the frame", ->
        originalHands = null

        before ->
          originalHands = frame.hands
          frame.hands = []

        after ->
          frame.hands = originalHands

        it "returns false", ->
          frame.hands = []
          expect(frame.anyHands()).to.be.false
