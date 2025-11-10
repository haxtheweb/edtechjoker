# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Tutoring support on campus
TAs have office hours and we use time in class for help too, but https://ist.psu.edu/learning/tutoring/university-park is also available.

# Past weeks
- [Week 1 and 2](fa25/week-1-2.md)
- [Week 3](fa25/week-3.md)
- [Week 4](fa25/week-4.md)
- [Week 5](fa25/week-5.md)
- [Week 6](fa25/week-6.md)
- [Week 7](fa25/week-7.md)
- [Week 8](fa25/week-8.md)
- [Week 9](fa25/week-9.md)
- [Week 10](fa25/week-10.md)
- [Week 11](fa25/week-11.md)


# Coding in the world / outside of class
Seminar tonight about open source involvement which can count toward 5% of your grade for attending the lecture and participating in the small UX study we'll be doing and asking questions. Afterwards, write up your experience / what you did and get credit. 6-7pm tonight in Westgate E205

![UX Study ICDO x HAX](https://github.com/user-attachments/assets/785af92e-5dce-4d33-9556-b258484d433c)


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
- Additional review of a specific aspect of this project which is the menu. Looking at JSON Outline Schema as a data standard in order to turn it into a menu
- Additional review of the calendar / schedule aspect of this. How we might envision that data loading and being presented

# 12.3
- Additional working time together as a pod and to ask questions

# Homework
- See research check in details above. Needing to have screenshots, whiteboards, names, a plan for the brand

