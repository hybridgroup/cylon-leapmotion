# Hand Position

For this example, we're going to use the `hand` event the Leap Motion emits to
get the current position of a hand in 3D space.

To get started, let's load up Cylon:

    var Cylon = require('cylon');

With that done, let's begin defining our robot:

    Cylon.robot({

As in the basic Leap example, we have a single conncetion + device pair, talking
to the Leap Motion over WebSockets.

      connections: {
        leapmotion: { adaptor: 'leapmotion' }
      },

      devices: {
        leapmotion: { driver: 'leapmotion' }
      },

With our connections defined, we can get into the meat of this example. For the
work, we're going to listen for `hand` events, and print the current palm X, Y,
and Z coordinates to the console.

      work: function(my) {
        my.leapmotion.on('hand', function(hand) {
          console.log(hand.palmPosition.join(','));
        });
      }

With that done, we can start the robot!

    }).start();
