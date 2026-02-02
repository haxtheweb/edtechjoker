# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Tutoring support on campus
TAs have office hours and we use time in class for help too, but https://ist.psu.edu/learning/tutoring/university-park is also available.

# Past weeks
- [Week 1](sp26/week-1-2.md)
- [Week 2](sp26/week-1-2.md)
- [Week 3](sp26/week-3.md)

# HAX Club meeting Monday night 7pm ECoRE Bldg (West 1) room 103
- come to a code sprint, work on things for ~2 hours
- get credit for the coding in the world aspect to the course
- learn how to get more involved in the HAX community
- bonus 2.5% in the class for making contributions and participating with building in HAX Club (up to 5% bonus)

# Week 4 - The one with real development
This week we'll start looking at how our code fits (or doesn't) into the modern JS ecosystem. What we've made so far is old school, vanilla, simple. Now we'll start looking into how moderen JS is shipped and worked with as well as provide review and revision to the work that's been done.

## 4.1
## POLICY NOTE
- TAs are giving feedback on correct and incorrectness
- If you lose points it is typically for lacking things asked for / meeting all requirements
- Incentivized office hours: go to office hours for help when you are stuck to remove late penalty (this is the week of only, not waiting 4 weeks and then getting help)

## Code crit from HW3 30 min

### Examples for critique
- https://codepen.io/interested-learner/pen/vEKJqYG
- https://codepen.io/Abhi-PSU/pen/dPXmxPL
- https://codepen.io/mcenci24/pen/xbOpppZ?editors=1010
- https://codepen.io/DylDay/pen/bNeaaoK?editors=1010

## Remediations and enhancements to look for
- Here's some general things to apply during activity one
1. make sure that things like `class="whatever"` is NOT `class = "whatever"` spaces in attributes are not allowed
2. if your testing for a style "state" like for example `if (thing.style.display == "block") { } ` change this to test if there's a class OR attribute. If the class exists `if (thing.classList.contains('namedclass')) {` then toggle the class on and off
3. ensure you comment your functions to understand what they do. Generally I comment my own comment which each "novel" block of code; as in thing that I had to think about / figure out or that might be odd looking from my typical conventions (as you are early on, this should be very often as a result)
4. ENSURE ALL TAGS THAT OPEN, CLOSE WHERE YOU EXPECT THEM TO
5. remove reliance on `id="whatever"` and then `querySelector("#whatever")` but ESPECIALLY `document.getElementById('whatever')` . Refactor these to be `.whatever` and `class="whatever"` and `querySelector('.whatever')` or suffer the wrath of component architecture (and a11y, and ridicule) moving forward!!
6. When using `@media` queries, verify you are using to use the same selector as you are doing in the rest of the document

### Activity: Let's get our bearrings and peak behind how something is built
- https://hax.psu.edu/ - Open it up and let's look around a modern repo structure
- https://github.com/haxtheweb/hax-psu - Activity; do all the following, following along while I do it. If you are stuck, ask the person next to you / around you. If they don't know, ask for a LA / me.
  - Fork this code on the github website
  - Use github desktop / commandline to pull a copy of the code down locally
  - I tend to store ALL development work on my file system like
  -  `~/Documents/git/{USERNAME}/{REPONAME}` - don't care what structure you use but make it logical / some place you know where to access it
  - Open VS Code; File menu -> Open Folder.. and select the repo you pulled down
  - Let's get some plugins: _Click Extensions_ (building blocks on the left menu) then search for `lit-html` and `lit-plugin` and `HTML CSS Support`
  - Open a terminal (VS Code -> Terminal menu -> New terminal)
    - personally I usually have terminal open outside of VS Code but it's typically a preference thing as opposed to required. Some windows environments can be goofy and require this hence mentioning here
  - type `pwd` this should list where you are currently in the file system
  - type `node -v` to verify that it has access to node (it should if you installed it previously from week 1)
  - type `ls -las` this should list everything in the folder (`dir` is a simplified view of this info)
  - type `npm install` as long as you see a `package.json` in the previous step - **This is how you interface with ALL MODERN JAVASCRIPT CODE REPOS**
  - type `npm run` which will list the commands you can run. _Almost every project_ responds to `npm start` or `npm run start`
  - This should open up a browser window. Set your display up so these are side by side
