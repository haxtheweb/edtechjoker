# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Past weeks
- [Week 1 & 2](sp24/week1-2.md)

# Active Schedule

# Week 3: Code pen some moe

## Tuesday
- Slides: https://docs.google.com/presentation/d/1ZlNgZiPT2dHqUsdpQh2CdbbGvYmEeG8Br5SDIp371lY/edit?usp=sharing
- We'll dig into the code written the previous week and see different ways of solving the same problem
- You'll work with your pod to implement specific changes brought up in class
- FlexBox really easy to understand - https://twitter.com/snowinglater/status/1615787738468610050

## Wed - start into the homework as far as watching videos and responding to things on hax.psu

## Thursday

## live demo + questions
Issue: I have an image on the page
- I need to add a button that adds a new image next to it when I hit the button
- Take 2 minutes and type up the following answers into Teams as to your guess:
- What’s the first step?
- How do I make the button?
- We only have 1 image, how do we get another there?
  - https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_1280.jpg

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
- class="tihng" NOT class   =   "thing"
- Drop usage of id=”whatever” unless for card or button
- Usage of padding and margin that’s either base 8 or base 16
- Remove `<br> <center> <b> <body> <head>` and any other tags discussed that have no purpose of other parallels
- Replace all inline styles with CSS class / selector
- Replace all tag specific CSS selectors with classes
- Make another “card” so that 2 live on the screen side by side, then another so that 3 do


### Code by Numbers
The way these activities will work:
- I will give a series of steps that are required
- I will start doing the activity live in class with you following along
- I'll ask questions, sometimes playing dumb, sometimes legitimate as far as how we want something to work
- The faster we get through these tasks, the more of them you already have done. Hence the more responses I get to questions, the more likely we are to finish more of the activity
- I will stop as I progress through code by numbers and stop to give you a chance to chew on it
- Anything I don't get to in live demonstration together is part of the homework of what's expected to be done
- The next class I'll then use examples people produced as the basis for what we'll review together
- This feedback loop will continue repeating, usually each loop finishing it's cycle with additional tasks for you to do out of class + blog about a specific topic

#### Code By The Numbers Together
- Let's add JavaScript into our card now
- Let's add a button that when we press it, it generates a new copy of our card
- Let's add a button that when we press it, the title of the card changes
- Let's add a button that when we press it, the image changes to a different image
- Let's add a button that when we press it, the LAST CARD gets removed
- Let's make sure that when we go to remove cards, that we don't delete our only one
- Let's make sure that when we go to add cards, we don't add more than 10
- Let's make sure that when we have more than 1 card on the screen, that they render side by side with 20px margins between them

## Homework
- Some simple examples that can help;
  - https://codepen.io/btopro/pen/QWzdMav
  - https://codepen.io/btopro/pen/WNLRZNX
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
- What is the difference between document and window in javascript? Find the Mozilla Developer Network page about this.
- Find 8 events that user input can generate via the MDN Web Docs. Link to examples

## Homework Submission
- Create a HAX.PSU page that has answers to the above after watching the videos
- Finish the "code by the numbers" work started in class together
- Link to your codepen (or relink to an updated version of your original codepen) where you've added the javascript in and improvements to your 'card'
- drop link to your page into canvas HW3

---

# TOPICS BELOW THIS LINE STILL IN FLUX SO WORK AHEAD AT YOUR OWN PERRIL

---

# Week 4 - The one with real development
## Tues - Modern JavaScript development environments

## Thurs - 

# Week 5-9 - The ones with some topics about stuff
- Lit Fundamentals
- Printing multiple items from a web service


# Week 10 - sPrInG bReAk
# Week 11 - The one where society doesn't shut down completely during spring break
## Tues - The one with the GuEsT LeCtUrE
- EdTechJoker talking about what Project EdTechJoker is and finding your purpose in this world

# Week 12-16 - Project 1 and 2 work
- Code hard, Kick butt and chew bubble gum*
  - *We're all out of bubble gum

# Week 17 - Final Destination
- no items, 5 stock, no mr game n watch
- Final project Due Wed of Finals week
