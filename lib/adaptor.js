/*
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require('cylon'),
    Leap = require('leapjs');

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }

  Adaptor.__super__.constructor.apply(this, arguments);
  this.connector = this.leap = Leap;
}

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  var conn = this.connection;

  Adaptor.__super__.connect.apply(this, arguments);

  Leap.loop({
    enableGestures: true,
    frame: function(frame) {
      if (frame.gestures && frame.gestures.length > 0) {
        for (var g = 0; g < frame.gestures.length; g++) {
          conn.emit('gesture', frame.gestures[g]);
        }
      }

      conn.emit('frame', frame);
    },

    hand: function(hand) {
      if (hand.palmPosition) {
        hand.palmX = hand.palmPosition[0]
        hand.palmY = hand.palmPosition[1]
        hand.palmZ = hand.palmPosition[2]
      }

      if (hand._rotation) {
        hand.rotation = {
          axis: hand._rotation[0],
          angle: hand._rotation[1],
          matrix: hand._rotation[2]
        };
      }

      conn.emit('hand', hand);
    },
  })
};
