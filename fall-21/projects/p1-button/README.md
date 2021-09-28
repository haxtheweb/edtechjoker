# Scope
We are going to make a button. A CTA button (Call to Action) may seem simple on the surface but we're going to use it as a vehicle to understand the entire publish, build and distribution workflow end to end on any component.

# Goals
- Working as a team, mock up a button, end to end, the whole process + documentation + accessibility + security + publishing considerations
- Understand publishing to npm
- Learn the many considerations in creating this one component when apply to any component in any project

# Requirements of the button
- each group is expected to produce a working, well documented, accessible, CTA that is published to NPM
- It should draw inspiration from existing work / comps, with supporting links, documentation, etc as to what lead to its construction
- All group members must have commits to the CTA
- It must be well designed (subjective)
  - https://material.io/components/buttons#hierarchy-and-placement
  - https://medium.com/eightshapes-llc/and-you-thought-buttons-were-easy-26eb5b5c1871
- It must have a robust API visually so that it can be styled using CSS properties, shadow parts, and attributes
  - https://developer.mozilla.org/en-US/docs/Web/CSS/::part 
- It must have a `button` (or something acting as one), a `a` link tag (or something acting as one), padding, and at least 4 stateful, meaningful properties at minimum (title / label, link / url / href, color / dark / invert / high-contrast, icon)
- It must have support for an icon (using the `@lrnwebcomponents/simple-icon` library, week 5 covers this in step by step detail)
  - https://webcomponents.psu.edu/styleguide/?path=/story/media-icons--simple-iconset-story
- It must support different states including disabled, hover / focus, active (clicked / tapped)
  - I recommend using `this.addEventListener` in a constructor to apply events to listen for such as `pointerenter` and `pointerleave` for knowing the mouse is over or off https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
  - Also you can do this with focus via `focusin` and `focusout` - https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event
- It must be accessible, navigatable via keyboard without issue and accurately color contrasted
- It must support a color variation of some kind(dark mode, invert, color mode, high contrast type of **property**)
  - It only needs 1 but it must support a variation via property so that you can call `<my-button>` and get the expected and then `<my-button dark>` and the CSS reacts to generate a "dark mode" version
- Documentation (via storybook) is required so we know how to use the button
  - https://storybook.js.org/ has the docs but the only file we'll be modifying is in `/stories/index.stories.js`
  - the command run and review your storybook is `yarn run storybook`
- It must be **published to NPM**
  - create an account on npmjs.com
  - create an organization to match your github organization -- https://www.npmjs.com/org/create
  - change the package.json file of your project to reflect this organization as `"name": "@your-organization/your-button"`
  - mark a version number as `"version": "0.0.1"`
  - 1 person taking the lead on code runs `npm publish` once all code is considered in the state for evaluation
 
 # Requirements of your team
- All team members must contribute via PRs / commits to the final project
- There should be *two web components in your project submission* - one per each pair (if your a team has two people then just 1 as it's per pair)
- You are expected to meet outside of class and meetings and keep minor notes in a `TEAMNOTES.md` file
 - example: "We met for 3 hours on Saturday. Susan researched buttons. Billy worked on CSS variables. Karen called the manager."
  
# Possible delegation of tasks (this is purely a suggestion)
## all
- All members identify what the API should be for this element
## each pair
- One pair explores Storybook for documenting the element
- One pair explores accessibility / functional testing
## in each pair
- One person, *per pair* is the **lead dev** (doing the typing)
- One person, *per pair* is investigating security / accessiblity / design and helping shape the element
## individual roles
- One person sets up the NPM publishing credentials / will publish from their machine
- One person is project manager and ensures there are actionable tasks in the issue queue assigned to different team members
- One person takes notes / is responsible for the `TEAMNOTES.md` meeting / actionable tasks formulated

# Rubric - 10% of course grade
* refined subject to class progression*
This rubric is to be applied per pair. Your team / additional pair is there for help and bouncing ideas off of.
- Is your button well designed (subjective)? 1%
- Is the button published to npm and able to be successfully consumed in another app (can a user run npm install YOURELEMENTNAME and get the CTA to consume)? 1%
- Is the button documented with storybookJS docs (at least 2 example variations / all properties documented via knobs)? 1%
- Is the JS / functional API logical and robust? 2%
- Is the CSS / style API logical and robust? 2%
- Is the HTML semantic, logical, and accessible? 2%
- Are there team notes documenting times met up and work accomplished out of class? 1%

# Bonus - up to 3%
- Add support for a sound effect +1%
  - example: https://github.com/elmsln/lrnwebcomponents/blob/master/elements/air-horn/src/air-horn.js#L52-L63
- Using an IntersectionObserver, only render the internals of the element when it is vibile on the screen +1%
  - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Does the button have at least 2 accessibility / functional tests? 1%

# Pro tips
- Make sure to make use of office hours for additional help / feedback from TAs outside of class. This should be documented in your TEAMNOTES.md
- While there is no set hour requirement outside of class, shoot for meeting up at least once a week for 3 hour blocks of time if possible. You need time in order to chew on a problem and understand all aspects of it.
- Using the issue queue in your repo you create on github is a good way to ensure you're documenting the delegation of work and breaking tasks down logically
