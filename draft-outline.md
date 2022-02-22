# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.
- [Prerequisit concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4) - This playlist has lots of things broken down in a lot of detail. Need a lecture on HTML/CSS? Headless? JS? CMSs? Other things? This playlist has custom and community sourced things to help
- [week / lab 1](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-1)
- [week / lab 2](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-2)
- [week / lab 3](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-3)
- [week / lab 4 / 5](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-4-5)
- week 6 / 7

## Week 6 / 7 - Concept building / practice; Static site generators and Docker

Switching gears completely, we've got to scaffold some more conceptual layers in order to better understand the solutions we're going to be crafting by the time we reach our final project. Now you should have some fundamentals in web components + JSON + get data from a thing and do things with it. While not fully fleshed out, this is fundamentally how any front end building blocks are constructed in modern web development and we'll come back / refine more as we go.

## Tuesday / the next 2 weeks
- A rare lecture day (whhaaaaat) https://docs.google.com/presentation/d/1k9Ykj37kSgyCCIVoQ52E1gILu89Sup3OKssbN1SHRU8/edit?usp=sharing
- This week we're going to cover static site generators / CI/CD workflows
- This week we're ALSO going to cover Docker 👀👀
- You're going to do much of the research, while I provide some foundation conceptually for both pieces of technology
- Both labs will be due in 2 weeks so nothing due immediately this weekend but staying on pace will help keep things managable for you all
- I'll also be reviewing people's projects and offering feedback on the final solutions

## How this will work...
- I'm going to give an explaination of each so that you understand high level what they are, what they provide, what you could do with them and the space they reside with in
- Then there are going to be 2 labs (so 1 per partner or divy up amongst your group so 1/2 is doing 1 and 1/2 the other)
- The 1st lab (to be done by 1 person per pair) is building a site using **11ty**
- The 2nd lab (to be done by another person) is to do a lab using **play with docker** to build and deploy containerized apps
- **Each person on each team will be doing their own version of both labs but you should make sure 1/2 start at 1 and 1/2 at the other**
  - This helps YOU reinforce knowledge of a topic (by teaching) and then helps your partner skip over the pitfalls you ran into

> Reality check
> 
> we're just going to scratch the surface on both.
> These are whole classes / projects of their own so we're trying to get a mental framework for them conceptually
> You can use concepts from these in the final project, or in the real world for any project (especially 11ty)
> Also this will involve a lot of googling and finding examples. Welcome to web development.

## 11ty lab
- Review lecture from a past semester: EdTechJoker3D: Static site generators, flat file CMS and JSON driven CMS
  https://youtu.be/q6uasPXsZ7A?t=224 to get additional context of the space if desired
- We're going to make 3 different blogs that leverage 11ty
- Read how to make a hello-world style blog using 11ty - https://www.11ty.dev/
  - Install the syntax highlighting plugin to get how plugins can be used - https://www.11ty.dev/docs/plugins/syntaxhighlight/
