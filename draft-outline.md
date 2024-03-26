# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Past weeks
- [Week 1 & 2 - git / intro](sp24/week1-2.md)
- [Week 3 - card remediation](sp24/week3.md)
- [Week 4 - Card into web component](sp24/week4.md)
- [Week 5 - More card into web component](sp24/week5.md)
- [Week 6 - STRETCH 1](sp24/week6.md)
- [Week 7-8 - STRETCH 2](sp24/week7-8.md)
- Week 9 - SpRiNg BrEaK
- [Week 10](sp24/week10.md)
- [Week 11 - Project 1](sp24/week11.md)

# Week 12 - More project 1
- Repo we'll go through: https://github.com/emirahanna/polaris-chip-emirahanna

Specific things I'll touch on in this:
- How to make images for the RPG guy load when built (this gets into rollup / node / build routines a bit when we run that command)
- How to convert some of this into an array via map
- When and how to apply some CSS variables from DDD for color as well as spacing (more importantly, spacing)

## Discussion with Pods 30 min
- How are you wire-framing / building a visual consensus / agreement of what is to be built? Is it figma? A photo of a note? Some other process?
- Are you presently 'map'ing the data correctly to print an array? Are people in your pod using an Array of Objects approach or an Array of Strings approach?
- Are you implementing CSS variables for DDD? Do you have the ability to override the setting DDD is using or are you enforcing design?
- Do you have the adding / pushing onto the array working? What events are you using to obtain this?
- Are you able to delete items once added? Are you using events to do this?
- Have you created additional web components in order to solve your problem more easily? (Anything more than a div, some css and JS logic that you start referencing as a noun, is probably a good candidate for a new web component to simplify scope)

Post answers in Teams so other pods can comb through and get a sense for how people are solving this and where they are at presently.

Any time after 1 is yours to keep working on your project. Ask questions as they arrise in the discussion topics above. Be sure after class or 1 to scroll through the teams messages posted to get a sense for where others are at and see if there's any ideas to solving things you haven't figured out just yet.

Example from class to refactor the 'copy' aspect shown in the video: https://github.com/btopro/haxcms-user-flow/blob/master/rollup.config.js

```js
npm install --save rollup-plugin-copy

import copy from 'rollup-plugin-copy';

 copy({
      targets: [
        {
          src: 'node_modules/@lrnwebcomponents/rpg-character/lib',
          dest: 'dist',
        },
        {
          src: 'node_modules/@lrnwebcomponents/simple-icon/lib/svgs',
          dest: 'dist',
        },
      ],
    }),

```

---

# TOPICS BELOW THIS LINE STILL IN FLUX SO WORK AHEAD AT YOUR OWN PERRIL

---

## Week 12 - More Project 1 working time and feedback


## Week 13 - Project 1 due Sunday


## Week 14 - 16 - Project 2
- Code hard, Kick butt and chew bubble gum*
  - *We're all out of bubble gum

# Week 17 - Final Destination
- no items, 5 stock, no mr game n watch
- Final project Due Wed of Finals week

# WC Workshop
- Printing multiple items from a web service
- Last year I wrote a stand alone workshop for some non-IST students
- We'll use a variation of this to start to look at how we can get data via `fetch` and `json` structures in order to "stamp" multiple copies of our template
