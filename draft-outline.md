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

# Week 6 - Streeeeetch time

class Tuesday recording starting into below: https://www.youtube.com/watch?v=x08w5yq1Axc
Class Thursday recording: https://www.youtube.com/watch?v=5QvFN0GL1hs

## Tues

- In Teams. How's it emoji-goin?
- We'll quickly go over 1 well made solution doing everything correct
- https://github.com/SkylerKoba88/polaris-chip -- even has buttons wired up (which was not a requirement)
- Have your code open

### Class Activity

- ~30 min activity
- We have `<slot>` on our card so that we can support "flexible HTML". Let's take that to the extreme case
- Let's put a quiz question on our card. This could be a daunting task, except there are already well made ones as a result of this class!
- https://oer.hax.psu.edu/bto108/sites/haxcellence/tutorials/block-usage/question-types
- Pick one of these documented elements, and add it to your project
- `npm install --save @haxtheweb/whichever-you-pick`
- Look at how the example source is used (can copy and paste this into your demo)
- We need to load the js so that the definition of our HTML loads in the `index.html`
- When you get it working get the code back up on github / post a screenshot in Teams for today

## Having issues?
- we need to install the dependencies
- and then reference them
- We didn't really talk about how there now did we....

```js
# I have an error in the tooling, this wasn't on purpose, but it was missing this dependency
npm install @haxtheweb/grid-plate --save

# in your code...

import "@haxtheweb/multiple-choice/multiple-choice.js";

# or if you look in the CDN versions, they'll work like

<script type="module" src="https://cdn.hax.cloud/cdn/build/es6/node_modules/@haxtheweb/multiple-choice/multiple-choice.js"></script>

```

## Stretch time
We are going to use a new tooling to start working on this project. This is the developer on-boarding tooling that I wrote for our HAX community.

- Open a terminal window, navigate to where you'd like to run it from (for me that's `~/Documents/git/btopro` but can be wherever you are storing your code)
- Run `npx @haxtheweb/create`
- I will step through the CLI in class so you can see how it works though it is pretty straight forward
- We've created code, that is currently on our machine, in version control, but is NOT on github. Let's fix that.
- Open github, create a new empty project with the same name `counter-app`
- Open github desktop. Add project and select `counter-app`. Get the code up on github

The rest of class is to start into this and ask questions of me / our TAs / each other. We'll also have time to work on Thursday. I've given you the wiring and process to start building things with web components. SO, now its your turn. Below are the requirements for the
homework this week. Discuss them with your pod, co-work, share research, and come up with how to best build the following:

# Counter App
- "Counter" is the most common demo repo in any project implementation because it illustrates simple "state management"
- Discuss with your team just like how we started with the Card.

- What does the design look like (roughly)? What HTML / CSS requirements are there
- What properties should this have?
- Are there flexible HTML areas?
- Is there anything we have to worry about to ensure this remains stateful

### HTML / Demo
- Web component so that we can get `<counter-app counter="16" min="10" max="25"></counter-app>` as for how the HTML is written
- Ideally there would be multiple in you `index.html` but only 2 are required.
- 1 that has sane defaults so it "just works" with `<counter-app></counter-app>` and 1 with values supplied

### shadowRoot / render contents
- I just want to print the current `counter` number with 2 buttons below it. One that's `+` and one thats `-`
- When you click `+` I want it to increment counter but not go over max
- Same for `-` but I want it to decrease the counter and not go below the minimum
- This should shoot for the minimum amount of `html` tags required in order to generate a decent looking counter

### styles
- The number should be a rather large font size
- the buttons should be next to each other but below the number
- the buttons should have focus / hover states
- when we hit 18 on the counter the color of the number should change
- when we hit 21 on the counter the color of the number should change
- when we hit min or max the color of the number should change
- apply spacing to buttons and elements to ensure they look reasonable (think golden ratio like multiples of 4, 8, 16)

### Logic
- When we hit min, disable the min button `?disabled="${this.min === this.counter}"`
- when we hit max, disable the max button
- when the counter hits 21, `makeItRain` by using the `updated(changedProperties)` lifeCycle method - https://lit.dev/docs/components/lifecycle/#updated

### Leveraging outside code
install outside code: `npm install @haxtheweb/multiple-choice --save`
use it to wrap the content you want to explode (probably the entire counter to be honest) - `<confetti-container id="confetti"></confetti-container>`
Here's some JS that can be used to make it rain confetti

```js

updated(changedProperties) {
  if (changedProperties.has('counter')) {
    // do your testing of the value and make it rain by calling makeItRain
  }
}

makeItRain() {
  // this is called a dynamic import. It means it won't import the code for confetti until this method is called
  // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
  // will only run AFTER the code is imported and available to us
  import("@haxtheweb/multiple-choice/lib/confetti-container.js").then(
    (module) => {
      // This is a minor timing 'hack'. We know the code library above will import prior to this running
      // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
      // this "hack" ensures the element has had time to process in the DOM so that when we set popped
      // it's listening for changes so it can react
      setTimeout(() => {
        // forcibly set the poppped attribute on something with id confetti
        // while I've said in general NOT to do this, the confetti container element will reset this
        // after the animation runs so it's a simple way to generate the effect over and over again
        this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
      }, 0);
    }
  );
}
```

## Homework
- Commit your solution to the above problem to your git repo
- go to vercel.com and connect this account to your github account / repo.
- If you do this, your project should automatically start building on vercel for a CI pipeline / demo space
- Turn in a link to your github repo and the link to your project working on vercel (should be like whatever.vercel.app as an address)

### Considerations
- LAs have office hours; use them.
- Do the best you can to provide the most complete solution you can
- Next week we'll remediate to improve solutions and ensure everyone stretches to the same level
- We'll have discussions and in-class review to improve the quality of solutions
- LAs will grade harshly based on requirements, but realize this is still only a few points. The more critical thing will be the feedback given as far as what's missing
