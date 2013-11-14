"use strict";

namespace = require 'node-namespace'

require './gesture'
require './hand'
require './pointable'

namespace 'Leap', ->
  class @Frame
    # Creates a new Frame object, based on passed Frame data from the Leap
    # Motion.
    constructor: (frame) ->
      [@gestures, @hands, @pointables] = [[], [], []]

      @id = frame.id
      @timestamp = frame.timestamp

      @r = frame.r
      @s = frame.s
      @t = frame.t

      for gesture in frame.gestures
        @gestures.push new Leap.Gesture(gesture)

      for hand in frame.hands
        @hands.push new Leap.Hand(hand)

      for pointable in frame.pointables
        @pointables.push new Leap.Pointable(pointable)

    toString: ->
      "[Cylon::Leap::Frame id='#{@id}' timestamp='#{@timestamp}']"
