(function() {
  "use strict";
  var frameJSON, handJSON;

  source('leap/frame');

  frameJSON = require('../../../support/frame');

  handJSON = frameJSON.hands[0];

  describe('Leap', function() {
    return describe('Hand', function() {
      var hand;
      hand = new Leap.Hand(handJSON);
      it("extracts the palm position", function() {
        hand.palmX.should.be.a('number');
        hand.palmY.should.be.a('number');
        return hand.palmZ.should.be.a('number');
      });
      return it("extracts the rotation information", function() {
        hand.rotation.should.be.a('object');
        hand.rotation.axis.should.be.a('array');
        hand.rotation.angle.should.be.a('array');
        return hand.rotation.matrix.should.be.a('array');
      });
    });
  });

}).call(this);
