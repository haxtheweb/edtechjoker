# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.
- [Resource for reviewing concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4)

# Schedule

- [Week 1](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-1)
- [Week 2](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-2)
- [Week 3](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-3)
- [Week 4](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-4)
- [Week 5](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-5)
- [Week 6](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-6)
- [Project 1 Requirements](https://github.com/elmsln/edtechjoker/blob/master/sp-23/projects/project-1.md)

# Week 7: More project work and feeedback

## Tuesday

# Crit
I did full on crits of these 3 with how to fix common issues as well as how to implement CSS variables, CSS shadow Parts, reflected attributes, fixing state management and how to leverage Custom Events.
- My live crit / review / explaining how to apply the concepts I will expect to see in your card, by using your cards -- https://www.youtube.com/watch?v=waYp5pjp75Q
- example 1 from video: https://github.com/lloyd64/team-card
- example 2 from video: https://github.com/lizblake/band-card
- example 3 from video: https://github.com/Fawaz1077/fawaz-nice-card

Common issues, many of which are remediated in the video from above
- your buttons need to be in index.html (or their own scoped element) and NOT with your card. your card is a card and thats it
- Make sure files are top of your repo not `my-repo-name/my-card-name/src/my-card-name.js` just `my-repo-name/src/my-card-name.js`
- if you get this on your vercel demo it most likely means its not at the top level (above) OR you need `meme-maker` to be included in the listed `dependencies` of your package.json file "Uncaught TypeError: Failed to resolve module specifier "lit". Relative references must start with either "/", "./", or "../"."
- `npm install --save @lrnwebcomponents/meme-maker` -- the `--save` flag writes the dependency into your package.json otherwise it'll work local but not for others
- buttons when trying to work on your card should select `document.querySelector("my-card-name")` and not a random class name within your card.

In class: https://github.com/gleyze/character-card2

## CSS Variables and Shadow Parts
- We're going to reflect an attribute and change styles based on toggle status
- We're going to look at how to name and leverage css variables to allow others to influence our design
- We're going to see what a CSS Shadow `part` is and how to style using them

# Custom Events
- We're going to peg the collapse to a stateful variable so we'll add a `expanded` variable to our element
- We're going to make a custom event for when the state of the collapse changes
- We're going to make an event listener for the custom event so that our Button's label updates to match

## Activity
- Time to implement CSS Variables / shadow parts
- Time to implement custom events in your own code
- End of class, turn in status check in into Canvas dropbox

BEFORE THURSDAY WATCH THE CRIT VIDEO AND APPLY THE PROJECT REQUIREMENTS TO YOUR CARD: https://www.youtube.com/watch?v=waYp5pjp75Q

## Thursday

### Publishing to NPM
- Now it's time to publish our code to NPM
- Now it's time to make another repo
- In this other repo, it's time to pull in our 1st code that was published and build upon it
- This is the feedback loop with web components and all web development going forward

## Activity
- Get your element code published to NPM
- Get an account on npmjs.com and log into it
- from your repo in a terminal run `npm publish` and step through any login steps required to make this work
- in the end you should get something like https://www.npmjs.com/package/@lrnwebcomponents/meme-maker
- Start a new repo and start implementing your code inside of it
- End of class, turn in status check in into Canvas dropbox

## Homework
- Read https://dev.to/oxharris/rethinking-the-modern-web-5cn1
- Read https://infrequently.org/2023/02/the-market-for-lemons/
- Watch this debate to understand a React worldview vs a Web component / platform worldview from two titans https://www.youtube.com/watch?v=ChfjZV-aA_Y
- Write a follow up response on dev.to from the perspective of a new developer in the field
  - What is confusing about platforms?
  - How could web components and VanillaJS standards be taught in a way that is more approachable?
  - What did you find easiest to work with on 1st stab? (You don't have to say web components, this is an honest take, if it was Vue cool, but justify it)
  - Think back on the tooling. What parts were confusing? What clicked with you immediately?
  - What additional readings did you have to do in order to make sense of things.

## Mid-term exam - Week 8 we'll have an exam
- Anything from slides is fair game
- Anything from readings is fair game
- Anything produced in class or part of class is fair game
- The internet exists; it will also be fair game
- Google also exists, so it will also be fair game (for you)
- This will take place during the start of class and is short

## Thursday
- This is open office hours. If your having issues with your code come get additional help from our TA

# Project 1 is due March 5th by 11:59pm
- Project 1 is due at the end of this week
- Use this time to catch up / clean up past assignments you may have missed and refine your project 1 submission to maximize points
- This will be graded with more scrutiny than things leading up to it
- The dropbox for this is on Canvas and is ultimately a repo you are turning in
- [Project 1 Requirements](https://github.com/elmsln/edtechjoker/blob/master/sp-23/projects/project-1.md)

## Week 9: Spring Break

> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
# EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE

## Week 10-11: Micro frontends (project 2)
- Vercel and project publishing and communication
- Creating an API endpoint to return data
- Creating a basic web component to render data from an end point using fetch to obtain information

## Week 12 – 16: Final Project
- Final projects laid out. Lectures / lessons / code reviews still happen but are more focused on ways of helping pairs complete the project in question.
- Scope / requirements of each project will vary. Students will pick from one of a variety of options
- https://github.com/elmsln/issues/labels/7B
- Check ins / progression expectations each week
- MobX / State management practice
- Routing
- localStorage
- Peformance enhancements

## Week 17: Final project due Tuesday of Finals week
- Class held for last minute office hours / debugging
