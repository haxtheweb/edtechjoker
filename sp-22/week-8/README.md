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

## Wed / end of class
Thursday, our guest speaker is going to be discussing Microservice architecture in the context of his work at Red Hat. Here's some things to make the most of your time and understanding of what Michael will be talking about
- Read this article by Michael - https://www.redhat.com/architect/micro-frontend-architecture
  - https://github.com/heyMP/practice-question-service is referenced within it, at least give it a browser conceptually. You don't have to spin it up.
- Start exploring https://vercel.com/ as we'll be using it for Lab 8 and the final project.
- Get your vercel account hooked up to your github account
- Install the Vercel CLI via npm - https://vercel.com/cli

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
  - This is an "environmental variable" file. This is a common thing on these sorts of service to keep security sensitive variables out of version control
  - You'll notice that my `.gitignore` file has this file ignored. Vercel stores these variables and you can edit them via a UI for your project in the future -- https://vercel.com/docs/concepts/projects/environment-variables (this is how they deploy your project from a public repo while using secure public key values)
- `npm install` and then run `vercel dev` in your repo
- if this works, you should get the same little weather "app" and comment "app" running locally
- Explore what's going on in the `/api/` paths as this is the "magic" of vercel from a developer experience. It Just Works (tm) to publish an infinitely scalable http://expressjs.com/ based webserver end point.
- **Make sure you get this working as the final project will be based on something like this as a starting point**

## Practicing another example w/ vercel
- https://vercel.com/docs - read the docs; hit the "Show more" button to find an 11ty based tutorial. Use this to deploy a new 11ty based project to vercel
- Using this as a model, now deploy your other 3 projects via Vercel (this should require 0 configuration and is mostly just hitting buttons in a UI)
- **This is another example why we need the conceptual model of what's going on in the future because this technology just came out and just eliminated the tedious github actions setup from the previous week.**

## Submitting the lab
- Write a dev.to article about Vercel based development workflows
  - Your article should include links to things Mike discusses in class as far as the context this platform / product is situated within
  - Your article should include a write up on your understanding of vercel, Functions as a service architecture, and how to get started with vercel via docs / commands
  - Include links / screenshots of your 11ty site(s) published using Vercel and how easy it is to do so
  - Include links / screenshots of your `ist-vercel-demo` site that's using the environmental values to build successfully
  - Compare this approach to other CI/CD pipeline approaches as far as DX (Developer eXperience)
  - Bonus: +1% Fork the https://shoelace.style repo and get it linked up to your Vercel account. Add into your article a write up of how Shoelace uses Vercel to deploy builds per branch 
- Submit your article by **Sunday March 13th** finish before spring break or after, no concern to me timing wise.
- This is a critical piece of tech to comprehend how to use it. While simple, this is going to form the basis for our final project in this course (worth 40% of the grade) in which we'll be using Vercel to build a micro-frontend to prototype solving a problem within the HAX ecosystem.

## Week 9 - Cruising on a boat or sleeping; however you recharge
- 2019 edition, not 2020 edition 😬
- In 2020 when I wrote this on a slide I made a joke about "if you don't all get sick over break and they let us come back here, we'll be working on...."
  - Someone must have not realized it was a joke.
- who knows, there might even be more favorable teaching constraints when we get back this time.. 🙏
