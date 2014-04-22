var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'leapmotion', adaptor: 'leapmotion', port: '127.0.0.1:6437' },
  device: { name: 'leapmotion', driver: 'leapmotion' },

  work: function(my) {
    my.leapmotion.on('frame', function(frame) {
      frame.addObjectRelations();

      if (frame.anyHands()) {
        console.log("I currently see " + frame.hands.length + " hand(s).");

        for (var i = 0; i < frame.hands.length; i++) {
          var hand = frame.hands[i];
          var fingers = hand.pointables.length;
          console.log("  - Hand #" + hand.id + ": " + fingers + " fingers currently visible");
        }
      }
    });
  }
}).start();
