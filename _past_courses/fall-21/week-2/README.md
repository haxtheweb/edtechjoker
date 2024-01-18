## Tues: Brief demo of getting a hello-world boilerplate setup for open-wc
- quick tech demo / discussion: permissions, ownership, moving directories, common commands to fix issues, short cut keys, etc
 - note that while I run these in ubuntu 20.04 there are parallels in all OS. OSX is identical.
 - I run Oh My Zsh which is a series of enhancements to a normal `bash` prompt -- https://ohmyz.sh/ (OSX / Linux)
 - Windows you might want to get Cygwin - https://www.cygwin.com/ or a different terminal for running tooling in general
- Individual activity: make a hello-world boilerplate and have it yarn / npm start'ed and on screen (help partner if not there yet)
### Individual / Pair activity: 
 - Look through the parts of the repo and identify aspects of this toolchain but also the repo in general
 - On a whiteboard or in a doc write all the things to note about this repo
  - Where is the demo?
  - Where is the code?
  - What commands can be run?
  - Where are all the dependencies?
  - Where is the custom element / web component / javascript that runs?
### Shareout
- What did people find?
- What makes a good tool-chain?
- What is specific to this repo and what feels like it would work in any repo?
- How do we know what commands to run?
- How do we get dependencies?
- Where do they come from? where do they go?
- What's a devDependency vs dependency?
- What is package.json? What's the API for it?
## What is it open-wc is giving us?
- looking at the boilerplate repo that we made, now at the code level
### Pair activity
 - What does the boilerplate do? How is it working? What's notable about this?
 - What's "syntactical sugar" vs the way the web platform actually works?
 - What is "stateful" in this?
 - What is event driven in this?
 - What is Lit specific?
 - What is "VanillaJS" and is a convention that works anywhere?
 - Group activity: Discuss how this works. What is it doing? Why does this work?

## Thurs Sep 2 - HTML / CSS / Modifying what we have
So we've looked into a bit of what the base line thing we're given by open-wc. Now let's start modifying it
- Quick lecture on pieces of https://docs.google.com/presentation/d/13z_spZnGt7uIY_MjXOnqkxvMyUj6-SEV/edit?usp=sharing&ouid=100601982236009260859&rtpof=true&sd=true which is CSS / HTML / JS fundamentals of how things operate.
- Opening and "hacking" psu.edu by modifying things in the console
### Pair / Group activity
Now we're going to "hack" penn state using a few different methods to better understand how the web is made.
- Right click and inspect psu.edu. I want you to change the WE ARE to "Were Pen Stat"
When you get a working solution to the following, post it in the edtechjoker slack:
- Using the "Add the new style rule" button, what CSS selector would appropriately target the corona virus warning banner and make it's background red and the text on it white (you can ignore the icon as it's an SVG).
- using javascript, target the PSU image and change it's source to point to the "were" https://i1.wp.com/images.onwardstate.com/uploads/2019/10/IMG_9180.jpg?w=960&ssl=1
- using javascript, target the "were" image and append it as a child to the same container that has the "Give" button

## Pair work that turns into Homework
- Run through the "Try LitElement" tutorial: https://lit-element.polymer-project.org/try
- Run through the "Lit Tutorial" (which is in TypeScript): https://lit.dev/tutorial/
- **Create a git repo for your hello-world repo and get it pushed up to github**
- In this repo I want to see ONE OF THESE THREE demonstrated:
 - Add an `<input>` field that updates as the value changes. So when the user clicks increment (or decrement) it will show the value.
 - Reflect the the `counter` property and use this value to write CSS that changes the background color of the button based on the counter being 10.
  - This should help explain how: https://lit.dev/docs/components/properties/#reflected-attributes
 - Add a button that subtracts from the counter but won't allow going below 0
  - Bonus: Disable the subtract button when hitting 0; enable it when hitting anything other than 0
- **When you are done; post your code to the slack channel; this effectively is this weeks "blog post"**

## Additional Homework / expected for next class
- Read the full slide deck From Thomas Powell on HTML/CSS/JS fundamentals -- https://docs.google.com/presentation/d/13z_spZnGt7uIY_MjXOnqkxvMyUj6-SEV/edit?usp=sharing&ouid=100601982236009260859&rtpof=true&sd=true
- Watch my IST 402 lecture on HTML / CSS (ignore the lab mentioned)
 - Slides: https://docs.google.com/presentation/d/1PBvgpoWxg-VAFra1Byv9nFUiUtMey4-TzDUHz-93a-0/edit?usp=sharing
 - Recording of lecture: https://psu.zoom.us/rec/play/rBvSXnalROFsn3J9qolFgtFJh9wZE4BL5X-5u4ck691C-Hjs40_33GKdo7nVo-Fy33I5tq-xOaG4IUYr.PsmsMq0SdIEH44ge?autoplay=true&startTime=1611680857000
- Watch my past IST 402 lecture on Javascript ecosystems (ignore the lab mentioned)
 - Slides: https://docs.google.com/presentation/d/1icY6GL5N0cNXM4PjWg1N1RlKFi8lcK8GnIW7PBNBJ8w/edit?usp=sharing
 - Recording of lecture: https://psu.zoom.us/rec/play/bY3fvUuUDOd34uiO2R-FnaUV93Zit12oyXcWULJtpCz6d5h7jO4fEV0Dr5dzbWCQ_tiAr6CWhVtnYAHg.Ok9HdrEm_1p7to0L?autoplay=true&startTime=1612285695000