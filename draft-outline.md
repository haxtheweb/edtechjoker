# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Tutoring support on campus
TAs have office hours and we use time in class for help too, but https://ist.psu.edu/learning/tutoring/university-park is also available.

# Past weeks
- [Week 1](sp26/week-1-2.md)
- [Week 2](sp26/week-1-2.md)
- [Week 3](sp26/week-3.md)
- [Week 4](sp26/week-4.md)
- [Week 5](sp26/week-5.md)
- [Week 6](sp26/week-6.md)
- [Week 7](sp26/week-7.md)
- [Week 8](sp26/week-8.md)
- [Week 9](sp26/week-9.md)
- [Week 10](sp26/week-10.md)
- [Week 11](sp26/week-11.md)
- [Week 12](sp26/week-12.md)

# [FINAL PROJECT DIRECTIONS AND OVERVIEW](sp26/week-12.md)

# Week 13 - 15

## Week 13.1

# Rollup config change
Make sure to edit this to match here -- https://github.com/igasparraj16/project-2/blob/main/rollup.config.js#L28

## Class activity
- name all your components both as human name and machine_name (example: Top bar - olympic-ironing-top-bar)
- write them out, discuss, agree upon a consistent naming convention for them
- what are some properties they have? Do they have slots? How can you repurpose this tag? Is it part of the overall interface or specific to a single page?
- What DDD colors will they use? Does it need to be responsive? Will multiple be shown on the same page? Dark mode support needed?
- `{appname}-{usage}` - whatever you want, but must be consistent; also the overall appname element should make sense
- After agreeing on the name of things, take a picture to document this, and then start building your repo using the HAX tooling to get it started and out on github.
- Remember, to add new elements just create additional `what-ever.js` blocks and extend from Lit / DDD just like the base one does.
- post to Teams thread about your naming and thoughts (this can be a picture of text which ever is easier)

Routing articles to read
- https://dev.to/rohanbagchi/how-to-write-a-vanillajs-router-hk3
- https://medium.com/@george.norberg/history-api-getting-started-36bfc82ddefc

Routing user flow:
- slug is /schedule -> present the schedule information
- slug is / -> present the home information
- click on a button which changes the slug to /schedule -> react to the change in slug, present the schedule information

This is similar to reflection of a property to an attribute in an element in order to keep state. There is a change to state (the "page" to display) and we reflect that change in the address bar via the slug change. Many of you did something similar with the `?image=42` style URL change.

## 13.2
- Create your code repos
- stub out your elements by name
- start to establish their properties
- get your index to load all the stub elements (just so you don't forget to wire them in)
- get it building on vercel
- you likely will have assets you are including with your project (images among others). See this example rollup.config.js file and note the 'copy' section. This is a plugin you will need to add to your package.json file, but it enables vercel to be able to pick up and load the assets correctly https://github.com/haxtheweb/hax-the-club/blob/main/rollup.config.js
- Also look at the esbuild part and you might need to change this line for vercel to work.
```js
esbuild({
  minify: true,
  target: ['chrome64', 'firefox67'],
}),
```
13.3 will be additional time in class to work on your project as well as an extra in class activity.

## Check in expectations
- code, repo, initial build state on vercel
- start of as many of the 10 elements as possible, even if just stubbed out with limited code in them
- 1st page starting to take shape color, brand, etc

# 14
- keep working and get feedback in class
- attendence in class still

## Check in 2
- get as far as you can
- all element should be named and implemented
- data formats should be in place and starting to wire them up
- it should start looking like a website structurally

# 15
- Final week of class, continue coming in and working on your website
- May 4th project is due
