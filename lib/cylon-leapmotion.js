/*
 * cylon-leapmotion
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var namespace = require('node-namespace');

require('cylon');
require('./adaptor');
require('./driver');

module.exports = {
  adaptor: function(opts) {
    return new Cylon.Adaptors.LeapMotion(opts);
  },

  driver: function(opts) {
    return new Cylon.Drivers.LeapMotion(opts);
  },

  register: function(robot) {
    Logger.info("Registering Leap Motion adaptor for " + robot.name);
    robot.registerAdaptor('cylon-leapmotion', 'leapmotion');

    Logger.info("Registering Leap Motion driver for " + robot.name);
    robot.registerDriver('cylon-leapmotion', 'leapmotion');
  }
};
