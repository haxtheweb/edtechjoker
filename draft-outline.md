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

## Wednessday (no class, just messing with you)
- Stare blankly in your other classes
- Ponder deeply "I wish I had a web component that told me the number of minutes until I'm back in btopro's class"
- Make eye contact and nod w/ your current professor to indicate you weren't completely off in another world just now

## Thursday
I'll be stepping through a classmate's repo and explaining some of the code found there. I encourage you to follow along through this and all future code walk throughs (clone the code, install it, follow along. This is the career really). Then we'll start into the 1st project which will be the back drop for several labs coming up here in which we'll look at our 1st microservice and it playing with another microservice. Our example today is using the front end to ask an API for data, then using that data in another call to another API. This stringing along of data is way things like Uber have 1000s of microservices / tiny APIs of dedicated functionality.
- We'll review answers / code in general using a classmate's code as the backdrop:
 - https://github.com/reyes-edwin/IST402_Lab-1/blob/main/hello-world/src/HelloWorld.js
 - https://github.com/reyes-edwin/IST402_Lab-1/blob/main/hello-world/hello-world.js
 - https://github.com/reyes-edwin/IST402_Lab-1/blob/main/activity-2.md
- I'll start digging into an example that we'll use as the basis for our next series of labs.
- But first, let's view JSON... the right way. JSON Formatter plugin -- https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
  - Firefox / Edge have comparable plugins. Please stop using Safari it makes kittens cry

## Homework / Lab
The repo: https://github.com/elmsln/api-project-1
- For context; this took a few hours to conceive of and build. It will take us a few weeks to fully unpack, analyze and expand. Labs will be built off of this backbone so that we can learn about HTML, CSS, JS more deeply while growing the body of concepts we have surrounding web `fetch()` calls and mocking data to load off of an API end point.
- Concepts to chew on in this
  - Wiring things together
  - Working with an existing API
  - Mocking up data for building an API of your own
  - wiring to existing HTML tags
  - Class vs tag definitions and why their abstraction is powerful
- Things down the road as we go:
  - Reusing existing elements
  - CI/CD (down the road) and getting these up into version control
  - NPM publishing and distribution of items
  - Rendering API data through web components
  - Creating well constructed, normalized, simple API structured data

