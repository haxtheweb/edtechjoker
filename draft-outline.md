# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.
- [Prerequisit concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4) - This playlist has lots of things broken down in a lot of detail. Need a lecture on HTML/CSS? Headless? JS? CMSs? Other things? This playlist has custom and community sourced things to help
- [week / lab 1](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-1)
- [week / lab 2](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-2)
- [week / lab 3](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-3)
- [week / lab 4 / 5](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-4-5)
- [week 6 / 7](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-6-7)
- week 8

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

### Feedback on NASA solution
- I'll give feedback / review some solutions to the NASA lab from 2 weeks ago
- Grades will be available in Canvas for this by class w/ feedback per team there

### Feedback on 11ty / docker labs
- 11ty - there were **3 sites that should be self-building on github via github actions**. If you didn't get 3 into your blog post, you should look into correcting this. Here's a post that has 3 in it that all have their own repo + have CI/CD wired up + even solve some CSS / path issues that site 2 could have.
  - https://dev.to/mayormaier/how-to-build-powerful-sites-from-scratch-with-11ty-1lpa
  - if you don't have a `.github/workflow/main.yml` file then you're doing CI/CD wrong (or not at all)
  - just say'in: I'd recommend fixing these if you'd like full credit for this lab.
- docker - uptake on this was much higher. If you didn't turn it in yet I highly recommend running through the lab and doing so. https://dev.to/erikgraybill/creating-a-dockerfile-for-an-application-5i0 is a decent step through of what's involved in making the lab work and then **an example dockerfile that would build your NASA project**

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
- IST Hello world - https://github.com/btopro/ist-vercel-demo
- Shoelace design library uses Vercel as well - https://twitter.com/claviska/status/1489659763197624326

## Homework / Lab 8
- Clone the `ist-vercel-demo`, spin it up and get your github account connected to the vercel service
- there is a `.env` file needed for this to work locally. create a `.env` file in the git repo you cloned down locally
- Add this as the contents of this file: https://gist.github.com/btopro/96bfbd6a5673b98d03d9f64b8f5c5c60
- `npm install` `vercel dev`
- if this works, you should get the same little weather "app" and comment "app" running locally
- **Make sure you get this working as the final project will be based on something like this as a starting point**

## Practicing another example w/ vercel
- https://vercel.com/docs - read the docs; hit the "Show more" button to find an 11ty based tutorial. Use this to deploy a new 11ty based project to vercel
- Get this 11ty based repo hooked up and add in your blog posts as you did in the 11ty lab but now Vercel will handle the CI/CD pipeline more or less automatically
- This is another example why we need the conceptual model of what's going on in the future because this technology just came out and just eliminated the tedious github actions setup from the previous week

## Submitting the lab
- Write a dev.to article about Vercel based development workflows
  - Your article should include links to things Mike discusses in class
  - Your article should include a write up on your understanding of vercel, Functions as a service architecture, and how to get started with vercel
  - Include links / screenshots of your 11ty site built using Vercel
  - Include links / screenshots of your `ist-vercel-demo` site built
  - Compare this approach to just using github directly as far as configuration, ease of use, etc
  - Bonus: +1% Fork the shoelace.style repo and get it linked up to your Vercel account. Add into your article a write up of how Shoelace uses Vercel to 
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
