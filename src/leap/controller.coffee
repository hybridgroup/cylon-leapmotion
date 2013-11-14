###
 * cylon-leapmotion Leap Controller class
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

namespace = require 'node-namespace'

WebSocket = require 'ws'

namespace 'Leap', ->
  class @Controller
    constructor: ->
      @leap = new WebSocket 'ws://127.0.0.1:6437'
      do @setupSocket

    setupSocket: ->
      # By default, the LeapMotion API (leapd) doesn't send us gesture
      # information for each frame. We're going to ask it to, very politely.
      @leap.onopen = =>
        @leap.send JSON.stringify({ enableGestures: true })

      # When we receive a message from leapd, we're going to rip it apart into
      # classes and send them to whomever is listening
      @leap.on 'message', (data, flags) =>
        @parseData JSON.parse(data)

    parseData: (data) ->
      console.log data

module.exports = Leap.Controller
