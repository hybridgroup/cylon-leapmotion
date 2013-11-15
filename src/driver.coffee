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

    start: (callback) ->
      Logger.info "#{@device.name} started"

      @defineDriverEvent eventName: 'frame'
      @defineDriverEvent eventName: 'hand'
      @defineDriverEvent eventName: 'pointable'
      @defineDriverEvent eventName: 'gesture'

      (callback)(null)

    commands: -> []
