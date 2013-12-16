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

      @hands = []
      @pointables = []

    toString: ->
      "[Cylon::Leap::Gesture - #{@type}]"

    # "Private": Goes through hands/pointables in the passed Frame, and maps
    # matching objects to the Gesture.
    #
    # frame - parsed Leap Motion frame
    #
    # Returns the Gesture
    _mapFrameObjects: (frame) ->
      for hand in frame.hands
        if hand.id in @handIds
          @hands.push hand

      for pointable in frame.pointables
        if pointable.id in @pointableIds
          @pointables.push pointable

      this
