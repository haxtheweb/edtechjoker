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
- [Week 15](https://github.com/elmsln/edtechjoker/tree/master/fall-21/week-15)

# Week 16: Project 3: Final feedback and open code critique
- This feedback is then to be used to finalize code, documentation and other aspects of the final PR
## Tues
### PenStat
- visual / functional feedback
- awesome click to read the word. Make this smaller / well labeled as to what it'll do
- Make the correct answer: text translatable
- when clicking the button ensure it's reading the `innerText` of the correct thing instead of symbols / HTML brackets :)

### pj3
- make sure top level tag is not rename-me, internals
- tc-statinfo - needs trait and stats implemented / wired up
- header needs name wired into it
- photo needs wired in and `alt` needs to default to `''` but you should pass this alt info down from the top level card

### IST402Group1
- Up and Down logic review
- contextual render of reset

### table-in-the-corner
- How can we fix the simple icon still being clickable after the button is disabled? (for up and down arrows)
  - Apply @click handler to the `button` as opposed to the icon. icons shouldnt really be clickable (semantically)
- We are having trouble with the best way to support linking HAX with each sortable option, our questions do not remain loaded in the component. Is there a way to dynamically support this questions and options within HAX, or is there a way to link a JSON file?
  - the JSON file is an interesting thought. BC of your API I think the only way you'll be able to interface is via a JSON or CSV file.
  - Here's something you could reverse engineer `@lrnwebcomponents/csv-render` can render / user a CSV file as data
  - https://github.com/elmsln/lrnwebcomponents/blob/master/elements/csv-render/src/csv-render.js#L284
  - If you created a CSV / JSON file to match the format you have here for the array of objects then you could map the file reference to a `haxupload` field
  - *ask team 3B4B about this as it's a file reference*
- Should we support adding more questions and options within HAX? This goes with the previous question.
  - Probably going to have to go the pre-built file that is formatted to support it. The CSV file loading approach is something a normal person could do
  - so you'd have like title, option 1, option 2, option 3, option 4
  - We have the ability to generate nested array data but it's a very messy UX currently unfortunately
- sortableOption needs to not be specific to 3 photos of dogs ala http://localhost:8000/assets/husky.jpeg

### runtimeErrorsMadeEasy
- Is it ok if we do the event as hockey instead of media?
  - yes but should be variables like event-banner and the default is the hockey one. event-logo and the default is the goalie helmet
- How should we get the photo inside the photo holder within our photo element?
  - The photo holder has a div with a background-image set to the holder that's the right size
  - your image is then wired into an `<img src="${this.source}" />` and lays on top of the background-image of the TV / photo holder
- What advise do you have for us in general?
  - outline generally looks correct though should support changing accentColor in order to not make it grey but any color they pick
  - the outline being blurred for a "shadow" on hover is a bit odd. Should be more pronounced as a shadow (darker) as right now it's just blurry
  - `<slot>` in the content from the top level which can be used in place of the name,title,company aspect
  - need to support an image
  - need to support name, title, company properties
  - should be some kind of image that the person's picture shows up in (comp is a TV w/ the files)
  - https://remixer.visualthinkery.com/g/c/oerxdomains21 is the comp, should have properties to match

## Thursday
- Ask me questions in between, otherwise it's a working day in class. I'll do another pass through work people ask to have reviewed

## Homework due Sunday, Dec 12th
- Blog post 10, the final blog post is due Sunday, **Dec 12th by midnight**
- Blog post topic (2%)
  - You're final project. Write a post with visual documentation of your card (Gifs are helpful too)
  - Promote your published NPM project as well as github source
  - Write a tutorial explaining how you made the element including any novel approaches you are particularly proud of
  - Make sure to reference Lit, HAX, any libraries you reused, any articles that helped you create your element
  - Bonus: +2pts publish your article with a working codepen that shows your finished web component published on NPM
  - https://codepen.io/btopro/pen/ZEXYPZG is a demo you can fork / reverse engineer to help with the bonus using https://unpkg.com/

# Week 17: Finals week
## Tuesday
- The clasroom / space at the normal time will be available and I will be in class for any last minute feedback / office hours advisement
# Final project is due submitted to Canvas as link to NPM published package by Tuesday (Dec 14th) at Midnight
- This is 20% of your grade in the course.
- https://github.com/elmsln/edtechjoker/tree/master/fall-21/projects/p3-haxtheweb
- Make sure to check the associated issue you selected for requirements / bonus oppurtunities specific to your element
