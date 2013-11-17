# Cylon.js for Leap Motion

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-leapmotion.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-leapmotion)

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and physical computing using Node.js

This module provides an adaptor and driver for the Leap Motion (https://www.leapmotion.com/) gesture controller.

Want to use Ruby on robots? Check out our sister project [Artoo](http://artoo.io).

## Getting Started

Install the module via NPM:

    npm install cylon-leapmotion

## Examples

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'leapmotion',
    adaptor: 'leapmotion',
    port: '127.0.0.1:6437'
  },

  device: {
    name: 'leapmotion',
    driver: 'leapmotion'
  },

  work: function(my) {
    my.leapmotion.on('hand', function(payload) {
      Logger.info(payload.toString());
    });
  }
}).start();

```

```coffee-script
Cylon = require 'cylon'

Cylon.robot
  connection: { name: 'leapmotion', adaptor: 'leapmotion', port: '127.0.0.1:6437' }
  device: { name: 'leapmotion', driver: 'leapmotion' }

  work: (my) ->
    my.leapmotion.on 'hand', (payload) ->
      Logger.info payload.toString()

.start()
```

## Documentation

We're busy adding documentation to [cylonjs.com](http://cylonjs.com). Please check there as we continue to work on Cylon.js.

Thank you!

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

To run the tests, use the `grunt test` command. This wil also compile and lint your code.

## Release History

Version 0.1.0 - Initial release

## License

Copyright (c) 2013 The Hybrid Group. Licensed under the Apache 2.0 license
