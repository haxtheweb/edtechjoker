# Week 11 - Project 1
You'll then have class time to work with your pod (and beyond it as desired). This is to be worked on in true open source fashion. I want the best solution, and the best solution comes from the most people exploring it as possible. You are expected to produce your own code, your own repo, your own deliverable version, but you are also expected to talk to and work together in and out of class as needed.

The best solution most likely gets adopted into the platform, improving education and reducing the costs to develop software. It also becomes something you can easily put on a resume having contributions to a growing open source project with aspirational goals.

## Today in class
- Answering some questions that came from your blog posts
- Laying out Project 1's context.
- Time to start working on a wire-frame of what you are attempting to build
- Asking questions

# Project 1

- Project 1 https://github.com/elmsln/issues/issues/1950
- We will do multiple un-conference style swaps / discussions in class
- This is the open source way of solving a problem. You are encouraged to collaborate and work together
- Use your same card repo you have each been using. This keeps git commit histories unique and also forces scoping to ensure nothing conflicts visually or with `window`  calls in DOM

## Rubric - 3 week turn around; 24 points (12% of grade)
This project has 2 check ins, and then submission.
As programming and "correct" is some what subjective, so too is the rubric.
The LAs and I will be grading based on the following types of criteria though as we go through the projects.
- Is there a visual to accompany what was made? Does it have a reasonable level of detail as far as the wireframe in question?
- Is it functional? Does it do the things it needs to from a JS logic perspective?
- Is it well written? Are their comments as to what's going on?
- Is it stateful? Can values be changed on the fly and it reacts accordingly?
- Does it have hard coded values or is it 
- Does it look good? Is it responsive? Does it meet the visual requirements?
- Is the mark up / HTML semantic and accessible? Is it simple in structure and easy to read?
- Does it leverage the DDD Design system? Does it have CSS variables left behind for flexibility?
- Is it a stand alone web component? Is it reusable? Is there anything else that could be done to make it more reusable?

## Thursday
Discussion via this repo and the relationship with an Array of values, finding what is selected within it
- https://github.com/btopro/example-event
- https://example-event.vercel.app/
- More time to discuss and ask questions.
- Discussion groups around researching specific questions.

## Sunday homework
- A check in as far as code status check submitted to Canvas
- Obviously a link to the code repo, hopefully with a working prototype as per vercel address
- I want a check list submitted; What do you think your steps to get this done as far as actionable steps / things that need added to complete?
- In this list, an X next to the things you've gotten done
- Include a picture / link to a figma document of the wireframe that you are basing everything on to attempt to produce this project
- This will be different for everyone. This is largely a 'have you thought through this at all' level check in.
- Status check 1 is 4 points.

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

## Thursday repo to review
- https://polaris-chip-blue.vercel.app/
- https://github.com/icm5131/polaris-chip

# Week 13
- Repo to refiew in class - https://github.com/Kermitopalis/polarischip
- More time to ask questions
- This is a week to work, get finalized feedback from LAs and me.
- Thursday is another working day. If you want a live critique / feedback of your item please email me and I will

## Thursday
Repo to review. Additional helpful links for this:
- https://github.com/AshleySantana/Polaris-Chip
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
- https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
