/*
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require('cylon'),
    Leap = require('leapjs');

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }

  Adaptor.__super__.constructor.apply(this, arguments);
  this.connector = this.leap = Leap;
}

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  var self = this,
      conn = this.connection;

  Adaptor.__super__.connect.apply(this, arguments);

  Leap.loop({
    frame: function(frame) { conn.emit('frame', frame); },
    hand: function(hand) { conn.emit('hand', hand); },
  })
};
