# Week 15
## Tuesday Nov 30
## bruntimeerrorsmadeeasy
- Cool way of solving the hole punch via css
```css
.holePunch {
  margin: auto;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: white;
}
```
![hole punch top of frame](https://user-images.githubusercontent.com/329735/144101750-cb92c5cd-87ed-4e02-8470-7dd2e9d21f02.png)
- Though this is bizarre...
![code for hover state blur](https://user-images.githubusercontent.com/329735/144101576-3e1a7545-4640-4533-a5ab-16b99b408f67.png)

## bIST-402-Group-1
- Good start on the `sq-question` element
- May want to look at something like the following as far as implementation:
```html
<sorting-question>
  <sq-question>The thing that is a 1</sq-question>
  <sq-question>The thing that is a 2</sq-question>
  <sq-question>The thing that is a last step</sq-question>
</sorting-question>
```
## bGroup 3b4b
- i18n vanilla solution feedback requested
- remove "POST CARD" from image and make it translated text like you have the others
- Work on alignment of translated text w/ the labels / lines
- responsive break points (maybe something like a media query in the demo does `transform: scale(.8);` in order to maintain aspect ratios in media)

## TheKodingKrab
- CSS comments MUST be `/* thing */` watch for where you have notes to each other in FlashcardImage.js `// Not sure where these are appearing` bc it'll brick CSS code :)
  - related to your comment: `export class FlashcardImage extends LitElement` you're not extending `SimpleColors` so you don't have access to these css vars
- imgSrc statefulness / simplification of solution in `updated()`
- Detection for correct answer is soooo close. Here's the issue.
What you have:
```html
<flash-card-body>
  <div slot="front">
    <slot name="front"></slot>
  </div>
  <div slot="back">
    <slot name="back"></slot>
  </div>
</flash-card-body>
```
What it can be (odd looking as it might be)
```html
<flash-card-body>
        <slot slot="front" name="front"></slot>
        <slot slot="back" name="back"></slot>
      </flash-card-body>
```

- SRTE feedback:
  - This gives data points to justify offering me contracts; there is no $ involved otherwise so please give honest feedback.
  - I use this feedback to make improvements / adjustments each semester so please take time to fill this out so I can improve.
  - This is attendence for today
  - https://rateteaching.psu.edu/Default.aspx

- Time to work in groups / ask questions

## Thursday Dec 2nd
- More code reviews / feedback based on what's turned in between classes
- More time to work as a class
- I'll be holding off hours at Starbucks on Calder Friday, most of the day.

## Homework
### Check in 4 due Sunday at midnight
- Element should be highly functional / looking like the comp in question
- **If you are not, then I'd like a detailed plan of what you are going to do to finish the project**
- Your demo should have _multiple implementations of your elements_
- You should be wiring up to HAX via the file in the `lib/` directory. If you have questions relative to this, now is the time to ask.
- If you have questions, ask them in this document so we can address them
- **After this check in, you have 3 class periods before the project is due / the semester is over**
