# Scope
- Creating a card based on provided comp files
- Learning more about slots
- Additional iteration and practice of techniques learned in the first project
# Requirements
- OpenWC tooling used to create a new webcomponent with an appropriate name for the project asset
- Card must be built using the provided comp
- Card must have at least 3 demonstrations of variations in the `demo/index.html` file
- Card demo must include your previous project's `button` tag leveraged using the `slot` capabilities of the card we build
- Card must inherit from a new base class called `SimpleColors`
- It must have 2 tests that your element passes
  - The test engine file is found in `/test/cta-button.test.js`
  - Here's an article on how this file works https://dev.to/open-wc/testing-workflow-for-web-components-g73
  - the command to run the tests is `yarn run test`
  
# Rubric
- Final result matches the composit visually and has 3 demonstrated variations - 3%
- JavaScript properties match expectations of the comp - 1%
- Correctly leverages a different base class - 1%
- Element uses `slot` and slot attributes in order to provide progressive enhancement - 2%
- 2 automated tests which are passed - 1%
- `Teamnotes` maintained with status updates, on github, published to npm in the end - 2%

# Bonus oppurtunities
- Use a MutationObserver in order to set the `icon` property based on the presence of a `simple-icon-lite` tag, converting it into data for the `icon` property +2%
- more to be announced

# Other considerations
- This should follow the same project setup and overall feedback arch of the first project both from me but also how your team manages code
- The best solution to this project will be eligable for merging into the HAX mono-repo
