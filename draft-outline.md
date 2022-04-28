# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs.
- [Prerequisit concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4) - This playlist has lots of things broken down in a lot of detail. Need a lecture on HTML/CSS? Headless? JS? CMSs? Other things? This playlist has custom and community sourced things to help
- [week / lab 1](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-1)
- [week / lab 2](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-2)
- [week / lab 3](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-3)
- [week / lab 4 / 5](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-4-5)
- [week 6 / 7](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-6-7)
- [week 8 / break](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-8)
- [week 10](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-10)
- [week 11](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-11)
- [week 12-13](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-12-13)
- [week 14](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-14)
- [week 15](https://github.com/elmsln/edtechjoker/tree/master/sp-22/week-15)
- Final Project directions (see below)

## HAX Camp PSU May 9/10
All projects would be welcome additions to discuss at HAX camp, a free event for students and industry to meet around frontend web skills -- https://www.eventbrite.com/e/hax-camp-web-components-all-the-things-tickets-288109562457

# Week 16 - Live Tech demo / last week
## Tues
- Tues will be a day of in-class live tech demos.
- **Having a live, working tech demo is worth 5% of your grade**

### Group role
- All group members available for questioning
- Share link to your code repo + published vercel demo in slack channel
- Hook into the projector and get your demo all setup
- Take us on a tour of how it works
- Show the interactions leading to code running on the front end and back end for one transaction
- I'll ask questions accordingly
- Others are free to ask questions as well

### Audience role
- Click the links given out.
- Play with the demo / try to understand how it works and try to break things
- Review the code as desired
- Take the survey associated with the group after getting time to understand their work

## Order (randomly selected):
  - A: Wordle - https://forms.gle/DXieiR8V3PNHusAz6

  - E: Vocab word look up - https://forms.gle/BbpbbyqeJm6EUj6V9

  - D: Threaded Commenting - https://forms.gle/Wvz2p3eNDjRhweFL7

  - C: Wordle - https://forms.gle/8gT46E9WVGFzJ1Q5A

  - B: Vocab Word look up - https://forms.gle/qHv9CRVXNoKuAgNZ8

  - F: Who's here - https://forms.gle/AE7P3uJP9vwpbs7B7

- Overall / final survey after everyone goes - https://forms.gle/oQTLNmn8ttbVuFH97

### Requirements for tech demo
- Someone on team plugs into projector to do the live demo for everyone
- Links shared out in the slack channel to the following:
  - Link to vercel app for people to click and be able to play with
  - Link to the code repo powering the demo
- Quick description of the scope of the app and what it was supposed to achieve
- Someone gives a tour of the current state of the app so people know how to use it
- After playing with the app, A quick trace of how the app works..
  - Load the app, what files made that happen. If your code calls a vercel endpoint to load data, what happens in the front end that leads to this getting data
  - Show the code that makes the call and then show the backend code the sends the message
  - I might ask you to do this for other aspects of your app depending on how many endpoints / front end code there is.

### Rubric
- **Completely Non-functioning demos are -5. This is a live demo of a mostly functioning "app" that resembles what is expected from the requirements of the app that you picked to build**
  - This doesn't mean 1 thing doesn't work or there's a glitch. This means that it is not in a state that people can actually play with it and witness the interplay between vercel and web components.
  - **If you don't give a tech demo it's -5%.**
- Did you give out the link and app is in a state others can play with it? 2%
- Did you show code and explain how it works? 2%
- Does it achieve the majority of what it's supposed to? 1%
**This is 5% of your grade**

## Attendance for Tues/Thurs
- I will give out links to 6 unique surveys
- While in the audience, you are to play with the tech demo of the other groups
- Fill out the associated feedback survey
- This survey serves as your attendence for the week (each person will fill out 5 since you don't do your own group)
- After all tech demos, 1 last survey will be given out for overall impressions / who people thought did the best job in different categories.

## Thursday
- If tech demos run long than we'll use time on Thursday to finish them. I want to make sure everyone has adequet time to do the demos and get feedback from the class
- This will be a working day

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
  - this will include specific requirements based on your individual project
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
**Due May 3rd to Canvas Dropbox**. Link to your repo, documentation and associated demo need to be in the submission
