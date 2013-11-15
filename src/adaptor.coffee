###
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict";

namespace = require 'node-namespace'

require './leap'

namespace 'Cylon.Adaptor', ->
  class @LeapMotion extends Cylon.Basestar
    constructor: (opts = {}) ->
      super
      @connection = opts.connection
      @leap = new Leap.Controller
      @connector = @leap
      @name = opts.name

    connect: (callback) ->
      Logger.info "Connecting to LeapMotion #{@name}"

      @defineAdaptorEvent eventName: 'frame'
      @defineAdaptorEvent eventName: 'hand'
      @defineAdaptorEvent eventName: 'pointable'
      @defineAdaptorEvent eventName: 'gesture'

      (callback)(null)

    commands: -> []
