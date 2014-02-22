###
 * cylon-leapmotion Leap Frame class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

require './gesture'
require './hand'
require './pointable'

namespace 'Leap', ->
  class @Frame
    # Creates a new Frame object, based on passed Frame data from the Leap
    # Motion.
    constructor: (frame) ->
      @id = frame.id
      @timestamp = frame.timestamp
      @raw = frame

      [@gestures, @hands, @pointables] = [[], [], []]

      @rotation = {
        axis: frame.r[0]
        angle: frame.r[1]
        matrix: frame.r[2]
      }

      [@scaleFactor, @translation] = [frame.s, frame.t]

      @gestures.push new Leap.Gesture(gesture) for gesture in frame.gestures
      @hands.push new Leap.Hand(hand) for hand in frame.hands
      @pointables.push new Leap.Pointable(point) for point in frame.pointables

      hand._mapFrameObjects(this) for hand in @hands
      gesture._mapFrameObjects(this) for gesture in @gestures
      pointable._mapFrameObjects(this) for pointable in @pointables

    anyHands: -> @hands.length > 0

    toString: -> "[Cylon::Leap::Frame id='#{@id}' timestamp='#{@timestamp}']"
