"use strict";

namespace = require 'node-namespace'

namespace 'Leap', ->
  class @Hand
    constructor: (data) ->
      this[key] = value for key, value of data

    toString: ->
      "[Cylon::Leap::Hand]"
