# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Tutoring support on campus
TAs have office hours and we use time in class for help too, but https://ist.psu.edu/learning/tutoring/university-park is also available.

# Past weeks
- [Week 1 and 2](fa25/week-1-2.md)
- [Week 3](fa25/week-3.md)
- [Week 4](fa25/week-4.md)
- [Week 5](fa25/week-5.md)
- [Week 6](fa25/week-6.md)
- [Week 7](fa25/week-7.md)
- [Week 8](fa25/week-8.md)
- [Week 9](fa25/week-9.md)
- [Week 10](fa25/week-10.md)

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
- **This section will be heavily in-class discussion and explaining the code to write oriented**



