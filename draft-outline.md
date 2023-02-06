# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.
- [Resource for reviewing concepts](https://youtube.com/playlist?list=PLJQupiji7J5efO_Q5VGZcPE4O_TM_HGP4)

- [Week 1](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-1)
- [Week 2](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-2)
- [Week 3](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-3)
- [Week 4](https://github.com/elmsln/edtechjoker/tree/master/sp-23/week-4)

# Week 5: More JS Ecosystem shhhhhtuff
- This is not react just loading into the index.html :) https://github.com/M18ab/react-app/blob/main/public/index.html
- Many of you didn't get it working
- This was rough... by design.
- Now, we'll use working examples from people who did, to learn about all 3 and slow down (slightly)

## Common issues / general feedback
- "error when running `npm start`" - npm command must be run from the project root. Clone the project, you have to be in that directory to run commands
- VueJS deployment on vercel needed to be the VueJS + Vite; this came up in class.
- Ensure you mark your repos public on github. Private repos we can't see and can't be graded. Verify your work is public so it can be reviewed
- "Should I run commands from inside VSCode or terminal window?" USUALLY it doesn't matter, but if you have an issue running a command from inside VSCode, make sure you attempt in another window just to rule that out

## Activity 1:
For each of these, let's go through and do this together. With each of these I want you to do the following..
- Go to the example, fork the example to your own github
- clone it to your machine
- `npm install`
- `npm start`
- `code .` or just open VScode
- As I go through, follow along so you can understand the structure

If we cover yours, come get a (completely useful, great, awesome.. sticker)
- top React example: https://github.com/Jps709/create-react-app
- top Angular example: https://github.com/ashnaabhide/angular
- top VueJS example: https://github.com/Pandaalifter/card-chad

## Activity 2 / Part 1 of homework
Now we should have some fundamental understanding of what's where, you have a working copy of a classmate's card for each one.
Now knowing this..
- Hollow out their portions of this so that it's your card CSS and HTML
- attempt to get your JS in there as well
- Push all 3 back to their respective github locations
- Ensure the demo rebuilds on vercel / it's wired up to vercel (you can add projects in after the fact via vercel)

## Thursday
- Now that we've got the basis for workflow, location, building demos to present them.. it's time to move into the world beyond them
- We have JS, where the web started, then we had jQuery to prop it up, then we had frameworks to make component like things
- Now, it's time for where all development is heading and where you can best invest your time learning and building
- I changed my entire career focus, outlook, and professional affiliations based on this technology standard..
- Why web components, understanding how Wcs interplay with other libraries, who’s using them and why
- Short lecture: https://docs.google.com/presentation/d/1heprQE0TXrKgc1T1ISnvlpUREREFIAehArEncg_I9-o/edit?usp=sharing

## Homework
Two parts;

### Part 1 Links to all 3 repos with your card working in Angular, React, Vue
- very easy if your following along in class Tues..

### Part 2
- Run through ALL Lit.dev tutorials on "Build" and "Build" found here https://lit.dev/tutorials/
- Create a new (empty) github repo called my-card; clone it locally
- Run the command found here https://open-wc.org/guides/ in order to create a new element called `my-card`.
  - create a new "application" called `my-card`
  - Note: in the options via CLI, if you see a `O` circle this is a checkbox. move between them using the arrow keys and hit spacebar to select each option
  - When it asks you to write files to disk, pick yes. When it asks to install via npm / yarn, install via npm.
  - Also note: We will be using open-wc the rest of the semester in some capacity so best to familiarize yourself with the community docs
- `npm start` and you'll be able to develop using this locally / see a live reloading environment that has a spinning svg
- Take this boilerplate repo like you did the others and port your card so that it works as a web component
- Push results back up to github (make sure it's a public repo)

## Submission
- Gist linked to Canvas
- Links to all 3 github repos of the port of your card working in React, Angular, Vue+Vite
- Link to your card port attempt as a web component using the open-wc tooling

> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
# EVERYTHING BELOW HERE IS SUBJECT TO CHANGE
> EVERYTHING BELOW HERE IS SUBJECT TO CHANGE

# Week 6: Web components
- Refinement / critique / review of several high end examples
- Compare / Contrast between the two major approaches (frameworks vs web component based)
- Leveraging the work of others - Pulling in Web components from other people via NPM
- Enhancing your card to use Slots, properties, CSS variables, parts and more

## Week 6-8: Web components (project 1)
- OpenWC specifically running through the cli and making a new project to collaborate on GitHub. Reading the lit docs
- CSS in ShadowRoot, prop drilling, leveraging existing packages
- Mid-term
- **Thursday prior to spring break there is no class**

# Week 8: Mid-term
- In class Tues, mid-term.
- There is no homework this week, or class on Thursday
- Use this time to catch up / clean up past assignments you may have missed

## Week 9: Spring Break

## Week 10-11: Micro frontends (project 2)
- Publishing to NPM
- Vercel and project publishing and communication
- Creating an API endpoint to return data
- Creating a basic web component to render data from an end point using fetch to obtain information

## Week 12 – 16: Final Project
- Final projects laid out. Lectures / lessons / code reviews still happen but are more focused on ways of helping pairs complete the project in question.
- Scope / requirements of each project will vary. Students will pick from one of a variety of options
- https://github.com/elmsln/issues/labels/7B
- Check ins / progression expectations each week
- MobX / State management practice
- Routing
- localStorage
- Peformance enhancements

## Week 17: Final project due Tuesday of Finals week
- Class held for last minute office hours / debugging
