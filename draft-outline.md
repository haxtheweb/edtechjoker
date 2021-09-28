# Draft Syllabus
This MD file is subject to change. As we are building this course out based on needs of our classmates, we'll occationally detour from this. This is a work in progress / general timing outline as I hope we are to achieve it.

# Week 6: Project 1: refinement
- Bonus added to project - https://github.com/elmsln/edtechjoker/blob/master/fall-21/projects/p1-button/README.md
## Tues -  publishing to npm and a brief review of where / how to modify storybookJS files
- I'll provide small feedback to several projects quickly
- I'll dig deeper on 3 different repos to demonstrate or point to a concept within each
  - repos covered: https://github.com/btopro/invisi-button
  - https://github.com/btopro/PenStat-CTA/tree/master/penguin-state-button
  - A private repo
- Pair activity / class:
  - 1 pair stay still, the other pair move left to the next closest team
  - DM each other / obtain a link to their repo
  - Discuss with the other team your buttons. Explain how you've solved the button / state of your current button
  - 15 minutes: Group that stayed demo's and explains their code
  - 15 minutes: Group that sat down demo's and explains their code
  - In your `TEAMNOTES.md` file...
    - Write 2 things that are similar in your implementations
    - Write 2 things that are different in your implementations
    - List a code snippet or approach you plan on leveraging from their solution
    - Post link to peer review in slack (link to the `TEAMNOTES.md` file)
- For Thursday: Implement feedback from the conversation with the other peer group you met with
- Office hours note: **I am sprinting Friday on a new project and will not be available. If you would like to meet up before or after class Thursday let me know.**

## Thursday Sep 30th
- Another round of critiques and feedback as requested based on what's turned in between Tues and Thurs
- Looking into storybook and how it's wired up for visual documentation
- Let's publish and distribute this element
- More time to work with team and ask questions in class
## Homework
- **Project 1 is to be submitted by 11:59pm, Sunday October 3rd**

# Week 7: Project 2: Building off a comp
## Tues
- Establishing the output of Project 2
- Accessibility testing
- "Application" vs "webcomponent" based projects
- Looking into accessibility testing / documentation on how to write tests for the repository

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
- Keep working on your card and refining it
- Reading: How Penn State (my team) ships web components in an "unbundled" manner -- https://dev.to/btopro/part-1-how-penn-state-unbundles-web-components-for-cdn-deployments-20di
- Write a blog post about considerations when building a web component and considerations when building the element's API (metacognition of the exercise we engaged in)
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
## Tues Building
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
