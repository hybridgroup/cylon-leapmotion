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
  this.defineDriverEvent('frame');
  this.defineDriverEvent('hand');
  this.defineDriverEvent('gesture');

  return Driver.__super__.start.apply(this, arguments);
};
