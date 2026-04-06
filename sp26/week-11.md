# THE GITHUB FOR THE FULL PROJECT DIRECTIONS
SEE REQUIREMENTS https://github.com/haxtheweb/issues/issues/2617
# Week 11
Project 1 is due this Sunday. This is a working week. Here are some more examples that we'll step through some

- https://instagram-app-wheat.vercel.app/
  - Note the jumping around as images load. very distracting
  - state updates great. likes maintained great. URL updated and recalled when reloading
  - like button and layout on card need better overall design together
  - dark mode support needed
  - should support all attributes coming across the data.json structure; thumbnails should be used in some way
  - https://instagram-app-wheat.vercel.app/6e934aec.json -- the data structure involved

- https://insta-clone-gilt-two.vercel.app/?page=7
- improve arrows
- good URL state management
- like button needs better designed to be in context of the card
- thumbnail support in some way
- fixing FOUC; what happens when nothing is loaded yet (flash of unstyled content)
- dark mode needs supported `light-dark()` is your friend
- what is a `>` or `<` button? Use some other way of being an arrow and a `title` attribute for accessibility or the words next and previous for improved accessibility
- data loads 15x

## Becoming a Web architect
My worldview is to try and make you understand how to build like an architect. Not just make divs, bring meaning and value to structure and improve UX as a result. Here's some more tools to improve on the designs that I am seeing out there. These are all things to read, understand, and then implement in your projects to improve their quality.

## Fixing FOUC
Things bounce around, flash, look unstyled, images not loading and then its unprofessional and gives a bad first impression, ESPECIALLY on a slow loading connection -- https://dev.to/lyqht/what-the-fouc-is-happening-flash-of-unstyled-content-413j

## light-dark 2024 party
This became a thing in 2024 for all "evergreen browsers" aka self-updating. This means we can use it everywhere and it's a game changer for dark mode support -- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark

## Improiving performance and accessibility
Right click -> inspect -> Lighthouse tab. Then run the tests. This will give you feedback that digs in the weeds about how to improve things like SEO (search engines), accessibility (key to project), and 

`new URL("myData.json", import.meta.url).href` -- in order to point to the file so it works on vercel

This week is time to work on these problems, improve output, improve data structures, ask questions, and work. Project 1 is due Sunday
