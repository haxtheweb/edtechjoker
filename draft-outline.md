# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Past weeks
- [Week 1 & 2](sp25/week-1-2.md)

# Week 3: Code pen some moe

## Tuesday
- Teams Mooooooood.
- Slides: https://docs.google.com/presentation/d/1ZlNgZiPT2dHqUsdpQh2CdbbGvYmEeG8Br5SDIp371lY/edit?usp=sharing
- We'll dig into the code written the previous week and see different ways of solving the same problem
- You'll work with your pod to implement specific changes brought up in class
- FlexBox really easy to understand - https://twitter.com/snowinglater/status/1615787738468610050

Issue: I have an image on the page
- I need to add a button that adds a new image next to it when I hit the button
- Take 2 minutes and type up the following answers into Teams as to your guess:
- What’s the first step?
- How do I make the button?
- We only have 1 image, how do we get another there?
  - https://github.com/btopro.png

## after the questions
- Starting point I'll post in Teams once we think through above briefly

## Remediation
- Swap codepens / audit the codepen of your pod. Look for the following and anything else you don’t understand
- Clean up your current card CSS so that **media queries work** - this was a common thing that was missing in HW2.
- **Use border and background-color to visually make your card look like a card** - it shouldn't just be a blank white space. It should visually appear as a single card, even if it has multiple things inside of it
- create a wrapper div around your entire design, then another so you can put all the cards in it as a container
```
<div class="wrapper">
..... your stuff to be a card
..... your stuff to be another card
</div>
```
- in order to get things "to sit next to each other" look up how to use the `display` attribute in `CSS`. This defaults to `block` for `div` and most tags but changing it to `flex` means "make things flex side by side inside of me"
- `class="thing"` NOT `class   =   "thing"`
- Drop usage of `id="whatever"` unless for card or button
- Usage of padding and margin that’s either base 8 or base 16
- Remove `<br> <center> <b> <body> <head>` and any other tags discussed that have no purpose of other parallels
- Replace all inline styles with CSS class / selector
- Replace all tag specific CSS selectors with classes
- Make another “card” so that 2 live on the screen side by side, then another so that 3 do

## Wed - start into the homework as far as watching videos and responding to things on hax.psu

## Thursday

### Live code
- Follow along as we step through https://codepen.io/btopro/pen/zYVbGyO
- I'll wire this up so that the button is able to duplicate the "card" in the pen

### Code by Numbers
The way these activities will work:
- I will give a series of steps that are required
- I will start doing the activity live in class with you following along
- I'll ask questions, sometimes playing dumb, sometimes legitimate as far as how we want something to work
- The faster we get through these tasks, the more of them you already have done. Hence the more responses I get to questions, the more likely we are to finish more of the activity
- I will stop as I progress through code by numbers and stop to give you a chance to chew on it
- We will do the things in question to a fork, clone, example, etc. **that mirrors what you are to do on your own project code**
- **For example, if in class we start with a card repo and wire up a button, after the live activity you will then wire up that button in YOUR card repo**
- The next class I'll then use examples people produced as the basis for what we'll review together
- This feedback loop will continue repeating, usually each loop finishing it's cycle with additional tasks for you to do out of class + blog about a specific topic

#### Code By The Numbers
- We're going to start from this pen about amazing professors: https://codepen.io/btopro/pen/PoLJXVj
- Recording from a past class running through this activity: https://www.youtube.com/watch?v=LGZHodz7dLo
- Fork the pen and follow along / answering questions in the activity along the way
- Let's add a button that when we press it, it generates a new copy of our card
- Let's add a button that when we press it, the title of the card changes
- Let's add a button that when we press it, the image changes to a different image
- Let's add a button that when we press it, the background-color of the card changes **via a css Class**
- Let's add a button that when we press it, the LAST CARD gets removed
Additional logic to add:
- Let's make sure that when we go to remove cards, that we don't delete our only one
- Let's make sure that when we go to add cards, we don't add more than 10
- Let's make sure when we change the background-color that we can toggle it off and on **for all of the cards on the screen**

# Homework
- Some examples that can help you apply to your card
  - https://codepen.io/btopro/pen/OJqjoLb  (pen from Tues)
  - https://codepen.io/btopro/pen/PoLJXVj (the pen from Thurs)
  - https://codepen.io/btopro/pen/QWzdMav (example of class toggling)
- Add things to yours that say "Code By The Numbers" above

## Watch the following
- https://www.youtube.com/watch?v=cM9KTKQ_4H0 -- see where new ideas come from, but also lots of stepping through logic between HTML and JS accessing / state modification
- https://www.youtube.com/watch?v=yORXfAb2Gvo -- a short primer on the general feedback loop of searching for a type of event on MDN and then testing it

## Answer these questions

### Video 1:
- What made the idea viable?
- What is the original issue with the Lit code highlighter?
- What’s a strategy you can engage in in order to refactor toward better code? What strategy / how many iterations did I go through to get “better code”? - What makes this code better?

### Video 2:
- What weird event did I implement to solve a UX problem?
- What is the difference between document and window in javascript? What is globalThis?? Find these on Mozilla Developer Network page to explore what they are and what you can do with them.
- Find 5 events that user input can generate via the MDN Web Docs. Link to examples

## Homework Submission
- Create a HAX.PSU blog post that has answers to the above after watching the videos
- Finish the "code by the numbers" work started in class together **but applied to your card you made previously** and provide a link in your blog post
- drop link to your post into canvas HW3
