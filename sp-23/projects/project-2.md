# Project 2 (13%) - Building a "Microfrontend" via a live "comp"
Creating elements in elements, and delivering them via Vercel endpoints. The goal is to make ONE of these two UIs with searchable input

## Requirements of each
- Get account: https://badgesapp.psu.edu/
- Data loaded from an endpoint `/api/search` in JSON format (manually created, custom API specification json array of objects)
- Ability to search interactively with input and button to execute the search
- Update the search results visually by using a `.map` method when the user asks for results
- At least 3 web components, working together, to deliver the experience
- need to draw your understanding of what you are making from this and document requirements
- need to think of your "badge" or "collapse" as an API, and then create data in your endpoint that delivers that
- need to design your elements to attempt to match the "comp"
- This is not using any of your code from Project 1, but ideas translate
- Need to npm install `@lrnwebcomponents/simple-icon` in order to get an icon library
```js
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
```
- [Storybook about all available Icons](https://haxapi.vercel.app/?path=/story/media-icons--simple-iconset-story) - Search icons to find implementation

## Even Numbered Groups (option 1) - Dashboard, high level search
- Link: https://badgesapp.psu.edu/explore
- Cards shown here as "badge"
- Search area that then filters the "badge" listing
![image](https://user-images.githubusercontent.com/329735/219685741-046eee78-b044-4175-a884-9f21a200e318.png)

## Odd Numbered Groups (option 2) - Badge list
- Search is not shown in this screenshot, but search / filtering needs to be added to it to filter the high level collapsed fieldset title
- Collapsed fieldset that shows details below when expanded
- replace the image in this comp with a `simple-icon` (mentioned above)
- to help with collapse either use the summary / details relationship from before (then style it) OR https://haxapi.vercel.app/?path=/story/navigation-collapse--a-11-y-collapse
- Link: https://badgesapp.psu.edu/missions/45
![something like this](https://user-images.githubusercontent.com/329735/219682742-b9f88703-7255-481a-8c14-9e8b37e9568c.png)

## Search
Search happens in EITHER option (option 2, look at screen in option 1 for what search should look like)
Some options on search to either do it via a drop down for "type" of search (more front end work) OR a magic search that finds things regardless of how they are structured on the backend (a little more backend work). Data coming from here for your `icon` could just be a property that uses any `icon` name you feel like from the documentation site (referenced above) `icons:save` for example.
![image](https://cdn.discordapp.com/attachments/1047225346061246535/1087779467096760410/rn_image_picker_lib_temp_387f1401-11db-4c51-b83e-724b21165711.jpg)

## Rubric 13% overall grade
- CSS matches comp and is (reasonably) mobile responsive **(3%)**
  - CSS variables / parts for flexibility
  - matches the design as perfectly as possible
  - no unused CSS / all selectors are scoped to the element they are part of
- HTML is semantic, simple as possible **(2%)**
  - if collapse, uses a semantic tag for collapse (or a11y-collapse) or equivalant
  - if badge, simple div structure without overuse of Headings
- badge / "requirement collapse" is stateful, well made and scoped appropriately **(4%)**
  - Implements simple-icon via property
  - search / other elemenets to break up the code is logical (search could be simple-field or a well designed input tag)
- JS to Search `/api` endpoint is stateful, it's own element + vercel deployed endpoint that renders badges/requirements based on results **(4%)** 
  - element that performs the fetch based on an input tag being updated
  - backend needs to take in search parameter and only return results matching (backend should have at least 10 results for searchability)

## Check ins
- Home work check ins each week will involve documenting the process of building this microfrontend.
- You'll create an article about the topic covered in class and your way of implementing it via a https://dev.to blog
- Articles should include screenshots, links, screencasts, code samples, anything that makes sense of the topic in your communicating to someone else
- The target audience is a colleague in IST that wants to learn about the web and see something cool built using "microfrontend" architecture.

# Submission
- Git repo + vercel link
- Blog posts about your thought process and how you went about building it (Homework check ins along the way achieve this)
- Single git repo, the two (or 3) of you working in it
- 1 person takes ownership of the repo, delegates access to the others so you work in 1 repository
- Gist submitted to Canvas w/ links to blog series for each partner, git repo, and vercel link where it is working and can be played with
