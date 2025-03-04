# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Past weeks
- [Week 1 & 2](sp25/week-1-2.md)
- [Week 3](sp25/week-3.md)
- [Week 4](sp25/week-4.md)
- [Week 5](sp25/week-5.md)
- [Week 6](sp25/week-6.md)
- [Week 7](sp25/week-7.md)

# Week 8 - Its go time

## Project Zer0
- The course lists 2 projects. Project Zer0 is effectively a few homeworks strung together as check ins.
- This is to provide a stepping stone into bigger projects
- This is also graded much less harshly
- Talk to the people around you and agree upon which of these projects you want to work on.

## Projects to choose from
Both of these Render data from a remote source via `fetch`. They are comparable scope, pick the one that you want to. One involves reading through a single data item and designing for it. The other involves looping through an Array of data and using form inputs to allow people to change the data visualized
- https://github.com/haxtheweb/issues/issues/1764 - common capability that we find in most email clients
- https://github.com/haxtheweb/issues/issues/1464 - community building RPG character

## Commonality between these is `fetch` and json
- If you are using Chrome (which I recommend) then you should get the [JSON Formatter plugin](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) it helps visualize JSON structures more easily in the browser to understand how to go through the data
- We need to use `fetch` to obtain data - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Hints
- RPG hint: https://codepen.io/btopro/pen/VYwbLoa (don't reference the asset this way but this is how the html ends up working)
- URL parse hint: https://codepen.io/btopro/pen/XJWRmrw?editors=1010

## Example repo using fetch
- past versions of the class built this: https://github.com/btopro/nasa-search
- fetching data from a remote source -- This is JSON data https://images-api.nasa.gov/search?media_type=image&q=Saturn
- https://github.com/btopro/nasa-search/blob/main/nasa-search.js#L58-L105 - here's how the feedback loop works between user input, triggering fetching data, and then obtaining the results and printing them out.

# Check in 1 due March 16
- Check in 1 is a status check to see how far you've gotten on the project
- You should have an element up on vercel / github that is rebuilding automatically
- You should have `fetch` connecting to obtain data
- You should have at least a starting point for your demo that is functioning

You will have time in class Thursday then the following Tues/Thurs after break. The goal is to turn in Project Zer0 March 23rd. The best solutions will be shown in class and we'll start into Project 1.
