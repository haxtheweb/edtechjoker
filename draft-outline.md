# Draft Syllabus
This MD file is subject to change. As we are building this course out based on needs of our classmates, we'll occationally detour from this. This is a work in progress / general timing outline as I hope we are to achieve it.

# Week 1: Welcome back to almost-normal Penn State
## Tues: Welcome to the course, format, policies, all that jazz
- Short lecture on web components / WHY this topic matters
- Mention Project EdTechJoker and goals of the course for me and them
- Collectivism vs individualism. The collective needs to succeed or your team fails. The individual must succeed or there is never any innovation. Individual must succeed or there is no innovation. individuals ensure we build new rockets; collectives ensure they launch.
- Web components are here to ensure that we can mesh these two concepts together effectively
- Who we are; survey results and imposter syndrome
- What the course is / overall projects
- Questions
- get ahead: install nodejs, npm, git, yarn, VSCode / and IDE on your machine
- Additional helpful tools:
 - https://code.visualstudio.com/docs/setup/mac
 - https://ohmyz.sh/
## Thurs: JS Ecosystem
- Short lecture on the modern web ecosystem
- Activity:
  - Get a partner; this is your pair programmer for the semester
  - Find another pair. This is your team of 4. (one group will be solo and that's ok)
  - All teams must install nodejs, npm, git, yarn, VSCode / IDE and be able to create a open-wc boilerplate
  - If you run into roadblocks we'll work through them together. If your team gets the activity completed, help surrounding teams. We need everyone to be on this page before we can move forward
  - common roadblocks / solutions
   - sudo / user permission issue / common scenario:
 ```bash
# move to YOUR home directory
cd ~
# this makes you a super user to run command; put in your password for the computer
sudo npm install -g yarn
# if there are errors look into running something like this.
# NOT EXACTLY THIS JUST SOMETHING LIKE IT
sudo chmod -R 777 /FULL/PATH/TO/DIRECTORY/node_modules
# then run the install command again and see if it fixed it
cd ~
yarn
# if you see no error messages then you are golden
```
## Homework
- If you haven't finished the group activity of getting everything installed; do this on your own time. We all need to get this setup before we can move forward
- Setup account on dev.to / github / join slack channels for project
- Write a blog post introducing yourself, and why you are interested in web development
- Write a blog post on how to get dependencies installed for your machine to teach someone else how to install open-wc
  - Optionally this can be a video tutorial / youtube screencast if desired. It's your preference

# Week 2: What makes tooling; unpacking tool-chains
## Tues: Brief demo of getting a hello-world boilerplate setup for open-wc
- quick tech demo / discussion: permissions, ownership, moving directories, common commands to fix issues, short cut keys, etc
 - note that while I run these in ubuntu 20.04 there are parallels in all OS. OSX is identical.
 - I run Oh My Zsh which is a series of enhancements to a normal `bash` prompt -- https://ohmyz.sh/ (OSX / Linux)
 - Windows you might want to get Cygwin - https://www.cygwin.com/ or a different terminal for running tooling in general
- Individual activity: make a hello-world boilerplate and have it yarn / npm start'ed and on screen (help partner if not there yet)
### Individual / Pair activity: 
 - Look through the parts of the repo and identify aspects of this toolchain but also the repo in general
 - On a whiteboard or in a doc write all the things to note about this repo
  - Where is the demo?
  - Where is the code?
  - What commands can be run?
  - Where are all the dependencies?
  - Where is the custom element / web component / javascript that runs?
### Shareout
- What did people find?
- What makes a good tool-chain?
- What is specific to this repo and what feels like it would work in any repo?
- How do we know what commands to run?
- How do we get dependencies?
- Where do they come from? where do they go?
- What's a devDependency vs dependency?
- What is package.json? What's the API for it?
## What is it open-wc is giving us?
- looking at the boilerplate repo that we made, now at the code level
### Pair activity
 - What does the boilerplate do? How is it working? What's notable about this?
 - What's "syntactical sugar" vs the way the web platform actually works?
 - What is "stateful" in this?
 - What is event driven in this?
 - What is Lit specific?
 - What is "VanillaJS" and is a convention that works anywhere?
 - Group activity: Discuss how this works. What is it doing? Why does this work?

## Thurs Sep 2 - HTML / CSS / Modifying what we have
So we've looked into a bit of what the base line thing we're given by open-wc. Now let's start modifying it
- Quick lecture on pieces of https://docs.google.com/presentation/d/13z_spZnGt7uIY_MjXOnqkxvMyUj6-SEV/edit?usp=sharing&ouid=100601982236009260859&rtpof=true&sd=true which is CSS / HTML / JS fundamentals of how things operate.
- Opening and "hacking" psu.edu by modifying things in the console
### Pair / Group activity
Now we're going to "hack" penn state using a few different methods to better understand how the web is made.
- [ ] Right click and inspect psu.edu. I want you to change the WE ARE to "Were Pen Stat"
When you get a working solution to the following, post it in the edtechjoker slack:
- [ ] Using the "Add the new style rule" button, what CSS selector would appropriately target the corona virus warning banner and make it's background red and the text on it white (you can ignore the icon as it's an SVG).
- [ ] using javascript, target the PSU image and change it's source to point to the "were" https://i1.wp.com/images.onwardstate.com/uploads/2019/10/IMG_9180.jpg?w=960&ssl=1
- [ ] using javascript, target the "were" image and append it as a child to the same container that has the "Give" button

