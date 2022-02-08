# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.
- [Prerequisit concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4) - This playlist has lots of things broken down in a lot of detail. Need a lecture on HTML/CSS? Headless? JS? CMSs? Other things? This playlist has custom and community sourced things to help
- [week / lab 1](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-1)
- [week / lab 2](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-2)
- [week / lab 3](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-3)
- week / lab 4 / 5

# Week 4/5 - Putting concepts into practice to build a NASA image viewer

## Tues
- From reading through it seems most understood the fundamentals of the requests we were making and how to wire up to a wikipedia-query tag
  - Several ran into issues w/ rate limitting, a topic we'll need to build a solution for in the future via API keys
  - the codepen has a magic script in it (we call it that, literally) which references a `build.js` file and loads off a registry. It is not to be included in the code of your element. Copy paste slightly less. 🤔
  - `fetch` and this feedback loop of small thing + API is the act of building a micro-frontend
- Today I'll be stepping through how the following works to form a basis for what your going to do the next 2 weeks: https://github.com/elmsln/ip-project/blob/master/src/CourseDates.js
  - Fun hidden gem for later: The gh pages site for https://github.com/elmsln/ip-project automatically builds with this demo :)
  - We'll touch on this in a future week (but yours are all wired up to auto-build too if built correctly... 👈)
- I'm going to take a data model that someone in class produced (`response.json`) and wire it up to a `date-card` webcomponent that an IST student made for us at a previous point in time - https://www.npmjs.com/package/@lrnwebcomponents/date-card
  - `@lrnwebcomponents/date-card` is available on NPM if you'd like to follow along
- For this exercise, we're going to take a single response from an API, parse it into an Array, *transform the data into something easier to understand* for our element, and then "stamp" the data down using a specialized `for` loop called a `.map`
  - `.map` allows you to walk `Array` data and can be read as "Take each item in this array and do the following thing with each value"
  - `LitElement` has specialized support for `.map` and `properties` that are `type: Array` to automatically update your element when values change, as a loop

- I'll walk through how I wired an existing date-card element up to the data in question:
  - I'll demonstrate how stateful variables can be leveraged in order to trigger functionality in a `LitElement` based element
  - I'll demonstrate wiring up to form input to modify how many results are rendered

## Resources:
  - Read "Rendering Arrays" in the Lit docs - https://lit.dev/docs/templates/lists/#rendering-arrays (stick with the `.map` convention expressed)
  - Another quick one from open-wc (another great resource) - https://open-wc.org/guides/knowledge/lit-element/rendering/
  - Example from playground (check the JS box though) - https://lit.dev/playground/#sample=examples/repeating-and-conditional
  - Lit Conditional rendering: https://lit.dev/docs/templates/conditionals/
  - Mozilla docs are your JS friend - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth

