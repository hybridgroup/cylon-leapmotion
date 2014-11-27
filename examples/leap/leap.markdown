# Leap Motion

In this quick example, we're going to walk through the basic events the Leap
Motion is capable of emitting.

We'll start off by loading up Cylon:

    var Cylon = require('cylon');

With that done, we can start defining our robot:

    Cylon.robot({

We have a single connection + device combo for this bot, which will connect to
the Leap Motion using the `leapd` daemon over WebSockets.

      connections: {
        leapmotion: { adaptor: 'leapmotion' }
      },

      devices: {
        leapmotion: { driver: 'leapmotion' }
      },

Easy as can be. For our work, we're going to log a simplified version of the
data we get from the device.

      work: function(my) {
        my.leapmotion.on('frame', function(frame) {
          console.log(frame.toString());
        });

        my.leapmotion.on('hand', function(hand) {
          console.log(hand.toString());
        });
      }

And with that all done, we can start:

    }).start();
