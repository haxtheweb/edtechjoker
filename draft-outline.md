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

# Week 8 - about 1/2 way home. So the topic is Life.

## Tues
- We need a week to catch back up and resubmit past work. If you have fallen behind or not submitted the last assignment or did and don't feel it is in a working state, this is your week to play catch up
- However, today we'll be changing pace a bit with a Guest lecture
- Bring pen, paper, and take notes of thoughts along the way.
- What (if anything) was your take away from the talk?
- How can you apply this to your life and career?
- There are no right answers, and they vary every year from this speaker. My hope is he makes you think.

## Wed
Catch up on Week 7's homework

### My images don't load

Add the following into the file `rollup.config.js`

```js
import copy from 'rollup-plugin-copy';
```
Right above where it says `nodeResolve(),` add the following
```js
copy({
  targets: [
    { src: 'lib/', dest: 'dist' }
  ]
}),
```

in your project run `npm install rollup-plugin-copy --save` this will save it to your project dependencies
Now run `npm run build` and it should build successfully. If this happens, then when you push up to github it will include the 
images in the output.

## Thursday
- Additional working class
- Project 1. Pick between one of these two options.

## HW 8
- Submit HW 8 as written answers to the questions posed in the guest lecture
- Fix and resubmit your code for HW 7. The grade from Week 8 will be reflected into Week 7  (so  if you get 3.5 week 8, you'll get this in week 7 as well). It effectively counts as double given that I am giving you an additional week to clean it up

## Looking ahead
- We will start into project 1 next week. it is a multiple week assignment worth a significant portion of your grade
- Project 2 will be a harder version of project 1.
