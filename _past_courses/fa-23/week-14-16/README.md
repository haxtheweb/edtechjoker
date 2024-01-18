
## VIDEO PLAYER INTERACTION TO OBTAIN DATA FROM IT
[https://haxapi.vercel.app/?path=/story/media-video--basic-video-player](https://haxapi.vercel.app/?path=/story/media-video--basic-video-player)
```js
// this will give you the current time so that you can progress what's active based on it playing
this.shadowRoot.querySelector('video-player').shadowRoot.querySelector("a11y-media-player").media.currentTime
// this forces the video to play
this.shadowRoot.querySelector('video-player').shadowRoot.querySelector('a11y-media-player').play()
// this forces the video to jump to this point in the video via SECONDS
this.shadowRoot.querySelector('video-player').shadowRoot.querySelector('a11y-media-player').seek(40)
```

0n, regroup with your pod, make sure everyone is on the same page
- 45 min, share and discuss code with other pods in the following activity:
  - Pick a person in a different pod
  - swap code repos with them
  - review code and ask questions
  - See how they are handling state management / variable names / etc and compare / contrast with your own
  - Seee how they've handled CSS styling and design flexibility. If they lack design flexibility, point out areas where they could improve it.
  - See how they're data model in the `json` file works relative to their element doing the rendering. Are there naming conventions or ways of structuring the data that would enhance the experience?
  - Is there anything repeated many times, either logic or design, that feels like it could be refactored? Often times nothing `thing-1, thing-2` or `if A and B and C and D` sort of logic or class names are a hint that it could be refactored.
- 30 min - work, take notes, implement feedback, generate your next steps
- READ AHEAD TO THURSDAY, IDENTIFY SOMEONE TO PRESENT AND HAVE THINGS AS FAR ALONG AS POSSIBLE FOR LIVE CRIT

## Thurs - live code review
- Teams present work to the class for feedback and questioning
- My expectations for a "presentation"
  - Nominate 1 or 2 people to speak to the work and demo where they are (if you don't, I'll pick someone at random so step up, this is not difficult)
  - Pick whoever is furthers along VISUALLY and/or STATE MANAGEMENT wise
  - Demo where you are with code in 1 screen and application in other 1/2 of screen
  - Be ready to answer questions about tracing the code
- Audience activity (in teams, for participation)
  - In the thread for the Team in question - Whoever is presenting, post a link to your work in Teams so that others scan follow along.
  - Provide feedback visually; What needs improved (answers like "nothing it looks great" or "not sure" will be worth 0 participation) there is always room for improvement
  - In discussing the element and answering questions, what's 1 thing you found interesting about this project if you are not doing this option actively
  - What is 1 thing you could apply to your own work / pay attention to as a result of reviewing someone else's work?
- Any time remaining is additional working time / open office hours

## Sunday Check in 4
- Link to code / demo + the following reflection
  - What are you confident that you have down and is good in great shape / ready to go?
  - What do you NOT think you'll be able to get done without having questions resolved?
  - Any lingering questions / concerns about finishing

# Week 16
# Tues / Thurs
- Class will be time to work and some critique

## Week 17: Final project due Wed of Finals week
- Optional Class held Tuesday of finals week for last minute office hours
