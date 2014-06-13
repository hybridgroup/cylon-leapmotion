# Events

## hand

Gets triggered when doing a hand motion, makes hand input available.

Leap Hand contains:

 * position (palm x-y-z coords)
 * wrist rotation (axis,angle,matrix)

##### Params

-**frame**- parsed Leap Motion frame

##### Returns

Hand

##### Example JSON

For an example of a hand JS object, please see [this gist](https://gist.github.com/stewart/bc5b4fe7736617965d0c).

## frame

Gets triggered with every motion detected, makes frame input available.

Call the `addObjectRelations` function on a frame, and you can get relations
added between frame elements. For example: a `hand` can tell what `pointables`
it has, as well as what `gestures` it's involved in. These relations work both
ways.

For an example of a frame JS object, please see [this gist](https://gist.github.com/stewart/24981316929dcfd8480a).
