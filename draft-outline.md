# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.
- [Prerequisit concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4) - This playlist has lots of things broken down in a lot of detail. Need a lecture on HTML/CSS? Headless? JS? CMSs? Other things? This playlist has custom and community sourced things to help
- [week / lab 1](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-1)
- [week / lab 2](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-2)
- [week / lab 3](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-3)
- [week / lab 4 / 5](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-4-5)
- [week 6 / 7](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-6-7)
- [week 8 / break](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-8)
- Week 10
- Final Project directions
- Week 11
- 
# Week 10 - Vercel === magic 🪄 and setting up for the final project
## Tuesday
- Welcome back!
- I'll be doing a walk through of how the vercel file structure works and what is going on with this demo that has me lit
  - demo: https://ist-vercel-demo-gamma.vercel.app/
  - code: https://github.com/btopro/ist-vercel-demo
  - backend: (cheating... for sure) https://jsonbin.io/
- Guest lecture: edTechJoker 🃏 😕
  - edTechJoker is going to talk about life, the way forward, research, and activism
  - This establishes the final project

## Thursday
- Reading through more of the requirements so we're on the same page
- Thursday to start class, you'll have selected the project you want to work on
- We'll start doing some prototyping in class on paper / tablet / figma / XD / however you prototype things
  - Need to diagram the relationship between front end and back end via box diagrams
  - Need to start to draw the front end, pointing out how different aspects of it are handled visually
  - What does the API look like?
  - What data does the front end have that the back end needs?
  - What information does the back end need to bring to the front end?
- The goal of this initial rough work is to have...
  - the front end team envision what it might look like
  - the back end team envision what calls their might be to power data of the frontend prototype
  - the API team to refine and envision what the call structure for the API looks like
- Ask questions, refine the needs
- Week-end check in
  - Due to limitations in vercel, you'll have to run vercel builds / wire it up to **your personal forks and NOT the organization**
  - A way to side-step this is 1 person hooks Vercel up to their account, everyone else gets writes on their repo and then works within branches or forks off of them
  - A repo in 1 team member's account for the doc site you are going to maintain in 11ty
  - A repo in 1 team member's account for a USE AS TEMPLATE of https://github.com/btopro/ist-vercel-demo renamed to be related to your project
- **Sunday night by Midnight**: Submit to the #edtechjoker channel a link to your working 11ty documentation space with the following in the site
  - a section describing the project / linking to the issue you selected
  - a section linking to your fork of the repo, the repo powering your 11ty site
  - a "Notes" section that says Week 10, and has images of the mock ups, details that you teased out in class Thursdauy, any notes your team generated, as well as questions and next steps

### Final project general requirements
- Your team will have the rest of the semester to develop a fully working, well documented, promoted (via doc site / blog post), vercel based micro frontend
- We'll use Vercel to deploy final projects (and learn about it as we go)
- You'll get time to work in class with the expectation that code is submitted with each weekly check in
- I'll then review anything submitted and use it as a basis for discussion in class
- They'll all be written in JavaScript and are vercel based so we'll have lots we can learn from each other
- There will also be peer review / critiques during these times
- Homeworks will be a check in / milestone marker expected to be hit and a status update turned in
- Check ins will account for 10% of the course and doing them will keep you and your group on pace to finish the project on time while meeting all requirements
- You'll be tasked with reading through and selecting one of the following projects to work on: https://github.com/elmsln/issues/labels/6H%20Class

### Final project, specific requirements
- Each element / micro has specific requirements for construction
- These requirements must be met in addition to the general ones
- Each project must maintain an 11ty based documentation site in another repo
- Each team must have weekly check ins and meet regularly to communicate status updates throughout the project
- Each project must include an OpenAPI 3.0 spec document for it's APIs (this is research based though I will demo in class / step through)
  - https://editor.swagger.io/
  - https://swagger.io/specification/
