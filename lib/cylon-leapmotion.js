/*
 * cylon-leapmotion
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Adaptor = require('./adaptor'),
    Driver = require('./driver');

var Cylon = require('cylon');

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  },

  register: function(robot) {
    Cylon.Logger.info("Registering Leap Motion adaptor for " + robot.name);
    robot.registerAdaptor('cylon-leapmotion', 'leapmotion');

    Cylon.Logger.info("Registering Leap Motion driver for " + robot.name);
    robot.registerDriver('cylon-leapmotion', 'leapmotion');
  }
};
