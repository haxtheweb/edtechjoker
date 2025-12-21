# Week 11
Project 1 is due this weekend - https://github.com/haxtheweb/issues/issues/2476

# 11.1
1 week until this is due and we've got a few decent examples but no one that's perfect or near perfect so let's fix that through some examples.
## Examples to review
- Ok conceptually but AI, not loading data from the endpoint, not using DDD, but interesting solutions within - https://project-1-umber-pi.vercel.app/
- Decent data structure to review - https://raw.githubusercontent.com/MamanMadaan/project-1/refs/heads/main/api/chefs.json
- Deep dive on this project, may want to pull down locally to load - https://github.com/DaGooseful/fox-app
  - missing `/api/` call for the json data
  - using DDD
  - really interesting way of handling "likes" data
  - clean up demo so there's less content in itt
  - resizing cards for sure
  - no hard coded image references
  - "fox by" alt data isn't perfect but not a terrible way of handling things

# 11.2
- Class is discussion time to answer some questions of each other and compare work
- You'll have some questions to ask of each other and post as evidence of class discussion on Teams

## vercel data issues
"my stuff loads locally but not in vercel"
- `new URL("./data.json", import.meta.url).href` -- is most likely the issue. This is because when we do a "build routine" it needs to trace and find every file. `new URL` helps this process know what to find
- also make sure we're looking at the `/api/data` style way of meeting that requirement. See this app and how the weather.js file works to make your data be served by a vercel endpoint instead of a direct file -- https://github.com/btopro/ist-vercel-demo

## Discussion
Have someone else work with your app by loading it up. After they play with it a bit, ask the following questions:

> How does the app make photo viewing and sharing feel intuitive or enjoyable for the user?

> What design decisions (layout, color scheme, interactions) either added to or detracted from the experience?

> Is spacing distracting or uniform?

> Is color distracting or uniform?

> How is the mobile experience?

> How is the dark mode experience if toggled?

> What visual improvements could be made based on your usage of the app?

> What functionality / requirements are you currently lacking or stuck on? See if anyone else in your pod have this issue resolved and discuss how you implemented it.

> If you had more time to work on this project and extend it's functionality, what’s the next feature / improvement you’d prioritize? How would you go about achieving it?

Answers in Teams by the end of class for attendence today; after your pod has participated in this discussion activity, work to implement enhancements and ask questions

# 11.3
Open office hours to implement changes. Reminder that this is due this weekend and is a significant portion of your grade!

# Project 1 due
Project due Sunday

# Looking ahead
- Project 2 will actually be broken into several in-class oriented UX studies; starting to a UX study of the ice planner app you did as well as the photo loading project
- These UX studies will then segway into micro-projects, several of them
- This UX feedback will serve as the basis for doing work on HAX
