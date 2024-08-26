# Week 7 - 8 - Remediation & another Stretch
- We'll review progress made on the stretch from last week
- Sticker worthy examples:
  - https://github.com/Kimaj0424/polaris-chip
  - https://github.com/ipeskin04/polaris-chip
  - https://github.com/ssambender/polaris-chip -- awesome playing card version

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

- localStorage from class -- https://youtu.be/NpL3Tq1ipGU

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
- Remediations on Stretch 1 (and notify your LA so they can verify) and you can earn back full credit here if applying fixes / missing requirements
- This is purely a status check in associated with Stretch 2. LAs will provide feedback based on what's there but it will be more of the form of "make sure to account for..." as opposed to "this is wrong"
- So long as you demonstrate progress in what you submit this weekend (generally has a tag name, looks sorta like a thing, starting to take into account requirements) it is full credit

### Due as part of the full submission for Stretch 2
- Link to code / published to vercel
- Blog post on HAX.psu
- Link to your code / working vercel demo in the post
- Write a post about your experience doing these stretches / web components based development up to this point
- What worked well with Stretch 1? What did you struggle with but figure out? What do you still not fully grasp?
- What worked well with Stretch 2? What did you struggle with but figure out? What do you still not fully grasp?
- What are 3 things you feel confident in knowing how to do now?
- What are any things you don't feel confident in knowing how to do by this point?
- This is due Sunday AFTER break though I'd encourage you to clear you plate mentally prior to break
