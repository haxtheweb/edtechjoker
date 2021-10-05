# Scope
- Creating a card based on provided comp files as well as 3 other atoms within it for 4 total elements
- Learning more about slots
- Implementing a different base class
- Build routines and published output
- Github pages
- Wiring up to HAXTheWeb
- Additional iteration and practice of techniques learned in the first project
# Requirements
- OpenWC tooling used to create a new webcomponent with an appropriate name for the project asset
- Card must be built using the provided comp
- Card must have at least 3 demonstrations of variations in the `demo/index.html` file
- Card demo must include your previous project's `button` tag leveraged using the `slot` capabilities of the card we build
- Card must inherit from a new base class called `SimpleColors`
- It must have 1 test per element and all must pass (4 total)
  - The test engine file is found in `/test/cta-button.test.js`
  - Here's an article on how this file works https://dev.to/open-wc/testing-workflow-for-web-components-g73
  - the command to run the tests is `yarn run test`
  
# Rubric - 20% of overall grade
- Final result matches the composit visually and supports all 3 variations - 2%
- Four web components, working together, are in the repo and all work to match the comp - 4%
- JavaScript properties match expectations of the comp and are stateful - 4%
- CSS flexibility to use ::part in each element as well as css variables - 2%
- Correctly leverages a different base class for the top portion element - 1%
- Elements use `slot` and slot attributes in order to provide progressive enhancement - 2%
- 1 automated test per element, which are passed - 2%
- 1 story per element and working storybook - 2%
- `Teamnotes` maintained with status updates, on github, published to npm in the end - 1%

# Bonus oppurtunities
- Wire your Card to HAX and demonstrate it in the hax.html file - +1%
- Wire your banner tag to HAX and demonstrate it in the hax.html file - +1%
- Lazy load the card visually (IntersectionObserver) **and** lazy load icon import & SVG assets as needed +1%
- more to be announced

# Other considerations
- It is common to build 1 element, then refactor it into others. if it makes more sense for you to work this way, do it!
  - example: whole card as 1 element, then factor out just the icon part (css/html/properties) into its own element so that it can be used elsewhere
- This should follow the same project setup and overall feedback arch of the first project both from me but also how your team manages code
- The best solution to this project will be eligable for merging into the HAX mono-repo (+2% if selected)

# Possible deligation points
- There are 4 elements and most groups have 4 people