## Lab this week (started today, worked on Thurs / due Sunday):
I want you to leverage an existing asset our team made called `accent-card` in order to render media from space....
> it's not as ridiculous as that just sounded
- Example response / thing to play with -- https://hax.psu.edu Media search
- This week this is a partner project. So pair program with someone, expect to meet up either this weekend or between classes
- In your repo create a new file that will house your new web component and name this element `nasa-image-search` (file name can be anything you want . js)
- This web component should include `lit` as well as the `accent-card` our team built
  - Docs in a "storybook" to play with: https://webcomponents.psu.edu/styleguide/?path=/story/layout-card--accent-card-story
  - You'll see `slot="` as an attribute on here, this allows rendering content into a specific place on the card. Background reading - https://lit.dev/docs/components/shadow-dom/
  - The npm asset is `@lrnwebcomponents/accent-card` install it (from articles I saw many of you missed adding `--save` which is important for version control
- NASA image API docs - https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
- example usage to show all images related to the moon landing: https://images-api.nasa.gov/search?q=moon%20landing&media_type=image

## Requirements of your element:
- Named `nasa-image-search`
- Leverages `accent-card` and a `.map` to render the following data onto the card inside your element:
  - The image (`image-src=`)
  - the title (`<div slot="heading">`)
  - the description (`<div slot="content">`)
  - Who took the photo (`secondary_creator`, also included with the content area of the card)
- `fetch` data from the NASA image API based on a method being called to request the data (clicking the search button should initiate this)
- Simplify the response data to an object that only has the data needed for rendering
- using a `.map` render this data
- `index.html` / demo page needs to have this capability:
 - A button that initiates the search when `click`'ed and returns results (defaulting to moon landing)
 - **Option 1**: A "search" `input` that accepts text and changes what's searched for by modifying a property called `term` on your element
 - **Option 2**: A "page number" `input` that accepts a number and changes a property called `page` on your element to request a specific page of results
 - **Option 3**: A "Return data only" checkbox that modified a `Boolean` on your element to conditionally render an unordered `ul` list of items (like my date example) but defaults to the `accent-card` by default.

## Note:
- I have removed all the other boilerplate from my current demo for reference; this is not required but made it easier to read in my example
- This is a multi-week project where all **pairs**, pair program in order to generate the 3 options.
- Start working on this now and ask questions so that we can all learn together toward the solution

## Wed
- Get some initial work done on the nasa-image-search so that you can ask questions.
- Post issues / questions into our slack channel **#edtechjoker** so others can see said questions (there are no stupid questions)
- There are office hours w/ our LA today

## Thursday
- Class time is working time and I'll review questions at the start of class if I haven't responded in the channel already
- I will be available to explain code snippets or offer debugging support

## Due Sunday
- **Each pair should submit a link to 1 repo with their best attempt at solving the lab**
- I'll review solutions for notable answers and aspects that are more "correct" than others / on the right track
- I'll provide feedback via slack and in person next week
- This is the 1st part of a 2 part lab
- The 2nd part will be to finish the lab as a group and merging specific aspects of code together, most likely through a shared coding experience with someone driving and others researching / experimenting to find solutions to each of the 3 options
- Lab 4 is due Sunday at midnight. Each pair / Option should submit their solution as work in progress to the **#edtechjoker** channel. This is a "check in" worth 2 points.

### Note
- Lab 5 is taking all 3 options and merging them together into a solution everyone believes to be the best work the group can assemble.
- Lab 5 is worth 6% and has stupid prizes associated with the best / most correct solution(s)

## Week 5 - Refinement and feedback
Ultimately, we'll work toward each group producing 1 solution.

## Tuesday
- I'll provide feedback on a variety of solutions / things to watch for, what worked well, various feedback
- In class activity: Working with your group, review each other's solutions **within your group**. Most will have 3 options to combine / discuss, some will have 2 based on group size.
- As a product of your review / discussion I'd like the following artifact created and submitted (**1 per person**).
- Group dynamics will work as follows: 3 option team. 1 person from Option 1 reviews Option 2's code. 1 person from Option 1 reviews Option 3s code
 - If you only have 2 options in your group then break in 1/2 as best you can, if there's 3 then that's fine to have 2 reviewers on 1 part of produced solution 
 - **Create an issue in your main team project** issue queue (for most this is your-organization/ip-project/issues)
 - In this issue call it something like "feedback on option X" where X is the option you produced feedback for
 - In your feedback I want to see the following headings (written using markdown):
   - What parts worked well or that you found the approach novel and should be incorporated into the final solution for your team
   - What parts could be improved upon. "Nothing it looks great" is not a valid sentiment. Could they provide better commenting / documentation? Are there functions that can be deleted bc the code is unused? Are they monsters and used 4 spaces instead of 2? There's always something either stylistically, documentation or in control logic we can learn from to improve.
   - Next steps: What are the next recommended course of action. If it's going to be the thing that the group uses to base their final solution on, awesome. If it needs improvement, what resources could be used to help improve understanding / fix the issue in question. Provide google results / links to possible resources to make this happen
   - Submit this issue to the edtechjoker channel; this will be used as attendance verification for the day
 - After everyone finishes the in class activity and submits to the channel, then it's time to start digging into crafting 1 solution based on the requirements below. This will bleed over from Tues into Thurs

## Requirements of final element:
- You'll work with your group to produce 1 solution in your main repo for your organization.
  - **protip:** While you COULD merge / PR solutions, I'd recommend manually generating an optimal solution from all 3 options in 1 repo via the manual code review
 - A "search" `input` that accepts text and changes what's searched for by modifying a property called `term` on your element
 - A "page number" `input` that accepts a number and changes a property called `page` on your element to request a specific page of results
 - A "Return data only" checkbox that modified a `Boolean` on your element to conditionally render an unordered `ul` list of items (like my date example) but defaults to the `accent-card` for presenting results.

### New requirements for the element once you get those 3 merged together
- Add support for year_start and year_end in your input form
  -  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local could be used for snagging a date, however the API is just a year so might be `input` better
- Using WAVE plugin and/or Lighthouse, make sure that your form is accessible.
- Get github pages setup for your repo; the code is already there if using `ip-project` as your base, you just need to activate actions for your repo: https://github.com/elmsln/ip-project/blob/master/.github/workflows/main.yml is what powers the action (which we'll step through).
 - If your code blends while you develop it, it should work as a github action.
 - Make sure to enable github pages within your repo setting
 - I'd recommend delegating the 3 additional requirements across your team based on different roles investigating different pieces
- Anything submitted on Wed via DM (question or hey do you mind reviewing this code..) I'll look at and discuss at the start of class Thursday
## Thursday
- This is primarily a working session to ensure that the requirements for your element are met

## Sunday / submitting the Lab
- 1 Solution per team is to be submitted to Canvas for the Lab 5 Dropbox
- This is worth 6%
- Rubric:
  - Queries NASA and returns results as expected, rendered through the `accent-card` while having support for Options 1,2,3 from week 4 - 3%
  - The additional 3 requirements introduced this week and your site correctly self-rebuilds on commit via github actions 3%
  - Best solution (subjective) +1%

~~ EVERYTHING BELOW HERE IS HIGHLY VARIABLE / SUBJECT TO CHANGE

## Week 6 - Static site generator revolution and understanding "build routines" / CI/CD workflows
Switching gears. For one, it's THON and so work will be in-class labs which should be do-able within the time in question. For two, we need to address a lot of different concepts now that we have some foundations in Lit + web components + JSON + get data from a thing and do things with it (logic).

## Tuesday
- Building web sites and deploying them has never been easier
- We'll look at some static site generators (11ty, HAX11ty, jeckyll) and understand how they structure and use data
- This will help give you insight into both CI/CD code pipelines as well as a lightweight publishing engine (which you hooked up previously)
- Review lecture from a past semester: EdTechJoker3D: Static site generators, flat file CMS and JSON driven CMS
  https://youtu.be/q6uasPXsZ7A?t=224
- You'll deploy an 11ty or HAX11ty site.
  - Requirements of your site:
  - Pro tip: This will be part of the requirements for the final project so make sure your able to generate one of these 

## Thursday

## Homework / Lab
- Do a Dev.to post on getting started with 11ty or HAX11ty. Use your site you made as a back drop for screen shots and more in the article.
- What are the pros and cons of database driven vs static site / file system driven architectures?

## Week 7 - OpenAPI spec
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

## Week 8 - Docker / Deploying an Express App
## Tuesday
- What is it? Who uses it (everyone... or something similar)? Why we need it?
- We'll spin up several apps on play with docker
## Thursday
- We'll deploy a news App using "Play with Docker"
## Homework / Lab
- Running throught the News App lab in class, do the same thing to make a tutorial / screen cast on how to deploy HAXcms to play with docker

## Week 9 - Cruising on a boat or however you let loose
- 2019 edition, not 2020 edition 😬
- In 2020 when I wrote this on a slide I made a joke about "if you don't all get sick over break and they let us come back here, we'll be working on...."
  - Someone must have not realized it was a joke.

## Week 10 - 15 - Final project
## Week 10 - Vercel / who needs express just know it's there via magic 🪄
- We'll use Vercel to deploy final projects (and learn about it as we go)
- Classes these weeks will involve lots of group time
- You'll get time to work in class with the expectation that code is submitted with each weekly check in
- I'll then review anything submitted and use it as a basis for discussion in class
- Each team will have a slightly different project and stack for solving potentially
- They'll all be written in JavaScript (unless your super bold) and have an OpenAPI backend so we'll have lots we can learn from each other
- There will also be peer review / critiques during these times
- Homeworks will be a check in / milestone marker expected to be hit and a status update turned in
- Check ins will account for 10% of the course and doing them will keep you and your group on pace to finish the project on time while meeting all requirements
