# Scope
We are going to make a button. A CTA button (Call to Action) may seem simple on the surface but we're going to use it as a vehicle to understand the entire publish, build and distribution workflow end to end on any component.

# Goals
- Working as a team, mock up a button, end to end, the whole process + documentation + testing + accessibility + security + publishing considerations
- Understand publishging to npm
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
 - You are expected to meet outside of class and meetings and keep minor notes in a `TEAMNOTES.md` file
  - example: "We met for 3 hours on Saturday. Susan researched buttons. Billy worked on CSS variables. Karen called the manager."
  
# Rubric - 10% of course grade
* refined subject to class progression*
- Is your button well designed (subjective)? 1%
- Is the button published to npm and able to be successfully consumed in another app (can a user run npm install YOURELEMENTNAME and get the CTA to consume)? 1%
- Is the button well documented with storybookJS docs (at least 3 example variations / all properties documented via knobs)? 1%
- Does the button have at least 3 accessibility / functional tests? 1%
- Is the JS / functional API logical and robust? 2%
- Is the CSS / style API logical and robust? 2%
- Is the HTML semantic, logical, and accessible? 1%
- Are there team notes documenting times met up and work accomplished out of class? 1%
