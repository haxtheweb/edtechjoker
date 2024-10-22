# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Past weeks
- [Week 1 & 2 - git / intro](fa24/week1-2.md)
- [Week 3](fa24/week-3.md)
- [Week 4](fa24/week-4.md)
- [Week 5](fa24/week-5.md)
- [Week 6](fa24/week-6.md)
- [Week 7](fa24/week-7.md)
- [Week 8](fa24/week-8.md)

# Week 9 - Project 1 and last home work

# Tues
- [Project 1](https://github.com/haxtheweb/issues/issues/2174) - We will be visualizing data from an end point so that people can view the data in that end point and make decisions about it
  - It also helps you understand the idea of "headless" that data is loaded remotely via javascript from an API / backend, and then presented
  - this is how much of the modern web apps render content
  - We will do a homework with minor refactoring and data walking so you get the concept
  - Then you will have **3 weeks** to apply it to your solution for project 1
  - There will be minimal guidance beyond detailed directions
  - We will have weekly check-ins which are to monitor progress but largely a "You demonstrated progress" status checks
  - These status checks help inform the basis for discussions in class followed by time to work and build futher
  - I will give you generate "here's how far you should be". This is not "just do this 1 hour of work in class" but a time to be together so that you can get questions answered and work with peers in person. The expectation is that this is roughly a 30 hour project.

## Homework 9 (which leads into concepts in Project 1)
- https://github.com/btopro/nasa-search
- `fetch`ing data from a remote source -- This is JSON data https://images-api.nasa.gov/search?media_type=image&q=Saturn
- Fork / Follow along to understand 
- This project has the following characteristics to start:
  - it reloads the data when you type a new term
  - it renders it through an existing card

## Homework 9
- Create a new project using the hax cli `npm init @haxtheweb`
- verify you have a `.gitignore` file. if you do not on creation of your project, make that file with these contents https://github.com/btopro/nasa-search/blob/main/.gitignore
- Then delete your `node_modules` directory and commit this change to github. This way vercel can build appropriately later on.
- Build a dashboard that connects to NASA (yes, you can largely repurpose my example to do this)
- It needs to render cards that are made conforming to DDD design spec (so using DDD just like the tooling generates for the nasa-search element you are making)
- Instead of **my** NASA card, it should be an element using DDD that has the following capabilities:
  - image shown on card
  - sized to `240px` wide and a uniform height.
  - click opens the image in a new window
  - Needs to support alt data
  - Needs to support secondary_creator as far as `owner` of the media and should present it on the card as well
  - card should change color on hover
  - ability to tab to the card and hit enter to open in new window (hint. links natively behave this way)
- If you are missing any past assignments. Get them in. Week 9 is the end of assignment focus and TAs will not be focusing on past assignments beyond this point.

# Thurs
- More time to work on Homework 9 in class
- Ability to start asking questions about [Project 1](https://github.com/haxtheweb/issues/issues/2174)

# Sun
- HW 9 due submitted to canvas.
- Github link to code
- vercel code link to working demo

# Week 10-11-12
- Check ins, review and feedback / critique of submissions associated with [Project 1](https://github.com/haxtheweb/issues/issues/2174)
- End of Week 12, we will introduce Project 2 so you can choose to start on it prior to break if you desire.
# Week 13 - Turkey

# Week 14,15,16
- Check ins, review and feedback / critique of submissions associated with Project 2 (TBA)
