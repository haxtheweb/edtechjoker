# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Tutoring support on campus
TAs have office hours and we use time in class for help too, but https://ist.psu.edu/learning/tutoring/university-park is also available.

# Past weeks
- [Week 1 and 2](fa25/week-1-2.md)
- [Week 3](fa25/week-3.md)
- [Week 4](fa25/week-4.md)

# Week 5
We take the first leep into big kid web development, it is shockingly difficult at first. I can see that in the feedback you gave to answers. Today, we're going to go through some of the things that went well as well as what didn't. The goal of today is to get everyone in class to have their web component working and get everyone the help they need.

# 5.1 - Crit
- https://github.com/michaelnipper3/polaris-chip
- Class recording (past crit): https://www.youtube.com/watch?v=er70EwxF8EU
- Install and follow along if it helps but what's more likely is that you should have your own code up and running and as I run through things if you have similar issues in your code, you should be taking note of the changes to apply

# Enhancements to make from class
- Once you get your code working the way we discuss in class (A card that is my-card which you can define several copiies of in the index.html) Then I'd like you to make the following enhancements
- We need to use the `<slot></slot>` tag. This tag allows you to define where "flexible HTML areas" should be presented. Properties in lit will only allow you to do Strings, NOT HTML (even bolding text in a paragraph will be escaped as opposed to bold)
- We need to use CSS variables and then demonstrate how they work in the index.html file

The goal is for next class, to have working cards which have the following in your `index.html` and rendering correctly.
```html
<style>
my-card[fancy] {
  --my-card-fancy-bg: #FF0000;
}
</style>
<my-card title="Minesotta Wild">
  <p>A professional hockey team, yet they have terrible colors. I wish I had a <strong>AWESOME</strong> neon yellow / lime jersey like their retro-reverse jerseys</p>
</my-card>
```

# 5.2 / 5.3 (based on how far we get each day)
## Let's get fancy with CSS selectors
**Past class class recording** -- https://www.youtube.com/watch?v=tGfWOXXvCdQ
**another Past class recording** - https://www.youtube.com/watch?v=9GIR4TM-gwY

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
- Get your images / titles allowing for the cards to look relatively uniform (not some squishy, some gigantic by constraining image max size)
- Turn into Canvas a link to your github repo where this code is located

## Note
This largely ends our work with the `card`. We will publish them to NPM and use them in a new repo to complete the end to end workflow of a developer in this space.

After that we will work on a new element. Each time we work on a new project there will be less training wheels but this feedback loop is the same over and over again in the industry:
- Get requirements
- Make a design (step we are skipping a bit to learn)
- Make a new element / boilerplate repo
- Start to translate the design to the element
- push up to github
- Deploy demo to a URL (vercel for us starting next week / many others exist)
- automated testing (skipping this to learn)
- publish to npm / leverage in the production project

### Get ahead
Next week, and going forward, we will use a new "tooling" that you actually installed earlier in the course.
```
npm install --global @haxtheweb/create

```
Then you can run `hax start` or `hax webcomponent` to start creating a web component. If you want to get ahead, we're going to start using that tooling to produce web components that leverage a design system called DDD. DDD is based on how Penn State wants properties to look (broadly speaking) as far as spacing, colors and font usage.

You can learn more about the details of DDD here: https://haxtheweb.org/documentation/ddd

Next week we will use this tooliing to build a new element and get it pushed to github then published on vercel to understand that workflow. Once we get that down and where DDD is as far as visual documentation, you'll get to build a card to spec using university spacing to try and match the composite in question.

You can see what the tooling should look like by going to this site: https://playground.hax.cloud/
This is running a copy of the `hax` program in the browser so you can see what the output should look like and how it should work. **YOU MUST INSTALL THIS ON YOUR COMPUTER SO YOU CAN WORK ON CODE THAT IS DEPLOYED TO GITHUB VIA VERCEL. THIS IS PURELY FOR DEMO PURPOSES TO UNDERSTAND WHAT IT LOOKS LIKE**

#### Instructor note

While DDD is not some widely recognized standard, Bootstrap, Tailwind and Material (Google) are common in industry, as is the concept of design systems generally speaking. EA Games will have their own design system vs Adobe vs Red hat. We are leveraging DDD:

- To learn how to implement CSS variables
- To learn how to implement `SuperClass`'s so that we can "mix-in" functionality between class'ed objects
- To learn how to read documentation and leverage an existing project
- To make the things we make in class "feel" like the university / HAX to benefit future students!
- Do realize DDD was made by a former IST 256 student.. just like you, who learned in class, then made something awesome!

As with everything in this class, my goal is to give you skills so that you understand the low levels of the browser and it's languages so that you can extrapolate and better understand ANY design system, library or framework that you come across.

