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

# Active Schedule

# Week 5 - More with Web components
As expected, results from homework were very mixed. It's not an easy subject, and some times we have to stretch a bit on something in order to see what we can retain. This week we start into thinking like an HTML spec author. This is deep thought work for sure and we are lucky to be building on abstractions, but let's start the process that they went through to think about the attribute and design considerations of the HTML primative tags (p, img, a, table, etc) and use that process to build our own card so that it is reusable like the original tags but more robust!
## Tues
- Let's review issues people had in doing that
- Crit:
  - https://github.com/ssambender/polaris-chip
  - https://github.com/emirahanna/polaris-chip
  - https://github.com/infodigger33/polaris-chip - This one let's fork / clone and dig into together

### Activity: Talk to people in your pod 20 min
- Did anyone get their card working? If so, let that person drive so to speak as far as explaining how they got their card working
- If anyone is completely lost and their card doesn't work, debug. what's broken about it? where are they stuck
- I saw a lot of components, but not all were reusable. Come up with 5 issues (among your pod, 5 total, not the same over and over) that you see when reviewing each other's code.
- What is NOT reusable by the following definition:
> A random person searches the internet for a Card that has your details on it
> Are they able to download it and write `<my-card title="Fresh Prince" fancy source="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPgSRgEYJ3lY8Ky8wNqfoJqWe2U2VMe-RIKbO_0HSXGj5sHA-_"></my-card>` and obtain a card that looks 'fancy' with the title fresh prince written on it and a picture of a better time?

If someone would get your card and not be able to replace the title / image on it with their own, it's not reusable. Work with your pod to get everyone's cards reusable. Add this card to your demo to ensure that you have support for gigantic images!

When you feel confident that everyone in your pod has a working card that is reusable, post the link to it on the teams channel.

## Wed
- If your card isn't working / your having issues, talk to the LAs / reach out for help
- For Thursday, clean up your card and try to implement the rescoped JS based buttons to wire up functionality in the example we looked at in class.
- This will become homework in addition to what we do Thurs.

## Thursday
- Live demo / follow along adding the things below
- Class recording of the below: https://www.youtube.com/watch?v=hLDrFa45wJQ

## Let's get fancy with CSS selectors
- Adding a 'reflected' variable to our element. Reflected variables allow you to change the properties of your card and have the CSS change as a result
- live code demo adding a reflected variable in CSS so that `:host([fancy]) { background-color: golden; }` works
- `fancy: { type: Boolean, reflect: true }`
- Follow along and add support for `fancy` so that we can add fancy which changes the background color / borders / drop shadow of our card
- https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
```js

constructor() {
  super();
  this.fancy = false;
}

static get properties() {
  return {
    fancy: { type: Boolean, reflect: true }
  }
}
```

```css
:host([fancy]) {
display: block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
}
```

## Let's support flexible HTML areas in web components
- Some of you had properties that were "description" or really long blobs of text to put on the card.
- Let's try an experiment. In either your title or 'description' property try to make some of the text bold
- What happens? Why did this happen? Throw a screen shot in Teams of what happens when you tried to apply this
- `<slot>` to the rescue, but let's put it in 2 new tags that can work together `<details>` and `<summary>`
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details - allows you to collapse an area
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Slot (the docs on slot are confusing but including just so you see them)
 
```html
<details ?open="${this.fancy}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
</details>
```

## Let's make it so when fancy changes, our details area opens as well
- A few of you have asked "Is this just a design element? Where does the JS go?" or some version of "Should I add methods to my card?"
- This is an example of when it makes sense to do something like that -- responding to events and actions in the element itself
- Let's add a method called `openChanged(e)` This will flip `fancy` between `true` and `false` based on the Details area opening and closing
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#events -- details has a `toggle` event
- **Question**: If the user is clicking this to open and close it, why are we not listening for the "click" event?

```html
<!-- put this in your render method where you had details -->
  <details ?open="${this.fancy}" @toggle="${this.openChanged}">
```
Note that the `@` is somethign lit specific. You won't be able to do this in `index.html` and is a good example of "syntactical sugar", meaning something that is NOT vanilla.
Here is the equivallent to what this is doing in case you were wondering
```js
this.shadowRoot.querySelector('details').addEventListener('toggle', this.openChanged.bind(this));
```
We won't do it that way but so you are aware; think of it like the jquery `$("details")` selector syntax but JUST for events to make it easier to read.

This is the JS method I'll be adding to my `class`
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

# IF THIS DOESNT WORK FOR YOU TRY THIS ONE
Welcome to browser differences. If you use safair the 1st one will never work. If you use the latest version of Chrome it will work, if you use the previous version of chrome it won't. I had no intention of creating htis problem and yet here we are... learning exactly the issue w/ an evolving spec.
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

## Additional Design considerations
- Get your card to have height / sizing requirements so that long title don't bork the design
- Same thing but with images -- https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio helpful article / attribute for this
- Same thing but with the description area

```css
 details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }
```

## Homework
- Get your card to have a `fancy` attribute like from class that changes the styling
- Add the details and summary so that when you toggle details it also toggle fancy
- Ensure that when you change fancy (or set it ahead of time) that it ensures we collapse or expand to match
- Add support for `<slot>` and get your description to load that way instead of via property (unless you want to support both like in the example)
- Get you images / titles allowing for the cards to look relatively uniform
- Get the JS working for the buttons in `index.html` so that the operations work
- Turn into Canvas a link to your github repo where this code is located

## Note
This largely ends our work with the `card`. We will publish them to NPM and use them in a new repo to complete the end to end workflow of a developer in this space.

After that we will work on a new element. Each time we work on a new project there will be less training wheels but this feedback loop is the same over and over again in the industry:
- Get requirements
- Make a design (step we are skipping a bit to learn)
- Make a new element / boilerplate repo
- Start to translate the design to the element
- push up to github
- Deploy demo to a URL (vercel for us / many others exist)
- automated testing (skipping this to learn)
- publish to npm / leverage in the production project

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
