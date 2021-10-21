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

# Week 9: Refinement and skill building
## Tuesday
- Guest code walk through: **Chuck Lavera** from Eberly College of Science with his solution to the card from the comps
  - Make sure to stop and ask questions if you don't understand something he's presenting
  - Considerations in building:
    - Action / title
    - heading area
    - type of card
    - icon specific to the action (icon changes based on the type of action)
    - color that was pegged to what your engaging in (so color changes based on type of action)
    - Has support for a link to more details / information / external info
    - type: learning object, chem connection, Did you know, Learning Strategies
    - link doesn't render on learning objectives type
    - major difference: very specific CSS color variables VS the generic simple-colors based ones we're doing
    - icon that shakes / animates based on visibility (Intersection Observer + custom SVG)
- Group activity / participation:
  - Add to TEAMNOTES what you learned from the example Chuck presented.
  - What approaches can you leverage from his example to enhance your team's element?
  - How could you take his approach and envision a more flexible version?
  - What are your next steps?

## Thursday
- demo: What is a "linter" and why can't I make a commit?
  - Husky is there to protect you -- https://typicode.github.io/husky/#/?id=package-scripts (and it might piss you off too)
  - want to ignore the feedback Husky is giving? `git commit -m "some message" --no-verify` will bypass husky
  - Husky helps ensure you write better code though so don't do this unless you know why you are
- crit / topic: how to implement the font using google fonts
  - Seeing how group 3b4b attmpted this
  - Google fonts -- https://fonts.google.com/specimen/Open+Sans for the font that is to spec of this project (viewing student example)
  - Understanding font loading methodologies: https://css-tricks.com/almanac/properties/f/font-display/#:~:text=swap%20%3A%20Instructs%20the%20browser%20to,the%20auto%20and%20swap%20values.
  - Seeing the "best way" to do this (philosophically as well as bc of how Lit works)
  - https://stackoverflow.com/questions/57489637/how-to-load-google-font-in-litelement
- crit / topic: https://github.com/runtimeErrorsMadeEasy/project2
  - Passing properties down between elements
  - Note how they make the icon change based on the type changing
  - Note how they use their previous button and it actually kinda works well well visually
  - Note that if you made say... a penguin of a "button that swears at people" you should opt for using this as a devDependency and only use it in your demo
- Additional time to work as a team
- Attendence word of the day

## Homework
- write a blog post about **one** of the following concepts from this week and include code samples in your article + sources
  - "slot composition" - passing slotted code between multiple elements (header / content into card and then into scaffold)
  - Fonts. How to implement them in Lit. How to implement them in a general setting? What "swap" is and discussion of different rendering methodologies as well as showing how you implemented it in your element
  - Passing properties down and leveraging past work (ala the button from past work) via css variable mapping and/or variable mapping
- Use the state of your element / visuals / repo links as a backdrop for discussing these topics
**Career Pro tip:** This is a highly effectivbe way of "double dipping" throughout your career. Not know something, research it, implement in a project you do, leave comments to yourself about how you learned that, then write a blog post / video tutorial

## Project Two: Check-in 3
- By Sunday at midnight; post a link to your repo's TEAMNOTES detailing...
  - Any additional meetings you've had
  - Progress made / state of your current repo
  - What problems your running into we could cover in class to help
  - What your next steps are
- Where you should be to be on pace:
  - All 4 elements should at least be started
  - icon should be almost finished and ONLY provide icon capability
  - Header / banner element should be starting to look like the banner
  - the "card scaffolding" should at least be attempted and is basically just a hollowing out of the card in many instances so that your card element is basically just something like the following (generally speaking of course your implementation will vary)
```html
<card-scaffold>
  <div slot="header">
    <card-icon>
    <card-banner>
    <div slot="header"><slot name="header1"...
    <div slot="subheader"><slot name="header2"...
                                </div>
  <div slot="content">
    <slot></slot>
  </card-scaffold>
```
  - The overall card / wrapper element / `my-science-card` (your name there, not that one) should be using all 3 elements inside of it and generally look like the comp. Not pixel perfect but at least in the neighborhood
## Looking ahead
Next week we'll be doing some stand up presentations. Be prepared to explain where you are with your card for about 5 minutes as we'll have a full class discussion to see where everyone is at. I'll pull your card / code up on screen and then you'll explain how you solved something. Be thinking about what challenges you've encountered and how you solved them
***
_Below this line will be updated as we start each week so we can remain agile to changes out of our control or to focus more on a topic_
***

# Week 10: Project 2: Refinement of our card comp
## Tuesday
- A11y testing. What's their currently, how to learn more about them, how to add additional tests, how to run them.
- In class activity with other teams: commenting
  - 1 pair from each group shift left
  - Share your repo w/ another team
  - Pull it up in a code editor and do your best to provide code comments explaining what's going on
- Reusing the button from our previous project in this one as a `devDependency`
- Critique / review of the cards worked on in the previous week
- cards will then be enhanced based on the feedback received
## Thursday / Homework
- Continue working on cards in groups while I roam around or show examples of conecpts within the context of people's repos at the front
- Final card to be submitted by Sunday night

# Week 11/12/13: Project 3: HAXTheWeb
## Tues Building
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
