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


# Week 7 - 8 - Remediation & another Stretch
- We'll review progress made on the stretch from last week
- Sticker worthy examples:
  - 
  - 
  - 

## Stretch 1 considerations:
- If you go back and implement the feedback that the LAs gave by this weekend, you can earn those points back
- Overall I was very impressed with where we're at and as a result you get a bonus... more work [sic]

Sorta... What we're going to do, is ANOTHER stretch, but this time you'll have this week and next to make it pixel perfect. This should allow you enough time to remediate Stretch 1 as needed while having enough time to work on Stretch 2. It is due the Sunday after Spring break but there's a status check in this weekend to get feedback and to ensure we're making good progress.

## Stretch 2: Let's build from a 'live comp' of a client

### The Client

PSU is in the process of increasingly adopting more and more web components because of the brand consistency they provide. Most of these efforts are lead by my team, but there are others very intersted in the technology and the benefits it can provide. They work in component archicture (Angular, Next, Vue) based on skillsets of different groups, but if we had 'brand' centric web components, we could save money and unify the brand by reducing the time it takes to build web properties

### Stretch: A "Campus Alert"
- You've probably seen them on web sites at the university from time to time; like when there's a snow delay
- Message across the top of sites that says "SOMETHING IS GOING ON READ THIS FIRST WHILE YOU ARE HERE"
- Examples, which you are encouraged to use ideas from / inspect to figure out aspects of:
  - https://elements-dev.psu.edu/theme-development/content-page-with-sidenav/ - More well developed of the two
  - https://stamp.prod.fbweb.psu.edu/basic-page-1 - variation to demonstrate color option

 ### Expected of you
Discuss with your pod the best way to go about solving this stretch given the following requirements

### Demo / index.html
- 4 instances. 1 for each of the statuses and another that's using CSS variables to change the colors
- 1 should be 'sticky' where it stays at the top of the screen no matter where it's in the code, the others should appear where they are in the HTML structure
- You can use an id on the special one that uses css variables to modify

### HTML in your element
- Needs to be a well named web component, in a new stand alone file in the same repo we've been working on
- File name should align with tag name and tag name should be something logical given the client and use-case
- Tag should support "Light Dom Diven content" via the `<slot>` tag
- Try to use the least HTML possible to achieve this; the 2 examples / comps have needless complication because of a lack of ability to scope their assocaited CSS / JS

### CSS
- Goal is to visually match the comp as accurately as possible both in colors and accentuated elements. Copying the CSS will not be very helpful bc of the classes / structure they use but you can learn from them, especially for complex usage of `::before`
- support for 3 different 'states' visually. notice (blue), warning (yellow), alert (red)
- CSS variables to allow overriding the colors associated with status (text, background color for text, background color for sides / date)
- Should provide support for mobile responsiveness (1st example has better break points and morphing than 2nd)

### Properties
- something for being open / closed; ensure default is open but with support to start it out closed (as per JS requirements section next)
- something for status
- something for date
- something for sticky

### JS
- stateful support for open and closed status of the alert
- Open by default, but if it is closed, use localStorage API https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage to store the status
- If the user opens the message again, remove the localStorage value
- only use 1 localStorage value for the page, you do not need a unique one for each element on the page

### Accessibility considerations
- Make sure that users can tab to and hit enter in order to toggle the alert open / closed status
- Make sure that when someone toggles it open (or closed) that the opposite button is focused `this.shadowRoot.querySelector('.whatever').focus()` can be used force the keyboard to focus on the selector in question. Do this after toggling

### Thursday / Homework
- Stretch 2 we will work on more in class Thursday
- It is ultimately due after spring break, but has a blogging requirements

### Due this Sunday
- Turn in a link to your github repo where the code is, hopefully auto-built on vercel so that we can see your current status
- Remediations on Stretch 1 (and notify your LA so they can verify)

### Due as part of the full submission for Stretch 2
- Link to code / published to vercel
- Blog post on HAX.psu
- Link to your code / working vercel demo in the post
- Write a post about your experience doing these stretches / web components based development up to this point
- What are 3 things you feel confident in knowing how to do now?
- What are any things you don't feel confident in knowing how to do by this point?


---

# TOPICS BELOW THIS LINE STILL IN FLUX SO WORK AHEAD AT YOUR OWN PERRIL

---

# Week 9 - sPrInG bReAk

# Week 10 - The one where society doesn't shut down completely during spring break
## Tues - The one with the GuEsT LeCtUrE
- EdTechJoker talking about what Project EdTechJoker is and finding your purpose in this world

# Week 7 - WC Workshop
- Printing multiple items from a web service
- Last year I wrote a stand alone workshop for some non-IST students
- We'll use a variation of this to start to look at how we can get data via `fetch` and `json` structures in order to "stamp" multiple copies of our template


# Week 11-16 - Project 1 and 2 work
- Code hard, Kick butt and chew bubble gum*
  - *We're all out of bubble gum

# Week 17 - Final Destination
- no items, 5 stock, no mr game n watch
- Final project Due Wed of Finals week
