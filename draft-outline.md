# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.
- [week 1](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-1)


## Week 2 - Git / github practice and unpacking what's going on in an npm repo
## Tuesday

- Well this is curious... it appears Niagra Falls (where I am typing this from) got 18 inches of snow. So, today is a skill building / class logicistics kinda day. Thank you Erica for running class
- If you didn't notice, there were kinda vague instructions for this assignment. This is in part the way this class works but especially early on because it helps me understand your ability in navigating the unknown. I'm happy to see from power skimming submissions that everyone was able to get open-wc running across different OS versions. I also like that people included issues they ran into. This is really useful for other people trying to google and get going in the future.
### Intro
- Sorry I'm not there: https://youtu.be/WH2lMA01QHM

### Group formation activity
Fill this out so that we can form groups that have some balance - https://forms.gle/P4oTsAa8jvmetSTQ7
- The 3 roles mentioned. While not gaurenteed you'll get that "hat" to wear for projects, we'll try to group based on this criteria as well
- Front end dev - You'll be more in charge of the visual, UX, UI side of projects but also front end HTML/CSS/JS development
- Back end - You'll be responsible for the NodeJS / workflow and deployment aspects of the project. Also more on the git setup / management
- API / product owner - You'll be responsible for the development of the API and coordinating between front end and back end teams to ensure it happens
- If your not sure, not a big deal. This is GENERALLY to inform team creation and there will be mild difference in what's the focus of labs but everyone will get experience with each "hat".

### Partner activity
Note to the "peanut gallery" of past students -- If you get through this quickly (similar to an activity last year) please put yourself out there and help classmates who say they are stuck. In exchange for this service I'll say something nice about your past work in class. I know... really big paycheck there.

- If you requested a partner / agree to work with someone, then pair up with them for this. If you don't, then just pair up with someone near you for the purposes of this activity
- With a partner, I want you to do the following activity together:
  - If there is an odd number then a group can be 3 people
- Fork each other's repo, and then clone it locally to your machine
- `npm install` each other's repo to ensure that it installed
- run `npm start` to verify that you were able to spin up the other person's repo. Work through issues / try to get help if you can't get this going.
- Answer the following questions by writing `markdown` in a new file called `activity-2.md` file for the repo you cloned.
- Open package.json and look at the `scripts` `devDependencies` and `dependencies` sections. What do you think each section does here? What commands can you run?
- The "demo" for your hello-world element is found in `index.html`. Reading this code, what does it do and how does it work? What HTML is making your script load to show a demo? How is this file rendering HTML via JavaScript?
- The Definition of your element is in `your-element-name.js`, while the class JS object is found in `src/YourElementName.js`. Why do you think they put these in two separate files? What do you think each code block is doing in the class'ed object? Leaving comments either in the source via `//` or in your 
- Try to explain what `Lit` is providing to the repo. What's so special about what Lit is providing that I'd be so bold to say it changes how the web is developed, forever?
After anwering these questions to the best of your abilities...
- Answer these questions using the git repo you cloned. Then add this new file to version control `git add -A`, then commit it `git commit -m "answer attempt"`. If you get an error add ` --no-verify` to the end of the commit message.
- Push this up to the fork on github
- Go to the github site for the fork and hit the "pull request" button.
- Issue a "PR" back to your partner's repo.
- Copy a link to the PR into the edtechjoker slack channel so I can check them out later
- If you and your partner know how to accept PRs, then do this too so you have the info in your repo.

### Attendence
Get as far as you can above (turning it in after class / before thursday if needed). EACH PERSON SHOULD TURN IN A LINK TO THEIR PR. This will count as attendence for the day. Thank you for engaging today and hopefully I'll be back in town soon.

## Wednesday (no class, just messing with you)
- Stare blankly in your other classes
- Ponder deeply "I wish I had a web component that told me the number of minutes until I'm back in btopro's class"
- Make eye contact and nod w/ your current professor to indicate you weren't completely off in another world just now

## Thursday
- We'll review answers / code in general using a classmate's code as the backdrop:
 - https://github.com/reyes-edwin/IST402_Lab-1/blob/main/hello-world/src/HelloWorld.js
 - https://github.com/reyes-edwin/IST402_Lab-1/blob/main/hello-world/hello-world.js
 - https://github.com/reyes-edwin/IST402_Lab-1/blob/main/activity-2.md
- I'll start digging into an example that we'll use as the basis for our next series of labs. 
- The repo:
- For context; this took a few hours to conceive of and build. It will take us a few weeks to fully unpack, analyze and expand. Labs will be built off of this backbone so that we can learn about HTML, CSS, JS more deeply while growing the body of concepts we have surrounding web `fetch()` calls and mocking data to load off of an API end point.
- Concepts to dig into
  - Reusing existing elements
  - Wiring things together
  - Working with an existing API
  - Mocking up data for building an API of your own
  - wiring to existing HTML tags
  - Class vs tag definitions and why their abstraction is powerful
