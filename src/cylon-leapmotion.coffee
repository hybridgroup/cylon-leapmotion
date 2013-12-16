###
 * cylon-leapmotion
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict'

namespace = require 'node-namespace'

require 'cylon'
require './adaptor'
require './driver'

module.exports =
  adaptor: (args...) ->
    new Cylon.Adaptors.LeapMotion(args...)

  driver: (args...) ->
    new Cylon.Drivers.LeapMotion(args...)

  register: (robot) ->
    Logger.info "Registering Leap Motion adaptor for #{robot.name}"
    robot.registerAdaptor 'cylon-leapmotion', 'leapmotion'

    Logger.info "Registering Leap Motion driver for #{robot.name}"
    robot.registerDriver 'cylon-leapmotion', 'leapmotion'
