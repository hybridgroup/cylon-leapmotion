"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("leapmotion", { adaptor: "leapmotion" })
  .device("leapmotion", { driver: "leapmotion" })

  .on("ready", function(bot) {
    bot.leapmotion.on("frame", function(frame) {
      console.log(frame.toString());
    });

    bot.leapmotion.on("hand", function(hand) {
      console.log(hand.toString());
    });
  });

Cylon.start();
