# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Past weeks
- [Week 1 & 2](sp25/week-1-2.md)
- [Week 3](sp25/week-3.md)
- [Week 4](sp25/week-4.md)
- [Week 5](sp25/week-5.md)
- [Week 6](sp25/week-6.md)
- [Week 7](sp25/week-7.md)
- [Week 8](sp25/week-8.md)
- Week 9 - Spring Break
- [Week 10](sp25/week-10.md)

# Week 12
- More time to work and ask questions
- Here's some more hints based on questions in check in 1.

# GENERAL THING
- THIS IS NOT AN INTERPRETIVE ASSIGNMENT. THIS IS ABOUT MAKING IT LOOK AND BEHAVE EXACTLY AS SHOWN BUT WITH THE REQUIREMENTS IN QUESTION
- ENVISION THIS LIKE INDUSTRY. TAKE THINGS FROM A VISUAL PROTOTYPE TO REALITY FOR THE CLIENT
- This must be done using the `hax` tooling. If it is not built using vercel, real web components like we have been doing, it will not score well... at all if at all.

# Repos to review today:
- https://github.com/nickcos912/ddd-steps-list
- https://github.com/daa5767/ddd-card-list
- https://www.youtube.com/watch?v=cdePitOaZko
- both of these have some oddness to them, they are in no way perfect, but they both exhibit some good steps in the right direction toward both of the scopes involved
- Even if one is not yours, you can easily learn from both

Great image visualizing the problem at hand to attack for card
![image](https://github.com/user-attachments/assets/9170b262-7d7a-4381-923c-d5203ab1408d)

"How do I make the cards place next to each other"
- https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted can be used to style as will be shown in class, however cards being `display: inline-block;` will achieve this
- @media query can be combined with ::slotted in order to organize different based on the screen -- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries

Open time to keep working. Thursday will be more time to keep working and bringing questions not cleared up today.

## Check in 2
- your project should be done with the functional aspects
- your project should almost be done from the design/visual aspects
- Turn in a link to your public code, vercel working, and any questions you have

# Week 11,12,13 - Project 1
We are going to work on Project 1. This is going to still involve time coming to class, attendence, and check ins weekly. You will have 3 weeks to work on and complete Project 1 to the best of your ability. You must pick between one of two options. Once again, working with people around you is the best way to arrive at the optimal solution. This one also has clearer lines of separation (both involve 2 elements, a list, a functional element as well as a visual element).

While not group work persay, if you want to break the work up with people you trust then you are free to do so just like we did last time. You are all still expected to turn in your own repo, your own work, and it is to be your work.

Project 1 is worth 12% of your overall grade. You will be judged largely on meeting the requirements. Read the requirements of each carefully. Both have a tricky design implication as well as a tricky functional implication (whether that's validation or passing design down to children). These are very similar in scope even if they look different. They are both actual needs and the goal is to get these important pieces added both to DDD and the HAX editor so that content can be produced more rapidly that matches the design spec.

## Options
- [Vertical steps list element #2256](https://github.com/haxtheweb/issues/issues/2256)
- [Campus card list #2257](https://github.com/haxtheweb/issues/issues/2257)

# Check in 1 requirement
- You have started on the element in question. There is code on github / vercel pipeline setup. It is using the HAX tooling. **it is named correctly**
- You have started to work through the code.
- You are to submit a link to your git repo
- You are to submit a picture of how you plan to make this. Sketch, proposed html structure, etc. how ever you concieve of the visual issue as opposed to just the screen shot. What is the screen shot made up of and how?
- Also you are to submit answers to the following in Canvas:
  - What you've done so far
  - What you are planning to do next
  - Current issues you are having

## Questions from class

### How does DDD work exactly? I want to make it so everything can theme off of the data-primary. I have checked out the simple colors files and Im guessing there is something with that.
**We will cover this in class, probably next week, maybe Thursday. In the DDD docs section look at how simple-cta works and it's what we'll be going for** - https://haxtheweb.org/documentation/ddd
 
### does the titles of the card font color have to be the same color as the bar 
**This is a cool idea but could cause an accessibiliy issue if the primary line was like neon yellow (which is a world campus color...)**
 
### For card, is data-accent also a property of the cards? Or is it just a property of the card list (like, can a card determine the background-color (accent) of the entire thing or is it strictly for the card-list)  
**Yes, this is a good idea**
 
### Do I have the ability to create multiple elements through the HAX CLI?
**No, make the `-list` one as name of the project / repo in question. Then make a file next to it called `whatever-card.js` or `ddd-list-item.js` and make the code there for it to work

### What do you mean by multiple elements? Is that possible? I know we've only worked with making one element before. 
**same as above**

### What tags are allowed in the ddd-list-steps-item tag
 **This should not be there**
```html
<ddd-steps-list>
<p>I am not supposed to be here</p>
  <ddd-steps-list-item title="I should be here">
      <p>Also fine because it's a child of a child.</p>
    <ul>
        <li>Thing also fine</li>
    </ul>
  </ddd-steps-list-item>
```

### for ddd-steps-list does a picture need to be implemented. The screenshot has one but the link does not
**It is a flexible content area so it needs to have a `<slot>` which supports rendering anything**

# Thursday

- Common issue in copy and paste of file / build issues has to do with haxProperties() and i18n parts of code. These can be removed.
- Great example of future problems being solved based on existing witnessed:
  - https://github.com/haxtheweb/issues/issues/2258
  - https://github.com/haxtheweb/issues/issues/2259
  - https://codepen.io/fudime/pen/wjeRrq?editors=1100 here's a way to do a circle in CSS if it helps. Borders can also be set to border-style dashed
- In constructor you are able to do this.querySelectorAll which can get you an array of the items in the LIGHT DOM of the element in question as opposed to shadow
- I would work on the card stand alone. The card list is in charge of the responsive aspects
- DDDSuper brings in the variables / minimal aspects of the design system. If you instead build on DDD itself as opposed to LitElement, then you get the entire design system. Given that you have - requirements associated with data-primary this is a hint as to how to manage that:
  - https://github.com/haxtheweb/webcomponents/blob/master/elements/simple-cta/src/simple-cta.js
  - You can find simple-cta in the DDD documentation under "buttons" - https://haxtheweb.org/documentation/ddd
- I made a video for github-rpg-contributors and will make one for link-preview-card when I get time: https://dev.to/btopro/hax-sip-github-rpg-contributors-24ka

⁠**HAX The Club has it's 1st meeting tonight 116 Borland building! Meeting is at 7pm for those interested in building websites for clubs and getting more involved in the project / community.**


Good luck!
