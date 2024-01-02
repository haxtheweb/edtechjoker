# Week 4:  Review, revision and intro to JS ecosystems

This week we'll start looking at how our code fits (or doesn't) into the modern JS ecosystem. What we've made so far is old school, vanilla, simple. Now we'll start looking into how moderen JS is shipped and worked with as well as provide review and revision to the work that's been done.

## Tues
## POLICY NOTE
- TAs are giving feedback on correct and incorrectness
- If you lose points it is typically for lacking things asked for
- Adding those things back in and then notifying them so they can verify, you can get those points back
- I care more about you attempting the material as designed as opposed to penalizing because you overlooked something

## Code crit from HW3 30 min

- Mood check; go to Teams and the Genereal channel. How did you feel about Week 3 and where do you feel like you most fit in w/ these emojis?
- https://teams.microsoft.com/l/message/19:FOtUIesLG0PSet9JzAJGXxJgPd4Csey9Z7EsljuW1Bk1@thread.tacv2/1694435743196?tenantId=7cf48d45-3ddb-4389-a9c1-c115526eb52e&groupId=23eac6d1-1d9b-4cc7-b137-c674591c40e6&parentMessageId=1694435743196&teamName=IST%20256%20back%20channel&channelName=General&createdTime=1694435743196&allowXTenantAccess=false
  - ghost - aahhhh! totally lost I scerd and lost!!!!
  - headbang - taking awhile but I'm getting it
   - pizza - Not bad, getting some things quick some things slow 
   - lion - Slaying it. this is easy. full speed ahead

- The "alterenative non-JS approach" to collapsed areas -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details

- looking through some examples that were submitted for critique:
- https://codepen.io/suaveboy1/pen/ExGWYBj
- https://codepen.io/miajocz/pen/xxmdLmz
- https://codepen.io/christianwasta/pen/GRPrMmm
- https://codepen.io/Anatoli_B/pen/eYbzRvy

## Remediations and enhancements to look for
- Here's some general things to apply during activity one
1. make sure that things like `class="whatever"` is NOT `class = "whatever"` spaces in attributes are not allowed
2. if your testing for a style "state" like for example `if (thing.style.display == "block") { } ` change this to test if there's a class OR attribute. If the class exists `if (thing.classList.contains('namedclass')) {` then toggle the class on and off
3. ensure you comment your functions to understand what they do. Generally I comment my own comment which each "novel" block of code; as in thing that I had to think about / figure out or that might be odd looking from my typical conventions (as you are early on, this should be very often as a result)
4. make sure when you duplicate the card it doesn't duplicate the buttons as well (bc they won't work as the events are not applied to them)
5. When you hit duplicate, make sure it's able to make more than 1 (infinite duplication and delete)
6. make sure when you delete your last card it doesn't just hide it `yourCardTarget.remove()` will delete the node so delete it
7. make sure that if there's only 1 card left, t**hat you DON'T DELETE IT OR IT BREAKS YOUR APPLICATION**
8. The "HTML only" way of doing details display (which is highly accessible) -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details - apply this for your details toggling
9. ENSURE ALL TAGS THAT OPEN, CLOSE WHERE YOU EXPECT THEM TO
10. remove reliance on `id="whatever"` and then `querySelector("#whatever")` but ESPECIALLY `document.getElementById('whatever')` . Refactor these to be `.whatever` and `class="whatever"` and `querySelector('.whatever')` or suffer the wrath of component architecture (and a11y, and ridicule) moving forward!!
11. When using `@media` queries, verify you are using to use the same selector as you are doing in the rest of the document

## Activity 1 ~30 min
- Pass your work to the left of you amongst your pod
- Share a link to the your repository 
- **Fork their repo** and provide `//` comments for each block of JS explaining what it does, ask if your not sure
- Provide recommendations based on seeing if they have any of the required remediations above
- If they are missing the functionality from the homework, suggest ways they can implement that by using your own code
- If you are missing anything from the requirements, ask them for how they solved it. If you both didn't get it, ask your other partners
- If there's anything you don't understand as to how they did it, ask them to explain it
- If they don't get it, ask other members of your pod.
- If there's anything you STILL don't get after that or need clarification, ask a TA or me. I might ask you to DM a link to your work and we'll discuss as a class / I'll answer for everyone if it's a common issue

### Poking around at a real site to see the world we're moving to
We're not going to keep working in codepen much longer, it's great training wheels to this point though, so let's look ahead at the world we will pursue:
- https://hax-psu.vercel.app/ this is a work in progress revision of https://hax.psu.edu/ - Open it up and let's look around a modern repo structure
- https://github.com/elmsln/hax-psu
- I'll step through the code and what I've been building recently, applying concepts from class but at higher scales
- Toggle the wrong (but interesting way) -- https://codepen.io/Anatoli_B/pen/eYbzRvy
- Toggle the right, and nice looking way (on the site in the FAQ section)
- if you nail the little stuff, the syntax, the small structures, minimizing CSS and HTML and JS written to complete tasks, then thinking in bigger and bigger structures is more natural. It's a big pattern.

