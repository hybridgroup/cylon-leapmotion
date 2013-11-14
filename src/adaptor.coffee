###
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

"use strict";

namespace = require 'node-namespace'

require './leap'

namespace 'Cylon.Adaptor', ->
  class @LeapMotion extends Cylon.Basestar
    constructor: (opts = {}) ->
      super
      @connection = opts.connection
      @leap = new Leap.Controller
      @name = opts.name
