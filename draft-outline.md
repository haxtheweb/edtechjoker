# Draft Syllabus
This MD file is subject to change. As we are building this course out based on needs of our classmates, we'll occationally detour from this. This is a work in progress / general timing outline as I hope we are to achieve it.

# Past weeks
- [Week 1](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-1)
- [Week 2](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-2)
- [Week 3](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-3)
- [Week 4](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-4)
- [Week 5](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-5)
- [Week 6](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-6)
- [Week 7](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-7)
- [Week 8](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-8)
- [Week 9](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-9)
- [Week 10](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-10)
- [Week 11](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-11)

---
*Below this line is more variable*
---
# Week 12/13: Project 3: HAXTheWeb
# Tues
- Reviewing scoping questions for projects
- how to use a `map` / Array objects
- Working with `<input>` elements / events
  - `@change`
  - `@click` to test a value against the "correct answer"
- Internationalization - What is it, what's the methodology our team developed, when is it needed, how to implement it?
  - article: https://dev.to/btopro/i18n-manager-web-component-41a2

## Thurs Building
- The thesis in action and your practicing of technique. We're going to work on a series of different elements with a goal of...
  - making elements that enhance online education
  - Is another "build to a comp" but people have different comps
  - Are things that you can chew on via web components and ask questions
  - Make contributions to HAXTheWeb and get core commits on the project if solutions meet needs we have
  - Get a peak into the next class as far as some of these connecting w/ concepts in that space
- Performance tricks / concepts:
  - Reading: How Penn State (my team) ships web components in an "unbundled" manner -- https://dev.to/btopro/part-1-how-penn-state-unbundles-web-components-for-cdn-deployments-20di
- Rest of class time will be to implement the improvements and discussions that spawn off of ways of achieving the task at hand
- Concepts to cover:
  - `.map` / looping over data to visualize an external resource / repeat a list of items rapidly
  - MutationObservers (change in DOM structure below an item)

- Class Exercise: Shown code example, identify:
 - Lines / function calls that are "vendor specific"
 - Lines / syntax that are "library specific"
 - Lines / functions / syntax that are platform independent / VanillaJS
- Show Drupal code and identifying platform vs vendor vs library code
- Why stick close to the platform
- Future / bleeding edge capabilities (css modules just landing, json modules on the way)
- Vanilla VS LitElement vs others, lots of examples and asking to identify platform vs convention in each
- Finding existing elements we can start repurposing to build things faster
- Start working in class on the plan and shared repository for building your portfolio site
- The start of each class, a concept that could help in the development of the final product will be discussed. These include:
  - State management
  - Routing
  - Lit Template stamping / repeating
  - Observers
- The final project involves contributing to HAXTheWeb, a massive open source library of web components
- We’ll learn what HAXTheWeb is, who’s using various pieces of it
- How hax works. HAXschema, how it works, what it's based on, and how to wire assets up to work with it / rig demo up to use it; using the past accepted card comp and button as a basis
- We’ll make small initial commits to the lrnwebcomponents repo to smaller tasks to get commits and feel our way around the repo
- As a group you’ll select, investigate, work towards a solution, document and ultimately submit a pull request to our team’s repository in order to improve online courses for future students
- Class time will be spent reviewing code, answering questions as a class, and doing group check ins

# Week 14: Thanksgiving
- Nothing but tur-key tags

# Week 15 & 16: Project 4: Final feedback and open code critique
- This time will be scheduled with presentations by teams of the state of their solutions
- Feedback will be given by fellow HAXTheWeb developers
- This feedback is then to be used to finalize code, documentation and other aspects of the final PR

# Week 17: Finals week
- Tuesday of finals week your team's final PR is due along with all documentation of how to use your solution to the issue(s) your team resolved


# In the weeds stuff yet to add
- Mutation Observer
- Event Propagation
- Data flow
- Group activity: Fork a "snarky-developer" element repo and apply concepts of the above low level APIs

# Additional topics that need slotted in
- Need to explain the end to end process of getting a JS asset working in browsers and across contexts (this should happen earlier on and might just be a picture or flow of slides)
- Rendering differences and the religion of SSR vs PWA - https://mobile.twitter.com/thinkLikeADev/status/1428729216800075776/photo/1 with base source of https://developers.google.com/web/updates/2019/02/rendering-on-the-web which is like a whole class / required reading.

## Guest speakers (confirming dates)
- Michael Potter - Red Hat front-end web developer, worked on HAXTheWeb previously, now works on [PatternFly Elements](https://patternflyelements.com/)
- Nikki Massaro Kauffman - HAX UX and a11y lead, my co-worker-in-crime
