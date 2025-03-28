# Week 8 - Its go time

- Look up from the screen. Find reality. https://www.youtube.com/watch?v=BIsH686xWl0

## Project Zer0
- The course lists 2 projects. Project Zer0 is effectively a few homeworks strung together as check ins.
- This is to provide a stepping stone into bigger projects
- This is also graded much less harshly
- Talk to the people around you and agree upon which of these projects you want to work on.

## Projects to choose from
Both of these Render data from a remote source via `fetch`. They are comparable scope, pick the one that you want to. One involves reading through a single data item and designing for it. The other involves looping through an Array of data and using form inputs to allow people to change the data visualized
- https://github.com/haxtheweb/issues/issues/1764 - common capability that we find in most email clients
- https://github.com/haxtheweb/issues/issues/1464 - community building RPG character

## Commonality between these is `fetch` and json
- If you are using Chrome (which I recommend) then you should get the [JSON Formatter plugin](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) it helps visualize JSON structures more easily in the browser to understand how to go through the data
- We need to use `fetch` to obtain data - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Hints
- RPG hint: https://codepen.io/btopro/pen/VYwbLoa (don't reference the asset this way but this is how the html ends up working)
- URL parse hint: https://codepen.io/btopro/pen/XJWRmrw?editors=1010

## A guest speaker today
- former student of mine
- now in graduate school

## Example repo using fetch
- past versions of the class built this: https://github.com/btopro/nasa-search
- fetching data from a remote source -- This is JSON data https://images-api.nasa.gov/search?media_type=image&q=Saturn
- https://github.com/btopro/nasa-search/blob/main/nasa-search.js#L58-L105 - here's how the feedback loop works between user input, triggering fetching data, and then obtaining the results and printing them out.

# Check in 1 due March 16
- Check in 1 is a status check to see how far you've gotten on the project
- You should have an element up on vercel / github that is rebuilding automatically
- You should have `fetch` connecting to obtain data
- You should have at least a starting point for your demo that is functioning

You will have time in class Thursday then the following Tues/Thurs after break. The goal is to turn in Project Zer0 March 23rd. The best solutions will be shown in class and we'll start into Project 1.

# Light reading
[Absorb as much of this as you can](https://dev.to/btopro/web-component-shadow-roots-x-design-system-constructable-style-sheets-4g60). This is probably PhD level web dev if I had to classify as far as depth of APIs, why they work to solve a problem and then how we leverage them for maximizing performance. You don't have to read this, but if you want some indicator of things we're building. If this sorta thing is of interest to you, consider joining [HAX The Club or HAX Lab](https://bit.ly/hax-discord) via the Discord community.
