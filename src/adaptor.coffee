###
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

require './cylon-leapmotion'
require './leap'

namespace 'Cylon.Adaptors', ->
  class @LeapMotion extends Cylon.Adaptor
    constructor: (opts = {}) ->
      super
      @connector = @leap = new Leap.Controller(opts)

    connect: (callback) ->
      for event in ['frame', 'hand', 'pointable', 'gesture']
        @defineAdaptorEvent eventName: event

      super

    disconnect: -> @leap.close()
