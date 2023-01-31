# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.
- [Resource for reviewing concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4)

- [Week 1](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-1)
- [Week 2](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-2)
- [Week 3](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-3)

# Week 4:  Review, revision and intro to JS ecosystems

This week we'll start looking at how our code fits (or doesn't) into the modern JS ecosystem. What we've made so far is old school, vanilla, simple. Now we'll look at getting it into how modern JS is shipped.

## Code crit from HW3 20 min
- looking quickly through some prime examples that were submitted
- Follow along as I go through them / mess with these as we go: https://gist.github.com/btopro/0909943ff7ca3c0f256adc66e51c69ca

## Remediations and enhancements to look for
- Here's some general things to apply during activity one
1. make sure that things like `class="whatever"` is NOT `class = "whatever"` spaces in attributes are not allowed
2. if your testing for a style "state" like for example `if (thing.style.display == "block") { } ` change this to test if there's a class OR attribute. If the class exists `if (thing.classList.contains('namedclass')) {` then toggle the class on and off
3. Use NAMED FUNCTIONS instead of annonymous ones. For example `function changeBackgroundColor() { }` and then `colorButton.addEventListener(“click”, changeBackgroundColor);` so that it's more readable and reusable
4. make sure when you duplicate the card it doesn't duplicate the buttons as well (bc they won't work as the events are not applied to them)
5. When you hit duplicate, make sure it's able to make more than 1 (infinite duplication and delete)
6. make sure when you delete your last card it doesn't just hide it `yourCardTarget.remove()` will delete the node so delete it
7. make sure that if there's only 1 card left, that you DON'T DELETE IT OR IT BREAKS YOUR APPLICATION
8. The "HTML only" way of doing details display (which is highly accessible) -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details - apply this for your details toggling
9. ENSURE ALL TAGS THAT OPEN, CLOSE WHERE YOU EXPECT THEM TO
10. remove reliance on `id="whatever"` and then `querySelector("#whatever")` but ESPECIALLY `document.getElementById('whatever')` . Refactor these to be `.whatever` and `class="whatever"` and `querySelector('.whatever')` or suffer the wrath of component architecture (and a11y, and ridicule) moving forward!

## Activity 1 ~20 min
- pair up wth the pair next to you (group 1 and 2, group 3 and 4, etc; end of table closest to room group up together)
- share a link to the repo you worked on with the opposite pair, they look at yours. (partner 1 of group A shares with partner 1 of Group B, etc)
- Fork their repo and provide `//` comments for each block of JS explaining what it does
- Provide recommendations based on seeing if they have any of the required remediations above
- If they are missing the functionality from the homework, suggest ways they can implement that by using your own code
- If you are missing anything from the requirements, ask them for how they solved it. If you both didn't get it, ask your other partners
- If there's anything you don't understand as to how they did it, ask them to explain it
- If there's anything you STILL don't get after that, DM me on Discord and we'll discuss as a class / I'll answer for everyone

## Activity 2 ~10 min
- working together (someone "drives" and someone is co-pilot) combine your code into 1 pen so that both work
- all your JS functions that add and remove cards should work for their respective items
- If this was easy, why was it easy?
- If it was hard, why was it hard?

## Task
- Make sure you have a Github and Vercel.com account
- Link these together
- Install vercel on your machine https://vercel.com/docs/cli using yarn or npm

## Lecture (time permitting or we'll start into it Thursday)
- Modern JS Landscape - https://docs.google.com/presentation/d/1oUqfiXL5L5XvErox5HEdnk-xA7xSCBJEYhZ9k2p1Gj8/edit?usp=sharing


> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
# EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE

## Activity 3 / leading into home work
- Hello world a palooza. Using vercel, create boilerplates for
  - React
  - Angular
  - VueJS
  - Svelte
- Pull these down to your local machine, install them (npm install or yarn install)
- "run" them. usuall with `yarn start` or `npm run start`
- "build" them. usually with `yarn run build` or `npm run build`
- Open in VSCode to review / modify the code

Assignment for the week will be to get hello world deployed for 4 different frameworks / libraries. Then you and a partner pick a framework and try to port your card to that framework. Group 1 does 1&2, group 2 does 3&4 and so on. So hash out with your pair of pairs who's doing which but among the 4 of you there should end up being 1 person doing each of these:
- angular
- vueJs
- react
- svelte

Next week, we'll review these and look for similarities and differences in implementation between them. To clarify my expectations:
- you DEPLOY hello world boilerplate for all 4
- You answer the questions below relative to that
- You select 1 framework and try to port your card to it. Focus on porting the HTML and CSS at this time
  - bonus: .5 port the JS so that it still works in your framework using the framework ways of getting this code to register using its component architecture
- You push this code up and hopefully vercel builds your demo with your card out on the web

## Submission via GIST then turned into Canvas
- links to your git repos for each hello world as deployed on vercel
- link to your repo that has your attempt to port your card to the framework you had assigned
- Answers to these questions:
- What are the similarities and what are the differences in repo structure? name 5 of each.
- Look at the syntax of a js/template file from each. What is vanilla and what seems to be library specific?
- Review package.json - What is common amongst them, what's different? What commands can we run? Try to run all the different commands in the repo for each project.
- Rank order these for readability / ease of your understanding and give justification as to why one is easier than the other


## Week 5: More JS Ecosystem shhhhhtuff
- Tooling, how people work in industry, different projects (high level)
- state of the industry, the node_modules folder is a blackhole

## Week 6-8: Web components (project 1)
- Why web components, understanding how Wcs interplay with other libraries, who’s using them and why
- OpenWC specifically running through the cli and making a new project to collaborate on GitHub. Reading the lit docs
- CSS in ShadowRoot, prop drilling, leveraging existing packages
- Mid-term
- **Thursday prior to spring break there is no class**

## Week 9: Spring Break

## Week 10-11: Micro frontends (project 2)
- Publishing to NPM
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
