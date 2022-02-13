# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.
- [Prerequisit concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4) - This playlist has lots of things broken down in a lot of detail. Need a lecture on HTML/CSS? Headless? JS? CMSs? Other things? This playlist has custom and community sourced things to help
- [week / lab 1](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-1)
- [week / lab 2](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-2)
- [week / lab 3](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-3)
- [week / lab 4 / 5](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-4-5)
- week 6 / 7

## Week 6 / 7 - Concept building; Static site generators and Docker

Switching gears completely, we've got to scaffold some more conceptual layers in order to better understand the solutions we're going to be crafting by the time we reach our final project. Now you should have some fundamentals in web components + JSON + get data from a thing and do things with it. While not fully fleshed out, this is fundamentally how any front end building blocks are constructed in modern web development and we'll come back / refine more as we go.

## Tuesday
- This is going to be another, different way of teaching / learning (mixing things up is fun)!
- This week we're going to cover static site generators / CI/CD workflows
- This week we're ALSO going to cover Docker 👀👀

> Reality check
> we're just going to scratch the surface on both. These are whole classes / projects of their own so we're trying to get a mental framework for them conceptually

- I'm going to give a very quick explaination of each so that you understand high level what they are, what they provide, what you could do with them
- Then there are going to be 2 labs (so 1 per partner)
- The 1st lab (to be done by 1 person per pair) is building a site using **11ty**
- The 2nd lab (to be done by another person) is to do a lab using **play with docker** to build and deploy containerized apps

## How this will work...
- Both partners will end up doing both labs in the end (if you have a partner group of 3 then one of the people starts at 1 and 2 start at the other)
- This week, you'll start on the 1st lab, next week, you'll switch lab focus and teach each other how to accomplish the lab
- This helps YOU reinforce knowledge of a topic (by teaching) and then helps your partner skip over the pitfalls you ran into
- We'll do this in class starting today and continue on Thursday
- **There's nothing due this weekend, enjoy THON*. Both labs will be due to be turned in next week.
- I'll also be reviewing people's projects and offering feedback on the final solutions

## 11ty - Static Site generator revolution https://www.11ty.dev/
- Review lecture from a past semester: EdTechJoker3D: Static site generators, flat file CMS and JSON driven CMS
  https://youtu.be/q6uasPXsZ7A?t=224
- Building web sites and deploying them has never been easier
- We'll look at some static site generators (11ty, HAX11ty, jeckyll) and understand how they structure and use data
- This will help give you insight into both CI/CD code pipelines as well as a lightweight publishing engine (which you hooked up previously)

### 11ty Lab requirements
- Create a git repo
- Clone the empty repo locally
- run `npm init` and answer the questions to the best of your ability (this will stub out a `package.json` file)
- run through the quick start in order to get a hello-world going https://www.11ty.dev/#quick-start
  - this will give you the fundamental layer of how this relationship works
- Using the workflow file with github we used last project as a template, engineer this into a sustainable publishing workflow

#### Site requirements
- Your website should use a template / theme that is pre-built from the listed 11ty ecosystem of options
- Your website should explain how your NASA search element works
- Communicate what Lit is, links to it, provide a code sample / link to git repos / docs pages / etc
- A page that links to all your dev.to blog posts that you've written to date as a list of links

## Docker - securely contain and spin up all the things
- What is it? Who uses it (everyone... or something similar)? Why we need it? What words in this space relate to the web and how.
- https://www.docker.com/101-tutorial
- We'll deploy a news App using "Play with Docker"
- Running throught the News App lab in class, do the same thing to make a tutorial / screen cast on how to deploy HAXcms to play with docker


## Thursday

## Homework / Lab
- Do a Dev.to post on getting started with 11ty. Use your site you made as a back drop for screen shots and more in the article.
- What are the pros and cons of database driven vs static site / file system driven architectures?

~~~ EVERYTHING BELOW HERE IS HIGHLY VARIABLE / SUBJECT TO CHANGE ~~~

## Week 8 - OpenAPI spec
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
