"use strict";

namespace = require 'node-namespace'

namespace 'Leap', ->
  class @Hand
    constructor: (data) ->
      this[key] = value for key, value of data
      @palmX = @palmPosition[0] if @palmPosition
      @palmY = @palmPosition[2] if @palmPosition
      @palmZ = @palmPosition[1] if @palmPosition

    toString: ->
      "[Cylon::Leap::Hand]"
