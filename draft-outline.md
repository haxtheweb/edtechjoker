# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.
- [Resource for reviewing concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4)

- [Week 1](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-1)
- [Week 2](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-2)
- [Week 3](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-3)
- [Week 4](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-4)
- [Week 5](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-5)

# Week 6: Web components === project 1

## Tues
- I'm going to go through some working examples
- I will make the card from nothing, as a web component. Follow along if you have not been able to make this work from step 0
- Project 1 is announced so you have some scope as to what your working on for it.
- Class will be a mix of demos of specific things people need help with and time to work and ask questions

## Refinement / critique / review of several high end examples
- looking over some examples generated from work in class
  - farisnif: "One thing I would like to explore more is why is HTML going in to .js files at times"
  - "please work i cry" - I'm going to show building this from 0 today. Follow along
  - https://github.com/platinumfishes/tf2-pyroland/blob/main/my-card/src/MyCard.js#L9 - I enjoy this commenting blocks of things style
  - https://github.com/Pandaalifter/openwc-chad/blob/main/src/openwc-chad.js - has some scoping correct
  - https://github.com/NewJerkey/bryce-card --> https://bryce-card.vercel.app/
- Common things asked about:
  - The rest of the class now is a web components / JS in this context. We'll read more JS and wire things together to understand them
  - Its repetition till it clicks; there's no other way
  - "I'd like a video on X" is Google. Lit.dev has great tutorials (that you were to go through). There is content all over the internet for this stuff. If a specific concept doesn't make sense after many a google and video, then I can try to help unpack; not prior to that search.
