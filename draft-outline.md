# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.
- [Prerequisit concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4) - This playlist has lots of things broken down in a lot of detail. Need a lecture on HTML/CSS? Headless? JS? CMSs? Other things? This playlist has custom and community sourced things to help
- [week 1](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-1)
- [week 2](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-2)
- week 3

## Week 3 - Microservices and further exploring our first API access project
- Small slide deck about microservices using our current project as a backdrop for how bigger systems work together.

## Tuesday
- Looking over what people produced and pointing out relevant things / unpacking certain issues
- I'll give feedback on a few solutions and dig into them in more detail; at least 1 of each option / role
- Option 1:
  - https://github.com/mayormaier/api-project-1/blob/master/src/UserIP.js
  - https://github.com/Taylor-Bracone/api-project-1/blob/master/src/UserIP.js
  - https://github.com/SLDSO/api-project-1/blob/master/src/UserIP.js
  - https://github.com/TaylorMorini/api-project-1/blob/master/src/UserIP.js *
- Option 2:
  - https://github.com/juliansim1729/api-project-1/blob/master/src/LocationFromIP.js
  - https://github.com/zjohnson10/api-project-1/blob/master/src/LocationFromIP.js
  - https://github.com/Aiden-Brook/api-project-1/blob/master/src/LocationFromIP.js
  - https://github.com/aaronlienhard/api-project-1/blob/master/src/LocationFromIP.js
- Option 3:
  - https://github.com/hayden-angello/api-project-1/blob/master/src/response.json
  - https://github.com/jforcina20/api-project-1/blob/master/src/response.json
  - https://github.com/hvk5388/api-project-1/blob/master/src/response.json
- Bonus wiring:
  - https://github.com/liljimmyk99/api-project-1/blob/master/index.html#L70 *
  - https://github.com/reyes-edwin/api-project-1/blob/master/src/LocationFromIP.js#L71-L76 *
  - https://github.com/mayormaier/api-project-1 *
- Grouping to ensure everyone is sitting near group members for the semester
- In class activity reviewing each other's code and making a single repo
- Looking at npmjs.com, my own library of elements our team makes and how we can leverage existing work to buid new work
  - Bringing in wikipedia-query and at least putting it in our repo / dependencies via package.json or CLI method
- Establishing the starting point for Lab 3 that expands upon this same project.
- In class group activity:
  - exchange contact info / make a multi-person DM on slack or whatever space of your choosing
  - 1 of the PM / API product owners, Create an organization and add everyone in your group to it
  - Also make sure you grant roles within the organization to everyone added so that they can adminster the projects of the org
  - In that organization, create another fork of https://github.com/elmsln/api-project-1 and rename it to ip-project
  - All members should fork this repo in their organization to their personal account so they have a copy

## Wednesday
- Get the above cleared up as needed
- dream about being in class
- imagine what the sun feels like on your face as the cold breeze blows through the trees
- "Is this really happening... am I still going to class?" - yes, the voice in your head answers
- you look around in euphoria, "I... I've never been to class this many weeks in a row without disruption..."
- You panic... "am I actually still dreaming... did I just pass out in the zoom of another class at my desk.. what is this"
- You wake up... alone, the zoom meeting has ended. It's been hours since you "had class", you must have slept through it all
- Egerly, you await the resuming class with humans

## Thursday
- I'll give additional feedback if any was warranted / we ran out of time on Tues
- In class group activitiy:
  - Using the feedback from class, partners in front-end, back-end, and API/Owner will work together to improve their Option to be the best it can be
  - Each pair will use 1 person's fork; 1 "driving" (aka coding) the other pair-programming / over the shoulder / helping google / toubleshoot as needed
  - When the solution to each option works in a team member's fork, commit it back to the fork
  - Then, issue a Pull Request (Github UI thing) and make sure the PM / whoever owns the repo accepts it
  - The goal is to get a working Repo that has all 3 options merged together into one
  - After this happens, all teammates should get a UI that looks like this in their fork of the repo
![Github UI for rebase](https://user-images.githubusercontent.com/329735/150425002-e8e06bbc-daa6-4f03-bf0a-ceb38a6a2954.png)

## Homework / Lab
- now you're going to try adding another element that leverages 1 API and routes the data through to the usage of this tag
- Edit the `src/LocationFromIP.js` file in order to try adding the following:
- Create an HTML link that sits below the iframe that links to the location on google maps.
- google maps links can be formed like this: `https://www.google.com/maps/@40.804,77.910,14z` where it's `@long,lat`. The `,14z` is needed for "Zoom level"
- When we get the data back on long / lat, also pull the City and State at this time
- Using this information, wire the data up to a wikipedia-query tag
- It'll need to be added as a dependency if you didn't already https://www.npmjs.com/package/@lrnwebcomponents/wikipedia-query (and then `npm install`)
- Then you'll need to `import` the tag at the top of your file using it
- Then in your `render()` method you'll have to implement the tag. Here's some example usage:
 ```html
 <wikipedia-query search="Moon"></wikipedia-query>
 <wikipedia-query search="Pittsburgh, Pennsylvania"></wikipedia-query>
```
- The search property needs to take city`, ` state and the comma then a space are important to the call working

## Submitting the lab
- A blog post this week; each Option / Role covers a different API but all options should cover the following:
- Screenshots / video (optional) conveying what the tag is, how it works to visualize the API data
- How fetch can be used to get information from the API and feed it into a LitElement based web component to provide the stateful updating of the DOM
- markdown block using the ` ` ` 3x in a row as a code block to illustrate the API response
- Links to the service in question so that people can learn more about the API if they want
- Links to your source code on github so people could poke at the code more to learn about it
### Option specific parts
- **Option 1 - Front end Devs** - You are writing from the perspective of the IP address / location API element
- **Option 2 - Back end Devs** - You are writing from the perspective of the GeoIP element
- **Option 3 - API / Product Owner** - You are writing from the perspective of the wikipedia API
  - Wikipedia's API is documented here -- https://en.wikipedia.org/w/api.php
  - wikipedia-query source for a backdrop of code you can walk through - https://github.com/elmsln/lrnwebcomponents/blob/master/elements/wikipedia-query/src/wikipedia-query.js#L82
- Drop a link to your blog post into the #edtechjoker slack channel when finished
- **each teammate is writing their own article from the option perspective in question**

### Pro tip
- remember you can hit inspect -> Network tab and when the page loads see the call go off to all 3 of the APIs to see them happen / get the data structure
  - This will allow you to complete the above writing assignment even though you didn't write this tag :)

--- THIS IS INCREDIBLY ROUGH DRAFT AND SUBJECT TO CHANGE ---

## Week 4 - Monolithic design; aka maintaining legacy systems (aka everything made prior to last week)
- Quick presentation / review of Monolithic design vs microservice.
- We'll review more code examples and look into how we can render remote data using Lit + `fetch()`
- Using Lit and modeling data in a JSON blob, we'll render data from a public API

- "template stamping" / rending an element multiple times based on data from an end point
  - this is the basis for how any listing of "cards" is displayed. I'll review my own code to show examples of this
## Tuesday
- Get a git repo setup with your partner
- Using the NASA API discussed in class, render this data using Lit and it's `map` capability to walk through `Array`'s of data
- https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/ - additional free APIs we can parse
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
