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
- [Week 6 - STRETCH 1](sp24/week6.md)

# Week 7 - 8 - Remediation & another Stretch
- We'll review progress made on the stretch from last week
- Sticker worthy examples:
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

# Week 9 - sPrInG bReAk

# Week 10 - The one where society doesn't shut down completely during spring break
## Tues - The one with the GuEsT LeCtUrE
- EdTechJoker talking about what Project EdTechJoker is and finding your purpose in this world
- All I ask is that you bring paper, something to write with, and an open mind
- I will ask that devices are away, and that you just.. listen, and write things down you find relevant

## Thursday - Unconference
- I love unconferences and feel that I learn WAY MORE at them than a traditional learning experience
- So let's blow up the typical topic

## 20+ minutes
In your pods, review your last blog post and code. Mark someone as the 'scribe' to document the conversation

### Everyone discuss what you struggled with in Stretch 1 (the counter app)

- When someone nailed it, show how you achieved that
- If EVERYONE struggled with something and didn't get it; write down what your pod DID NOT GET AT ALL
- If everyone nailed something, write that down in another column

### Everyone discuss what you struggled with in Stretch 2 (the university status element)

- When someone nailed it, show how you achieved that
- If EVERYONE struggled with something and didn't get it; write down what your pod DID NOT GET AT ALL
- If everyone nailed something, write that down in another column

### Scribes. What did we not understand?
- We'll go a pod at a time. What concepts / things in both stretches did you NOT understand?
- When someone mentions something that they didn't get, if your group wrote down that you 'got it' for that concept, raise your hand / say so.
- We'll write down on the board concepts that need additional coverage
- After this list is generated, we'll form mini-study groups for each concept
- People that feel confident they understood the concept, you are the defactor instructor there
- People that feel lost on a concept, you are the students working with that instructor to better understand the concept

- This will involve getting up and moving. If we have 3 concepts, that's 3 groups. if we have 8 concepts its' 8. this will be highly contextual to the topic space / what is missing

## Homework
- Write a HAX.psu blog post about your experience with this 'unconference' style of learning
- Apply any additional remediations you desire to Stretch 2 based on feedback / points missed as well as the discussions you had
  - You can gain full credit on these for meeting all requirements
- What did you learn that you were unsure of prior to the unconference groups?
- What (if anything) was your take away from the talk "With the right tools, you can build anything"?
- How can you apply this to your life and career?
- What other topics do you wish were covered or questions you have about the web that we can untangle in a similar manner? This does not have to be course material, it could be any web related concept you are unsure of still.
- Turn this in by Sunday night. This concludes the homework portion of the course
 
---

# TOPICS BELOW THIS LINE STILL IN FLUX SO WORK AHEAD AT YOUR OWN PERRIL

---

# WC Workshop
- Printing multiple items from a web service
- Last year I wrote a stand alone workshop for some non-IST students
- We'll use a variation of this to start to look at how we can get data via `fetch` and `json` structures in order to "stamp" multiple copies of our template


# Week 11-16 - Project 1 and 2 work
- Code hard, Kick butt and chew bubble gum*
  - *We're all out of bubble gum

# Week 17 - Final Destination
- no items, 5 stock, no mr game n watch
- Final project Due Wed of Finals week
