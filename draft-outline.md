# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.
- [Resource for reviewing concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4)
- [Common issues, run through this before talking to me plz](common-issues.md)

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.
- [Week 1](fa-23/week-1/README.md)
- [Week 2](fa-23/week-2/README.md)
- [Week 3](fa-23/week-3/README.md)

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


# EVERYTHING BELOW THIS LINE IS SUBJECT TO CHANGE BASED ON COURSE PROGRESS
~~~~~~

# Project requirements
Project 1 is well established. Based on our progress and class skill I throttle how the projects beyond that go as far as number, scope, and focus.
- Project 1 - coming soon
- Project 2 - coming soon
- Project 3 - coming soon

# Week 5: More JS Ecosystem shhhhhtuff
- This is not react just loading into the index.html :) https://github.com/M18ab/react-app/blob/main/public/index.html
- Many of you didn't get it working
- This was rough... by design.
- Now, we'll use working examples from people who did, to learn about all 3 and slow down (slightly)

## Common issues / general feedback
- "error when running `npm start`" - npm command must be run from the project root. Clone the project, you have to be in that directory to run commands
- VueJS deployment on vercel needed to be the VueJS + Vite; this came up in class.
- Ensure you mark your repos public on github. Private repos we can't see and can't be graded. Verify your work is public so it can be reviewed
- "Should I run commands from inside VSCode or terminal window?" USUALLY it doesn't matter, but if you have an issue running a command from inside VSCode, make sure you attempt in another window just to rule that out

## Activity 1: fork / play with classmates working examples
For each of these, let's go through and do this together. With each of these I want you to do the following..
- Go to the example, fork the example to your own github
- clone it to your machine
- `npm install`
- `npm start`
- `code .` or just open VScode
- As I go through, follow along so you can understand the structure

If we cover yours, come get a (completely useful, great, awesome.. sticker)
- top React example: https://github.com/Jps709/create-react-app
- top Angular example: https://github.com/ashnaabhide/angular
- top VueJS example: https://github.com/Pandaalifter/card-chad

## Activity 2 / Part 1 of homework
Now we should have some fundamental understanding of what's where, you have a working copy of a classmate's card for each one.
Now knowing this..
- Hollow out their portions of this so that it's your card CSS and HTML
- attempt to get your JS in there as well on the Vue One
- Push all 3 back to their respective github locations
- Ensure the demo rebuilds on vercel / it's wired up to vercel (you can add projects in after the fact via vercel)

## Thursday
### Developer workflow tips
- Github: Setup SSH keys https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh
- Github: **FORK** means you have a copy of someone's codebase on your github account
- Github / Your machine: **CLONE** means you are bringing that code onto your personal computer. Always get repos either via the **SSH** option OR **Github Desktop**
- **Github Desktop** in the GUI, select your project (top left, or create new, or add from Github). Then Hit **Open in VSCode**
- **VSCode** your code will be open on the left **for your local copy**. Go to the toolbar for VSCode and hit "Terminal" and new Terminal if one is not already open
- **this opens the folder tree / command line to the same spot VSCode is looking** . Here is where you type `npm install` and when that finished, `npm start` or `npm run dev` or whatever the command is you are looking to run

### Terminal basics
everything you do in a GUI is just a button mapped to running a command in the CLI. The GUIs differ between Linux, Mac, Windows, but the commands are very similar in most instances or exactly the same.

