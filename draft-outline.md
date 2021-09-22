# Draft Syllabus
This MD file is subject to change. As we are building this course out based on needs of our classmates, we'll occationally detour from this. This is a work in progress / general timing outline as I hope we are to achieve it.

# Week 5: Project 1: Critique and feedback of Button
## Tues: Critique / code discussion
- Code critique / open code review
 - Ask audience for an alternative methodology of approaching a problem
 - review different solutions and live debug / edit
- Expected build; I'll demonstrate how I would approach this, live
- Credit for attendence today:
 - On slack I need the following added to your `TEAMNOTES.md` file in your repo:
  - What did you learn today that you will apply
  - What are your next steps
  - Post link to this updated file in Slack please
## Thursday - adding in support for other elements
- Using the simple-icon library to include support for icons, adding a property, and conditionally rendering based on an `icon` being set
- Learning how to include other web components in our web component (from npmjs.com)
- Class activity: Get code up in your repo with support for the `simple-icon` library
  - https://webcomponents.psu.edu/styleguide/?path=/story/media-icons--simple-iconset-story - docs on icon names
  - `yarn add @lrnwebcomponents/simple-icon` - add it to your project (must be in the correct directory for your project)
  - import into your element:
```js
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
```
  - Now you can use a new web component! `<simple-icon-lite icon="save"></simple-icon-lite>` should add a save disk icon
  - Now let's make a variable so that we can change the icon
  - Now, let's add conditional rendering via Lit's ternary processing of variables ${this.icon ? html`...icon stuff` : html``}
  - Now, let's make our demo show different options
```html
<you-button icon="save" title="Save"></you-button>
<you-button icon="av:games" title="Play a game" link="https://ea.com"></you-button>
<you-button title="No icon" link="https://youtube.com/"></you-button>
```
- After walking through this, I'll help as needed. Anything you don't get done on getting this working and up in the repo is for homework / your group meetings that you've been having to work on this further.
- Friday I'll be at Starbucks on Calder from ~10am - 3pm for office hours as desired
## Homework
- Blog post: by Sunday 11:59; write up a blog post on the work you've done so far on your web component. Difficulties in making a button or understanding web components, and concepts you've connected / things you've learned so far in how to make a web component.
- In your post, include a link to the state of your element / repo
- "Community" credit is blogging (the check in as to where you are with your element)
- "Class participation" is if your element includes the icon work that we stepped through in class together

# Week 6: Project 1: refinement
## Tues -  publishing to npm and a brief review of where / how to modify accessibility tests and storybookJS files
- I'll review, provide feedback on submissions in on time and talk about different interesting solutions / considerations as a class
- Looking into storybook and how it's wired up for visual documentation
- Looking into accessibility testing / documentation on how to write tests for the repository
- Let's publish, build and distribute this element
- Publish; discussion of npm vs github distribution (preference stuff)
- More time to work with team and ask questions in class
## Thursday Sep 30th
- Another round of critiques and feedback as requested
- More time in class to work
## Homework
- **Project 1 is to be submitted by 11:59pm, Sunday October 3rd**

# Week 7: Project 2: Building off a comp
## Tues - 
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
