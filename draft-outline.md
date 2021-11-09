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

# Week 12: Project 3: HAXTheWeb
# Tues
- [TheKodingKrab](https://github.com/TheKodingKrab/flash-card/blob/master/TEAMNOTES.MD)
  - How should the try again button be implemented?
  - **Try again would reset the element to it's initial state. Make sure that anything the user can do to modify the element has a boolean state that can be undone effectively. type in field (ok reset input to nothing). Click to check answer (Boolean for testAnswer changes from false to true, card flips and shows anwers based on boolean change. To reset, just set it back to false). Using booleans and updated() life cycle will be important here.**
  - Animations/ potenital flips?
  - **Flip animation not required but a nice touch to ensure user context is maintained. I click and expect soemthing to happen so it just updating would also be good but something to imply a different state is happening like a flip would be cool.**
  - Reset of all the components?
  - **If the cards in their connectedCallback set a window.addEventListener("flash-card-reset") or some such thing then when the user clicks reset in any one card you can bubble the event up. Here's the docs on making and listening for custom events -- [docs on custom events](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)**
- [runtimeErrorsMadeEasy](https://github.com/runtimeErrorsMadeEasy/Project3/blob/master/TEAMNOTES.MD)
  - How do we wire our element to Hax?
  - **[Docs on wiring elements to HAX](https://haxtheweb.org/documentation-1/hax-development/hax-schema) but there's also some boilerplate that lays out the bulk of the initial integration. Think of the configure block of the schema as an array of objects, each new object is similar to a knob in storybook but will establish a form input field for a user. Slotted areas if marked correctly will just automatically work in HAX. the demoSchema at the end of the schema is what HAX places in the page as an example / initial embed if you drag and drop the brick into the page.**
  - Can we take creative liberties with the design of our event badges that aren't a part of the comp?
  - **Within reason. If you are taking creative liberties that enhance the badge as opposed to removing requirements / skirting things you don't know how to do, then that's fine. If you're improving upon the design to make it more responsive, accessible, or to have more well defined options then absolutely feel free to do so! This is to be your interpretation of the assignment so long as it's in the same ballpark of complexity.**
- [table-in-the-corner](https://github.com/table-in-the-corner/project-3/blob/master/TEAMNOTES.MD)
  - https://user-images.githubusercontent.com/89546413/140660308-9ca3b50d-c107-4a48-8b9c-593fc304012f.jpeg - great mock ups / function / state definitions!
  - animations?
  - **Mozilla docs are very in the weeds here / detailed -- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations however I personally find this article / things from CSS tricks to be more practical examples to learn from https://css-tricks.com/almanac/properties/a/animation/ . They key with animations is that they be subtle / reasonable
  - dragging from point a to point b
  - **This is not THE solution but you should be able to reverse engineer / clean up a solution like this in some fashion -- https://codepen.io/andyvanee/pen/KKKaOmw and it's written in a slightly weird way with an older version of Lit**
- [IST402-Group-F](https://github.com/IST402-Group-F/proj3-haxtheweb/blob/master/TEAMNOTES.MD)
  - https://user-images.githubusercontent.com/32485432/140665102-15c1548c-80b8-4f27-a5b3-d474d2d71f26.png - nice simplification of what's needed to get going
  - Biggest question right now is how we are going to select words individually out of a paragraph.
  - Heard mention of "word nodes" but aren't 100% how they work or how to use them
  - **Best bet is in constructor to parse the child nodes of the light dom. Think of this as the page loads, the element wants to test what's inside of it immediately so it knows the initial rules (so to speak). It'll see 100 words or whatever. If you took those words and then wrapped each one in a custom element that you make like selectable-word (which you'd make) then the selectable-word tag could have click events / states visually for right / wrong answers. Your tag would then have the button to test correctness which would be a String like { correctWords: String, attribute: "correct-words" } and this would be like "Blueberries,Peaches,Apples" with commas between whatever the correct words are. The user clicks different words which sets like `<selectable-word user-pick>` and then you can do a querySelectorAll for this.querySelectorAll("selectable-word[user-pick]") to obtain a list of what they clicked on. When needing to reset, you can just select all that have that picked and remove the value. When testing, you see if what was picked shows up in the correctWords string.**
- [3B4B](https://github.com/3B4B/project-3/blob/master/TEAMNOTES.MD)
  - Execellent break down documenting what's needed. This is a great plan to go off of and nice use of leaving `<slot>` in your picture
  - Are there any conventions that we need to be aware of based on location for the postcard? (ex. local vs. international)
  - **If there are strings IN the card itself like the POST CARD word then it'll need to be translatable / a variable that can be modified**
- [ist402groupj](https://github.com/ist402groupj/project-3/blob/master/TEAMNOTES.MD)
  - good initial mocking over the image in question
  - size and dimensions of this card?
  - repsonsiveness> (mobile, tablet, desktop)
  - **This is up to your group to interpret but make sure that you have a set design and then a mobile / taking into account a consolidated design responsively. This might be reducing spacing / padding between items or making the image size change as it gets smaller. This is open to your interpretation but picking a mobile, tablet and desktop styling is the way to go and picking breakpoints for these**
- [IST402](https://github.com/IST402/pj3/blob/master/TEAMNOTES.MD)
  - So you ARE doing the postcard yes?
  - Nice image mocked up as to what's to be set to different slots and properties.
  - Are we making exact replicates of the post card or just have to have the same elements as the example?
  - **It is to include everything that the mock up does. Visual elements will be expected to comply more thoroughly with the design in the comp much like the card assignment. You may add additional elements or modify the design to fit how you'd like it to look but it can't be in order to reduce complexity of the item.**
- [IST-402-Group-1](https://github.com/IST-402-Group-1/sorting-question/blob/master/TEAMNOTES.MD)
  - Please include photo of your hand made mock up
  - what would be the best way to go about this to keep our run time fast
  - **Lit is fast AF; I wouldn't worry about this aspect personally. Making sure you clean up events is the way to ensure it scales but there isn't a lot of events needed here**
  - what would be the best way to go about this to keep our code simple and easy to read
  - **I would shoot for a "DOM as data" approach. Meaning that you have your element structured like:
```html
<sorting-question>
  <sorting-answer>Mary had a little lamb</sorting-answer>
  <sorting-answer>It's fleace was white as snow</sorting-answer>
  <sorting-answer>Everywehre that mary went</sorting-answer>
  <sorting-answer>THAT LAMB WOULDN'T GO AWAY</sorting-answer>
  <sorting-answer>WHERE DO THESE PEOPLE LIVE??</sorting-answer>
</sorting-question>
```
**Now, when you read the options in based on this.querySelectorAll("sorting-answer") you'll know the correct answer. Immediately then you apply a randomization to the items so that the user can't just look and see the answer by inspecting. Then sorting / reordering is actually moving the children around on the page. When you want to test the order, you compair the stored correct order of elements with the order they are currently. Things not in the right array position get a state indicating that they are wrong, others in the right order, right. Reset then runs the randomization routine again.**
  - What languange will be most vital to build the function
  - **This is primarily JS oriented**
  - How do we get our code to return a value to see if it is correct or not?
  - **The above answer should give clues to this. You'll need at least 2 elements for testing and the option itself. Communicating between the sorting-answer tags and the sorting-question can be done via events and properties. User's "see" the answer correctness via CSS reflection of properties.**
- [PenStat](https://github.com/PenStat/penguin-project-three/blob/master/TEAMNOTES.MD)
  - Great notes / direction
  - Please resubmit your picture if you have it bc github apparently didn't like it
- [Viable-Slime](https://github.com/Viable-Slime/slime-the-web/blob/master/TEAMNOTES.MD)
  - Great photo w/ notes over it + the notes are very detailed for considerations
  - How are we going to produce logic that can determine the order of things
  - **See above notes in other teams doing this as it covers this.**
  - How will we make the options draggable to different points
  - **See above notes in other teams doing this as it covers this.**
  - How will we make it so the options are given at random order
  - **Read at run time and then apply a JS randomization function to the array that you read the item references into. This will be like a this.correctOrder Array which after the array is in the correct order (so pushing a reference to the DOM ndoe into the Array) then a randomization can be applied to the tags in the page. This keeps the correct order stored in the variable so you can continue to do comparisons after the fact.**
  - is there a way to hide the hard coded correct options order
  - **See above notes in other teams doing this as it covers this. Reading at run time and then immediately shuffling them would be the way to achieve this.**

- [wrap / unwrap conceptual helper methods](https://dev.to/btopro/simple-wrap-unwrap-methods-explained-3k5f)
- [Deep dive on mark the words](https://codepen.io/btopro/pen/dyzKzMG)
  - How to use .map and databound type Array
  - generating content inner without a slot tag (DOM as Data)
  - creating elements programatically and inserting them
  - adding events and listening for them to respond accordingly
  - checking values
  - "wiping correct answers" so people can't cheat (within reason)

## Thurs Building
- Feedback on anyone that submits things between Tues and Thurs / topics they want to see
- Working with `<input>` elements / events
  - `@change`
  - `@click` to test a value against the "correct answer"
- Event Propagation
- Unidirectional Data flow
- Time to work in class

## Homework
- List progress made as well as anticipated delegation of work
- You should at least be starting to piece together your elements visually / scaffolding wise
- If you have input driven elements you should be experimenting with how to capture and leverage the input
- If you have a design driven element you should have multiple elements started
- List questions / problems experienced so we can address them in class Tuesday
- I will review code in class as requested (in TEAMNOTES / slack ping before Tues).
- Project 3, Check in 2 Due Sunday by 11:59pm
- Submit TEAMNOTES update to slack channel

---
*Below this line is more variable*
---
# Week 13
## Tuesday
- Internationalization - What is it, what's the methodology our team developed, when is it needed, how to implement it?
  - article: https://dev.to/btopro/i18n-manager-web-component-41a2
  - Wiring i18n into an element (live demo you can repurpose as many elements require i18n support)
- MutationObservers (change in DOM structure below an item)
- Review work submitted, providing feedback and critique
- More time in class to work on project

## Thursday
- Review work submitted, providing feedback and critique
- More time in class to work on project

- Performance tricks / concepts:
  - Reading: How Penn State (my team) ships web components in an "unbundled" manner -- https://dev.to/btopro/part-1-how-penn-state-unbundles-web-components-for-cdn-deployments-20di

# Week 14: Thanksgiving
- Nothing but tur-key tags

# Week 15 & 16: Project 4: Final feedback and open code critique
- This time will be scheduled with presentations by teams of the state of their solutions
- Feedback will be given by fellow HAXTheWeb developers
- This feedback is then to be used to finalize code, documentation and other aspects of the final PR

# Week 17: Finals week
- Tuesday of finals week your team's final PR is due along with all documentation of how to use your solution to the issue(s) your team resolved

## Guest speakers (confirming dates)
- Michael Potter - Red Hat front-end web developer, worked on HAXTheWeb previously, now works on [PatternFly Elements](https://patternflyelements.com/)
- Nikki Massaro Kauffman - HAX UX and a11y lead, my co-worker-in-crime
