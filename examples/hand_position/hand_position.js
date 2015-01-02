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
    my.leapmotion.on("hand", function(hand) {
      console.log(hand.palmPosition.join(","));
    });
  }
}).start();
