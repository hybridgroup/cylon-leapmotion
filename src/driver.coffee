###
 * cylon-leapmotion driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

require './cylon-leapmotion'

namespace 'Cylon.Drivers', ->
  class @LeapMotion extends Cylon.Driver
  
  	# Public: Starts the driver
  	#
  	# callback - params
  	#
  	# Returns null.
    start: (callback) ->
      Logger.info "LeapMotion #{@device.name} starting."

      for event in ['connect', 'frame', 'hand', 'pointable', 'gesture']
        @defineDriverEvent eventName: event

      super
