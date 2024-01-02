# Week 11
## Tues
- I'll review the 6 project sites for what work was generated Tues and offer feedback / discuss in class
- Front end team should start experimenting with how to build the front end piece to this
- API people should be researching Open API specification, naming the "end points" and listing out what data is required
- Back end team should start experimenting with Express based end points / vercel more directly. Reading the docs, reverse engineering the IST demo space I created as a boilerplate for learning about all this.
- Open team working time
- attendance

## Thurs
- I'll respond to any questions asked in between Tues / Thurs that we didn't get to
- more open team working time
- attendance

## Sunday, Check-in 2
- Your checkin site should be updated with a heading for week 2
- Week 2 should have any updates of what you worked on, where you are in the project, visuals created, etc. It should end with questions and next steps
- Your repo that you are working in should start to have some code. Front end people should start working on front end assets. Backend people should start working on some endpoints. API people should be making user-flow diagrams that indicate what users of the solution do, how the front end works with this input, what the backend returns, how the front end then uses this to inform the user.
  - You should have at least 2 of these user flows attempted. In the end you'll need every process loop documented of the user + frontend + backend and how they play together
- Any data structures you need for backend and frontend should at least start being documented / generated. This will change over time potentially but you need some aggreed upon early work to get started at least. This would look like (hypothetically, this is not THE answer here this was like 2 min of thinking about it on my part):
getNewWord.js
```json
{
  "status": 200,
  "detail": {
    "seed" : "03/20/2022",
    "size" : 5,
    "attempts": 10,
    "successes": 2
  }
}
```
Status is good so that if there are errors on the backend you could send their easily in a structured message. The `detail` part here is just bc I like to try and keep frontend events and backend message thought of as "events" even when not. Totally preference thing, you structure how you think is viable.
- these things need turned in by Sunday at midnight, I'll review and offer feedback again and this loop will keep repeating
- the more code you have, the more I can start to offer feedback on said code.
