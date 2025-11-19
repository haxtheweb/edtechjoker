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
- [Week 12](fa25/week-12.md)

# Week 13

# HAX Club meeting Monday night 7pm
- come to a code sprint, work on things for ~2 hours
- get credit for the coding in the world aspect to the course
- still several oppourtunities to get this rather easy 5% x 2 part of your grade
- anything beyond the 2 are bonus
- WESTGATE E202

## Week 13.1
Review of some different examples from last project
- https://image-api-navy.vercel.app/
- https://social-media-tau-swart.vercel.app/
- https://image-project-16g9.vercel.app
- https://project-1-brown-nine.vercel.app/

## Class activity
- name all your components
- write them out, discuss, agree upon a consistent naming convention for them
- what are some properties they have?
- What DDD colors will they use?
- `{appname}-{usage}` - whatever you want, but must be consistent; also the overall appname element should make sense
- After agreeing on the name of things, take a picture to document this, and then start building your repo using the HAX tooling to get it started and out on github.
- Remember, to add new elements just create additional `what-ever.js` blocks and extend from Lit / DDD just like the base one does.

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

13.3 will be additional time in class to work on your project as well as an extra in class activity.


Check in 1 is due the Sunday AFTER thanksgiving break so you should have ample time to make a lot of progress on it the next 2 weeks

## Check in expectations
- code, repo, initial build state on vercel
- start of as many of the 10 elements as possible, even if just stubbed out with limited code in them
- 1st page starting to take shape color, brand, etc




