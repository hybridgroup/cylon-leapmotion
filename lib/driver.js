/*
 * cylon-leapmotion driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);

  this.events = [
    /**
     * Emitted when the Leap Motion has finished processing a new frame
     *
     * @event frame
     * @value data
     */
    "frame",

    /**
     * Emitted per frame when the Leap Motion sees a hand
     *
     * @event hand
     * @value data
     */
    "hand",

    /**
     * Emitted per frame when the Leap Motion sees a gesture
     *
     * @event gesture
     * @value data
     */
    "gesture"
  ];
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

/**
 * Starts the driver
 *
 * @param {Function} callback to be triggered when started
 * @return {void}
 */
Driver.prototype.start = function(callback) {
  this.defineDriverEvent("frame");
  this.defineDriverEvent("hand");
  this.defineDriverEvent("gesture");

  callback();
};

/**
 * Stops the driver
 *
 * @param {Function} callback to be triggered when halted
 * @return {void}
 */
Driver.prototype.halt = function(callback) {
  callback();
};