## Pair work that turns into Homework
- Run through the "Try LitElement" tutorial: https://lit-element.polymer-project.org/try
- Run through the "Lit Tutorial" (which is in TypeScript): https://lit.dev/tutorial/
- Create a git repo for your hello-world repo and get it pushed up to github
- In this repo I want to see ONE OF THESE THREE demonstrated:
 - Add an input field that updates as the value changes
 - Reflect the the `counter` property and use this value to write CSS that changes the background color of the button based on the counter being 10
 - Add a button that subtracts from the counter but won't allow going below 0
  - Bonus: Disable the subtract button when hitting 0; enable it when hitting anything other than 0
- When you are done; post your code to the slack channel; this effectively is this weeks "blog post"

## Additional Homework / expected for next class
- Read the full slide deck From Thomas Powell on HTML/CSS/JS fundamentals -- https://docs.google.com/presentation/d/13z_spZnGt7uIY_MjXOnqkxvMyUj6-SEV/edit?usp=sharing&ouid=100601982236009260859&rtpof=true&sd=true
- Watch my IST 402 lecture on HTML / CSS (ignore the lab mentioned)
 - Slides: https://docs.google.com/presentation/d/1PBvgpoWxg-VAFra1Byv9nFUiUtMey4-TzDUHz-93a-0/edit?usp=sharing
 - Recording of lecture: https://psu.zoom.us/rec/play/rBvSXnalROFsn3J9qolFgtFJh9wZE4BL5X-5u4ck691C-Hjs40_33GKdo7nVo-Fy33I5tq-xOaG4IUYr.PsmsMq0SdIEH44ge?autoplay=true&startTime=1611680857000
- Watch my past IST 402 lecture on Javascript ecosystems (ignore the lab mentioned)
 - Slides: https://docs.google.com/presentation/d/1icY6GL5N0cNXM4PjWg1N1RlKFi8lcK8GnIW7PBNBJ8w/edit?usp=sharing
 - Recording of lecture: https://psu.zoom.us/rec/play/bY3fvUuUDOd34uiO2R-FnaUV93Zit12oyXcWULJtpCz6d5h7jO4fEV0Dr5dzbWCQ_tiAr6CWhVtnYAHg.Ok9HdrEm_1p7to0L?autoplay=true&startTime=1612285695000

# Week 3: What makes web components special?
## Tues: the 4 APIs that make them tick
- Short Lecture on what the 4 are with examples and my pitch for why they are future proof
- Guided Class activity: find examples of web component libraries and websites that use web components
- Step through some code, asking questions to gauge comfort with javascript in general
- Group activity: We need exposure to other "component" concepts while we are here to know what else exists and see the similarities in syntax and concept
- Each Group member look for hello-world / boilerplate / tutorial material for VueJS, Angular, React, and Material.IO
  - Material.io has a lot of Android examples but is very block / component oriented with many of the same concepts
- Discussion: What do all of these have in common?
- "Wait, What's wrong with jQuery?!?"
- For thursday: Think about what are all of them missing or that is possibly problematic with their adoption?
## Thurs: exploring LitElement capabilities
- Personal pro/con list that lead our team to web components and away from all other options (build vs buildless)
- Show Drupal code and identifying platform vs vendor vs library code
- Future / bleeding edge capabilities (css modules just landing, json modules on the way)
- Vanilla VS LitElement vs others, lots of examples and asking to identify platform vs convention in each
- Discussion of syntactical sugar using jQuery as an example of LitElement using sugar vs a real convention
## Homework

- Write a blog post about Similarities across component libraries. What concepts do they share? What aspects of a component library lock you into the model of the authors and which set you free to build what you need quickly?

# Week 4: Project 1: Starting the "OMG I CAN'T BELIEVE THIS GOES INTO JUST A button", button
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

# Week 5: Project 1: Critique and feedback of Button
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

# Week 6: Project 2: Building off a comp
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

# Week 7: Project 2: Refinement of our card comp
## Tuesday
- Critique / review of the cards worked on in the previous week
- Rest of class time will be to implement the improvements and discussions that spawn off of ways of achieving the task at hand
- cards will then be enhanced based on the feedback received
## Thursday / Homework
- Continue working on cards in groups while I roam around or show examples of conecpts within the context of people's repos at the front
- Final card to be submitted by Sunday night

# Week 8/9/10: Project 3 - Portfolio site PWA
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

# Week 11/12/13: Project 4: HAXTheWeb
- The final project involves contributing to HAXTheWeb, a massive open source library of web components
- We’ll learn what HAXTheWeb is, who’s using various pieces of it
- How hax works. HAXschema, how it works, what it's based on, and how to wire assets up to work with it / rig demo up to use it; using the past accepted card comp and button as a basis
- We’ll make small initial commits to the lrnwebcomponents repo to smaller tasks to get commits and feel our way around the repo
- As a group you’ll select, investigate, work towards a solution, document and ultimately submit a pull request to our team’s repository in order to improve online courses for future students
- Class time will be spent reviewing code, answering questions as a class, and doing group check ins

# Week 14: Thanksgiving
- Nothing but chillen.

# Week 15/16: Project 4: Final feedback and open code critique
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
- Michael Potter - Red hat front-end web developer, worked on HAXTheWeb previously, now works on PatternFly Elements
- Nikki Massaro Kauffman - HAX UX and a11y lead, my co-worker-in-crime
- Chuck Lavera - HAX contributor, Eberly college of science