### Steps to get started
- Fork my repo (top right button on github)
- Install your fork of the repo (`git clone` using the ssh style `git clone git@github.com:YOU/api-project-1.git, `cd api-project-1`, `npm install`)
- Get comfy with the repo, where things are located and what it does
  - `npm start` will allow you to view the demo (and basically any demo of any repo)
  - `code .` or opening the folder in VS Code will allow you to look at the repo and edit it while seeing the results in the browser
  - I recommend Chrome / Firefox / Edge.
- Read [What is JSON?](https://aws.amazon.com/documentdb/what-is-json/)
- Run through the Lit.dev tutorial if you haven't already - https://lit.dev/tutorial/
  - Google is your friend here with terms like `how to wak an object in javascript` or `how to use fetch in javascript` or `how to do whatever in LitElement`
- Familiarize yourself with the JS, HTML and CSS based links on this site. Tutorials / articles / good google results are your friend in learning all things web. https://oer.hax.psu.edu/bto108/sites/edtechjoker/resources

While these options are not purely A,B,C role types, think of the role you said you most want on your team (If you listed more than just Front End, please do that role as we had like 75% say Front End). The goal here is for us to generate lots of different examples to learn from as we keep working on our project. Nex week teams will be announced so this will dove tail into that.

### Option 1 - "front end developer"
- Find the `src/UserIP.js` file
- The API used here is documented here: https://ip-fast.com/docs/
- This example code currently will take a call to the API end point below
- It then returns YOUR IP address either in IPv4 or IPv6 format (hey, an IST 220 thing)
- What I want you to do for Sunday:
- Read the documentation and figure out how to get this to return the location as well (it's changing 1 variable in the call to the API)
- Add support into the properties() method for Lit to be aware of a `location` property so that when it changes, it can be rendered in `render()` (Type is string)
- Modify the `updateUserIp` method to store the value from the API end point in this property on the class `this.`
- update the render function to output something like `ip address -- location of the current ip address`
- add comments to anything you don't understand / are educated guesses

### Option 2 - "back end developer"
- View https://freegeoip.app/json/ to see the JSON object structure
- find the `src/LocationFromIP.js` file
- You'll need to at least follow along with what's available in `src/UserIP.js` file so look that over as to what's happening there
- I've `console.log()` a response from ANOTHER API which can convert an IP address into a response as to where the user is
- I want you to use the API response and the `properties()` method to capture and store the `long` and `lat` of where the user is based on IP
- Then, I want you to use this data in the `render()` method to show a google map that focuses on this location. I've put a starting iframe embed code that focuses on a specific long / lat for starters
- This helps demonstrate API data passed to API data (microservices, each small and dumb) and interfacing with class HTML to solve a problem
- add comments to anything you don't understand / are educated guesses

### Option 3 - "API Developer"
We're going to be building a data model so that we can "mock" data as to when your classes are.
- Review the code in both of the above to see what the IPs they are access are
- Open their response in a browser so you can see what example JSON data responses look like
- Take a rough stab at "designing" a JSON response that we can parse to turn into data
- https://jsonlint.com/ is your friend (bookmark your friend). It is able to tell you if you have valid JSON
- For a starting point. I've made a blank `response.json` file. This file is where you'll mock up your data down the road
- Here is the criteria for the data in question
  - The response must support multiple events (so an Array)
  - Events take place at a named location like "Westgate 300" (a property)
  - Events have a start time (another property in a specific format)
  - Events have an end time (another property in a specific format)
  - Events have details (another property, a string)
  - Events have an order they take place in (another property, a Number)
- Using these criteria, I want you to mock up 5 example event objects in JSON

### Open Bonus +1%
- create 2 input fields on the index.html demo page for long and lat
- when these change and the user clicks a button that says "update" I want it to update the location on the map
- This implies you did `Option 2` above (which is either assigned to you or you get bonus for also doing)

### Turning in options
- No blog post this week, all code needs to be put in version control and pushed up to your repo we make in class
- When you've completed the option in question and it's pushed up to github, drop a link to your repo in the #edtechjoker slack channel with a note indicating which option you did
- While your not currently working with a partner / teammates, this will provide a starting point so that all members can help each other with the other "roles"
- I'll be adding to this assignment as we go through multiple labs. Being on top of this with questions early will help improve the next few weeks as these build on each other.
- **Turn this in by Sunday at midnight** so I can review solutions and find ones we'll use to discuss in class
- Tuesday we'll review solutions and issues people ran into
- **Bonus**: +1% for each additional Option you do. Lab is worth 4% so you could get double the points for this one thing. It's possible to get up to 7% on this if you do all 3 bonus oppurtunities.

## Looking ahead
Next week we'll take your answers, comb through some things that worked, some things that didn't, and try to learn collectively from our mistakes and successes. As with all of these, try your best to get it working and we'll unpack more concepts from that struggle of what did and did not make sense. This repo will be used for a few labs and concepts from it will be used as a basis for the course as `fetch` data from an end point is a big piece of microservice architecture. Lots of small messages all working together.

## Week 3 - Microservices and further exploring our first API access project
- Small slide deck about microservices using our current project as a backdrop for how bigger systems work together.

## Tuesday
- Looking over what people produced and pointing out relevant things / unpacking certain issues
- Grouping to ensure everyone is sitting near group members for the semester
- In class activity reviewing each other's code and making a single repo
- Looking at npmjs.com, my own library of elements our team makes and how we can leverage existing work to buid new work
- adding an asset to our repo
- "template stamping" / rending an element multiple times based on data from an end point
  - this is the basis for how any listing of "cards" is displayed. I'll review my own code to show examples of this
- Establishing the starting point for Lab 3 that expands upon this same project.

## Wednesday
- dream about being in class
- imagine what the sun feels like on your face as the cold breeze blows through the trees
- "Is this really happening... am I still going to class?" - yes, the voice in your head answers
- you look around in euphoria, "I... I've never been to class this many weeks in a row without disruption..."
- You panic... "am I actually still dreaming... did I just pass out in the zoom of another class at my desk.. what is this"
- "Breathe Neo" - a view calls from behind you
- "Why.. do my lungs hurt?" you ask of the tall stranger
- "You haven't used them in 2 years"
- Joyfully... you return home, realizing you've been to class...yesterday. It was yesterday... and this was a dream.

--- THIS IS INCREDIBLY ROUGH DRAFT AND SUBJECT TO CHANGE ---


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
- https://stoplight.io/
- https://www.postman.com/
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
