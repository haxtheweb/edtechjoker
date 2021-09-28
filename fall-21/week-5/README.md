# Week 5: Project 1: Critique and feedback of Button
## Tues: Critique / code discussion
- Code critique / open code review
 - Ask audience for an alternative methodology of approaching a problem
 - review different solutions and live debug / edit
- Expected build; I'll demonstrate how I would approach this, live
- Credit for attendence today:
 - On slack I need the following added to your `TEAMNOTES.md` file in your repo:
  - What did you learn today that you will apply
  - What are your next steps
  - Post link to this updated file in Slack please
## Thursday - adding in support for other elements
- Using the simple-icon library to include support for icons, adding a property, and conditionally rendering based on an `icon` being set
- Learning how to include other web components in our web component (from npmjs.com)
- Class activity: Get code up in your repo with support for the `simple-icon` library
  - https://webcomponents.psu.edu/styleguide/?path=/story/media-icons--simple-iconset-story - docs on icon names
  - `yarn add @lrnwebcomponents/simple-icon` - add it to your project (must be in the correct directory for your project)
  - import into your element:
```js
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
```
  - Now you can use a new web component! `<simple-icon-lite icon="save"></simple-icon-lite>` should add a save disk icon
  - Now let's make a variable so that we can change the icon
  - Now, let's add conditional rendering via Lit's ternary processing of variables ${this.icon ? html`...icon stuff` : html``}
  - Now, let's make our demo show different options
```html
<you-button icon="save" title="Save"></you-button>
<you-button icon="av:games" title="Play a game" link="https://ea.com"></you-button>
<you-button title="No icon" link="https://youtube.com/"></you-button>
```
- After walking through this, I'll help as needed. Anything you don't get done on getting this working and up in the repo is for homework / your group meetings that you've been having to work on this further.
- Friday I'll be at Starbucks on Calder from ~10am - 3pm for office hours as desired
## Homework
- Blog post: by Sunday 11:59; write up a blog post on the work you've done so far on your web component. Difficulties in making a button or understanding web components, and concepts you've connected / things you've learned so far in how to make a web component.
- In your post, include a link to the state of your element / repo
- "Community" credit is blogging (the check in as to where you are with your element)
- "Class participation" is if your element includes the icon work that we stepped through in class together
