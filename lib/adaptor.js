/*
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon"),
    Leap = require("leapjs");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);

  opts = opts || {};

  this.host = opts.host || "127.0.0.1";

  this.connector = this.leap = Leap;

  this.events = [
    /**
     * Emitted when the Leap Motion has finished processing a new frame
     *
     * @event frame
     * @value data
     */
    "frame",

    /**
     * Emitted per frame when the Leap Motion sees a hand
     *
     * @event hand
     * @value data
     */
    "hand",

    /**
     * Emitted per frame when the Leap Motion sees a gesture
     *
     * @event gesture
     * @value data
     */
    "gesture"
  ];
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

/**
 * Connects to the Leap Motion
 *
 * @param {Function} callback to be triggered when connected
 * @return {void}
 */
Adaptor.prototype.connect = function(callback) {
  var emit = this.emit;

  callback();

  Leap.loop({
    enableGestures: true,
    host: this.host,

    frame: function(frame) {
      if (frame.gestures && frame.gestures.length > 0) {
        for (var g = 0; g < frame.gestures.length; g++) {
          emit("gesture", frame.gestures[g]);
        }
      }

      emit("frame", frame);
    },

    hand: function(hand) {
      if (hand.palmPosition) {
        hand.palmX = hand.palmPosition[0];
        hand.palmY = hand.palmPosition[1];
        hand.palmZ = hand.palmPosition[2];
      }

      if (hand._rotation) {
        hand.rotation = {
          axis: hand._rotation[0],
          angle: hand._rotation[1],
          matrix: hand._rotation[2]
        };
      }

      emit("hand", hand);
    }
  });
};

/**
 * Disconnects from the Leap Motion
 *
 * @param {Function} callback to be triggered when disconnected
 * @return {void}
 */
Adaptor.prototype.disconnect = function(callback) {
  callback();
};
