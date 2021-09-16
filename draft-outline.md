# Draft Syllabus
This MD file is subject to change. As we are building this course out based on needs of our classmates, we'll occationally detour from this. This is a work in progress / general timing outline as I hope we are to achieve it.

# Week 4: Project 1: Starting the "OMG I CAN'T BELIEVE ALL THIS GOES INTO JUST A button", CTA button
## Tues: Sizing up our own atom
- Buttons are common atoms within an atomic design pattern
- https://bradfrost.com/blog/post/atomic-web-design/ - resource for what is atomic design
- We could talk about the process for building anything; or, we can start building and start into the project
- This iteration will be a bit "on rails". I'll help frame discussion, considerations, expectations, etc.
- We'll repeat the same feedback loop for a card in a few weeks with less guidance and similar expectations
- Take 5 minutes and search for some possible buttons we can use to have the discussion. CTAs or really any button on any interface (otherwise I'll use Cantvas and no one wants that)
- Group discussion / questions to answer:
  - What are the characteristics of the button?
  - What design considerations must we take into account?
  - What accessibility concerns do we potentially have?
  - What security concerns do we potentially have?
  - What "states" does this button have? What events do we have that correspond with those?
  - What properties do we have?
  - What do we call this?
- Large group discussion with share-outs from these answers
## Thurs: Starting to build the web component
- Create a github repo for this element
- Clone locally.
- Run open-wc to populate repo
- Start to apply the properties, css, html structure
- Mention security consideration
- Mention accessibility implications (color, tabindex)
- Review of the project write up https://github.com/elmsln/edtechjoker/blob/master/fall-21/projects/p1-button/README.md
- **Project 1 will be due September 30th**
## Homework
- Continue to work on element
- Get code pushed up to github repos
- Submit link to team repo for progress check by Monday at midnight
 - Tues of next week I'll be critiquing code and offering suggestions / feedback for improvement
 - Make sure that you have started on TEAMNOTES.md and what you've discussed / when you've met up.
 - The further your along, even if it's just taking a stab at things, the more robust feedback I'll provide (the better the grade outcomes)

# Week 5: Project 1: Critique and feedback of Button
## Tues: Critique / code discussion
- Code critique / open code review
- Team member has to explain the code on screen
- Ask audience for an alternative methodology of approaching a problem
- Looking into storybook and how it's wired up for visual documentation
- Looking into accessibility testing / documentation on how to write tests for the repository
- Task: Enhancement by adding support for icons
- Using the simple-icon library, add conditional support for the button to render an icon
- Steps: Look up on NPM. Install / add to dependencies in project, add script tag to existing, discuss conditional rendering, discuss data binding.
## Thursday - publishing, distribution
- Let's publish, build and distribute this element
- Publish; discussion of npm vs github distribution (preference stuff)
- Build; ES versions, why different platforms need different things, why this is still a thing (yet less all the time)
- Setting up github pages / workflow in order to do the building and serving for you
## Homework
- Reading: How Penn State (my team) ships web components in an "unbundled" manner -- https://dev.to/btopro/part-1-how-penn-state-unbundles-web-components-for-cdn-deployments-20di
- Get you group's elements distributed on NPM under your user name
- Publish a demo for the element using github actions
- Write a blog post about considerations when building a web component and considerations when building the element's API (metacognition of the exercise we engaged in)
- Write a blog post about the process of going from boilerplate open-wc repo to publishing asset to NPM (this could be done via video if desired)

# Week 6: Project 1: refinement
## Tues
- Another round of critique and feedback
- More time to work with team and ask questions in class
## Thursday Sep 30th
- Another round of critiques and feedback as requested
- **Project 1 is to be submitted by midnight, September 30th**

# Week 7: Project 2: Building off a comp
## Tues / Thursday
- Class Exercise: Shown code example, identify:
 - Lines / function calls that are "vendor specific"
 - Lines / syntax that are "library specific"
 - Lines / functions / syntax that are platform independent / VanillaJS
- Show Drupal code and identifying platform vs vendor vs library code
- Future / bleeding edge capabilities (css modules just landing, json modules on the way)
- Vanilla VS LitElement vs others, lots of examples and asking to identify platform vs convention in each

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

# Week 8: Project 2: Refinement of our card comp
## Tuesday
- Critique / review of the cards worked on in the previous week
- Rest of class time will be to implement the improvements and discussions that spawn off of ways of achieving the task at hand
- cards will then be enhanced based on the feedback received
## Thursday / Homework
- Continue working on cards in groups while I roam around or show examples of conecpts within the context of people's repos at the front
- Final card to be submitted by Sunday night

# Week 9/10/11: Project 3 - Portfolio site PWA
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

# Week 12/13: Project 4: HAXTheWeb
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
- Michael Potter - Red Hat front-end web developer, worked on HAXTheWeb previously, now works on [PatternFly Elements](https://patternflyelements.com/)
- Nikki Massaro Kauffman - HAX UX and a11y lead, my co-worker-in-crime
- Chuck Lavera - HAX contributor, Eberly college of science
