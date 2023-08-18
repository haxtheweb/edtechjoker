## Week 10: Micro frontends (project 2)

# Guest lecturer
EdTechJoker

### Overview
- Vercel and project publishing and communication
- Creating an API endpoint to return data
- Creating a basic web component to render data from an end point using fetch to obtain information

## Tues
- Discussing project two and the notion of micro front ends to get there
- [Project 2](https://github.com/elmsln/edtechjoker/blob/master/sp-23/projects/project-2.md)
- Playing with and deploying example from a previous IST class

## Activity to get some base concepts
- EVERYONE. Make a new repo off of https://github.com/btopro/ist-vercel-demo
- Deploy to vercel
- While that's happening, git clone it to your computer
- run `npm install` then `npm start` then open another terminal and run `vercel dev`
- Some parts won't work, some will (That's fine, it's to have a copy for the time being). it's more important to have something to trace and see the flow of information

## In between class
- Keeping up with industry arguments: https://eisenbergeffect.medium.com/about-web-components-7b2a3ed67a78
- Why people keep writing long artitcles like this is bc of statements like this are rampant https://twitter.com/dannymoerkerke/status/1635387397105139713
- Watch this video to understand what's going on here but with a different example from scratch: https://www.youtube.com/watch?v=tgZKpJhQ7os
- We are building the front end to be more robust than this example but the same concepts apply
  - Front end asks for data or user has input
  - `fetch` hits vercel `/api` and processes information
  - response sent back and front end does something with it

## Thurs
## Follow along demo 1
- https://github.com/elmsln/ip-project - IP Project (ignore odd name) is a demonstration of loading JSON data and running a `map` to present it in 2 different ways
- follow along through the code to see how they relate.
- Data is loaded when clicking the button
- `fetch` obtains the data from a `.json` file
- that data is loaded from the file and converted into an `Array` of `Object`s
- Lit then sees the `Array` of items change and automatically re-renders the data 🤯

## Follow along demo 2 - Adding environmental variables to play along
- We need to add environmental variables in order to make this work. For the purposes of this being easy, I will give you 3 key pair values in discord (if they are made public it'll get the repo potentially shut down hence I can't include them)
- Go to your project on vercel.com and find Settings -> Environment variables
- See the thread I made on Discord for 3 settings to put in place. Make sure you mark them as Production, Staging AND Development
- Save. Now go to a terminal prompt for your fork on your local computer
- type: `vercel pull` and then `vercel dev` from the git repo on your machine
- You should have the weather in Pittsburgh and a few other cities as well as a busteed looking comment thread
- these just loaded from endpoints in vercel!
- Let's say hello. http://localhost:3000/api/hello?name=Bob (you may need to hit CTRL + Shift + R to make it show)
- Look in the `/api` directory to find the associated file `hello.js`
- Now we'll look at the other calls in the "app" to see how they work with the network trace tool
- Understanding what Vercel Magic is happening w/ Lambdas and JSON responses
- Vanilla-ish which is why I have adopted (and what my definition of that is)

## Activity about Project 2 Comps
[Project 2 Requirements](https://github.com/elmsln/edtechjoker/blob/master/sp-23/projects/project-2.md)
- Starting the spec work of scoping the front end assets
- Take 15 minutes and start doing this with your partner / people around you if they aren't here
  - What can we make an element? How many elements are there? What are their scopes? (Card vs Card list vs icon. things like that)
  - What should it be called?
  - What properties / data need exist and what types?
  - If input could be flexible, what is a good name for the slot. Does it have more than 1 slot?
  - What fake data / what's some example data we could use to power this? We want to print at least 8 items so we have robust example output
  - What should the endpoint be name to be logical? `/api/whatever`
- From this, we will collectively agree upon a contract for each option of the project (as well as see the overlap)

## Homework
**this is 1 submission per group**
**NOTE** Homework is two parts. You are using Project 1 as a basis to do this homework. *project 1 and project 2 are NOT building on each other*. The meat of your article is about this new project you are starting.

## HW Part 1 - coding (as concept practice)
- Due to limitations in vercel, you'll have to run vercel builds / wire it up to your personal forks
- A way to side-step this is 1 person hooks Vercel up to their account, everyone else gets writes on their repo and then works within branches or forks off of them
- Have 1 partner start the repo and then you contribute to their repo. Commit logs later prove you both worked on it (dont worry about credit)
- Repo to pattern off of -- https://github.com/btopro/drew-card
- Watch / follow along with this https://youtu.be/b7dcEM8qYNo -- I recommend getting together with your partner to both watch / implement and pair-program your way to victory
- You are free to use your `card-list` repo or create a new one, or edit one of your card repos to make it work like this. Do whatever makes the most sense to you as this is practice for when we do it for project 2
- Following along, make a repo that is able to take your card (1 of them) and then print a listing of them.
- So instead of you hard coding the `drew-card` 5x to get 5 of them. I want you to use a `map` method as shown in the video, in order to print 5 cards from an `Array` using vercel's `/api` capability in order to achieve this.

## HW Part 2 - writing -- Blog post check in: Scoping Project 2:
- Writing the 1st article in a series about the scope of what your going to be building
- Include images of how you are conceiving the API for the elements involved and the names
- What properties do you think you'll need
- What sort of information will need to come from the backend to make this work?
- Either using a screen cast, taking screen shots, links to your code, show how you'll apply concepts from the Homework
- Relate it to what you'll have to do in order to pull this off for Project 2
- Article one is a focus on scope and the activity we did in class. What is the project, what will things be named, how will you initially conceive of attacking the problem

This is worth 3 points; much like last project though, HW's will help in completing the project more easily while comprehending what's going on along the way.

If division of labor helps you through this, 1 person "Drives" and does the coding while another watches and helps offer feedback. At that same time, the 2nd person is the one doing the article writing and making sure that blog post 1 makes sense. **if there are people not participating I am aware and will divide appropriately**
