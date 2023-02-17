# Project 2 - Building a "Microfrontend" via a live "comp"
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
- Need to leverage `@lrnwebcomponents/simple-icons` in order to get an icon library

## Option 1 - Dashboard, high level search
- Link: https://badgesapp.psu.edu/explore
- Cards shown here as "badge"
- Search area that then filters the "badge" listing
![image](https://user-images.githubusercontent.com/329735/219685741-046eee78-b044-4175-a884-9f21a200e318.png)

## Option 2 - Badge list
- Search is not shown in this screenshot, but search / filtering needs to be added to it to filter the high level collapsed fieldset title
- Collapsed fieldset that shows details below when expanded
- Link: https://badgesapp.psu.edu/missions/45
![something like this](https://user-images.githubusercontent.com/329735/219682742-b9f88703-7255-481a-8c14-9e8b37e9568c.png)


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
