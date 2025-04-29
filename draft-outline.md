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
- [Week 10](sp25/week-10.md)
- [Week 11,12,13](sp25/week-11-12-13.md)

# Project 2 - Due May 6, 2025

## Major hint / help after Check in 2
- I'll walk through https://github.com/PedroJuanCA/portfolio-sidebar-theme in class
- I'll walk through https://github.com/paigehohman/portfolio-very-theme in class

## Major hint / help after Check in 1
- https://github.com/btopro/portfolio-sidebar-theme
- Full walk through of considerations for design, working with spacing and location - https://www.youtube.com/watch?v=zOZg-edAz5c
- Full walk through of an approach to statefully build the floating navigation based on the elements in the slot - https://www.youtube.com/watch?v=KjltjzbCffQ

# Project 2 continues
- Weeks 14,15,16 - "I want to build a full website" - Knowing how to build small things, it then becomes the same process to keep working your way up to a 'full website'. So let's do it!
- Check in 1 - April 20 - comp drawing, repo hooked up, starting point / direction of where you are going
- Check in 2 - April 27 - should be taking shape, starting to look like the real deal
- Class will be spent going over examples, encouraging group discussions about how to solve design challenges and functional challenges
- Select one of the following projects. Both are identical scope, slightly different design and slightly different name / design work.

## Portfolio project
These are actual comps from a potential client / HAX Lab partner organization. The organization is working on graduate student portfolios to help students land employment outside of academia.
- [Creating the "Very" portfolio called portfolio-very-theme #2283](https://github.com/haxtheweb/issues/issues/2283)
- [Creating the "Sidebar" portfolio called portfolio-sidebar-theme #2284](https://github.com/haxtheweb/issues/issues/2284)

## My inspiration projects
These are 3 "build a full websites" that use similar tools and approaches to pull off. You are free to pick apart at these to learn different css / js approaches that are what I would consider "The right way"
- HAX [dot] PSU source - https://github.com/haxtheweb/hax-psu/tree/master (src directory has the hax-psu element, index.html minimal css / html work)
- "Journey" - https://github.com/btopro/journey - Another portfolio comp that I am working on for this potential client. This one is more sophisticated but the visual demo might be useful to help w/ understanding some concepts. This is built using HAXcms though so don't try to match the JS going on as it won't work for what you are doing
- HAX The Club - https://github.com/haxtheweb/hax-the-club - start of the hax the club website showing some navigational aspects and more fun stuff.

## Questions answered:
- `hax webcomponent` should be run to produce this. The "site" is actually a webcomponent. If you inspect the `hax-psu` site you'll see 1 tag "is the site". Same with `hax-the-club` which if you inspect "is the site"
- "what web components should I make" - well, one is the site itself like `what-ever-theme`. Then probably a screen tag for sizing and position like `what-ever-screen`, a scroll button, a "header with links" tag of some kind, and a "button" or "heading" tag of some kind. Or a "footer".
- the `wrapper` / "full theme" element like `what-ever-theme` is probably going to have very little design in it. It's probably just going to be 100vh for height by 100vw for width. Then it's primary job is having a `<slot>` and the "screens" going inside of it.
- I would start by designing 1 screen, having 5 of them top to bottom, and then start working your way up from there.
- How do I install the scroll button?

`npm install --save @haxtheweb/scroll-button`

`import '@haxtheweb/scroll-button/scroll-button.js';`

`<scroll-button></scroll-button>`

you'll want to apply CSS to position it in the bottom corner of the screen or somewhere else logical.

Example that could be reverse engineered for some simplified CSS though not in global scope.
https://codepen.io/btopro/pen/wBBBaLV

In the "very" theme you do not have to make a star or have it animate in the corner. It is mostly just to show "hey there's a thing here" / visual representation. An icon, image, or nothing are fine there.
