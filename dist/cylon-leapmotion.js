/*
 * cylon-leapmotion
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  var namespace,
    __slice = [].slice;

  namespace = require('node-namespace');

  require('cylon');

  require('./adaptor');

  require('./driver');

  module.exports = {
    adaptor: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Cylon.Adaptors.LeapMotion, args, function(){});
    },
    driver: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Cylon.Drivers.LeapMotion, args, function(){});
    },
    register: function(robot) {
      Logger.info("Registering Leap Motion adaptor for " + robot.name);
      robot.registerAdaptor('cylon-leapmotion', 'leapmotion');
      Logger.info("Registering Leap Motion driver for " + robot.name);
      return robot.registerDriver('cylon-leapmotion', 'leapmotion');
    }
  };

}).call(this);
