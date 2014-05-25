/*
 * cylon-leapmotion driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require('cylon');

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
};

subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  Cylon.Logger.info("LeapMotion " + this.device.name + " starting.");
  var events =  ['connect', 'frame', 'hand', 'pointable', 'gesture'];

  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    this.defineDriverEvent({ eventName: event });
  }

  return Driver.__super__.start.apply(this, arguments);
};
