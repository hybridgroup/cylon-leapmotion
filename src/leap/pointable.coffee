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

      @hand = false
      @gesture = false

    toString: ->
      "[Cylon::Leap::Pointable length='#{@length}' zone='#{@touchZone}']"

    # "Private": Goes through hands/gestures in the passed Frame, and maps
    # matching objects to the Pointable.
    #
    # frame - parsed Leap Motion frame
    #
    # Returns the Pointable
    _mapFrameObjects: (frame) ->
      for hand in frame.hands
        if hand.id is @handId
          @hand = hand

      for gesture in frame.gestures
        if @id in gesture.pointableIds
          @gesture = gesture

      this
