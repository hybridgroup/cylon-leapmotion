###
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict";

namespace = require 'node-namespace'

namespace 'Cylon.Driver', ->
  class @LeapMotion extends Cylon.Basestar
    constructor: (opts) ->
      super
      @device = opts.device
      @connection = @device.connection

    commands: -> []

    start: (callback) ->
      Logger.info "LeapMotion #{@device.name} starting."

      for event in ['connect', 'frame', 'hand', 'pointable', 'gesture']
        @defineDriverEvent eventName: event

      (callback)(null)

      @device.emit 'start'

    stop: -> Logger.debug "LeapMotion #{@device.name} stopping."
