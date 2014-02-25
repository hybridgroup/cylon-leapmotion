"use strict";

source('leap/frame');

var handJSON = frameJSON.hands[0];

describe('Leap', function() {
  describe('Hand', function() {
    var hand = new Leap.Hand(handJSON);

    it("extracts the palm position", function() {
      hand.palmX.should.be.a('number');
      hand.palmY.should.be.a('number');
      hand.palmZ.should.be.a('number');
    });

    it("extracts the rotation information", function() {
      hand.rotation.should.be.a('object');
      hand.rotation.axis.should.be.a('array');
      hand.rotation.angle.should.be.a('array');
      hand.rotation.matrix.should.be.a('array');
    });
  });
});
