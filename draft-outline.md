# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Tutoring support on campus
TAs have office hours and we use time in class for help too, but https://ist.psu.edu/learning/tutoring/university-park is also available.

# Past weeks
- [Week 1](sp26/week-1-2.md)
- [Week 2](sp26/week-1-2.md)
- [Week 3](sp26/week-3.md)
- [Week 4](sp26/week-4.md)
- [Week 5](sp26/week-5.md)
- [Week 6](sp26/week-6.md)
- [Week 7](sp26/week-7.md)

# Week 8 - more time with the slider project
Issue we're working on https://github.com/haxtheweb/issues/issues/1914

## 8.1 Crit
And a lot of it. This will be mostly going through examples produced in class:

- https://github.com/justinlej12/play-list-design/blob/main/play-list-design.js -- make sure to define all of your elements in separate files. it's just cleaner to read, follow and maintain
- https://github.com/justinlej12/play-list-design/blob/main/play-list-design.js#L249-L252 -- handle slot change showed up in several solutions; it's not bad but a bit needlessly complicated; though it would support dynamic injection of items (not a requirements)
- https://github.com/ank5688/playlist-project/blob/main/playlist-project.js#L25-L30 -- while this one works and looks interesting as a demo, it needs to read off of it's own innerHTML in constructor like `this.querySelectorAll` to produce an array of DOM nodes. Otherwise we can't meet the requirements or update it easily by modifying the HTML
- https://github.com/lstinq/play-list-project/blob/main/play-list-project.js#L59 -- don't do this, likely wont work anyway
- https://github.com/lstinq/play-list-project/blob/main/play-list-project.js#L72C3-L78 -- I like the adding of keyboard navigation
- https://github.com/lstinq/play-list-project/blob/main/play-list-project.js#L210-L213 -- make the indicator and the render slide into their own elements, but your on the right track
- https://github.com/mrn2e/play-list-item/blob/main/index.html#L39 -- the issue says "make the demo content exactly this" so do that
- https://github.com/mrn2e/play-list-item/blob/main/play-list-item.js#L121C11-L121C26 -- super interesting way of toggling an attribute, however it's a property so while this might work we should do more like `slide.active = !slide.active` this will make true false and false true
- https://github.com/mrn2e/play-list-item/blob/main/play-list-item.js#L39 -- keeping a current index and attempting to track it's changes is great
- https://github.com/mrn2e/play-list-item/blob/main/slide-arrow.js#L48 -- can't comment like this it will break CSS parsing
- https://github.com/SoofinProt/play-list-project/blob/main/play-list-slide.js#L83-L84 -- this is a reasonable looking slide, however you don't need to do `getAttribute` and instead just stick to the property like `this.topHeading`
- https://github.com/SoofinProt/play-list-project/blob/main/play-list-project.js#L151-L155 -- complicated but interesting way of attempting to know what slides there are then update the visual data to match. requestUpdate means there's either too complex a data structure or something isn't stateful if you need to call it to work. In this case it's case slides needs to be `type: Array` -- https://github.com/SoofinProt/play-list-project/blob/main/play-list-project.js#L11

# Deep dive
This is the solution we'll deep dive a bit more on and in my opinion has the most progression toward what the requirements were expressing. It still has work to go but has a lot that we can draw inspiration from
- https://github.com/interested-learner/play-list-project

# 8.2 - Sharing work in class

## Reading and examples for Events
This is a nice little tutorial with examples. While written using older JS ways of working (like writing onclick which you should not do) the sample code to demonstrate event bubbling and how the event handler responds at different places as the event bubbles up is well done and visualized nicely https://javascript.info/events

## DDD Auditing
- Help find properties not using DDD and have an program suggest areas for improvement
- use the `hax audit` command. Run this command from the same directory as your project (where you'd run `npm start`)
- Not all of the feedback is useful but it's a good way of finding things that might not be using DDD when they could or should be

## Class auditing
- Working with other people in your pod, explain to the person next to you how your code works, then do the reverse and write down the following reflection:
  - Any interesting design considerations they used with `CustomEvent` and getting the indicator to reflect the same value as the activeIndex / slide to show
  - How are each of you using events to manage and updating data statefully so that the entire "app" knows what is active via the `index`?
  - How are you handling what is visible? Is it with CSS, are you testing active as an attribute? What makes active show the right slide?
  - Any issues / gaps in each project and work left to be done
- After reflecting on these questions, start working together to research and implement the issues discovered. Call over for help if needed from me and the LAs.
- **Turn in your reflection to Teams** this way you can find the feedback later and we know that you engaged in the activity today

# 8.3 - Working day
- Last day to work in class and ask questions
- Make sure you have all the functionality in the requirements to the best of your ability
- the app is due Sunday after spring break - https://github.com/haxtheweb/issues/issues/1914
- Submit a link to your github / vercel.app link (for reviewing the working demo) to the Canvas dropbox by Midnight Sunday

# Spring Break
Have a great break! The week after we'll review some optimal solutions, start into a new project, and have a small lecture series to frame my life's work in hopes you find your spark of digital creativity to impact the world!

