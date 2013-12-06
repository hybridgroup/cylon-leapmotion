"use strict";

namespace = require 'node-namespace'

namespace 'Leap', ->
  class @Pointable
    constructor: (data) ->
      this[key] = value for key, value of data

    toString: ->
      "[Cylon::Leap::Pointable length='#{@length}' zone='#{@touchZone}']"
