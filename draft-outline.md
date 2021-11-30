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
- [Week 13](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-13)
- [Week 14](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-14)

# Week 15
- IST-402-Group-1
  - Good start on the `sq-question` element
  - May want to look at something like the following as far as implementation:
```html
<sorting-question>
  <sq-question>The thing that is a 1</sq-question>
  <sq-question>The thing that is a 2</sq-question>
  <sq-question>The thing that is a last step</sq-question>
</sorting-question>
```
- Group 3b4b
  - i18n vanilla solution feedback requested
  - remove "POST CARD" from image and make it translated text like you have the others
  - Work on alignment of translated text w/ the labels / lines
  - responsive break points (maybe something like a media query in the demo does `transform: scale(.8);` in order to maintain aspect ratios in media)
- TheKodingKrab
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
  - This does nothing for me professionally (beyond justifying that people find the topics useful and keep offering me contracts to teach)
  - I use this feedback to make improvements / adjustments each semester so please take time to fill this out so I can improve.
  - This is attendence for today
  - https://rateteaching.psu.edu/Default.aspx
- Time to work in groups and ask questions

---
*Below this line is more variable*
---

# Week 16: This Fall with 100% more in person instruction: Project 3: Final feedback and open code critique
- This feedback is then to be used to finalize code, documentation and other aspects of the final PR

# Week 17: Finals week
- Tuesday of finals week your team's final PR is due along with all documentation of how to use your solution to the issue(s) your team resolved
- The clasroom / space at the normal time will be available and I will be in class for any last minute feedback / office hours advisement
