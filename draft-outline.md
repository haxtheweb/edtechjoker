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

# Thursday

## Remediation
Me making the card for all your ghosts out there
- video: https://youtu.be/5OXwR-aw0UU
- code: https://codepen.io/btopro/pen/zYLyZWE

About 1/2 the class expressed a need for additional feedback / help. I've produced a video of how I would have approached the assignment end to end. This way you can review and work to enhance your card relative to this. After watching this video and trying to apply improvements to your card your options are...
- Run through JS fundamentals here https://www.w3schools.com/js/default.asp
- CSS fundamentals here https://www.w3schools.com/css/default.asp
- HTML fundamentals here https://www.w3schools.com/html/default.asp
- Go to TA's office hours (Thurs & Fri this week)
- DM me or the TA with **specific questions** you have have how to do **specific things**

## Activity 2 (quickly)
- working together (someone "drives" and someone is co-pilot) combine your code into 1 pen so that both work (copy and paste both into 1 repo)
- all your JS functions that add and remove cards should work for their respective items
- Post to the thread on discord what it looks like so we can look. If they break, that's not a concern, I want you to smash them together via all code (css, html, and JS) in 1 codepen

## Task while I run through the deck
- Make sure you have a Github and Vercel.com account
- Link these together
- Install vercel on your machine https://vercel.com/docs/cli using yarn or npm

## Lecture to set some context
- Modern JS Landscape - https://docs.google.com/presentation/d/1oUqfiXL5L5XvErox5HEdnk-xA7xSCBJEYhZ9k2p1Gj8/edit?usp=sharing
- Tooling, how people work in industry, different projects (high level)
- state of the industry, the node_modules folder is a blackhole

## Activity 3 / leading into home work
- Hello world a palooza. Using vercel, create boilerplates for
  - React
  - Angular
  - VueJS
  - Svelte
- Pull these down to your local machine (via git clone)
- install them (npm install or yarn install)
- "run" them. usually with `yarn start` or `npm run start`
- "build" them. usually with `yarn run build` or `npm run build`
- Open in VSCode to review / modify the code

Assignment for the week will be to get hello world deployed for 4 different frameworks / libraries. In order to have a discussion with others who are working on similar things, each ROW in class will be assigned a different framework to try their hand at.

- Row 1 (left side as you enter) : Angular
- Row 2 (middle) : VueJS
- Row 3 (right): React

Next week, we'll review these and look for similarities and differences in implementation between them. To clarify my expectations:
- Watch my video to ensure you've got the baseline of all the things down
- Implement those things while watching in your own card to clean it up so you get better grades on week 3 (we are in 4...)
- you **DEPLOY** hello world boilerplate for all 4 frameworks listed above by using Vercel's GUI
- You answer the questions below relative to that process when you pull the code down locally / review it on github (since its wired to your github)
- You try to implement your card **after cleaning it up from watching my video** in the framework based on your row your sitting in. You do this by pulling the code locally to your machine and working on it in VSCode / local development via `npm install` / `npm start`. **Focus on porting the HTML and CSS at this time**
  - If you want to take a stab at it, attempt to port the JS so that it still works in your framework using the framework ways of getting this code to register using its component architecture. We will be getting into that in the near future as an assignment so this can get you ahead if you find the 1st part easy. The cleaner the code when merging your projects together, the easier this is.
- You push this code up and vercel builds your demo with your card out on the web (if it doesn't, explore their website as to what went wrong / what the error messages are)

## Submission via GIST then turned into Canvas
- links to your github repos for each hello world as deployed on vercel (click some UI buttons, generate github links, this should be easy)
- link to your repo that has your attempt to port your card to the framework you had assigned (where the bulk of work happens)
- Provide answers to these questions:
  - What are the similarities and what are the differences in repo structure? Find 5 similarities and 1 difference between each of the 4.
  - Look at the syntax of a js/template file from each. What is vanilla and what seems to be library specific?
  - Review package.json - What is common amongst them, what's different? What commands can we run? Try to run all the different commands in the repo for each project.
  - Rank order these for readability / ease of your understanding and give a brief justification as to why you thought 1 was the easiest and 4 was the hardest to understand (or that you didn't understand!)
- turn in a link to your gist that has the above info in canvas

### Final note on Week 4
- We'll keep iterating over this
- I am not keep tabs on if you watch my video, however if your code has issues it will be penalized as opposed to "hey try" feedback from before. The video is intended to cut through a lot of misconceptions.
- This is a **PROGRAMMING FOR THE WEB** course. Frameworks are a step toward actual programming by my definition which is that you can build real applications
- No one is able to build a "real" application using the stock methods that we have attempted in the first few weeks here
- I said this course would be confusing. The industry is confusing. You have to make meaning, try, fail, iterate, succeed and make your own meaning. You got this.

> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
# EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE

## Week 5: More JS Ecosystem shhhhhtuff
- More detail and exploring code examples based on what everyone wrote

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
