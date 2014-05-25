/*
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Leap = require('./leap');
var Cylon = require('cylon');

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }

  Adaptor.__super__.constructor.apply(this, arguments);
  this.connector = this.leap = new Leap.Controller(opts);
}

subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  var events = ['frame', 'hand', 'pointable', 'gesture'];

  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    this.defineAdaptorEvent({ eventName: event });
  }

  return Adaptor.__super__.connect.apply(this, arguments);
};

Adaptor.prototype.disconnect = function() {
  return this.leap.close();
};
