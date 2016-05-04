# Cylon.js for Leap Motion

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things (IoT).

This module provides an adaptor/driver for the Leap Motion (https://www.leapmotion.com/) gesture controller.

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-leapmotion.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-leapmotion) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-leapmotion/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-leapmotion) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-leapmotion/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-leapmotion)

## How to Install

Install the module via NPM:

    npm install cylon cylon-leapmotion

In order to use this module, you need to install the Leap Motion driver/SDK from the [Leap Motion site](https://www.leapmotion.com/setup).

Inside Leap Motion's setup, ensure "Allow Web Apps" and "Allow Background Apps" are both checked.

<img src="http://i.imgur.com/3Mjsiwn.jpg" style="width: 100%">

## How to Use

This basic program uses a Leap Motion to detect the user's hand position:

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    leapmotion: { adaptor: 'leapmotion' }
  },

  devices: {
    leapmotion: { driver: 'leapmotion' }
  },

  work: function(my) {
    my.leapmotion.on('hand', function(payload) {
      Logger.info(payload.toString());
    });
  }
}).start();
```

## How to Connect

### OS X

Our driver works out-of-the-box with the vanilla installation of the [Leap Motion software](https://www.leapmotion.com/setup).

### Ubuntu

The Linux download of the Leap Motion software can be obtained from the [Leap Motion Dev Center](https://developer.leapmotion.com/downloads).

To make sure everything's working:

- Run the leapd daemon to open a websocket connection in port 6437.
- Connect your computer and the Leap Motion controller
- Connect to the device via Cylon.js

### Connecting To Another Machine

By default, `cylon-leapmotion` attempts to connect to the LeapMotion websocket server running on localhost.
You can, however, provide it with another IP in the `connection` object and it'll attempt to connect to that instead:

```javascript
connections: {
  leapmotion: { adaptor: 'leapmotion', host: '192.168.1.64' }
}
```

## Documentation

We're busy adding documentation to [cylonjs.com](http://cylonjs.com). Please check there as we continue to work on Cylon.js.

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-leapmotion/blob/master/RELEASES.md
](https://github.com/hybridgroup/cylon-leapmotion/blob/master/RELEASES.md
).

## License

Copyright (c) 2013-2016 The Hybrid Group. Licensed under the Apache 2.0 license
