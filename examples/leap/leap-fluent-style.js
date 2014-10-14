var cylon = require('cylon');

cylon.robot({
  connection: { name: 'leapmotion', adaptor: 'leapmotion', port: '127.0.0.1:6437' },
  device: { name: 'leapmotion', driver: 'leapmotion' }
})

.on('ready', function(robot) {
  robot.leapmotion.on('frame', function(frame) {
    console.log(frame.toString());
  });

  robot.leapmotion.on('hand', function(hand) {
    console.log(hand.toString());
  });
})

.start();
