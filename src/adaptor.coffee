###
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

require './leap'

namespace 'Cylon.Adaptor', ->
  class @LeapMotion extends Cylon.Basestar
    constructor: (opts = {}) ->
      super
      @name = opts.name
      @connection = opts.connection

      @connector = @leap = new Leap.Controller

    commands: -> []

    connect: (callback) ->
      for event in ['frame', 'hand', 'pointable', 'gesture']
        @defineAdaptorEvent eventName: event

      (callback)(null)

      @connection.emit 'connect'

    disconnect: -> @leap.close()
