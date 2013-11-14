###
 * cylon-leapmotion Leap Controller class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

namespace = require 'node-namespace'

WebSocket = require 'ws'

require './frame'

EventEmitter = require('events').EventEmitter

namespace 'Leap', ->
  class @Controller extends EventEmitter
    constructor: (opts = {}) ->
      opts.initialize ?= true
      @leap = null
      do @setupSocket if opts.initialize

    setupSocket: ->
      @leap or= new WebSocket 'ws://127.0.0.1:6437'

      # By default, the LeapMotion API (leapd) doesn't send us gesture
      # information for each frame. We're going to ask it to, very politely.
      @leap.onopen = =>
        @leap.send JSON.stringify({ enableGestures: true })

      # When we receive a message from leapd, we're going to rip it apart into
      # classes and send them to whomever is listening
      @leap.on 'message', (data, flags) =>
        message = JSON.parse data
        if message.id? and message.timestamp?
          @parseFrame message
        else
          @emit 'error', data
          data

    parseFrame: (frame) ->
      frame = new Leap.Frame(frame)
      @emit 'frame', frame
      @emit 'hand', hand for hand in frame.hands
      @emit 'pointable', pointable for pointable in frame.pointables
      @emit 'gesture', gesture for gesture in frame.gestures
      frame

module.exports = Leap.Controller
