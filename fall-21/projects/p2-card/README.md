# Overview
Using https://github.com/elmsln/project-two as a basis, and the assets included in this project repo your viewing, create 4 web components that work together as one repository. This will be published to NPM in the end.

# Goals
- Practice development and refinement of web components in a manner similar to industry requirements (from a design comp)
- Leverage web components, in other web components (nesting)
- Gain insight into concepts like element reuse, HAX, accessibility
## Things we'll practice
- Creating a card based on provided comp files as well as 3 other atoms within it for 4 total elements
- Learning more about slots and named slots specifically
- Implementing a different base class (SimpleColors in at least 1 of the elements)
- Build routines and published output to gh-pages via github actions
- Wiring up to HAXTheWeb (boilerplate in place, demo'ing, understanding, and modifying it)

# Requirements
- Fork https://github.com/elmsln/project-two to your ORGANIZATION
  - **Teammates then fork off their organization**
- Card must be built using the provided comp
- Card must have at least 3 demonstrations of variations in the `index.html` file which serves as the demo
- Card demo must include your previous project's `button` tag leveraged using the `slot` capabilities of the card we build out together
  - this should be in your `devDependencies` so that it's not required for others but demonstrates that you published your previous element
- Card must be made out of several elements (4 that we discuss in class) and be named semantically
- Card must have 1 element inherit from a new base class called `SimpleColors`
- It must have 1 story per element (4 total)
  - The storybook engine is in `/stories/app.stories.js`
  - You can have multiple .stories files OR leverage each element in the story provided
  - the command to view is `yarn run storybook`
- It must have 1 test per element and all must pass (4 total)
  - The test engine file is found in `/test/app.test.js`
  - Here's an article on how this file works https://dev.to/open-wc/testing-workflow-for-web-components-g73
  - the command to run the tests is `yarn run test`
  
# Rubric - 20% of overall grade
- Final result matches the composit visually and supports all 3 variations - 2%
- Four web components, working together, are in the repo and all work to match the comp - 4%
- JavaScript properties match expectations of the comp and are stateful - 3%
- CSS flexibility to use ::part in each element as well as css variables - 1%
- Correctly leverages a different base class (SimpleColors) for the top portion element - 1%
- Elements use `slot` and named slots to allow for design flexibility - 1%
- 1 automated test per element, which are passed - 2%
- 1 story per element and working storybook - 2%
- `Teamnotes` maintained with status updates, on github, published to npm in the end - 4%

## Check ins
- **Each Sunday at midnight** there is a check-in on project status. This is why `teamnotes` above is listed as 4%. Each check-in will be worth 1%
- There will be a task each week. Hitting these milestones will help keep you on pace but also ensure we have things to discuss each class
- Much like project one, I'll be using your own examples to provide discussion and offer feedback throughout
- These check-ins and accomplishments for the week are to be documented in your `TEAMNOTES.md` file along with other meetings your group has

# Bonus oppurtunities
- Wire your top level Card to HAX and demonstrate it in the hax.html file - +.5%
  - we'll cover how the current one works in class
- Wire your banner tag to HAX and demonstrate it in the hax.html file - +1%
  - you'll have to pattern the functionality of the previous one
- Lazy load the card visually (IntersectionObserver) **and** lazy load icon import & SVG assets as needed +.5%
- Modify your github actions to include a requirement to pass your tests in order to build (add tests toward the end) +.5%

# Other considerations
- Make sure to fork off of your organization's fork. There should be no direct working off of my repo
- It is common to build 1 element, then refactor it into others. if it makes more sense for you to work this way, do it!
  - example: whole card as 1 element, then factor out just the icon part (css/html/properties) into its own element so that it can be used elsewhere
- This should follow the same project setup and overall feedback arch of the first project both from me but also how your team manages code
- **The best solution to this project will be eligable for merging into the HAX mono-repo (+2% if selected)** This is a real use-case we have and follows a process similar to what our team would follow in taking a design asset and wiring it up to HAX

# Possible deligation points (suggested)
- There are 4 elements and most groups have 4 people
- Have someone be primary on project management
- Discuss as a group where 1 API starts and another ends, then delgate each element out accordingly
- Each person could be in charge of..
  - 1 element
  - 1 story
  - 1 test
  - 1 hax wiring

# Due dates
- Oct 10: check-in 1 due
- Oct 17: check-in 2 due
- Oct 24: check-in 3 due
- Oct 31: check-in 4 due
- November 2nd (A Tuesday): Project is due; turned into Canvas dropbox 1 per team
  - This way we have the last class to work during and clean up questions
