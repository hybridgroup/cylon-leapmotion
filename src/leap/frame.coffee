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

      [@r, @s, @t] = [frame.r, frame.s, frame.t]

      @gestures.push new Leap.Gesture(gesture) for gesture in frame.gestures
      @hands.push new Leap.Hand(hand) for hand in frame.hands
      @pointables.push new Leap.Pointable(point) for point in frame.pointables

    toString: -> "[Cylon::Leap::Frame id='#{@id}' timestamp='#{@timestamp}']"
