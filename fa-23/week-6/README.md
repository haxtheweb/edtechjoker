# Week 6: Web components === project 1

## Tues
- I'm going to go through some working examples
- I will make the card from nothing, as a web component. Follow along if you have not been able to make this work from step 0
- Project 1 is announced so you have some scope as to what your working on for it.
- Class will be a mix of demos of specific things people need help with and time to work and ask questions

## Refinement / critique / review of several high end examples
- looking over some examples generated from work in class
  - farisnif: "One thing I would like to explore more is why is HTML going in to .js files at times"
  - "please work i cry" - I'm going to show building this from 0 today. Follow along
  - https://github.com/platinumfishes/tf2-pyroland/blob/main/my-card/src/MyCard.js#L9 - I enjoy this commenting blocks of things style
  - https://github.com/Pandaalifter/openwc-chad/blob/main/src/openwc-chad.js - has some scoping correct
  - https://github.com/NewJerkey/bryce-card --> https://bryce-card.vercel.app/
- Common things asked about:
  - The rest of the class now is a web components / JS in this context. We'll read more JS and wire things together to understand them
  - Its repetition till it clicks; there's no other way
  - "I'd like a video on X" is Google. Lit.dev has great tutorials (that you were to go through). There is content all over the internet for this stuff. If a specific concept doesn't make sense after many a google and video, then I can try to help unpack; not prior to that search.
- this image means that you need the repo to not be like`my-thing/my-thing/index.html` and instead `my-thing/index.html`
![image](https://user-images.githubusercontent.com/329735/218572953-39168565-f0a5-4f00-84e2-4d7ab9348165.png)

# WATCH OUTSIDE OF CLASS PRIOR TO THURSDAY
I recorded end to end, me creating the `drew-card`. https://www.youtube.com/watch?v=mxTYv_8EPIo
Your Element should be up to where I get in this repo by Thursday in order to be on task
- vercel built, working card
- code: https://github.com/btopro/drew-card
- demo: https://drew-card.vercel.app/
- Atomic design, referenced in the video https://bradfrost.com/blog/post/atomic-web-design/

# In class Activity today (submit to the 
- We will envision the API for our card
- What is its name? How can we make it abstract and reusable
  - examples: NOT pika-chu-card. `pokemon-card` or even better `character-card`
  - `lawncare-card` not `my-card` or `mycard-2` or something meaningless
  - Semantics matter.
- If it had "properties" that we could modify and see change; what would we call them? What can be modified via a variable? What are those variables named? What do they do?
- Is there anything that could be HTML based input vs a single value? What Type is that single value?

# Thursday

- Looking at VanillaJS vs LitElement via 2 trolly tags
- moar-sarcasm - 
  - demo: https://haxapi.vercel.app/?path=/story/extra-sarcasm--progressive-enhancement
  - source: https://github.com/elmsln/lrnwebcomponents/blob/master/elements/moar-sarcasm/src/moar-sarcasm.js
  - article: https://dev.to/btopro/moar-sarcasm-plz-a-totaly-necessary-web-components-tutorial-3c51
  - property / attribute based input vs "slot"
- meme-maker
  - demo: https://haxapi.vercel.app/?path=/story/media-memes--basic-meme
  - source: https://github.com/elmsln/lrnwebcomponents/blob/master/elements/meme-maker/src/meme-maker.js

- How is `<slot>` used and how can `drew-card` benefit from it
- Implementing meme-maker into an existing project
- "Prop drilling" how wee can pass properties down between elements to use them how we want

## Activity: Reuse and refactoring
- Now it's your turn. With your peers as help as needed, implement `<slot>`, `meme-maker` and 2 new properties on your card
- let's make our cards more reusable via slot, oither people's tags, and properties.
- Anything that's specific language (Details, Drew Doughty, etc) should be a property that can be modified
- Anything that allows for any kind of HTML to be applied, should be done via a `<slot>`
- Get an account on https://www.npmjs.com/ - you don't need it to download stuff but you will for getting stuff up there later
- `npm install --save @lrnwebcomponents/meme-maker`
- get it implemented in your card with 2 properties for top and bottom text wired into it
- push your code up to Github and then drop a link to your current state of work in Canvas

# Homework
- Watch me going through doing the whole thing (if you didn't already); following along so you can meet the requirements https://www.youtube.com/watch?v=mxTYv_8EPIo
- Card should be well named, built using vercel for its demo and starting to meet the requirements outlined in Project 1
- Properties should be used to deliver the title / subtitle
- meme-maker should be implemented with properties "drilled" down from your card into the `meme-maker` image
- All CSS / JS / HTML in your card tag should be ONLY related to the card itself
- Buttons should be in index.html and wired to work in their new scoping of the element
- Anything you do beyond this meeting the requirements is stuff you can ask about
- Bring questions to class for working sessions next week of things to see demo'ed / debugged

- Skim this slide deck https://docs.google.com/presentation/d/13z_spZnGt7uIY_MjXOnqkxvMyUj6-SEV/edit?usp=sharing&ouid=100601982236009260859&rtpof=true&sd=true
  - Google **HTML DOM** (if needed) and see explainataions
  - Google **Virtual DOM** and see explainataions / opinions
  - Google **ShadowDOM** and see explainataions / opinions
  - What is the difference between these three?
- Submit to Canvas dropbox: Gist; link to your github repo for your card's progression. Answer to the question above
