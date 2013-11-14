(function() {
  "use strict";
  source('leap');

  describe('Leap', function() {
    return it('parses Leap Motion API frames', function() {
      var controller, frame, parsedFrame;
      frame = require('../../support/frame');
      controller = new Leap.Controller({
        initialize: false
      });
      return parsedFrame = controller.parseFrame(frame);
    });
  });

}).call(this);
