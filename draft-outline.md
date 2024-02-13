# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Past weeks
- [Week 1 & 2 - git / intro](sp24/week1-2.md)
- [Week 3 - card remediation](sp24/week3.md)
- [Week 4 - Card into web component](sp24/week4.md)
- [Week 5 - More card into web component](sp24/week5.md)

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

---

# TOPICS BELOW THIS LINE STILL IN FLUX SO WORK AHEAD AT YOUR OWN PERRIL

---

# Week 6: Stretch Time

## Tues
- We'll quickly go over 1 well made solution doing everything correct
- Have your code open
- Let's wire our repo up to vercel (if you don't have vercel working bc of account lock, not end of the world; just watch w/ a partner)
- We'll pull in an existing resource - https://haxapi.vercel.app/?path=/story/media-memes--basic-meme -- Add a meme to your card

## Stretch time
I've given you the wiring and process to start building things with web components. SO, now its your turn. Below are the requirements for the
homework this week. Discuss them with your pod, co-work, share research, and come up with how to best build the following:
# Counter App
- "Counter" is the most common demo repo in any project implementation because it illustrates simple "state management"
- Using your current repo; create a new element in `src/counter-app.js`

### HTML
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
    // do your testing of the value and make it rain here
  }
}

makeItRain() {
  import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
    (module) => {
      setTimeout(() => {
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
- LAs will be grading based on meeting requirements outlined

## WC Workshop
- Last year I wrote a stand alone workshop for some non-IST students
- We'll use a variation of this to start to look at how we can get data via `fetch` and `json` structures in order to "stamp" multiple copies of our template

# Week 7-9 - The ones with some topics about stuff
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
