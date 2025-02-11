# Week 4 - The one with real development
This week we'll start looking at how our code fits (or doesn't) into the modern JS ecosystem. What we've made so far is old school, vanilla, simple. Now we'll start looking into how moderen JS is shipped and worked with as well as provide review and revision to the work that's been done.

## Tues
## POLICY NOTE
- TAs are giving feedback on correct and incorrectness
- If you lose points it is typically for lacking things asked for / meeting all requirements
- Incentivized office hours: go to office hours for help when you are stuck to remove late penalty (this is the week of only, not waiting 4 weeks and then getting help)

## Code crit from HW3 30 min

- Mood check; go to Teams and the Genereal channel. How did you feel about Week 3 and where do you feel like you most fit in w/ these emojis?

### Examples for critique
- https://codepen.io/dylanabke/pen/xbKmZjz
- https://codepen.io/ProdByBobo/pen/emOQobV
- https://codepen.io/Baaba-Aly-Ba/pen/LEPvgLm?editors=1010
- https://codepen.io/PedroJuanCA/pen/azoPNWx?editors=1010
- https://codepen.io/Tim-Lakatos/pen/ogvVWZQ?editors=1010

## Remediations and enhancements to look for
- Here's some general things to apply during activity one
1. make sure that things like `class="whatever"` is NOT `class = "whatever"` spaces in attributes are not allowed
2. if your testing for a style "state" like for example `if (thing.style.display == "block") { } ` change this to test if there's a class OR attribute. If the class exists `if (thing.classList.contains('namedclass')) {` then toggle the class on and off
3. ensure you comment your functions to understand what they do. Generally I comment my own comment which each "novel" block of code; as in thing that I had to think about / figure out or that might be odd looking from my typical conventions (as you are early on, this should be very often as a result)
4. ENSURE ALL TAGS THAT OPEN, CLOSE WHERE YOU EXPECT THEM TO
5. remove reliance on `id="whatever"` and then `querySelector("#whatever")` but ESPECIALLY `document.getElementById('whatever')` . Refactor these to be `.whatever` and `class="whatever"` and `querySelector('.whatever')` or suffer the wrath of component architecture (and a11y, and ridicule) moving forward!!
6. When using `@media` queries, verify you are using to use the same selector as you are doing in the rest of the document

## Slide deck for today
- JS Ecosystems / landscape: https://docs.google.com/presentation/d/1XC6OuYVe3fOdGmpZ_Q9aGXOPJKjj5VbfR3vMvCUJBdk/edit?usp=sharing

### Let's get our bearrings and peak behind how something is built
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

### Additional help
If you need additional help after watching that, here's some next steps
- Run through JS fundamentals here https://www.w3schools.com/js/default.asp
- CSS fundamentals here https://www.w3schools.com/css/default.asp
- HTML fundamentals here https://www.w3schools.com/html/default.asp
- Go to TA's office hours, there's a ton of them, that's what they are there for!
- DM me or the TA with **specific questions** you have have how to do **specific things** and we are happy to help


# Thursday
picking up from overlap in Tuesday. Let's start here
- type `npm run` which will list the commands you can run. _Almost every project_ responds to `npm start` or `npm run start`
  - This should open up a browser window. Set your display up so these are side by side
- Let's start digging through the code
- This is not currently meeting brand guideance. Let's update that so that we can push this out and match the brand
- if you nail the little stuff, the syntax, the small structures, minimizing CSS and HTML and JS written to complete tasks, then thinking in bigger and bigger structures is more natural. It's a big pattern.

Now that we have some workflow and process down, let's start looking at a web component and building from juuust above nothing
Quick deck: What is web components? https://docs.google.com/presentation/d/1cvM-4v745oQWcpX4M0ytFLQd_eIyaOJgUEgs4V6UFk0/edit?usp=sharing
## Code by numbers
- Take this boilerplate: https://github.com/btopro/polaris-chip make a template for yourself
- get this code cloned to your computer
- follow along in class

### Activity 10 min discussion
- What properties could we add to make this support links?
- What data type is this?
- What are the steps required to do this? What needs accounted for / changed in code.
- If we wanted to do an 'active' state that is for 'hover', focus and to draw attention by default, how could we do that?
- Post in Teams what properties you came up with?

### Activity 10 min
- Pod activity. Look at your cards in your pod. What properties could you add to make your card flexible?
- Are there any 'active' or visual 'state' driven capabilities to your card?
- Are there any areas that could be HTML in nature?

## Homework

Now it's your turn:

- Apply your CSS / HTML of a card to the my-card element
- Ignore the card modifying JS for now; we're just trying to get our card visually there
- Try to add your properties into the element so that you can change the variables to make instances of your card
  - You should have at least 2-4 properties that I can think of at a glance
- Create 5 implementations of this in the demo / index.html area (meaning 5 different implementations of `<my-card>` using attributes)
- Run through the lit tutorial - https://lit.dev/tutorials/intro-to-lit/ to help **MAKE SURE IT IS USING JS AND NOT TS**

### Bonus 2pts
Skipping ahead a week or so, try and get your JS wired up so that you can modify things on the card via your buttons. hint: buttons and js are in the demo as opposed to in your card. You'll need to rescope your calls and some other aspects to get the data to change, added, calculated how many there are, etc.

## Submission
- HAX.psu post with the following:
- link(s) to your github repo that you made
- Answer the following:
- When doing the tutorial, what did you get stuck on?
  - In reading through the deck / tutorials / googling, what's not making sense?
  - Same, but what DOES make sense? Is this a superior approach to coding in the 'global scope' ala code pen, or does this scoping make it more complicated?
    - If more compplicated, what makes it harder?
    - If superior approach, why did you feel this was easier than the code pen based global way?