## Between class / Wed remediation
- ensure you finish up all remediations above / clean up that we weree doing in class with partner / pod
Regardless of how you are feeling, watch how I would build the card 'app' and check out the code. This should help finalize your remediations.
- video: https://youtu.be/5OXwR-aw0UU
- code: https://codepen.io/btopro/pen/zYLyZWE

### Additional help
If you need additional help after watching that, here's some next steps
- Run through JS fundamentals here https://www.w3schools.com/js/default.asp
- CSS fundamentals here https://www.w3schools.com/css/default.asp
- HTML fundamentals here https://www.w3schools.com/html/default.asp
- Go to TA's office hours, there's a ton of them, that's what they are there for!
- DM me or the TA with **specific questions** you have have how to do **specific things** and we are happy to help

## Thursday

## Activity 2 - quickly - 5 min
- working together (someone "drives" and someone is co-pilot, 3  in 1, 2 in the other) combine your code into 1 pen so that both work (copy and paste both into 1 repo)
- all your JS functions that add and remove cards should work for their respective items
- Post to the teams channel for your team and I'll throw some up for discussion. If they break, that's not a concern, I want you to smash them together via all code (css, html, and JS) in 1 codepen so we can discuss WHY they worked or didn't work!

## Your task while I speed run through the deck
- Make sure you have a Github and Vercel.com account
- Link these together
- Install vercel on your machine https://vercel.com/docs/cli using yarn or npm

## Lecture to set some context
- Modern JS Landscape - https://docs.google.com/presentation/d/1_jTrucLtXlE_McXXrzCTkxst6jhHOcaNHnFh_KTZK8o/edit?usp=sharing
- Tooling, how people work in industry, different projects (high level)
- state of the industry, the node_modules folder is a blackhole

## Activity 3 / leading into homework for week 4
- Hello world a palooza. Using vercel, create boilerplates for
  - React
  - Angular
  - VueJS -- Use the template "Vite - Vue" for this
  - Svelte
- Pull these down to your local machine (via git clone)
- install them (npm install or yarn install)
- "run" them. usually with `yarn start` or `npm run start`
- "build" them. usually with `yarn run build` or `npm run build`
- Open in VSCode to review / modify the code

Assignment for the week will be to get hello world deployed for 4 different frameworks / libraries. Pick 1 of these to try and port your card to but you should have 4 repos and 4 vercel projects building Hello world, 1 that includes your card.

Next week, we'll review these and look for similarities and differences in implementation between them. To clarify my expectations:
- Watch my video to ensure you've got the baseline of all the things down
- Implement those things while watching in your own card to clean it up so you get better grades on week 3 (we are in 4...)
- you **DEPLOY** hello world boilerplates for the 4 projects above ( using the GUI on vercel)
- You answer the questions below relative to that process when you pull the code down locally / review it on github (since its wired to your github)
- You try to implement your card **after cleaning it up from watching my video** in 1 framework. Each person in your pod should do a different one (2 people will do the same one in pods of 5, thats fine). You do this by pulling the code locally to your machine and working on it in VSCode / local development via `npm install` / `npm start`. **Focus on porting the HTML and CSS at this time**
  - If you want to take a stab at it, attempt to port the JS so that it still works in your framework using the framework ways of getting this code to register using its component architecture. We will be getting into that in the near future as an assignment so this can get you ahead if you find the 1st part easy. The cleaner the code when merging your projects together, the easier this is, because that implies the code is "scoped".
- You push this code up and vercel builds your demo with your card out on the web (if it doesn't, explore their website as to what went wrong / what the error messages are)

## Submission via GIST then turned into Canvas
- links to your github repos for each hello world as deployed on vercel (click some UI buttons, generate github links, this should be easy)
- link to your repo that has your attempt to port your card to the framework you had assigned (where the bulk of work happens)
- Provide answers to these questions:
  - What are the similarities and what are the differences in repo structure? Find 5 similarities and 1 difference between each of the 4.
  - Look at the syntax of a js/template file from each. Identify something vanilla in each and something library specific in each (8 total items here)?
  - Review package.json - What is common amongst them, what's different? What commands can we run? Try to run all the different commands in the repo for each project.
  - Rank order these for readability / ease of your understanding and give a brief justification as to why you thought 1 was the easiest and 4 was the hardest to understand (or that you didn't understand!)
- turn in a link to your gist that has the above info in canvas

### Final note on Week 4
- We'll keep iterating over this
- I am not keep tabs on if you watch my video, however if your code has issues it will be penalized as opposed to "hey try" feedback from before. The video is intended to cut through a lot of misconceptions.
- This is a **PROGRAMMING FOR THE WEB** course. Frameworks are a step toward actual programming by my definition which is that you can build real applications
- No one is able to build a "real" application using the stock methods that we have attempted in the first few weeks here
- I said this course would be confusing. The industry is confusing. You have to make meaning, try, fail, iterate, succeed and make your own meaning. You got this.