- you are in a folder; that folder is your code
- the "directory tree" / structure goes all the way back to the root of your hard drive `C:\` or `/`
- `cd` is for CHANGE DIRECTORY to go up it's `cd foldername` to go down it's `cd ../`
- `ls -las` will give you a LISTING of the files in the current directory
- `cwd` CURRENT WORKING DIRECTORY will print out where you currently are in case you forget
- `mkdir` MAKES A DIRECTORY
- `code FILENAME` SHOULD open the file in VSCode (could vary based on OS)
- `open .` will work to allow you to open a finder / folder in your GUI (could vary based on OS configuration)
- `npm` a program that runs node, package, manager commands (`yarn` is a different program but runs the same commands)
- `git add -A` - add everything to git bc we want to track these changes (this is also visible on the left side of VSCode)
- `git commit -m "the message"` commits the changes (this is also visible on the left side of VSCode)
- `rm` is for REMOVE so you can delete things via CLI. you delete it, it's gone, unless you bring it back via version control

## Short lecture for context of where we go next
- Now that we've got the basis for workflow, location, building demos to present them.. it's time to move into the world beyond them
- We have JS, where the web started, then we had jQuery to prop it up, then we had frameworks to make component like things
- Now, it's time for where all development is heading and where you can best invest your time learning and building
- I changed my entire career focus, outlook, and professional affiliations based on this technology standard..
- Why web components, understanding how Wcs interplay with other libraries, who’s using them and why
- Short lecture: https://docs.google.com/presentation/d/1heprQE0TXrKgc1T1ISnvlpUREREFIAehArEncg_I9-o/edit?usp=sharing

## Homework
Two parts;

### Part 1 Links to all 3 repos with your card working in Angular, React, Vue
- easy if your following along in class Tues. If your struggling here DM / ask after lecture / office hours
- Follow the steps from above to pull your code in locally

### Part 2
- Run through ALL Lit.dev tutorials on "Build" and "Build" found here https://lit.dev/tutorials/ so that you understand how we'll be building going forward
- Create a new (empty) github repo with a name for your card. Let's call it `my-card` or `cyber-chad` or some name for your card but make sure it has a `-` and is all lowercase; clone it locally from github so you have a copy of a blank repo on your computer with which to start working
- Run the command found here https://open-wc.org/guides/ in order to create a new element called `my-card`.
  - create a new "application" called the name of your repo (my-card, cyber-chad, etc)
  - Note: in the options via CLI, if you see a `O` circle this is a checkbox. move between them using the arrow keys and hit spacebar to select each option
  - When it asks you to write files to disk, pick yes. When it asks to install via npm / yarn, install via npm.
  - Also note: We will be using open-wc the rest of the semester in some capacity so best to familiarize yourself with the community docs
- `npm start` and you'll be able to develop using this locally / see a live reloading environment that has a spinning svg
- Take this boilerplate repo, looking in `src` for source and `index.html` for the "demo" page that's launched **and port your CSS / HTML to this approach**
  - If that was easy, then take a stab at doing this w/ your JS events in your buttons, if not then just getting code in place is fine.
  - `document.querySelector` is global but in a web component, `this.shadowRoot.querySelector` is for querying JUST inside your component
- Push results back up to github (make sure it's a public repo)

## LINT DISABLE
if you get an error in your `open-wc` code when you go to commit to github. Go into `package.json` and delete this block from it
```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
```
This is ensuring coding conventions match a certain specification. The feedback is useful usually but some times can be limiting to newbees.

## Submission
- Gist linked to Canvas
- Links to all 3 github repos of the port of your card hopefully looking correct in React, Angular, Vue+Vite
- Link to your github repo for making a card in `open-wc`
- Answers to these questions
- 5 similarities between the open-wc repo structure and your react / vue / angular structures
- Was this easier, harder, or the same difficulty as exploring the frameworks?
- Any concept, structure, terminology, etc that your struggling with and need additional guidance at the end of this homework / 1st 5 weeks (1/3 of course)
- Try to hook this up to vercel (code up on github, then add the project via vercel.com . You'll need to change "output" to `dist` in your settings). If you attempt this and it doesn't work don't worry about it but if it does work, add that link into your gist so we can see it built
![vercel GUI for settings](https://user-images.githubusercontent.com/329735/217584610-449ee034-ff60-49c5-8c8d-41f6283aa512.png)

## Final notes on this week
Try your best, ask questions. We're going to go from complex / big idea / world view sorta stuff back into details. The frameworks were mostly so that we have an idea of where the world used to be. Now we'll start drilling into web components and JS within this context as it really is the future of the web (and the future is here now).


# Week 6

# Week 7 Mid-term exam 10%
## Tues
- Anything from slides is fair game
- Anything from readings is fair game
- Anything produced in class or part of class is fair game
- The internet exists; it will also be fair game
- Google also exists, so it will also be fair game (for you)
- AI exists. But good luck with that. See how it works out.
- This will take place during the start of class and is relatively short

## Thursday
- in class working time on finishing up project 1

# Project 1 is due end of this week
- Project 1 is due at the end of this week
- Use this time to catch up / clean up past assignments you may have missed and refine your project 1 submission to maximize points
- This will be graded with more scrutiny than things leading up to it
- The dropbox for this is on Canvas and is ultimately a repo you are turning in
- [Project 1 Requirements](https://github.com/elmsln/edtechjoker/blob/master/sp-23/projects/project-1.md)


# Week 8

# Week 9

# Week 10

# Week 11

# Week 12


## Week 13 - Thanksgiving

## Week 14-16

## Week 17: Final project due Wed of Finals week
- Optional Class held Tuesday of finals week for last minute office hours

~~~~~~
