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
- [Week 8](sp25/week-8.md)
- Week 9 - Spring Break


# Week 10
## Recap - you are doing 1 of these 2 projects.
- https://github.com/haxtheweb/issues/issues/1764 - common capability that we find in most email clients
- https://github.com/haxtheweb/issues/issues/1464 - community building RPG character

## Commonality between these is `fetch` and json
- If you are using Chrome (which I recommend) then you should get the [JSON Formatter plugin](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) it helps visualize JSON structures more easily in the browser to understand how to go through the data
- We need to use `fetch` to obtain data - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Hints
- RPG hint: https://codepen.io/btopro/pen/VYwbLoa (don't reference the asset this way but this is how the html ends up working)
- URL parse hint: https://codepen.io/btopro/pen/XJWRmrw?editors=1010

## Example repos using fetch
- past versions of the class built this: https://github.com/btopro/nasa-search
- fetching data from a remote source -- This is JSON data https://images-api.nasa.gov/search?media_type=image&q=Saturn
- https://github.com/btopro/nasa-search/blob/main/nasa-search.js#L58-L105 - here's how the feedback loop works between user input, triggering fetching data, and then obtaining the results and printing them out.

## Code review
Examples from both. Even if it's not yours, follow along because it can still provide insight into syntax and approaches
## link card metadata
- https://github.com/PlayGamesMakeGames/link-preview-card -- beyond requirements, needs styling, needs refactor but worth discussing
- https://github.com/BetaGam3r/link-preview-card - great looking solution we will review

## rpg character community visualization
- https://rpg-contributers.vercel.app/ - there's no code and it's not a valid web component, but it should end up looking at least something like this
- https://github.com/eman1230/ist256project1 - incorrectly named, still some work to do but a REALLY strong solution thus far!

Ask questions, and yes, you can leverage both of the reviewed current projects to help you make your own code better. A direct copy and paste no and a single commit that just does everything that they did exactly like they did... no. But the methods, render method, styles, etc are all really well done and should be a model you can copy in general to get to the solution rapidly!
