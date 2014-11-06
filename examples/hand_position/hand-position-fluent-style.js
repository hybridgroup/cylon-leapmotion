var cylon = require('cylon');

cylon.robot({
  connection: { name: 'leapmotion', adaptor: 'leapmotion' },
  device: { name: 'leapmotion', driver: 'leapmotion' }
})

.on('ready', function(robot) {
  robot.leapmotion.on('hand', function(hand) {
    console.log(hand.palmPosition.join(','));
  });
})

.start();
