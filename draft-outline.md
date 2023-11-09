# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.
- [Week 1](fa-23/week-1/README.md)
- [Week 2](fa-23/week-2/README.md)
- [Week 3](fa-23/week-3/README.md)
- [Week 4](fa-23/week-4/README.md)
- [Week 5](fa-23/week-5/README.md)
- [Week 6](fa-23/week-6/README.md)
- [Week 7](fa-23/week-7/README.md)
- [Week 8 - "exam" / project 1](fa-23/week-8/README.md)
- [Week 9-10 Project 2](fa-23/week-9/README.md)
- [Week 11](fa-23/week-11/README.md)
  
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



# Week 13
- state management maintaining an `activeIndex` - https://www.youtube.com/watch?v=XKfz4e2o6aU
# Tues / Thurs
- Class will be time to work and some critique / occational lessons (like how to `map` an Array of objects)
## Sunday
- Check in for status check and progress (4pts)

# week 14 - Tday week off

# EVERYTHING BELOW THIS LINE IS SUBJECT TO CHANGE BASED ON COURSE PROGRESS
~~~~~~
# Week 15
# Tues / Thurs
- Class will be time to work and some critique
## Sunday
- Check in for status check and progress (4pts)
# Week 16
# Tues / Thurs
- Class will be time to work and some critique

## Week 17: Final project due Wed of Finals week
- Optional Class held Tuesday of finals week for last minute office hours
~~~~~~
