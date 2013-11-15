Cylon = require 'cylon'

Cylon.robot
  connection: { name: 'leapmotion', adaptor: 'leapmotion', port: '127.0.0.1:6437' }
  device: { name: 'leapmotion', driver: 'leapmotion' }

  work: (my) ->
    my.leapmotion.on 'connect', ->
      Logger.info "Connected"

    my.leapmotion.on 'start', ->
      Logger.info "Started"

    events = ["frame", "hand", "pointable", "gesture"]

    for event in events
      my.leapmotion.on event, (payload) ->
        Logger.info payload.toString()

.start()