- this image means that you need the repo to not be like`my-thing/my-thing/index.html` and instead `my-thing/index.html`
![image](https://user-images.githubusercontent.com/329735/218572953-39168565-f0a5-4f00-84e2-4d7ab9348165.png)

# WATCH OUTSIDE OF CLASS PRIOR TO THURSDAY
I recorded end to end, me creating the `drew-card`. https://www.youtube.com/watch?v=mxTYv_8EPIo
Your Element should be up to where I get in this repo by Thursday in order to be on task
- vercel built, working card
- code: https://github.com/btopro/drew-card
- demo: https://drew-card.vercel.app/
- Atomic design, referenced in the video https://bradfrost.com/blog/post/atomic-web-design/

# In class Activity today (submit to the 
- We will envision the API for our card
- What is its name? How can we make it abstract and reusable
  - examples: NOT pika-chu-card. `pokemon-card` or even better `character-card`
  - `lawncare-card` not `my-card` or `mycard-2` or something meaningless
  - Semantics matter.
- If it had "properties" that we could modify and see change; what would we call them? What can be modified via a variable? What are those variables named? What do they do?
- Is there anything that could be HTML based input vs a single value? What Type is that single value?

## Project 1 - 5% of grade + the 2 home work check ins + in-class attendence (so 11% total..)
- This is really a series of homeworks which are assessed along the way to provide feedback
- There is also light reading / background info to look up
- In the end you and your partner will have (high level):
  - your own element published on npmjs.com (so 1 each)
  - an "application" that's implementing both of these elements, using vercel to build it
  - Submitted to Canvas as a link to your github repo for the "application" (knowing that if the assets aren't from NPM, it won't work)
- I'll be walking through aspects of what's required in class and leaving time for you to work on your projects to ensure you get there

## Requirements for clean up in your card (as individuals)
- clean up your code so there are no remnants of the spinning OpenWC logo boilerplate. JUST your code.
- Must implement `<slot>` tags so that you can write custom HTML content on your card in the details section
- Must implement CSS variables for changing the background
- Must have a `Boolean` that is `reflect: true` in order to toggle a shadow, color change, or style of the card
- Must have `properties` in order to change the title and sub-title
- Must use `details` and `summary` tags to do the collapse
- image / source should be a property in order to set the image
- @click event on your title that toggles it to say `Clicked` or the original title `${this._toggled ? 'Clicked' : this.title}`
- Must use `styles` for shadow scoped styles
- Buttons to modify your card, must work OUTSIDE OF YOUR CARD. `my-card` is JUST a card
- Ability to render multiple cards next to each other as opposed to below
- Leveraging `meme-maker` for your image (meaning it needs to be part of your package.json / installed / using `@lrnwebcomponents/meme-maker`) to demonstrate you understand reusing and stacking web components
- published to NPM

## Requirements for Project 1
- Both partners (or all 3) have card published to NPM
- Make a new github repo that's hooked up to vercel which is an `application` made via `open-wc`
- Install your cards into this new repo
- Write buttons into your demo for this that can do the operations to both types of card
  - Duplicate makes a copy of BOTH OF YOUR CARDS
  - title change is on BOTH of your cards
  - color and delete should also apply to both of your cards

# Thursday

- Looking at VanillaJS vs LitElement via 2 trolly tags
- moar-sarcasm - 
  - demo: https://haxapi.vercel.app/?path=/story/extra-sarcasm--progressive-enhancement
  - source: https://github.com/elmsln/lrnwebcomponents/blob/master/elements/moar-sarcasm/src/moar-sarcasm.js
  - article: https://dev.to/btopro/moar-sarcasm-plz-a-totaly-necessary-web-components-tutorial-3c51
  - property / attribute based input vs "slot"
- meme-maker
  - demo: https://haxapi.vercel.app/?path=/story/media-memes--basic-meme
  - source: https://github.com/elmsln/lrnwebcomponents/blob/master/elements/meme-maker/src/meme-maker.js

- How is `<slot>` used and how can `drew-card` benefit from it
- Implementing meme-maker into an existing project
- "Prop drilling" how wee can pass properties down between elements to use them how we want

## Activity: Reuse and refactoring
- Now it's your turn. With your peers as help as needed, implement `<slot>`, `meme-maker` and 2 new properties on your card
- let's make our cards more reusable via slot, oither people's tags, and properties.
- Anything that's specific language (Details, Drew Doughty, etc) should be a property that can be modified
- Anything that allows for any kind of HTML to be applied, should be done via a `<slot>`
- Get an account on https://www.npmjs.com/ - you don't need it to download stuff but you will for getting stuff up there later
- `npm install --save @lrnwebcomponents/meme-maker`
- get it implemented in your card with 2 properties for top and bottom text wired into it
- push your code up to Github and then drop a link to your current state of work in Canvas

# Homework
- Watch me going through doing the whole thing (if you didn't already); following along so you can meet the requirements https://www.youtube.com/watch?v=mxTYv_8EPIo
- Card should be well named, built using vercel for its demo and starting to meet the requirements outlined in Project 1
- Properties should be used to deliver the title / subtitle
- meme-maker should be implemented with properties "drilled" down from your card into the `meme-maker` image
- All CSS / JS / HTML in your card tag should be ONLY related to the card itself
- Buttons should be in index.html and wired to work in their new scoping of the element
- Anything you do beyond this meeting the requirements is stuff you can ask about
- Bring questions to class for working sessions next week of things to see demo'ed / debugged

- Skim this slide deck https://docs.google.com/presentation/d/13z_spZnGt7uIY_MjXOnqkxvMyUj6-SEV/edit?usp=sharing&ouid=100601982236009260859&rtpof=true&sd=true
  - Google **HTML DOM** (if needed) and see explainataions
  - Google **Virtual DOM** and see explainataions / opinions
  - Google **ShadowDOM** and see explainataions / opinions
  - What is the difference between these three?
- Submit to Canvas dropbox: Gist; link to your github repo for your card's progression. Answer to the question above


> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
# EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE

# week 7: More project work and feeedback

## Tuesday

# Crit
I'll be reviewing some well made examples and providing feedback for the class

# Custom Events
- We're going to peg the collapse to a stateful variable so we'll add a `expanded` variable to our element
- We're going to make a custom event for when the state of the collapse changes
- We're going to make an event listener for the custom event so that our Button's label updates to match

## CSS Variables and Shadow Parts
- We're going to reflect an attribute and change styles based on toggle status
- We're going to look at how to name and leverage css variables to allow others to influence our design
- We're going to see what a CSS Shadow `part` is and how to style using them

## Activity
- Time to implement custom events
- Time to implement CSS Variables / shadow parts
- End of class, turn in status check in into Canvas dropbox

## Thursday

### Publishing to NPM
- Now it's time to publish our code to NPM
- Now it's time to make another repo
- In this other repo, it's time to pull in our 1st code that was published and build upon it
- This is the feedback loop with web components and all web development going forward

## Activity
- Get your element code published to NPM
- Start a new repo and start implementing your code inside of it
- End of class, turn in status check in into Canvas dropbox

## Homework
- Read https://dev.to/oxharris/rethinking-the-modern-web-5cn1
- Read https://infrequently.org/2023/02/the-market-for-lemons/
- Watch this debate to understand a React worldview vs a Web component / platform worldview from two titans https://www.youtube.com/watch?v=ChfjZV-aA_Y
- Write a follow up response on dev.to from the perspective of a new developer in the field
  - What is confusing about platforms?
  - What did you find easiest to work with on 1st stab? (You don't have to say web components, this is an honest take, if it was Vue cool, but justify it)
  - Think back on the tooling. What parts were confusing? What clicked?
  - What additional reading to you have to do in order to make sense of things.

## Week 6-8: Web components (project 1)
- OpenWC specifically running through the cli and making a new project to collaborate on GitHub. Reading the lit docs
- CSS in ShadowRoot, prop drilling, leveraging existing packages
- Publishing to NPM

## Mid-term exam - Week 8 we'll have an exam
- Anything from slides is fair game
- Anything from readings is fair game
- Anything produced in class or part of class is fair game
- The internet exists; it will also be fair game
- Google also exists, so it will also be fair game (for you)

- Project 1 is due at the end of this week
- Use this time to catch up / clean up past assignments you may have missed and refine your project 1 submission to maximize points
- This will be graded with more scrutiny than things leading up to it

## Thursday
- This is open office hours. If your having issues with your code come get additional help from our TA


## Week 9: Spring Break

## Week 10-11: Micro frontends (project 2)
- Vercel and project publishing and communication
- Creating an API endpoint to return data
- Creating a basic web component to render data from an end point using fetch to obtain information

## Week 12 – 16: Final Project
- Final projects laid out. Lectures / lessons / code reviews still happen but are more focused on ways of helping pairs complete the project in question.
- Scope / requirements of each project will vary. Students will pick from one of a variety of options
- https://github.com/elmsln/issues/labels/7B
- Check ins / progression expectations each week
- MobX / State management practice
- Routing
- localStorage
- Peformance enhancements

## Week 17: Final project due Tuesday of Finals week
- Class held for last minute office hours / debugging
