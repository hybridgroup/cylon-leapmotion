var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'leapmotion', adaptor: 'leapmotion', port: '127.0.0.1:6437' },
  device: { name: 'leapmotion', driver: 'leapmotion' },

  work: function(my) {
    my.leapmotion.on('connect', function() {
      console.log("Connected to Leap Motion.");
    });

    my.leapmotion.on('start', function() {
      console.log("Leap Motion has started.");
    });

    my.leapmotion.on('frame', function(frame) {
      console.log(frame.toString());
    });

    my.leapmotion.on('hand', function(hand) {
      console.log(hand.toString());
    });

    my.leapmotion.on('pointable', function(pointable) {
      console.log(pointable.toString());
    });

    my.leapmotion.on('gesture', function(gesture) {
      console.log(gesture.toString());
    });
  }
}).start();
