###
 * cylon-leapmotion Leap Hand class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

namespace 'Leap', ->
  class @Hand
    constructor: (data) ->
      this[key] = value for key, value of data
      [@palmX, @palmY, @palmZ] = @palmPosition if @palmPosition

      @rotation = {
        axis: @r[0]
        angle: @r[1]
        matrix: @r[2]
      }

      @translation = @t

      @gesture = false
      @pointables = []

    toString: -> "[Cylon::Leap::Hand X='#{@palmX}' Y='#{@palmY}' Z='#{@palmZ}']"

    # "Private": Goes through pointables/gestures in the passed Frame, and maps
    # matching objects to the Hand.
    #
    # frame - parsed Leap Motion frame
    #
    # Returns the Hand
    _mapFrameObjects: (frame) ->
      for pointable in frame.pointables
        if pointable.handId is @id
          @pointables.push pointable

      for gesture in frame.gestures
        if @id in gesture.handIds
          @gesture = gesture

      this
