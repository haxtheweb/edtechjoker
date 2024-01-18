# Week 12
## Tues
- Briefly mention feedback / Project 2 outcomes
- State management / Data Stores
- https://github.com/btopro/tv-app -- tv-app, updated in class
- Live Demo: Event monitoring and keeping track of "what's active"
- Class will be time to work and some critique / occational lessons (like how to `map` an Array of objects)
  - Team 1: https://github.com/elmsln/issues/issues/1450
  - Team 2: https://github.com/elmsln/issues/issues/1788
  - Team 3: https://github.com/elmsln/issues/issues/1789

## Thurs
### Icon library
run these commands to get our icon library
```
npm install -s @lrnwebcomponents/simple-icon
npm install -s @lrnwebcomponents/hax-iconset
```
Then to add an icon button the below
```
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js";
```
Here's docs on usage / seeing some possible icons of wich we have 600+ https://haxapi.vercel.app/?path=/story/media-icons--simple-icon-button-story

You are free to use the icons from shoelace as well if you prefer theirs - https://shoelace.style/components/icon-button

### video timestamp if needed
- Accessing video player's current time
- `this.shadowRoot.querySelector('video-player').shadowRoot.querySelector("a11y-media-player").media.currentTime`
- ^ this is a bit ridiculous and I appologize ^
### how to get / use the video-player
- https://haxapi.vercel.app/?path=/story/media-video--basic-video-player -- how to use this
- OR. using a native `<video>` tag - https://stackoverflow.com/questions/5981427/start-html5-video-at-a-particular-position-when-loading
- Additional demo / notes from reviewing work

- More time to work in class and ask questions

## Due for Sunday Check in 2
- Turn in Code / Repo / Built on Vercel (if it's build-able) with current state of work
- Design should start to be visible either as scaffolding or designing a specific element
- Data in your JSON Array should be realistic looking data
- Event feedback loop of click something and know what is active
- Where are you stuck?
- What are your next steps?
