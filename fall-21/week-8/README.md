# Week 8: Skill building and more card comp work
## Tues
- Feedback and grading on Project 1 as well as bonus / top work
  - https://github.com/elmsln/edtechjoker/blob/master/fall-21/projects/p1-button/submissions/index.html
- Feedback from survey:
  - Dates updated in canvas for all due dates w/ future submissions having a place holder as well
  - Project 2 will have a lot more group share outs and code reviews of everyone's work
  - Rule of a responsive studio style course: If you submit work for review between tues-thurs and it's a good example, I'll at least give you feedback if not spend time in class illustrating what else you could do.
  - JS tutorials / fundamentals; this has just about everything you'll ever want for fundamentals https://javascript.info/
- Additional tip per this project: Start making 1 element as far as HTML / CSS. Then break it up into different smaller pieces.
- Performance optimization techniques
  - IntersectionObserver bonus from project 1 (useful in your overarching element)
  - Dynamic `import()` and conditionally using them
  - be thinking: What could I add to my card that would help with performance optimization?
- Time to start working together

## Homework
For class Thursday, read the following:
- https://hacks.mozilla.org/2021/10/lots-to-see-in-firefox-93/ - This is when you see people saying "Use the platform". What can we learn about what "the platform" supports as a result of these release notes?
- read/watch this series I contribue to on advanced performance techniques: https://dev.to/btopro/lazy-web-components-the-book-278m

## Thursday
- Brief discussion of articles read between classes
- new skill : SimpleColors - using a different baseClass for the banner / header element (part of requirements)
  - Documentation: https://webcomponents.psu.edu/styleguide/?path=/story/colors-simple-colors--simple-colors-story
  - NPM package to add / install: @lrnwebcomponents/simple-colors
  - Background reading / refresh: Class Inheritence - https://javascript.info/class-inheritance
  - Need more JS fundamentals? LinkedIn Learning https://www.linkedin.com/learning/javascript-essential-training/
  - Example implementing this for a similar purpose: https://codepen.io/btopro/pen/yLNmVbw - note the `self-check` element
  - npm package if interested in picking apart: `@lrnwebcomponent/self-check`
  - Source: https://github.com/elmsln/lrnwebcomponents/blob/master/elements/self-check/src/self-check.js#L126-L129
  - Example of how to implement SimpleColors to extend an element: https://github.com/elmsln/lrnwebcomponents/blob/master/elements/simple-colors/demo/extending.html

![SimpleColors talk through](https://user-images.githubusercontent.com/329735/137164622-5f5314c6-9d0c-438d-9209-7f30e1dd52b3.png)

- Class activity to gain insight into each other's cards / progression / thinking
  - 3 members of each group get up and sit in another group without overlapping
- **Class Participation** - expand your TEAMNOTES with insights gained from the activity / day:
  - What did you take away from the portion of class about implementing SimpleColors?
  - What did you learn from other groups?
  - What are your next steps?

## Homework
- Project **Check-in 2 is due Sunday at midnight** and I want to see the following:
  - your card's icon should have a basic API to render the icon based on having the correct name leveraged
  - your card's header / banner element should have a basic API supporting two named slots and implementing your icon
  - Your icon definition should be dynamically imported in the `constructor` or `firstUpdated` life-cycle of the header / banner element (reading and examples before should help inform this)
