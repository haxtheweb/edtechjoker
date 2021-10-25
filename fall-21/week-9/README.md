
# Week 9: Refinement and skill building
## Tuesday
- Guest code walk through: **Chuck Lavera** from Eberly College of Science with his solution to the card from the comps
  - Make sure to stop and ask questions if you don't understand something he's presenting
  - Considerations in building:
    - Action / title
    - heading area
    - type of card
    - icon specific to the action (icon changes based on the type of action)
    - color that was pegged to what your engaging in (so color changes based on type of action)
    - Has support for a link to more details / information / external info
    - type: learning object, chem connection, Did you know, Learning Strategies
    - link doesn't render on learning objectives type
    - major difference: very specific CSS color variables VS the generic simple-colors based ones we're doing
    - icon that shakes / animates based on visibility (Intersection Observer + custom SVG)
- Group activity / participation:
  - Add to TEAMNOTES what you learned from the example Chuck presented.
  - What approaches can you leverage from his example to enhance your team's element?
  - How could you take his approach and envision a more flexible version?
  - What are your next steps?

## Thursday
- demo: What is a "linter" and why can't I make a commit?
  - Husky is there to protect you -- https://typicode.github.io/husky/#/?id=package-scripts (and it might piss you off too)
  - want to ignore the feedback Husky is giving? `git commit -m "some message" --no-verify` will bypass husky
  - Husky helps ensure you write better code though so don't do this unless you know why you are
- crit / topic: how to implement the font using google fonts
  - Seeing how group 3b4b attmpted this
  - Google fonts -- https://fonts.google.com/specimen/Open+Sans for the font that is to spec of this project (viewing student example)
  - Understanding font loading methodologies: https://css-tricks.com/almanac/properties/f/font-display/#:~:text=swap%20%3A%20Instructs%20the%20browser%20to,the%20auto%20and%20swap%20values.
  - Seeing the "best way" to do this (philosophically as well as bc of how Lit works)
  - https://stackoverflow.com/questions/57489637/how-to-load-google-font-in-litelement
- crit / topic: https://github.com/runtimeErrorsMadeEasy/project2
  - Passing properties down between elements
  - Note how they make the icon change based on the type changing
  - Note how they use their previous button and it actually kinda works well well visually
  - Note that if you made say... a penguin of a "button that swears at people" you should opt for using this as a devDependency and only use it in your demo
- Additional time to work as a team
- Attendence word of the day

## Homework
- write a blog post about **one** of the following concepts from this week and include code samples in your article + sources
  - "slot composition" - passing slotted code between multiple elements (header / content into card and then into scaffold)
  - Fonts. How to implement them in Lit. How to implement them in a general setting? What "swap" is and discussion of different rendering methodologies as well as showing how you implemented it in your element
  - Passing properties down and leveraging past work (ala the button from past work) via css variable mapping and/or variable mapping
- Use the state of your element / visuals / repo links as a backdrop for discussing these topics
**Career Pro tip:** This is a highly effectivbe way of "double dipping" throughout your career. Not know something, research it, implement in a project you do, leave comments to yourself about how you learned that, then write a blog post / video tutorial

## Project Two: Check-in 3
- By Sunday at midnight; post a link to your repo's TEAMNOTES detailing...
  - Any additional meetings you've had
  - Progress made / state of your current repo
  - What problems your running into we could cover in class to help
  - What your next steps are
- Where you should be to be on pace:
  - All 4 elements should at least be started
  - icon should be almost finished and ONLY provide icon capability
  - Header / banner element should be starting to look like the banner
  - the "card scaffolding" should at least be attempted and is basically just a hollowing out of the card in many instances so that your card element is basically just something like the following (generally speaking of course your implementation will vary)
```html
<card-scaffold>
  <div slot="header">
    <card-icon>
    <card-banner>
    <div slot="header"><slot name="header1"...
    <div slot="subheader"><slot name="header2"...
                                </div>
  <div slot="content">
    <slot></slot>
  </card-scaffold>
```
  - The overall card / wrapper element / `my-science-card` (your name there, not that one) should be using all 3 elements inside of it and generally look like the comp. Not pixel perfect but at least in the neighborhood
## Looking ahead
Next week we'll be doing some stand up presentations. Be prepared to explain where you are with your card for about 5 minutes as we'll have a full class discussion to see where everyone is at. I'll pull your card / code up on screen and then you'll explain how you solved something. Be thinking about what challenges you've encountered and how you solved them
***
_Below this line will be updated as we start each week so we can remain agile to changes out of our control or to focus more on a topic_
***
