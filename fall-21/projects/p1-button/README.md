# Scope
We are going to make a button. A CTA button (Call to Action) may seem simple on the surface but we're going to use it as a vehicle to understand the entire publish, build and distribution workflow end to end on any component.

# Goals
- Working as a team, mock up a button, end to end, the whole process + documentation + testing + accessibility + security + publishing considerations
- Understand publishing to npm
- Learn the many considerations in creating this one component when apply to any component in any project

# Requirements of the button
- each group is expected to produce a working, well documented, accessible, CTA that is published to NPM
- All group members must have commits to the CTA
- Documentation (via storybook) is required so we know how to use the button
- It must be published to NPM
- It must be well designed (subjective)
- It must have a robust API visually so that it can be styled using CSS properties, shadow parts, and attributes
- It must have optional support for an icon (using the simple-icons library)
- It must have a `button`, a `a` link tag, padding, and at least 4 stateful, meaningful properties at minimum
- It must support different states including disabled, hover / focus, active (clicked / tapped)
- It must be accessible, navigatable via keyboard without issue and accurately color contrasted
- It must support multiple color variations (normal, dark mode, high contrast)
- It should draw inspiration from existing work / comps, with supporting links, documentation, etc as to what lead to its construction
 
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
- Does the button have at least 2 accessibility / functional tests? 1%
- Is the JS / functional API logical and robust? 2%
- Is the CSS / style API logical and robust? 2%
- Is the HTML semantic, logical, and accessible? 1%
- Are there team notes documenting times met up and work accomplished out of class? 1%

# Pro tips
- Make sure to make use of office hours for additional help / feedback from TAs outside of class. This should be documented in your TEAMNOTES.md
- While there is no set hour requirement outside of class, shoot for meeting up at least once a week for 3 hour blocks of time if possible. You need time in order to chew on a problem and understand all aspects of it.
- Using the issue queue in your repo you create on github is a good way to ensure you're documenting the delegation of work and breaking tasks down logically
