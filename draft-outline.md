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
- [Week 9](fa24/week-9.md)
- [Week 10-11-12](fa24/week-10-11-12.md)
- [Project One Description and Rubric](https://github.com/haxtheweb/issues/issues/2174)

# Week 13 - Final Project
## Tues
- There are two projects. You must select a project and state which project you are doing by end of class Tuesday. Read and explore the requirements of each. They are different projects but have similar scopes. One is far more state management heavy as well as very detail oriented in # of requirements. The other is a mix of state management, design, and data structure building on the previous project as far as scope.
- [\[project-2a\] Character Creator / rpg-me promotional tool](https://github.com/haxtheweb/issues/issues/1414)
- [\[project-2b\] Use-cases dashboard comp](https://github.com/haxtheweb/issues/issues/2182)
- After making your selection, put in the comments for the issue that you're going to work on the one in question and post a link to the boilerplate hax CLI made repo as your starting point.

## Thursday
**A reminder of requirements for project creation and submission: PROJECT MUST BE COMPLETED USING THE HAX TOOLING TO ENSURE WE ARE WRITING CODE USING PLATFORM LEVEL WEB COMPONENTS. SUBMISSIONS DONE IN TOOLING AND TECHNOLOGY NOT LIT.DEV BASED WILL NOT BE EVALUATED.**

We'll be grouping up based on project selected to answer the following discussion questions:

## project-2a Character Creator / rpg-me promotional tool
**Sit with 6 people total, not the people you've been collaborating with so that you both get different discussions / perspectives)**
- Where are you starting?
- What form inputs are you using?
- What fields are you going to add to your app to manage the relationship between the form and the character?
- What's the character sizing to be managed responsively?
- How are you approaching the "stateful" aspect of share links in the URL
- Any other considerations / unknowns?

- "we want to make things like 60% of the screen" - rpg-character requires a numerical value for height / width. It can't be % based bc of how SVGs work.

```js
const height = window.innerHeight;
// window width
const width = window.innerWidth;
console.log(height, width);
```

## project-2b Use-cases dashboard comp
- Where are you starting?
- Which of the comps are you going off of?
- What properties need to be accounted for in the data model?
- What is a good structure for the JSON file?
- How many unique elements are there to help with scoping?
- Any other considerations / unknowns?

This will run about 30 minutes and I'd like answers / take aways posted to the thread associated with your project. (adding below this post)

# Week 14 - Turkey
end of week 14, Sunday Dec 1 is when check in 1 is due

# Week 15,16
## Tues
I'll do a live review of two projects based on check in 1 that are both making great progress, giving feedback and time to ask questions. Then you'll have more time to work.
- [Class Recording of review](https://www.youtube.com/watch?v=BsdiRoCOuA8)
- Project A - https://github.com/Eglicky/rpg-new
- Project B - https://github.com/izzabizz5/hax-use-case-app

## Thusday
- Remote office hours - no class

## Sunday
- Check in 2 is due.
- This check in should include code that is largely working and in the right direction (3pts)
- demo built on vercel is required (2pts)
- any questions / issues you are having that you will bring to class / office hours for TAs (1pts)

# Week 16
## Tuesday
Live review of these two projects:
- https://github.com/tay3434/rpg-character/ 
- https://github.com/nazman-hub/HAX-dashboard 
- recording: 
More time to work and ask question

## Thursday
- Last chance to get help and resolve issues IRL
- Last class. Come to say goodbye / fist bump
- It's been fun working with you this semester. Good luck out there.
- Final Project is Due Dec 17 by 11:59pm. Anything submitted after that is considered late and subject to late policy
