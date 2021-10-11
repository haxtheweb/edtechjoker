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

# Week 8: Skill building and more card comp work
## Tues
- Feedback and grading on Project 1 as well as bonus / top work
- Performance optimization techniques
  - IntersectionObserver bonus from project 1
  - Conditional rendering
  - Dynamic `import()` and conditionally using them

- Time to start working together

## Homework
For class Thursday, read/watch this series I contribue to on advanced performance techniques: https://dev.to/btopro/lazy-web-components-the-book-278m

## Thursday
- Class activity to gain insight into each other's cards / progression / thinking
- Bringing findings back to your group

## Homework
- Project Check-in 2 is due Sunday at midnight and I want to see the following
- your card's icon should have a basic API to render the icon based on having the correct name leveraged
- your card's header / banner element should have a basic API supporting two named slots and implementing your icon
- Your icon definition should be dynamically imported in the `constructor` or `firstUpdated` life-cycle of the header / banner element (reading and examples before should help inform this)

***
_Below this line will be updated as we start each week so we can remain agile to changes out of our control or to focus more on a topic_
***

# Week 9/10: Project 2: Refinement of our card comp
## Tuesday
- Guest speaker: Charles Lavera is going to walk through his code he wrote to pull off the card in his own way as well as demonstrating HAX integration
- Reusing the button from our previous project in this one as a `devDependency`
- Critique / review of the cards worked on in the previous week
- Performance tricks / concepts:
  - Google fonts -- https://fonts.google.com/specimen/Open+Sans for the font that is to spec of this project
  - "Dynamic imports" and conditional, dynamic imports
  - Conditional loading of assets (icons)
  - Reading: How Penn State (my team) ships web components in an "unbundled" manner -- https://dev.to/btopro/part-1-how-penn-state-unbundles-web-components-for-cdn-deployments-20di
- Rest of class time will be to implement the improvements and discussions that spawn off of ways of achieving the task at hand
- cards will then be enhanced based on the feedback received
## Thursday / Homework
- Continue working on cards in groups while I roam around or show examples of conecpts within the context of people's repos at the front
- Final card to be submitted by Sunday night

# Week 11/12/13: Project 3: HAXTheWeb
## Tues Building
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
- Understanding Vanilla JS concepts:
  - IntersectionObservers
  - MutationObservers
- Understanding why assets need compiled for the web and what that means
- Starting on an "application" boilerplate in open-wc (run through init but for application this time)
- Understanding github actions
- Creating a github action that automatically builds our project and presents it on the gh-pages branch

- Working as a team on a portfolio site
- Come up with a basic comp for a three page portfolio site
- This is to be worked on as a group
- Documenting needs and requirements to build a SPA with routing
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
- Short talk and demonstration of a technique (these topics need spread across)
- Mutation Observer
- Intersection Observer
- Event Propagation
- Data flow
- Routing (discuss capture based routing vs highly controlled)
- Group activity: Fork a "snarky-developer" element repo and apply concepts of the above low level APIs
## Thurs
- Share out solutions to different conceptual problems presented with snarky
## Homework
- Work with teammates to come up with a unified plan for approaching the personal portfolio
- Share a link to your initial work and how far along you are in creating the repo

# Additional topics that need slotted in
- Need some kind of primer on CSS that's better than what I have currently (or maybe we build stuff on top of shoelace
- Need to explain the end to end process of getting a JS asset working in browsers and across contexts (this should happen earlier on and might just be a picture or flow of slides)
- Guest speakers as these guest talks / demos / crits will extend things as well; might want a block of weeks where class is just getting access to them and homework is to keep working on the longer projects
- contribution to the monorepo directly through fork, clone, fix thing, PR back.
- Rendering differences and the religion of SSR vs PWA - https://mobile.twitter.com/thinkLikeADev/status/1428729216800075776/photo/1 with base source of https://developers.google.com/web/updates/2019/02/rendering-on-the-web which is like a whole class / required reading.

## Guest speakers (confirming dates)
- Michael Potter - Red Hat front-end web developer, worked on HAXTheWeb previously, now works on [PatternFly Elements](https://patternflyelements.com/)
- Nikki Massaro Kauffman - HAX UX and a11y lead, my co-worker-in-crime
- Chuck Lavera - HAX contributor, Eberly college of science
