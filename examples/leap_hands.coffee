Cylon = require 'cylon'

Cylon.robot
  connection: { name: 'leapmotion', adaptor: 'leapmotion', port: '127.0.0.1:6437' }
  device: { name: 'leapmotion', driver: 'leapmotion' }

  work: (my) ->
    my.leapmotion.on 'hand', (hand) ->
      Logger.info "#{hand.palmX},#{hand.palmY},#{hand.palmZ}"

.start()
