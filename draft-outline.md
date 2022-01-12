# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.

--- THIS IS INCREDIBLY ROUGH DRAFT AND SUBJECT TO CHANGE ---

# week 1 - Hello Joker, Tooling basics
## Tuesday
- Introduction to class
- 1 of the only days I'll talk the entire time and you'll sit there going "wow, this guy is really full of himself".
  - Other days you'll draw the same conclusion but with less talking on my part. Mostly just a presence really.
- Definitely some of my best material from a comedic timing perspective
  - fun old person fact: This goes along with years of traveling and speaking on topics in Drupal-land

## Wednesday (no class, just messing with you)
- Sit in your room in nervous anticipation of class Thursday
- But if you can get nodeJS, npm, yarn, and open-wc installed that'd speed things up in class. If not, we'll have a support group (aka all of class) to help fix

## Thursday
- Quick review of what microservices are and micro frontends.
  - We'll keep coming back to this and where things slot into this picture
- What is tooling? what do I need? Why do I need it? What does it do? Why is the world written in JavaScript!??!? (an unknowable question)
- This will establish one of the many technologies that swirl around this tech space.
  - Why web components are not the only source of truth, they are often spoken in the same area because of how small and portable they are
- Lab: Getting tooling installed and being able to establish a hello world boilerplate using web components
- Past students of mine: Roam the class helping people get things installed, but then you'll have a different homework 😵‍💫

## Homework / Lab
- Write a blog post about how to get NodeJS, Yarn, NPM, and all the other dependencies installed in order to launch https://open-wc.org/guides/#quickstart
- Best way to be successful and get started with this assignment (as far as ideal order for YOU)
  - install all the stuff mentioned.
  - HIGHLY RECOMMENDED: Install https://ohmyz.sh/ (windows users: https://dev.to/vsalbuq/how-to-install-oh-my-zsh-on-windows-10-home-edition-49g2 )
    - This will give you a terminal that feels like the one that I use in class all the time and is generally what 1337 devs use across OS
  - Make a github account
  - create a repo on github with whatever name you want like `edtechjoker-lab1` or whatever makes sense for you
  - Establish a secure, SSH key based handshake with github - https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh
  - This involves generating an SSH key on your computer, and then copying the relevant public key info into your github profile
  - Navigate to a folder via terminal as to where you'd like to store ALL these projects this semester
  - for me that's `cd ~/Documents/git/edtechjoker` but you can name it whatever makes sense to you
  - protip: `mkdir -p ~/Documents/git/edtechjoker` will automatically create the repo path on MOST operating systems
  - in that folder, run `git clone git@github.com:YOURUSERNAME/YOURREPO.git`
  - `cd YOURREPO` to get into this git repo
  - if you have all the dependencies installed, you'll now be able to run open-wc using the "`n`ode `p`ackage e`x`ecute" command aka `npx`
  - `npm init @open-wc` and follow the prompts to make a `hello-world` element (I'll do this in class)

- Resources to help
  - Me installing a whole bunch of stuff and explaining it -- https://www.youtube.com/watch?v=r_mio0e6v1g
  - Lit playground - https://lit.dev/tutorial/ interactive tutorial (make sure it's in JS and not TS mode) - 
  - Lit docs - https://lit.dev/docs/ (the library used by open-wc)
  - Open-WC docs - bookmark for later / powerskim as this will be more about immersion in the field than "getting it" all -- https://open-wc.org/docs/ 
- Expectations:
  - Using this tooling I want you to make an element named hello-world / some boilerplate name of your choosing
  - Your element should resemble 1 of the following:
    - https://lit.dev/playground/#sample=examples/full-component (simple)
    - https://lit.dev/playground/#sample=examples/motion-simple (do this if you're used npm previously)
    - Make sure you toggle from "TS" to "JS". We will minimize our usage of TS (TypeScript) and will focus on JS (JavaScript)
    - ![image](https://user-images.githubusercontent.com/329735/149159596-7eaed586-4ba2-46db-86a7-11a3274b83ed.png)
  - put this element in version control and push it up to github
  - Write a blog post on this process on dev.to that includes the following:
    - Screenshots and links to other spaces and videos that helped you learn how to do this
    - What NPM is, why developers have landed on this convention, what does it provide you the ability to do on the web?
    - Links to Lit, open-wc and other resources you used in order to solve this lab
- Last semester Students of mine: Install docker and get a copy of HAXcms running locally on your machine https://github.com/elmsln/haxcms
  - Please help others get dependencies installed as you'll have all this from last class
  - Write up how to get docker installed on your machine
  - Use HAXcms as a backdrop (screenshots etc) so that your tutorial involves installing something real
  - Explain what docker is, why you think it's useful
  - Yes. I am very aware that I didn't cover this at all. Welcome to being the loss-leader on assignments when you've had a topic last semester. **#ThatsIST**

## Week 2 - HTML / CSS / JS fundamentals. Git, Github, Version control
## Tuesday
- We'll get into review of some code examples of the big 3 languages needed to build anything on the web
- We'll use your posts as a backdrop for understanding what and how the 1st lab was solved
- We'll get into git, github, and getting setup to do work in pairs / teams.

## Wednesday (no class, just messing with you)
- Stare blankly in your other classes
- Ponder deeply "I wish I had a web component that told me the number of minutes until I'm back in btopro's class"
- Make eye contact and nod w/ your current professor to indicate you weren't completely off in another world just now

## Thursday
- What are microservices? What are micro frontends?
- Why do web components come up when discussing these things?
- Lots of industry examples
- Explaining the 3 major roles for the semester / lenses that we'll have to look at things through
- Partner and team formation activity relative to this
- Looking at additional examples including time until btopro's next class tag

## Homework / Lab

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