- Let's start digging through the code
- I'll step through the code and what I've been building recently, applying concepts from class but at higher scales
- if you nail the little stuff, the syntax, the small structures, minimizing CSS and HTML and JS written to complete tasks, then thinking in bigger and bigger structures is more natural. It's a big pattern.

# BETWEEN CLASS WATCH/READ THE LECTURE ON JS ECOSYSTEMS AND HOW THEY WORK
- JS Ecosystems / landscape: https://docs.google.com/presentation/d/1XC6OuYVe3fOdGmpZ_Q9aGXOPJKjj5VbfR3vMvCUJBdk/edit?usp=sharing
- RECORDED LECTURE: https://www.youtube.com/watch?v=VyWw2JFnCRA

### Additional help
If you need additional help after watching that, here's some next steps
- Run through JS fundamentals here https://www.w3schools.com/js/default.asp
- CSS fundamentals here https://www.w3schools.com/css/default.asp
- HTML fundamentals here https://www.w3schools.com/html/default.asp
- Go to TA's office hours, there's a ton of them, that's what they are there for!
- DM me or the TA with **specific questions** you have have how to do **specific things** and we are happy to help

# 4.2
Now that we have some workflow and process down, let's start looking at a web component and building from juuust above nothing
- Quick deck: What is web components? https://docs.google.com/presentation/d/1cvM-4v745oQWcpX4M0ytFLQd_eIyaOJgUEgs4V6UFk0/edit?usp=sharing

## Code by numbers (follow along, answering questions as we go)
- Take this boilerplate: https://github.com/btopro/polaris-chip make a template for yourself
- get this code cloned to your computer
- follow along in class
- Currently this element supports a "title". The title property allows usage like follows: `<polaris-chip title="Cool"></polaris-chip>`
- This will render the title with some styling. We need to expand this support linking
- What properties could we add to make this support links?
- What data type should this be?
- What are the steps required to do this? What needs accounted for / changed in code.
- If we wanted to do an 'active' state that is for 'hover', focus and to draw attention by default, how could we do that?

### Activity
- Pod activity. Look at your cards in your pod. What properties could you add to make your card flexible? What parts of your HTML / CSS should be static, and what parts should users be able to enter as a property in order to change via a variable?
- When I say flexible I mean, how could we allow someone to leverage `<my-card></my-card>` in a similar way to polaris-chip in order to produce your cards each time. If you have a poke-card. Then something like `<poke-card source="https://address.com/image" name="Charmander"></poke-card>`
- Are there any 'active' or visual 'state' driven capabilities to your card?
- Are there any areas that could be HTML in nature? If so, research what a `<slot>` tag is and how we can use it for the description (for example).

## 4.3 in-class / Homework

Now it's your turn:

- Apply your CSS / HTML of a card to the my-card element
- Ignore the card modifying JS for now; we're just trying to get our card visually there
- Try to add your properties into the element so that you can change the variables to make instances of your card
  - **You should have at least 2-4 properties that I can think of at a glance**
- Create 5 implementations of this in the demo / index.html area (meaning 5 different implementations of `<my-card>` using attributes)
- Get your code back up on github (meaning you commit it locally after making changes, then `git push` to get it back on github
- Run through the lit tutorial - https://lit.dev/tutorials/intro-to-lit/ to help **MAKE SURE IT IS USING JS AND NOT TS**
- Go through this cheat sheet and make sure you understand the examples -- https://lit.dev/articles/lit-cheat-sheet/ -- **MAKE SURE IT IS USING JS AND NOT TS**

## Submission
- HAX.psu post with the following:
- link(s) to your github repo that you made
- Answer the following:
- When doing the tutorial, what did you get stuck on?
  - In reading through the deck / tutorials / googling / "lit cheat sheet", what's not making sense?
  - Same, but what DOES make sense? Is this a superior approach to coding in the 'global scope' ala code pen, or does this scoping make it more complicated?
    - If more compplicated, what makes it harder?
    - If superior approach, why did you feel this was easier than the code pen based global way?
