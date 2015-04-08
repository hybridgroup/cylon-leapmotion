# Cylon.js for Leap Motion

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-leapmotion.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-leapmotion)

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and physical computing using Node.js

This module provides an adaptor and driver for the Leap Motion (https://www.leapmotion.com/) gesture controller.

Want to use Ruby on robots? Check out our sister project [Artoo](http://artoo.io).

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

* All patches must be provided under the Apache 2.0 License
* Please use the -s option in git to "sign off" that the commit is your work and you are providing it under the Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & Lint and test your code using [Grunt](http://gruntjs.com/).
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git

## Release History

Version 0.18.0 - Compatibility with Cylon 1.0.0

Version 0.17.0 - Compatibility with Cylon 0.22.0

Version 0.16.0 - Compatibility with Cylon 0.21.0

Version 0.15.0 - Re-support connecting to Leap Motion on other IP addresses

Version 0.14.0 - Compatibility with Cylon 0.20.0

Version 0.13.0 - Compatibility with Cylon 0.19.0

Version 0.12.0 - Compatibility with Cylon 0.18.0

Version 0.11.0 - Compatibility with Cylon 0.16.0, add peerDependencies

Version 0.10.0 - Add back 'gesture' event, tweaked 'hand' objects.

Version 0.9.0 - Compatibility with Cylon 0.15.0, use LeapJS instead of custom implementation

Version 0.8.0 - Compatibility with Cylon 0.14.0, remove node-namespace.

Version 0.7.0 - Move object mapping to new `Leap.Frame#addObjectRelations` function

Version 0.6.0 - Release for cylon 0.12.0

Version 0.5.0 - Release for cylon 0.11.0, refactor into pure JavaScript

Version 0.4.0 - Release for cylon 0.10.0

Version 0.3.0 - Release for cylon 0.9.0

Version 0.2.0 - Release for cylon 0.8.0

Version 0.1.0 - Initial release

## License

Copyright (c) 2013-2014 The Hybrid Group. Licensed under the Apache 2.0 license
