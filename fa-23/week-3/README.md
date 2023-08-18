# Week 3: Code Review

## JS Fundamentals
- How JS can access and modify HTML and CSS
- VanillaJS vs jQuery, Event Loop and how JS works

## HW2 P1 follow up
- Slides: https://docs.google.com/presentation/d/1qY09_UQVyIBapqIZjVefE3r4jFbOxbdIRRDq3DfohSc/edit?usp=sharing
- Let's look at template literals (we'll use them later on)
 - I need to learn about them, so Mozilla docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
   - https://codepen.io/btopro/pen/ExpNyQx?editors=1111 - let's see how this can be used
     - https://codepen.io/btopro/pen/ZEjBObq?editors=1111 - follow up

- We'll dig into the code written the previous week and see different ways of solving the same problem
- I'll do that mean thing where I call out group numbers and ask for answers to things
- You'll work with your partner to implement specific changes brought up in class
- Unrelated; Amazing CSS minion - https://codepen.io/AsyrafHussin/pen/wXjpyB
- FlexBox really easy to understand - https://twitter.com/snowinglater/status/1615787738468610050

## Thursday (or Tues depending on how quickly we get there)
  
## In class live demo
- Going to create a button that makes a css class change on the page
- You target HTML using CSS selectors
- You can apply and modify CSS / classes / ANYTHING via JS
- Using these two abilities you can modify what is known as “states” in the industry

## live demo + questions
Issue: I have to put an image on the page
- I need to add a button that adds a new image from a random generation service, next to it when I hit the button
- Take 2 minutes and type up the following answers into Discord as to your guess:
- What’s the first step?
- Where do I get an image from (at random)?
- How do I make the button?
- We only have 1 image, how do we get another there?

## Remediation
- Swap codepens / audit the codepen of your partner. Look for the following and anything else you don’t understand
- Clean up your current card CSS so that media queries work
- Use border and background-color to visually make your card look like a card
- class="tihng" NOT class   =   "thing"
- Drop usage of id=”whatever” unless for card or button
- Usage of padding and margin that’s either base 8 or base 16
- Remove `<br> <center> <b> <body> <head>` and any other tags discussed that have no purpose of other parallels
- Replace all inline styles with CSS class / selector
- Replace all tag specific CSS selectors with classes
- Make another “card” so that 2 live on the screen side by side

## Homework
- Create a button outside of your design in your codepen which when clicked makes a duplicate of your card
- Write a JS selector to target the button (JUST that button)
- `addEventListener(“click”, (e) => { // do something });`
- Target your card. Create a clone of the node
- Insert the new card just after your current card
- Make a CSS selector for `:hover` that makes the button change on hover. Normalize this with `:focus` so that tabbing to the item is the same visual outcome
- Using JavaScript Events, do the same thing to the card for “hover”

Create buttons where…
- On click, toggles the background color of the card
- On click, change the text of the heading / title you used to “something else”
- On click of a button, delete the last instance of the card
With your partner..
- Partner 1: On click of “Details”, don’t link to hax.psu.edu, instead show (or hide) your paragraph description. Do this via JavaScript.
- Partner 2: Do the above but without JavaScript, only using HTML
- In each, hide it by default.

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
- What is the difference between document and window in javascript? Find the Mozilla Developer Network page about this.
- Find 8 events that user input can generate via the MDN Web Docs. Link to examples

## Homework Submission
- Gist that has answers to the above
- Link to your codepen (or relink to updated codepen)
