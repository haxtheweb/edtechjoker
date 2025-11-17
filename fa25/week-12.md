# Coding in the world / outside of class
Seminar tonight about open source involvement which can count toward 5% of your grade for attending the lecture and participating in the small UX study we'll be doing and asking questions. Afterwards, write up your experience / what you did and get credit. 6-7pm tonight in Westgate E205

# Week 12 - Project 2 - site analysis and construction

## Overview
- It is common when looking to build websites to analyze competitors. What they are doing right, wrong, and areas for improvement.
- Building on the past ice-planning app scope, as well as the API loading image gallery scope, we're going to analyze a site for a client
- The goal is to identify strengths, weaknesses, and then architect a competing solution utilizing a newer approach to development

## Sports Association Website (Situational context, totally not real)
The youth sports market vertical is ripe for revenue generation. Parents demand high qualiy web tools to go along with the overprofessionalization of youth sports. Given this space that our VCs have connections to in order to pour cash in to generate endless cash off of parents love and excess resources, combined with your demonstrated ability to deliver web projects in the past, we feel it is critical to build web properties that sell parents on youth sports. This tool is not a direct to consumer, but it is direct to non-profits who need these tools to promote their brand awareness and image. That image of taking sports seriously can lead to higher revenue streams for the non-profits and more sustainable associations. We are building a marketing conglomerate in order to tap into this multi-billion-dolloar youth sports industry.

Target website we are trying to analyze, improve upon, in order to pitch to our VCs that wek now what we're doing is this - https://www.scyiha.org/

You can't copyright UX or Design, however we do want to ensure we're not just directly copying this brand so we'd ask that you use AI in order to generate assets related to the fictional sports association of your choice.

# High level Fun for your team
- Create a name / brand for your project team as well as for the fictional association you are building a brand towards
- This is pod based work; work in pairs (no more than 4 to a pod)
- In this instance, we will expect to see commits to multiple repositories / forks of those repositories and getting contributions back into the same space.
- If leveraging the same repo and using branches makes more sense to you then you are able to do so

## High level Requirements
- Creating a highly functional prototype homepage. Only 3 pages below the top level need to work (an approach known as routing), but there should be mock content that appears functional
- Needs to be built using Vercel, DDD design system, HAX CLI, all the tools we've been using
- Needs to be accessible, mobile responsive, dark mode responsive
- Needs to be built using multiple web components. These components can be drawn from npmjs.com / repurposing past work (like `@haxtheweb/simple-cta` for example: https://www.npmjs.com/package/@haxtheweb/simple-cta) or be custom build for the project

## Digging into requirements
- You must have a top level menu that expands and collapses to illustrate many additional menu items
- You must have colors and branding for your fake sports association which leverages DDD colors to form a pallet and AI for logo generation
- You must map out in the existing website, what could be a reusable block, and your app must have at least **10 reusable components**
- You must load data for the 'schedule' from an `/api/schedule` based vercel endpoint. This data can be a static JSON file as before, or come from a calendar API if getting tricky. Regardless, there must be a band of rendered elements showcasing the up-coming games for the organization in question
- You must meet all of the high level requirements above
- You must have a header, footer, all of the types of "bands" of content that exist in the site you are reviewing
- You must create your own brand to stick with consistency in colors, logos, etc
- Fonts must come from DDD
- Spacing, sizing, borders, padding, etc must all come from DDD
- You must style and present multiple links to other areas of content
- The content you are linking off to should be logical
- At least 3 of the links need to be clickable and engage in a technique known as "Routing". Routing is where when the URL changes, the website loads different content. This is similar to the starting point concept with your image gallery and the `?image=56` in the URL but think of it like `?page=parent-info` to load the parent-info content
- Menu content must be loaded from `/api/menu` and be a simple JSON structure to present links and headings in the appropriate order, and leverage a version of https://github.com/haxtheweb/json-outline-schema 

# Research check in
- This week's check in is research based. Analysis of the initial website, forming your team as well as association content, What exists currently
- We will do whiteboarding in class and need to submit photos breaking down and analyizing each part
- Where can we generate 10 components from this 'app'? What are they named? How do we effectively divvy them up amongst our development team?

# Check in 1 / 2
- progress check in
- time in class becomes analysis of the pages of this site, breaking down concepts, discovering what isn't working well with the existing and then reviewing what people are generating in class and discussing as a group

# Final project submission
- Final project timeline / dates

<img width="369" height="333" alt="image" src="https://github.com/user-attachments/assets/5fd63c02-659f-4b51-ac71-e0072556db13" />

# 12.1
- Reading through above
- Reviewing the site that exists
- Starting to explore how we break this up and establishing our brand as a company / pod as well as the target association we are geared towards

# 12.2
- Additional review of a specific aspect of this project which is the menu. Looking at [JSON Outline Schema](https://github.com/haxtheweb/json-outline-schema) as a data standard in order to turn it into a menu
- Additional review of the calendar / schedule aspect of this. How we might envision that data loading and being presented
- Model data with your pod:
  - Draw a picture of your menu and a few menu items, diagraming size, spacing, functioanlity, touch vs hover vs focus, dark mode, mobile, etc
  - How do the parts of the picture relate to data coming from a [JSON Outline Schema](https://github.com/haxtheweb/json-outline-schema) response
  - Can this response data be used to power any other aspects of your interface?
  - Draw a picture of your calendar widget, diagraming size, spacing, functionality, mobile vs desktop, dark mode, etc
  - How should data be modeled for the request to this endpoint? What information is needed? What's the simplest way of conveying this information?
- As part of attendence, submit drawings / white board postings to the day's team's thread.

# 12.3
- Additional working time together as a pod and to ask questions
- Use these class periods to get deeper feedback on your development efforts

# Homework
- See research check in details above. Needing to have screenshots, whiteboards, names, a plan for the brand
- Submit to the dropbox


