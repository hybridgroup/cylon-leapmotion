###
 * cylon-leapmotion Leap Pointable class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

namespace 'Leap', ->
  class @Pointable
    constructor: (data) ->
      this[key] = value for key, value of data

    toString: ->
      "[Cylon::Leap::Pointable length='#{@length}' zone='#{@touchZone}']"
