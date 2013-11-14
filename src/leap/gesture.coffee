"use strict";

namespace = require 'node-namespace'

namespace 'Leap', ->
  class @Gesture
    constructor: (data) ->
      this[key] = value for key, value of data

    toString: ->
      "[Cylon::Leap::Gesture - #{@type}]"
