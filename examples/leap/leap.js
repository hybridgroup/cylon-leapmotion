"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    leapmotion: { adaptor: "leapmotion" }
  },

  devices: {
    leapmotion: { driver: "leapmotion" }
  },

  work: function(my) {
    my.leapmotion.on("frame", function(frame) {
      console.log(frame.toString());
    });

    my.leapmotion.on("hand", function(hand) {
      console.log(hand.toString());
    });
  }
}).start();