- Use a template as a starting point to make a more powerful 11ty blog (for example: https://github.com/11ty/eleventy-base-blog but MANY exist)
- Use HAX11ty to build the same blog https://github.com/elmsln/hax11ty
- Requirements for your 11ty sites:
  - 11ty is in markdown, and you've written several dev.to posts (in markdown). Add these posts to your site so that you have some content pages
  - You should have 3 different repos on github, 1 for each 11ty based site
  - Each site should have it's own CI/CD deployment pipeline so that the `gh-pages` branch rebuilds the site

## Some HAX11ty example sites
- https://wcfactory.js.org/ - https://github.com/elmsln/wcfactory.js.org
- https://elmsln.github.io/hax11ty/ - https://github.com/elmsln/hax11ty
- Hints:
  - You'll need to make a `package.json` file so that it can be put into a pipeline
  - you'll need a `.gitignore` to ensure that `node_modules` doesn't get put in version control
  - you'lll need to modify the other CI/CD work we've looked into as `11ty` writes to a `_site` directory instead of a `dist` directory
  - Every file you make that ends in `.html`, `.njk`, `.md` will automatically get converted into an associated web page under the `_site` directory

## Submitting the 11ty lab
- write a post on dev.to that talks about getting started with 11ty
- Use screenshots / links to your repos as a backdrop to demonstrate the same content in 3 different 11ty sites
- Compare the 1st user experience of 11ty to HAX11ty
- Include links to relevant sites (11ty, hax11ty) as well as the code for your repos and you github.io addresses for the sites
- Bonus:
  - +2% Following the tutorials here https://griffa.dev/posts/using-web-components-with-11ty/ , get your blog to be able to render your nasa web component
- Submit your blog post to the **#edtechjoker** channel in slack

## Docker lab
- Run through the Docker 101 tutorial under tutorial on https://www.docker.com/play-with-docker
  - If you can install and run through deploying things via docker desktop feel free but play with docker is more then enough (and free!)
- Make sure you do the pre-requisits for doing this lab - https://github.com/heyMP/ist402-docker#ist402-docker-lab
  - **NOTE** this tells you you MUST link github and docker hub, this is not possible without $ unfortunately so we're not doing that. It should not be required.
- Deploy the NodeJS TODO app https://github.com/heyMP/ist402-docker/tree/master/labs/5-nodejs-todo-app
- Deploy the NewsAPI Microservice - https://github.com/heyMP/ist402-docker/tree/master/labs/7-news-api-microservice
  - Note the parallels here with what we just did with the NASA app
  - Also this is deploying GraphQL, a powerful query engine for NoSQL databases that I recommend playing with as is shown in the directions
- Watch this crazy industry talk https://www.youtube.com/watch?v=CZ3wIuvmHeM
- Read this post by Michael Potter (HAX core dev for 4 years) - https://www.redhat.com/architect/micro-frontend-architecture

### Submitting the docker lab 
- Write a blog post on dev.to
- Explain Why docker is powerful, how to get started with play with docker
- Using screenshots of the NewsAPI Microservice as a backdrop, write an article about how to create a DockerFile for your NASA image search repo
- Bonus:
  - +2% Create a docker-compose file for your Nasa image search repo and get your NASA repo deployable on play with docker
- Submit your blog post to the **#edtechjoker** channel in slack

## In the end of week 7
- You'll EACH have both labs done and many repos
- You'll EACH have two blog posts, 1 for each lab topic
- The next 3 classes are working days with attendance taken
- **These are both due Sunday the 27th**

# Week 8 - Connecting concepts to industry

## Tuesday
- I'll be giving feedback on the NASA lab in detail. Much of this will be given via Canvas but I'll point to novel things different groups did so we can reflect as a class.

- We will have a guest speaker. **Andrew Gearhart** is a *Systems Developer for Penn State University Libraries* who I am fortunate enough to be friends with and collaborate on projects the last several years at Penn State.
- While we met doing Drupal work, Andrew gets to experience all kinds of different solutions (good and bad) in his work at the libraries due to the nature of library systems
- Today, Andrew is going to talk to us about 1 such collaboration we engaged in a year ago to solve a sticky problem at the libraries.
- This is a great example of the fact that the things we're talking about in class can stack together to provide real solutions in industry

### What the solution touches on
- Docker / Green Blue deployment workflow
- HAX11ty for static site building and deployment
- Markdown editing by content contributors who are NOT technical experts
- Custom web components to render old XML document formats live on the web in a new engaging way.
- Details about the project: https://beaumontandfletcher.libraries.psu.edu/digital-beaumont-fletcher-1647
  - Click on "The Sea Voyage" to see HAX11ty in action

## Thursday
- We'll have another guest speaker who will set the stage for the final project / all time after spring break
- **Michael Potter**, Principle front end architect at Red Hat, will show us how Red hat uses a platform called Vercel in order to rapid deploy and test iterations of front end projects
- Michael has worked on HAX and at Penn State for several years prior to joining Red Hat and has a wealth of full stack development knowledge
- He's also my best friend... so I'm basically (the friend of) a Red Hat developer which makes me like a Red Hat developer without the pay
- Our final project will involve building a micro frontend that uses Vercel for prototyping so this is both an introduction to an industry topic but also an introduction to the final project

### Some links to check out
- https://www.redhat.com/architect/micro-frontend-architecture
  - https://github.com/heyMP/practice-question-service
- https://github.com/heyMP/rh-footer
- IST Hello world - https://github.com/heyMP/ist-vercel-demo
- Shoelace design library uses Vercel as well - https://twitter.com/claviska/status/1489659763197624326

## Homework / Lab 8
- Clone the ist-vercel-demo, spin it up and get your github account connected to the vercel service
- https://vercel.com/docs - read the docs; hit the "Show more" button to find an 11ty based tutorial. Use this to deploy a new 11ty based project to vercel
- Get this 11ty based repo hooked up and add in your blog posts as you did in the 11ty lab but now Vercel will handle the CI/CD pipeline more or less automatically
- Write a dev.to article about Vercel based development workflows
  - Your article should include links to things Mike discusses in class
  - Include screenshots of your 11ty site that you setup w/ vercel
  - Compare this approach to just using github directly as far as configuration, ease of use, etc
  - Also be sure to look into and discuss how shoelace uses this for launching new possible branches and letting people try out possible future functionality
- Submit your article by **Sunday March 13th** finish before spring break or after, no concern to me timing wise.

## Week 9 - Cruising on a boat or however you let loose
- 2019 edition, not 2020 edition 😬
- In 2020 when I wrote this on a slide I made a joke about "if you don't all get sick over break and they let us come back here, we'll be working on...."
  - Someone must have not realized it was a joke.
- who knows, there might even be more favorable teaching constraints when we get back this time.. 🙏

## Week 10 - 15 - Final project 40% of your grade
### Tuesday after break
- Details will be released about the final project, requirements, expectations, as well as potential impact and what it sits within
- You'll have the rest of the semester to complete this final project
- Class will be a mix of check-ins, code review, link sharing, attendance and in-class working time
- Everything goes well, you build something neat
- Everything goes REALLY well, you build something neat and I ask you to present it at HAXcamp / it helps influence the direction of our platform

~~~ EVERYTHING BELOW HERE IS HIGHLY VARIABLE / SUBJECT TO CHANGE ~~~

## Week x - OpenAPI spec
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
