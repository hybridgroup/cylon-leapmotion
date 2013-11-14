"use strict";

source 'leap'

describe 'Leap', ->
  it 'parses Leap Motion API frames', ->
    frame = require '../../support/frame'
    controller = new Leap.Controller(initialize: false)
    parsedFrame = controller.parseFrame(frame)
    # todo - actual tests