- Things down the road as we go:
  - CI/CD (down the road) and getting these up into version control
  - NPM publishing and distribution of items
  - Rendering API data through web components
  - Creating well constructed, normalized, simple API structured data

## Homework / Lab
- Using the template repo I created, start your own repo based off of it
- Install the repo
- Get comfy with the repo, where things are located and what it does
- 
- Take a rough stab at "designing" a JSON response that we can parse to turn into data
- https://jsonlint.com/ is your friend. It is able to tell you if you have valid JSON
- For a starting point. I've made a blank `response.json` file. This file is where you'll mock up your data
- Here is the criteria for the data in question
  - The response must support multiple events
  - Events take place at a location like "Westgate 300"
  - Events have a start time
  - Events have an end time

--- THIS IS INCREDIBLY ROUGH DRAFT AND SUBJECT TO CHANGE ---

## Week 3 - Web components / NPM
## Tuesday
- What are web components. Why are they the future, who's using them, etc.
- Introduction to Lit and the notion of reusable blocks of code in web properties
- We'll leverage existing web components from a past project
- We'll leverage existing web components from other large libraries like Shoelace

## Thursday
- We'll review more code examples and look into how we can render remote data using Lit + `fetch()`
- Using Lit and modeling data in a JSON blob, we'll render data from a public API
- This is the 1st partner lab we'll do / assign partners and teams at this point

## Homework / Lab
- Get a git repo setup with your partner
- Using the NASA API discussed in class, render this data using Lit and it's `map` capability to walk through `Array`'s of data
- https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/ - additional free APIs we can parse

## Week 4 - Monolithic design; aka maintaining legacy systems (aka everything made prior to last week)
## Tuesday
- Time to review the NASA API solutions people came up with
- In your teams; all 3 partners pick a new person to review code with
- Where we were - the monoliths. Wordpress / Drupal example / decks for understanding the old world
Docker deploy of Drupal potentially so that we can see all the pieces involved in the monolith / why they are used at times
This segway's into headless, decoupling and the need for well documented APIs

## Thursday
- Understanding the scope of the final project and working with Teams to help find what fits their interests
- There will be 6 final projects

## Homework
- For Tuesday, have your final project agreed upon by your team that you'll be pursuing
- A list of initial scoping questions if the scope that I laid out is unclear

## Week 5 - Static site generator revolution
## Tuesday
- Building web sites and deploying them has never been easier
- We'll look at some static site generators (11ty, HAX11ty) and understand how they structure and use data
- This will help give you insight into both CI/CD code pipelines as well as a lightweight publishing engine

## Thursday
- You'll deploy an 11ty or HAX11ty site.
- This site will be used to help maintain documentation about your microservice
- It's also a window into automated workflows

## Homework / Lab
- Do a Dev.to post on getting started with 11ty or HAX11ty. Use your site you made as a back drop for screen shots and more in the article.
- What are the pros and cons of database driven vs static site / file system driven architectures?

## Week 6 - OpenAPI spec
## Tuesday
- OpenAPI 3.0, what it is, how to use it, examples, how to develop a robust API. Point to the API evangelist
- We'll look at how HAXcms uses "doc blocks" of comments in order to automatically generate Open API spec documents
## Thursday
- We'll start doing some prototyping in class on paper / tablet
- The goal of this initial rough work is to have...
  - the front end team envision what it might look like
  - the back end team envision what calls their might be to power data of the frontend prototype
  - the API team to refine and envision what the call structure for the API looks like

## Homework / Lab
- What is OpenAPI. Who uses it? who developed it? What affordance does it provide? Why is it important? What is API first architecture? How do we version APIs?

## Week 7 - Docker
## Tuesday
- What is it? Who uses it (everyone... or something similar)? Why we need it?
- We'll spin up several apps on play with docker
## Thursday
- We'll deploy a news App using "Play with Docker"
## Homework / Lab
- Running throught the News App lab in class, do the same thing to make a tutorial / screen cast on how to deploy HAXcms to play with docker
- 
## Week 8
## Tuesday

## Thursday

## Homework / Lab

## Week 9 - Crusing on a boat or however you let loose
- 2019 edition, not 2020 edition 😬
## Week 10 - 15 - Final project
- Classes these weeks will involve lots of group time
- You'll get time to work in class with the expectation that code is submitted with each weekly check in
- I'll then review anything submitted and use it as a basis for discussion in class
- Each team will have a slightly different project and stack for solving potentially
- They'll all be written in JavaScript (unless your super bold) and have an OpenAPI backend so we'll have lots we can learn from each other
- There will also be peer review / critiques during these times
- Homeworks will be a check in / milestone marker expected to be hit and a status update turned in
- Check ins will account for 10% of the course and doing them will keep you and your group on pace to finish the project on time while meeting all requirements
