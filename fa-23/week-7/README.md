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
- Another possible issue with that is if you have `node_modules` showing on github, these files won't get installed over top of so you potentially are missing things from version control. delete node_modules, commit this to version control (the removal of files) and then ensure you have a `.gitignore` which has `/node_modules/` listed in it. Then do npm install and it'll work locally / push things back up to github and see if vercel rebuilds correctly.
- buttons when trying to work on your card should select `document.querySelector("my-card-name")` and not a random class name within your card.

In class: https://github.com/gleyze/character-card2

## CSS Variables and Shadow Parts
- We're going to reflect an attribute and change styles based on toggle status
- We're going to look at how to name and leverage css variables to allow others to influence our design
- We're going to see what a CSS Shadow `part` is and how to style using them

## Activity
- Time to implement CSS Variables / shadow parts
- Time to implement custom events in your own code
- End of class, turn in status check in into Canvas dropbox

BEFORE THURSDAY WATCH THE CRIT VIDEO AND APPLY THE PROJECT REQUIREMENTS TO YOUR CARD: https://www.youtube.com/watch?v=waYp5pjp75Q

# Thursday

## Custom Events
- Codepen: https://codepen.io/btopro/pen/XWPKevM?editors=1111
- Video explaining in more detail VanillaJS Web components + CustomEvents: https://www.youtube.com/watch?v=HU8K4EyAncg
- I'll do a quick demo of Custom Events applied to a card for a different purpose to understand the relationship between events and the DOM
- We're going to peg the collapse to a stateful variable so we'll add a `expanded` variable to our element
- We're going to make a custom event for when the state of the collapse changes
- We're going to make an event listener for the custom event so that our Button's label updates to match

### Publishing to NPM
- https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages
- Now it's time to publish our code to NPM
- Now it's time to make another repo
- In this other repo, it's time to pull in our 1st code that was published and build upon it
- This is the feedback loop with web components and all web development going forward

## Activity part 1 - Custom Event
- Work on implementing a Custom Event to do proper state management
- The video from this week I showwed how to do this and get your toggle to 100% be wired up (statefully) to a button in the index.html
- You can name your custom event whatever you want, but then listening on the window in `index.html` you'll want to react to that event and make your toggle button change its label dynamically based on the toggle changing

## Part 2 - NPM
- Get your element code published to NPM
- Get an account on npmjs.com and log into it
- from your repo in a terminal run `npm publish` and step through any login steps required to make this work
- in the end you should get something like https://www.npmjs.com/package/@lrnwebcomponents/meme-maker
  - if your element name already exists on npm (namespaces are unique universally) then you can modify the package name in package.json to be something like `abc123-business-card` or whatever

## Part 3 - New Repo for submitting your project 1
- Start a new repo and start implementing your code inside of it. The following is taken from the Project 1 requirements:
> - Call this repo card-list
> - Make a single element, that pulls in both of your cards and has 5 implementations of each of your cards (so 10 total or 15 total depending on team size)
> - Cards should be displayed next to each other
> - You don't need buttons that are interactive in this repo, just different implementations of each card to show differences
> - This should be pushed back to github and built using vercel
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
- Create a gist that references your dev.to article
- Point to your updated repo / state of your card
- If you have specific issues / questions, ask them in this gist
- I will be glancing at your code for this check in because it should be pretty far along; specific questions and your article is what i'll be focusing on
- submit gist to canvas
