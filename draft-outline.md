# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Past weeks
- [Week 1 & 2 - git / intro](sp24/week1-2.md)
- [Week 3 - card remediation](sp24/week3.md)

# Active Schedule

# Week 4 - The one with real development
This week we'll start looking at how our code fits (or doesn't) into the modern JS ecosystem. What we've made so far is old school, vanilla, simple. Now we'll start looking into how moderen JS is shipped and worked with as well as provide review and revision to the work that's been done.

## Tues
## POLICY NOTE
- TAs are giving feedback on correct and incorrectness
- If you lose points it is typically for lacking things asked for / meeting all requirements
- Incentivized office hours: office hours on Mondays and if a student submits on time and comes to office hours on Monday because they feel their assignment is lacking and resubmits after meeting with one of us, we won't take any late points off.

## Code crit from HW3 30 min

- Mood check; go to Teams and the Genereal channel. How did you feel about Week 3 and where do you feel like you most fit in w/ these emojis?
- https://teams.microsoft.com/l/message/19:OEYEyfw79yA_XRt49QwsN2BgCWwp68qijDL6mjJiAyI1@thread.tacv2/1706628650360?tenantId=7cf48d45-3ddb-4389-a9c1-c115526eb52e&groupId=15d18d53-9c62-4007-bc3f-89fcdb907446&parentMessageId=1706628650360&teamName=IST%20256%20SP24&channelName=General&createdTime=1706628650360&allowXTenantAccess=false

- looking through some examples that were submitted for critique:
- https://codepen.io/Alan-Manuel-the-sasster/pen/rNRwKwW
- https://codepen.io/emirahanna/pen/rNRpygq
- https://codepen.io/RileySpitznas/pen/NWJgbKm
- https://codepen.io/Kermitopalis/pen/qBvpRjX
- https://codepen.io/ssambender/pen/eYXRKPW

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
- https://github.com/elmsln/hax-psu - Activity; do all the following, following along while I do it. If you are stuck, ask the person next to you / around you. If they don't know, ask for a LA / me.
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
- There's a bug on mobile, let's setup the optimal environment to diagnose and resolve it: https://github.com/elmsln/issues/issues/1903
- if you nail the little stuff, the syntax, the small structures, minimizing CSS and HTML and JS written to complete tasks, then thinking in bigger and bigger structures is more natural. It's a big pattern.

### Additional help
If you need additional help after watching that, here's some next steps
- Run through JS fundamentals here https://www.w3schools.com/js/default.asp
- CSS fundamentals here https://www.w3schools.com/css/default.asp
- HTML fundamentals here https://www.w3schools.com/html/default.asp
- Go to TA's office hours, there's a ton of them, that's what they are there for!
- DM me or the TA with **specific questions** you have have how to do **specific things** and we are happy to help


# Thursday (we'll see how Tues goes and adjust from there)
## Code by numbers
- We'll start looking into open WC
- We'll take a boilerplate repo, use it as a template and try to get it deployed on vercel

---

# TOPICS BELOW THIS LINE STILL IN FLUX SO WORK AHEAD AT YOUR OWN PERRIL

---

- We'll start to implement a card as I am writing it
- It'll be your turn to lead off into home work doing research, tutorials, but also attempting to get your card to build on vercel like we did with mine in class

## Activity / leading into homework

## Homework
- Read through this slide deck
- Do these tutorials on lit
- HAX.psu blog post that is largely links and answering some questions:
  - Link to the activity we did in class Tuesday on the hax-psu repo fork
  - Link to the activity we did in class Thursday making our own card from a boilerplate repo
  - Link to your attempt to rescope your card to work as a web component
- Answer these questions
  - When doing the tutorials, which (if any) did you get stuck on?
  - In reading through the deck / tutorials / googling, what's not making sense?
  - Same, but what DOES make sense? Is this a superior approach to coding in the 'global scope' ala code pen, or does this scoping make it more complicated?
    - If more compplicated, what makes it harder?
    - If superior approach, why did you feel this was easier than the code pen based global way?

# Week 5 - More with Web components
This week we start into thinking like an HTML spec author. This is deep thought work for sure and we are lucky to be building on abstractions, but let's start the process that they went through to think about the attribute and design considerations of the HTML primative tags (p, img, a, table, etc) and use that process to build our own card so that it is reusable like the original tags but more robust!
## Tues
- Let's review issues people had in doing that
- We have a component, but is it reusable? Can we actually use it outside of the demo we're on right now?

### Activity - 10 minutes
- With your pod, review your cards
- If anyone had issues getting their card to work locally, help.
- AFter that write up the following:
- What about the card COULD be made reusable if we had the ability to use variables?
- What about the data of those things? Are there data types or ways of thinking about that input that help inform the name or how we could structure our properties?
- What about the design could be made variable so people could make it look like their own card? Are there ways of using variables to modify the design?

### Class discussion
- What can be made variable, what did people come up with. What is the "data type" of these variables? Let's agree upon how we want this card to work
- Let's wire properties up to make our asset reusable


# Week 5-9 - The ones with some topics about stuff
- Lit Fundamentals
- Printing multiple items from a web service


# Week 10 - sPrInG bReAk
# Week 11 - The one where society doesn't shut down completely during spring break
## Tues - The one with the GuEsT LeCtUrE
- EdTechJoker talking about what Project EdTechJoker is and finding your purpose in this world

# Week 12-16 - Project 1 and 2 work
- Code hard, Kick butt and chew bubble gum*
  - *We're all out of bubble gum

# Week 17 - Final Destination
- no items, 5 stock, no mr game n watch
- Final project Due Wed of Finals week
