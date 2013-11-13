/*
 * cylon-leapmotion adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  "use strict";
  var namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace = require('node-namespace');

  namespace('Cylon.Driver', function() {
    var _ref;
    return this.LeapMotion = (function(_super) {
      __extends(LeapMotion, _super);

      function LeapMotion() {
        _ref = LeapMotion.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return LeapMotion;

    })(Cylon.Basestar);
  });

}).call(this);
