# Week 6 - Streeeeetch time
## Why this class changes all the time
A few people could not get the change event to map correctly. In digging, it was because Chrome supported a way of sending this event data that is different from Safari / Even past versions of Chrome!

### Works in newest Chrome

```js
// put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }
```

### Will work across platforms

```js
// put this anywhere on the MyCard class; just above render() is probably good
openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}
```

## Tues

- We'll quickly go over 1 well made solution doing everything correct
- Have your code open
- https://github.com/NickBoi0/polaris-chip
- https://github.com/drichards6/polaris-chip

### Class Activity

- ~30 min activity
- Let's wire our repo up to vercel (if you don't have vercel working bc of account lock, not end of the world; just watch w/ a partner)
- We'll pull in an existing resource - https://haxapi.vercel.app/?path=/story/media-memes--basic-meme
- Add this meme to your card to replace the image
- Get this working locally and then pushed up to github for vercel to rebuild

## Stretch time
The rest of class is to start into this and ask questions of me / our TAs / each other. We'll also have time to work on Thursday. I've given you the wiring and process to start building things with web components. SO, now its your turn. Below are the requirements for the
homework this week. Discuss them with your pod, co-work, share research, and come up with how to best build the following:

# Counter App
- "Counter" is the most common demo repo in any project implementation because it illustrates simple "state management"
- Using your current repo; create a new element in `src/counter-app.js`
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
install outside code: `npm install @lrnwebcomponents/multiple-choice --save`
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
  import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
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
- Ideally this will be built and working on vercel; (if that part doesn't work, not end of world)
- Turn in a link to your github repo and the link to your project working on vercel (should be like whatever.vercel.app as an address)

### Considerations
- I know it's THON this weekend
- Do the best you can to provide the most complete solution you can
- Next week we'll remediate to improve solutions and ensure everyone stretches to the same level
- LAs will grade harshly based on requirements, but realize this is still only 2 points. The more critical thing will be the feedback given as far as what's missing
