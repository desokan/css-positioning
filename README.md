# CSS Positioning

## Fixed positioning => position: fixed

Applying position: fixed to an element lets you position the element arbitrarily within the viewport. This is done with four companion properties: top, right, bottom, and left.

Because a fixed element is removed from the document flow, it no longer affects the position of other elements on the page. They’ll follow the normal document flow as if it’s not there, which means they’ll often flow behind the fixed element, hidden from view.

With something persistent, such as a side navigational menu, you’ll need to take care that other content doesn’t flow behind it. This is usually easiest to do by adding a margin to the content. For instance, place all your content in a container with a right-margin: 20%.

## Absolute positioning => position: absolute

Absolute positioning works the same way as fixed position, except it has a different containing block. Instead of its position being based on the viewport, **its position is based on the closest positioned ancestor element**. As with a fixed element, the properties top, right, bottom, and left place the edges of the element within its containing block.

NOTE If none of the element’s ancestors are positioned, then the absolutely positioned element will be positioned based on something called the initial containing block. This is an area with dimensions equal to the viewport size, anchored at the top of the page.

## Relative positioning => position: relative

The top, right, bottom, and left properties, if applied, will shift the element from its original position, but it won’t change the position of any elements around it.

`NOTE` Unlike fixed and absolute positioning, you cannot use top, right, bottom, and left to change the size of a relatively positioned element. Those values will only shift the position of the element up or down, left or right. You can use top or bottom, but not both together (bottom will be ignored); likewise, you can use left or right, but not both (right will be ignored).

Using these properties to adjust the position of a relative element may be useful to nudge an element into place on occasion, but truth be told, this is rarely why you’ll use relative positioning. **Far more often, you’ll use `position: relative` to establish the containing block for an absolutely positioned element inside it.**

