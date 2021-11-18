# Draft Syllabus
This MD file is subject to change. As we are building this course out based on needs of our classmates, we'll occationally detour from this. This is a work in progress / general timing outline as I hope we are to achieve it.

# Past weeks
- [Week 1](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-1)
- [Week 2](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-2)
- [Week 3](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-3)
- [Week 4](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-4)
- [Week 5](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-5)
- [Week 6](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-6)
- [Week 7](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-7)
- [Week 8](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-8)
- [Week 9](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-9)
- [Week 10](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-10)
- [Week 11](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-11)
- [Week 12](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-12)

# Week 13
## Tuesday - out sick; free working day

## Thursday
- Review work submitted, providing feedback and critique
### 3b4b
- Wow. Fantastic start visually. Right on track with lots to do but really good direction.
- Think of how you're going to approach this responsively. I joked a bit about animation of things (tho cool if it did ;) ) but it should at least scale proportionally to ~ 400px. Try to envision how it looks / does this on phone, tablet, laptop and big screen TV type sizes (find break points for these that are reasonable. usually like things like 400, 800, 1200, 1440+ but find better values)
- Watch for a11y considerations around alt default values. For example: `this.alt = "Stamp";` should be `="";` as its a decorative image. Same w/ photo (tho need props to allow user implementing this to define at top level card implementation like photo-alt)
- label, to and from should be translatable strings. Not sure user needs to be able to override them (card has as props currently) see i18n post from last week
- good, effectively slots. make sure to implement more example content for them in demo
- make sure there's the ability to override the locations variable `INSERT-LOCATIONS-HERE` via props passed down from card (same w/ stamp, postmark, photo)
- Another possible way to do the photo is a slot in card that's passed down to right place. `::slotted(img)` instead of `img` in that will allow same thing but as long as can be modified via props not a big deal
- Make sure to run a Lighthouse Audit (this is relevant to everyone) as it gives great feedback that's often easy to implement. For example your stock images are nutzo sizing. Should at least be smaller JPGs
![lighthouse score](https://user-images.githubusercontent.com/329735/142298185-f2178b0f-5f26-4d95-b9ae-cdac1cdca0bf.png)
### PenStat
- Great progress with a lot of functionality already built in and design is starting to match comp
- for font color when using simple-colors, do this: `color: var(--simple-colors-default-theme-grey-12);`. This will fix your color contrast when `dark` mode is activated. This is how we *gaurentee a11y* when it comes to visual contrast. background-color some low number, text color high number grey (then dark flips it)
- `.backgroundbox` can also pick this color up and pass accentColor down across things that need to utilize the appropriate CSS variables
- very cool on the translation being pegged to voice dialect change. Make sure this is a boolean for `speak` or something so that it shows a little icon-button for a speaker. Clicking it then does the speach as opposed to when you test correctness. It could be a form of hint or even a review mode where it's speaking them to me. Speech synthesis API could then be used to push a button to test your voice input against what it is (this was clearly a joke just to mess with you. I mean, you couldn't just create your own duo-lingo app like this for free... could you.... could you....)
- Very creative block but this shouldn't be in the super.firstUpdated conditional block of logic
```js
if (propName === 't') {
  this.i18store = window.I18NManagerStore.requestAvailability();
  this.speech.lang = this.i18store.lang;
  console.log(this.speech.lang);
}
```

### nothing to review
- IST402Group1
- IST402-Group-F
- ist402groupj
- PaddysHub
- 

- [Reading to start understanding haxProperties wiring](https://dev.to/btopro/understanding-haxschema-the-api-powering-our-editor-2ln6)
  - There's example wiring in the element repo I gave you
  - When you modify your tag name, you'll need to update the associated reference in when we call "appstore" specification to make it register correctly in the HAX demo space your repo ships with. Namely this line will need updated -- https://github.com/elmsln/project-3/blob/master/assets/appstore.json#L4
  - After break I'll go into more detail about wiring and how it works for examples but you can see in the blog post a deep dive on how an individual property can be mapped using the `inputMethod` that makes sense.
  - Think of this like StorybookJS knobs.
- [MutationObservers example code pen](https://codepen.io/dayvidwhy/pen/egdZyY?editors=1111) (hit console button in codepen to see what's happening)
  - Mozilla docs - https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
  - change in DOM structure below an item generates a change record / specialized event
  - Could be used to detect when lightdom children are added or changed in a more flexible manner
  - possible example: drag and drop to reorder children would change node order, would be a mutation
  - Mutations can happen on attributes, nodes (order, adding / removing), children of nodes / whole tree, or textNode changes (characterData)
  - Important to do data clean up for memory / performance reasons
- Group activity: sharing progress and providing feedback to teams developing same element as you
- 1/2 of group move left, 1/2 stay; only within the teams working on the same problem
  - Conference badge people group up with trading card people
  - click the words people group up with sort the words people
- Share your repo w/ another team
- switch laptops or clone and setup their project locally to review code
- Each pair should be looking through code of the other group at the same time
- Create an issue that has 3 recommendations for how they could improve their element overall at a code level (CSS, JS logic, or HTML structure)
- The issue should include any problems that you helped talk through with the other team (like if they are stuck on how to solve something, you showed a possible solution, gave advise, and visa versa)
- Post a link to the issue queue of each project at the end of class. There should be at least 2 issues posted in each queue.
- This is class participation for today
- Come back together with your group and discuss / work on project more

## Homework
- Read https://dev.to/btopro/understanding-haxschema-the-api-powering-our-editor-2ln6 to understand how HAXSchema can be written to allow your asset to talk to the HAX editor.
- Project check in 3 is due the Sunday after Thanksgiving
- This is a simple status update
- What your group got done since last check in
- What insights you gained from the class activity
- What your next steps are?
- Your design should start taking shape
- Your logic layer should be starting to come together
- You should at least take a stab at modifying the haxProperties HAXSchema to map to your element and understand that relationship

# Week 14: Thanksgiving
- Nothing but tur-key tags

Nov 28th: check-in 3 due
- 
---
*Below this line is more variable*
---

# Week 15 & 16: This Fall with 100% more in person instruction: Project 3: Final feedback and open code critique
- This time will be scheduled with presentations by teams of the state of their solutions
- This feedback is then to be used to finalize code, documentation and other aspects of the final PR

# Week 17: Finals week
- Tuesday of finals week your team's final PR is due along with all documentation of how to use your solution to the issue(s) your team resolved

## Guest speakers (confirming dates)
- Michael Potter - Red Hat front-end web developer, worked on HAXTheWeb previously, now works on [PatternFly Elements](https://patternflyelements.com/)
- Nikki Massaro Kauffman - HAX UX and a11y lead, my co-worker-in-crime
