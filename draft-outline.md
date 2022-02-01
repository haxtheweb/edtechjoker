# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.
- [Prerequisit concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4) - This playlist has lots of things broken down in a lot of detail. Need a lecture on HTML/CSS? Headless? JS? CMSs? Other things? This playlist has custom and community sourced things to help
- [week 1](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-1)
- [week 2](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-2)
- [week 3](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-3)
- week 4

--- THIS IS INCREDIBLY ROUGH DRAFT AND SUBJECT TO CHANGE ---

# Week 4 - Putting into practice to build a NASA image viewer

## Tues
- From reading through it seems most understood the fundamentals of the requests we were making and how to wire up to a wikipedia-query tag
  - Several ran into issues w/ rate limitting, a topic we'll need to build a solution for in the future via API keys
- To ensure we are all on the same page, I'm going to take a data model that someone in class produced (`response.json`) and wire it up to a `date-card` tag that an IST student made for us at a previous point in time
  - `@lrnwebcomponents/date-card` is available on NPM if you'd like to follow along
- For this exercise, we're going to take a single response from an API, parse it into an Array, and then "stamp" the data down using a specialized `for` loop called a `.map`
  - `.map` allows you to walk `Array` data and can be read as "Take each item in this array and do the following thing with each value"
  - `LitElement` has specialized support for `.map` and `properties` that are `type: Array`.

- I'll walk through how I wired an existing date-card element up to the data in question:
  - I'll demonstrate how stateful variables can be leveraged in order to trigger functionality in a `LitElement` based element
  - I'll demonstrate wiring up to form input to modify how many results are rendered

- Resources:
- Read "Rendering Arrays" in the Lit docs - https://lit.dev/docs/templates/lists/#rendering-arrays (stick with the `.map` convention expressed)

## Lab this week (started today, worked on Thurs / due Sunday):
I want you to leverage an existing asset our team made called `accent-card` in order to render media from space....
> it's not as ridiculous as that just sounded
- In your repo create a new file called `./src/NasaImages.js`

- The npm asset is `@lrnwebcomponents/accent-card` install it (from articles I saw many of you missed adding `--save` which is important for version control
- 
- Date card wiring from own API
  - Ordered List rendering of the data as well
  - Option to render as ordered list or as date card

They have to get a resource to wire to so accent card

Then wire to the api but I stub this out a bit for demonstration

They wire the date card up to their shared data format


- NASA rendering; render images from NASA using their public API to render the data
  - leverage an existing simple card for displaying the data
  - Limit rendering to 10 results
  - Using `display: 'inline-flex'` or comparable, get the cards to all show up next to each other

## Week 4 - Monolithic design; aka maintaining legacy systems (aka everything made prior to last week)
- We'll review more code examples and look into how we can render remote data using Lit + `fetch()`
- Using Lit and modeling data in a JSON blob, we'll render data from a public API

- "template stamping" / rending an element multiple times based on data from an end point
  - this is the basis for how any listing of "cards" is displayed. I'll review my own code to show examples of this

## Tuesday
- This will be working with your partner; if they aren't here then you can group up w/ someone else in your team.
- Get a git repo setup with your partner
- Using the NASA API discussed in class, render this data using Lit and it's `map` capability to walk through `Array`'s of data
- 
- Time to review the NASA API solutions people came up with
- In your teams; all 3 partners pick a new person to review code with
- Where we were - the monoliths. Wordpress / Drupal example / decks for understanding the old world
Docker deploy of Drupal potentially so that we can see all the pieces involved in the monolith / why they are used at times
This segway's into headless, decoupling and the need for well documented APIs
- https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/ - additional free APIs we can parse

## Thursday


## Homework

## Week 5 - Static site generator revolution and understanding "build routines" / CI/CD workflows
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
