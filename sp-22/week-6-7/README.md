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
  - **note**: this requires yarn in order to use. commands are then `yarn install` and `yarn start`
  - If you can't get `yarn` installed (some had issues week 1) then find an additional 11ty template other than base-blog to deploy the 3rd site. There are many templates out there, someone showed me a weird horse generating one the other day.
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
- Compare the 1st user experience of 11ty to HAX11ty (unless you can't install hax11ty, then compare hello-world to the two template experiences)
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