- Each project must have more than 1 microservice and should have as many as the specific project indicates (or more if discovered)
- Each project must store data in a data storage engine; though a walkthrough of jsonbin.io which is free will be shown, other solutions can be researched and leveraged as desired
- Each project must be able to demonstrate it's capabilities via demo
- Each project must have web components, usually multiple working together
- The way of invoking a new version of the micro frontend must be by writing 1 tag, which should be demonstrated multiple times in the demo (example; `fun-word-game-app`)
- Additional requirements / refinement will come as we go

### Data store
- Because of freeness, jsonbin.io is hooked up in the example repo
- Planetscale is another potential option (see db.js) which has higher scale and using SQL. It appears to be free for a single account and I found this library that makes it really easy to connect to: https://github.com/planetscale/planetscale-node
- It also has click to integrate vercel integration. -- https://docs.planetscale.com/tutorials/deploy-to-vercel
- And here's a tutorial on planetscale for how to use their CLI to build a little connector via a Node app https://docs.planetscale.com/tutorials/connect-nodejs-app
- can use the CLI too so that you can build your database: https://github.com/planetscale/cli

## Final project Rubric 40% of semester grade
- Weekly check-ins. 5 check ins, 5% total
- Final result matches the composite / issue selected, is polished, demo / code works, is error / console free and can be forked and replicated - 20%
  - this will include specific requirements based o# Week 11
## Tues
- I'll review the 6 project sites for what work was generated Tues and offer feedback / discuss in class
- Front end team should start experimenting with how to build the front end piece to this
- API people should be researching Open API specification, naming the "end points" and listing out what data is required
- Back end team should start experimenting with Express based end points / vercel more directly. Reading the docs, reverse engineering the IST demo space I created as a boilerplate for learning about all this.n your individual project
- Project is well documented via 11ty site - 10%
  - site is autobuilding on github via actions or vercel
  - Site includes the following material:
    - **Link to a swagger / OpenAPI 3.0 spec document used to build your APIs**
    - links to background material on the project, lit, vercel, hax, etc
    - links / short "Who made this" section to pump your SEO / give you something to point to
    - Repo links, links to the original issue being solved
    - Documentation on how the microservice works. What the API end points are. What is required to leverage them. How the code leverages them
    - Visual documentation of the different states your micro frontend can be put in. Getting data, adding data, etc.
    - This should fully explain to someone who doesn't know the stack or how it's built, what it does, how to get into the code, and learn more about the project and how to play with it 
- Final presentation for feedback and to give other students a live demo - 5%
  - this serves as a final check in and is more of a live demo of capability and sharing links for the class to play with and offer feedback
  - you'll be able to use this feedback to refine your final solution submitted the next week

### Bonus:
- Add a very simple `authorize.js` end-point that sends back a hashed value. This hashed value is then sent on all other transactions for security purposes to validate that a bot isn't spamming the service but is actually using the web component to broker the connection. All other service calls then use this information to verify that this is a valid transaction +3

## Final submission
Due May 3rd to Canvas Dropbox. Link to your repo, documentation and associated demo need to be in the submission

## Final / top prize(s) ❔
Any repos that are of exceptional quality (or only needing minor tweaks for adoption) and get accepted into the HAXTheWeb portfolio of elements will get a 🏒 emoji implying that you get an official #HAXTheWeb hockey jersey. If this is the case I'll contact your team during finals week. The hope is that these element will also start showing up in the course work of your peers, future verisons of you, or in your own courses in coming semesters. This project is gaining momentum and we pipeline these enhancements directly to Penn State students, faculty and staff via the https://hax.psu.edu SaaS solution. This will not be given out to all solutions and there is no garauntee any will be given out. Last semester 2 of 11 projects got this award.

## HAX Camp PSU May 9/10
All projects would be welcome additions to discuss at HAX camp, a free event for students and industry to meet around frontend web skills -- https://www.eventbrite.com/e/hax-camp-web-components-all-the-things-tickets-288109562457


# Week 11
## Tues
- I'll review the 6 project sites for what work was generated Tues and offer feedback / discuss in class
- Front end team should start experimenting with how to build the front end piece to this
- API people should be researching Open API specification, naming the "end points" and listing out what data is required
- Back end team should start experimenting with Express based end points / vercel more directly. Reading the docs, reverse engineering the IST demo space I created as a boilerplate for learning about all this.
