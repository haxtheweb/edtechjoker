# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.
- [Resource for reviewing concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4)

- [Week 1](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-1)
- [Week 2](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-2)
- [Week 3](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-3)
- [Week 4](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-4)
- [Week 5](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-5)

> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
# EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE

# Week 6: Web components === life === project 1

## Refinement / critique / review of several high end examples
- looking over some examples generated from work in class
- Common things asked about:
  - The rest of the class now is a web components / JS in this context. We'll read more JS and wire things together to understand them
  - Its repetition till it clicks; there's no other way
  - "I'd like a video on X" is Google. Lit.dev has great tutorials (that you were to go through). There is content all over the internet for this stuff. If a specific concept doesn't make sense after many a google and video, then I can try to help unpack; not prior to that search.

## Project 1
- This is really a series of homeworks which are assessed along the way to provide feedback
- There is also light reading / background info to look up
- In the end you and your partner will have (high level):
  - your own element published on npmjs.com (so 1 each)
  - an "application" that's implementing both of these elements, using vercel to build it
  - Submitted to Canvas as a link to your github repo for the "application" (knowing that if the assets aren't from NPM, it won't work)
- I'll be walking through aspects of what's required in class and leaving time for you to work on your projects to ensure you get there

## Requirements for clean up in your card (as individuals)
- Must implement `<slot>` tags so that you can write custom HTML content on your card in the details section
- Must implement CSS variables for changing the background
- Must have `properties` in order to change the title and sub-title
- Must use `details` and `summary` tags to do the collapse
- image / source should be a property in order to set the image
- Must use `styles` for shadow scoped styles
- Buttons to modify your card, must work OUTSIDE OF YOUR CARD. `my-card` is JUST a card
- Ability to render multiple cards next to each other as opposed to below
- published to NPM

## Requirements for Project 1
- Both partners (or all 3) have card published to NPM
- Make a new github repo that's hooked up to vercel which is an `application` made via `open-wc`
- Install your cards into this new repo
- Write buttons into your demo for this that can do the operations to both types of card
  - Duplicate makes a copy of BOTH OF YOUR CARDS
  - title change is on BOTH of your cards
  - color and delete should also apply to both of your cards

## Technique practice
- Leveraging the work of others - Pulling in Web components from other people via NPM
- Get an account on https://www.npmjs.com/ - you don't need it to download stuff but you will for getting stuff up there
- Enhancing your card to use Slots, properties, CSS variables, parts and more

## Activity 1: Combining elements into a single repo
- `file-name.js` === `element`
- As a result, I want you to create a new repository and combine the two cards into it
- Implement both within your demo
- You might want to give ownership of the repo to both people (so your aware of permissions delegation later)

## Activity 2: Reuse and refactoring
- Enhancing your card to use Slots, properties, CSS variables, parts and more
- No one makes things from scratch (unless they have to)
- let's make our cards more reusable via slot, properties, and css variables

# Homework
- Review this slide deck https://docs.google.com/presentation/d/13z_spZnGt7uIY_MjXOnqkxvMyUj6-SEV/edit?usp=sharing&ouid=100601982236009260859&rtpof=true&sd=true
  - Google DOM (if needed) and see explainataions / opinions
  - Google Virtual DOM and see explainataions / opinions
  - Google ShadowDOM and see explainataions / opinions
  - Write a definition of each, how they differ and link to an example pen / article to learn more / where you got this understanding from
  - Which is fastest? Is there a fastest?
  - Which approaches work across frameworks vs are framework specific? 

- Code is only as good as it's reusable / packagable / modifiable by others when it comes to open source
- My team has made a huge library of icons. I want you to implement our team's icon library

# week 7: More project work and feeedback

## Homework
- Read https://dev.to/oxharris/rethinking-the-modern-web-5cn1
- Write a follow up response on dev.to from the perspective of a new developer in the field
- Think back on the tooling

## Week 6-8: Web components (project 1)
- OpenWC specifically running through the cli and making a new project to collaborate on GitHub. Reading the lit docs
- CSS in ShadowRoot, prop drilling, leveraging existing packages
- Publishing to NPM

## Mid-term exam - Week 8 we'll have an exam
- Anything from slides is fair game
- Anything produced in class or part of class is fair game
- The internet exists; it will also be fair game
- Google also exists, so it will also be fair game (for you)

- There is no homework this week, or class on Thursday however project 1 is due at the end of this week
- Use this time to catch up / clean up past assignments you may have missed and refine your project 1 submission to maximize points
- This will be graded with more scrutiny than things leading up to it
- - **Thursday prior to spring break there is no class**


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
