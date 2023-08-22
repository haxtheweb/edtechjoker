# Project 1 - 15% of grade
Example of what I made which is in the neighborhood of what you're making -- https://drew-card.vercel.app/
- This is really a series of homeworks which are assessed along the way to provide feedback
- There is also light reading / background info to look up
- In the end you and your group will have (high level):
  - your own elements published on npmjs.com (so 1 each, 4 to 5 of them)
  - an "application" that's implementing all of these elements, using vercel to build it
  - Submitted to Canvas as a link to your github repo for the "application" (knowing that if the assets aren't from NPM, it won't work)
- I'll be walking through aspects of what's required in class and leaving time for you to work on your projects to ensure you get there

## Requirements for clean up in your card (as individuals)
- clean up your code so there are no remnants of the spinning OpenWC logo boilerplate. JUST your code.
- Must implement `<slot>` tags so that you can write custom HTML content on your card in the details section
- Must implement CSS variables for changing the background
- Must have a `Boolean` that is `reflect: true` in order to toggle a shadow, color change, or style of the card
- Must have `properties` in order to change the title and sub-title
- Must use `details` and `summary` tags to do the collapse
- image / source should be a property in order to set the image
- @click event on your dropdown / collapse set so that it toggles a stateful variable
- custom event that talks to the buttons in your demo so that the state of the collapse is aligned with the button to do the toggling
- Must use `styles` for shadow scoped styles
- Buttons to modify your card, must work OUTSIDE OF YOUR CARD. `my-card` is JUST a card
- Ability to render multiple cards next to each other as opposed to below
- Leveraging `meme-maker` for your image (meaning it needs to be part of your package.json / installed / using `@lrnwebcomponents/meme-maker`) to demonstrate you understand reusing and stacking web components
- published to NPM

## Requirements for Project 1
- ** All team members ** have components published to NPM (if names identical, you'll only be able to wire in 1 bc of the spec so similar name like `sport-card-2` and `sport-card`
- Make a new github repo that's hooked up to vercel which is an `application` made via `open-wc`
- Call this repo `card-list`
- Make a single element, that pulls in both of your cards and has 5 implementations of each of your cards (so 10 total or 15 total depending on team size)
- Cards should be displayed next to each other
- You don't need buttons that are interactive in this repo, just different implementations of each card to show differences
- This should be pushed back to github and built using vercel
