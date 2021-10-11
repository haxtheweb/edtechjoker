# Week 7: Project 2: Building off a comp
## Tues
- Introducing and re-scoping Project 2
  - What's expected
- To clear up some setup issues, all teams will start their repo using the template repo that I made: https://github.com/elmsln/project-two
  - This is `npm init @open-wc` with all options selected and choosing "application"
  - This adds in some custom additions so we have a better blank canvas to work on
  - This adds in support for a HAX based demo which we'll add at the end
  - I did a lot of documenting in what's there initially
- After making the template (only 1 teammate does this so pick who will do it) edit the package.json file to..
  - have the correct name that matches the eventual npm `@orgname/projectname` format
  - modify the `git: {}` section of the package.json to match the name of your git repo (later on npm will then provide a link to easily jump to your repo)
- Let's repeat the same process from the button but now off of a real world "comp" (composition)

### Class activity / participation
- Here are the assets you have for making this card: https://github.com/elmsln/edtechjoker/tree/master/fall-21/projects/p2-card
- **FORK THIS TO YOUR GITHUB ORGANIZATION**: https://github.com/elmsln/project-two
  - Teammates will fork off of this once it's time to dig into development
- Time for that exercise we went through 4 weeks ago..
  - What are the characteristics of the card?
  - What design considerations must we take into account?
  - What accessibility concerns do we potentially have?
  - What security concerns do we potentially have?
  - What "states" does this card have?
  - What do we call it?
  - What areas do we need to account for flexible content / HTML entry of any kind?
  - Do we have room for additional reusable atoms to be produced? (there are 4 total by my count)
  - What should we call each of them?
- Answer these questions in the TEAMNOTES.md file for your group's template and post a link in slack for participation / attendence today
## Thursday
- Starting to dig into the repository and what's provided (and how)
- What is "building" a project? rollup? these words?
- What is github actions / gh-pages and how is the project leveraging these to automate life?
- What are "Named slots" / what do `<slot>` tags offer us design flexibility wise?
- Adding another element to our "app" (the real different between a single brick and a application; multiple elements)
- Please complete the following very short survey now in class https://forms.gle/eSF3quX6GcGTUKdB9
- https://open-ui.org/components/card.research -- A useful resource in general, but specifically when thinking about naming things
- Time will be open to start developing on the repo so that you can meet the project check-in for Sunday night

## Homework
- Write a blog post about considerations when building a web component and considerations when building the element's API (metacognition of the exercise we engaged in)
  - Blog post should include details about the comp so someone outside class could read it
  - How you are going to break it down into multiple elements
  - What do you expect to be difficult
  - What's more managable now that you made the button
- **Sunday by midnight - Post a link to your dev.to article**
- Project check-in 1:
  - Update the TEAMNOTES.md file in your team's fork of the repo
  - Check-in 1 should document the possible names of these 4 elements, the properties they might have and additional design considerations of each
    - IF something accepts flexible HTML areas then we're talking about using `<slot>` tags. If there are MULTIPLE forms of HTML input then we need to use a "named" slot (which we'll cover next week). Be thinking about this in context of the card with things like header and sub header, card content vs header, etc
  - Next steps should be documented as to what each team member is going to work on next
