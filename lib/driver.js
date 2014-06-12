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

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  var events =  ['frame', 'hand'],
      self = this;

  Cylon.Logger.info("LeapMotion " + this.device.name + " starting.");

  events.forEach(function(event) {
    self.defineDriverEvent(event);
  });

  return Driver.__super__.start.apply(this, arguments);
};
