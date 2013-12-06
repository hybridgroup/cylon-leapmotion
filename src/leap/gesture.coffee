###
 * cylon-leapmotion Leap Gesture class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

namespace 'Leap', ->
  class @Gesture
    constructor: (data) ->
      this[key] = value for key, value of data

    toString: ->
      "[Cylon::Leap::Gesture - #{@type}]"
