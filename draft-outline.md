# Draft Syllabus

# Week 1: Welcome back to hell err.. Penn State
## Tues: Welcome to the course, format, policies, all that jazz
- Short lecture on web components / WHY this topic matters
- Mention Project EdTechJoker and goals of the course for me and them
- Collectivism vs individualism. The collective needs to succeed or your team fails. The individual must succeed or there is never any innovation. Individual must succeed or there is no innovation. individuals ensure we build new rockets; collectives ensure they launch.
- Web components are here to ensure that we can mesh these two concepts together effectively
- Who we are; survey results and imposter syndrome
- What the course is / overall projects
- Questions
- get ahead: install nodejs, npm, git, yarn, VSCode / and IDE on your machine
## Thurs: JS Ecosystem
- Short lecture on the modern web ecosystem
- Activity:
  - Get a partner; this is your pair programmer for the semester
  - Find another pair. This is your team of 4. (one group will be solo and that's ok)
  - All teams must install nodejs, npm, git, yarn, VSCode / IDE and be able to create a open-wc boilerplate
  - If you run into roadblocks we'll work through them together. If your team gets the activity completed, help surrounding teams. We need everyone to be on this page before we can move forward
## Homework
- If you haven't finished the group activity of getting everything installed; do this on your own time. We all need to get this setup before we can move forward
- Setup account on dev.to / github / join slack channels for project
- Write a blog post introducing yourself, and why you are interested in web development
- Write a blog post on how to get dependencies installed for your machine to teach someone else how to install open-wc
  - Optionally this can be a video tutorial / youtube screencast if desired. It's your preference

# Week 2: What makes tooling
## Tues: Brief demo of getting a hello-world boilerplate setup for open-wc
- Individual activity: make a hello-world boilerplate and have it yarn / npm start'ed and on screen (help teammate)
- Group activity: Look through the parts of the repo and identify aspects of this toolchain but also the repo in general
- What makes a good toolchain? What should we look for (write on board as people identify things like build, demo, start, storybook, etc)
- How do we know what commands to run?
## Thurs: What is it open-wc is giving us?
- looking at the boilerplate repo that we made, now at the element level
- Group activity: Discuss how this works. What is it doing? Why does this work?
## Homework
- Watch lecture on JS/HTML/CSS fundamentals (from past class)
- Read slide deck from San diego state prof
- Write a blog post about understanding tooling. What makes good tooling? What should you look for in any project you are building?

# Week 3: What makes web components so special?
## Tues: the 4 APIs that make them tick
- Short Lecture on what the 4 are with examples
- Guided Class activity: find examples of web component libraries and websites that use web components
- Step through some code, asking questions to gauge comfort with javascript in general
- Group activity: We need exposure to other "component" concepts while we are here to know what else exists and see the similarities in syntax and concept
- Each Group member look for hello-world / boilerplate / tutorial material for VueJS, Angular, React, and Material.IO
  - Material.io has a lot of Android examples but is very block / component oriented with many of the same concepts
- Discussion: What do all of these have in common?
- For thursday: Think about what are all of them missing or that is possibly problematic with their adoption?
## Thurs: exploring LitElement capabilities
- Personal pro/con list that lead our team to web components and away from all other options (build vs buildless)
- Show Drupal code and identifying platform vs vendor vs library code
- Future / bleeding edge capabilities (css modules just landing, json modules on the way)
- Vanilla VS LitElement vs others, lots of examples and asking to identify platform vs convention in each
- Discussion of syntactical sugar using jQuery as an example of LitElement using sugar vs a real convention
## Homework
- Run through the "Try LitElement" tutorial: https://lit-element.polymer-project.org/try
- Run through the "Lit Tutorial" (which is in TypeScript): https://lit.dev/tutorial/
- Write a blog post about Similarities across component libraries. What concepts do they share? What aspects of a component library lock you into the model of the authors and which set you free to build what you need quickly?

# Week 4: Project 1: The damn button
## Tues: Sizing up our own atom
- Buttons are common atoms within an atomic design pattern
- https://bradfrost.com/blog/post/atomic-web-design/ - resource for what is atomic design
- Examples for discussion on screen
- Group discussion / questions to answer:
  - What are the characteristics of the button?
  - What design considerations must we take into account?
  - What accessibility concerns do we potentially have?
  - What security concerns do we potentially have?
  - What "states" does this button have?
  - What do we call this?
- Large group discussion with share-outs from these answers
## Thurs: Starting to build the web componnet
- Create a github repo for this element
- Clone locally
- Run open-wc to populate repo
- Start to apply the properties, css, html structure
- Discussion of security consideration
- Discussion of accessibility implications (color, tabindex)
- Working with pair programmer / team help everyone create the element with these considerations in mind
## Homework
- Continue to work on element
- Get code pushed up to github repos
- Submit repos of all teammates to slack
- Write a blog post about considerations when building a web component (metacognition of the exercise we engaged in)

# Week 5: Critique and feedback of Button
## Tues: Critique / code discussion
- Code critique / open code review
- Team member has to explain the code on screen
- Ask audience for an alternative methodology of approaching a problem
- Task: Enhancement by adding support for icons
- Using the simple-icon library, add conditional support for the button to render an icon
- Steps: Look up on NPM. Install / add to dependencies in project, add script tag to existing, discuss conditional rendering, discuss data binding.
## Thursday
- Let's publish, build and distribute this element
- Publish; discussion of npm vs github distribution (preference stuff)
- Build; ES versions, why different platforms need different things, why this is still a thing (yet less all the time)
- Setting up github pages / workflow in order to do the building and serving for you
## Homework
- Get you group's elements distributed on NPM under your user name
- Publish a demo for the element using github actions
- Write a blog post about the process of going from boilerplate open-wc repo to publishing asset to NPM (this could be done via video if desired)

# Week 6: Building off a comp
## Tues / Thursday
- Let's repeat the same process from the button but now off of a real world comp
  - What are the characteristics of the card?
  - What design considerations must we take into account?
  - What accessibility concerns do we potentially have?
  - What security concerns do we potentially have?
  - What "states" does this button have?
  - What do we call this?
- Let's create a new repo for this card element and import the simple-icon from the previous
- Let's add a dev dependency on the button created in the 1st tutorial
- Create a demo that illustrates how to use this element
## Homework
- Start thinking about needs for building a personal portfolio site to publish to github
- Keep working on your card and refining it
- No blog post / reflection this week, just work on crushing it
- The best solution will get accepted to our monorepo of elements published and used at Penn State and beyond
- Sunday night, each team has 1 person post the links to their repos for this

# Week 7
## Tuesday
- Critique / review of the cards worked on in the previous week
- Rest of class time will be to implement the improvements and discussions that spawn off of ways of achieving the task at hand
- cards will then be enhanced based on the feedback received
## Thursday / Homework
- Continue working on cards in groups while I roam around or show examples of conecpts within the context of people's repos at the front
- Final card to be submitted by Sunday night

# Week 8/9/10 Portfolio site
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
## Each Tues of these 3 weeks
- Feedback on progress of repos. Fielding questions. Sharing techniques, articles, and unpacking concepts
## Each Thursday of these 3 weeks
- Group work in class
## Homework each of these 3 weeks
- Work outside of class as a team
- Sunday of each week posting a status report to slack channel
## End of the 3 weeks
- A portfolio site that has the requirements met
- A blog post explaining routing and lessons learned in developing the portfolio for deployment on github

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
- How the hell hax works. HAXschema, how it works, what it's based on, and how to wire assets up to work with it / rig demo up to use it
- Need some kind of primer on CSS that's better than what I have currently (or maybe we build stuff on top of shoelace
- Need to explain the end to end process of getting a JS asset working in browsers and across contexts (this should happen earlier on and might just be a picture or flow of slides)
- Guest speakers as these guest talks / demos / crits will extend things as well; might want a block of weeks where class is just getting access to them and homework is to keep working on the longer projects
- contribution to the monorepo directly through fork, clone, fix thing, PR back.
- Rendering differences and the religion of SSR vs PWA - https://mobile.twitter.com/thinkLikeADev/status/1428729216800075776/photo/1 with base source of https://developers.google.com/web/updates/2019/02/rendering-on-the-web which is like a whole class / required reading.

## long term projects
- project 3: Personal portfolio site published to github pages
- project 4: Working on a team project in the issue queue

## Guest speakers (confirming dates)
- Michael Potter - Red hat front-end web developer, worked on HAXTheWeb previously, now works on PatternFly Elements
- Nikki Massaro Kauffman - HAX UX and a11y lead, my co-worker-in-crime
- Chuck Lavera - HAX contributor, Eberly college of science
