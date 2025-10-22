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

# Week 9 -- Start of Project 1
- Projects have 2 check-ins as well as the final project turned in the week after
- 3 Weeks for a project from assignment to deliverable. Worth a lot more of grade than week-to-week assignments have been
- Class still takes place with Mon/Wed being content / collaboration focused; Friday being a working day focus

## 9.1 Let's see what the project is
- [project 1] [What the Fox Say](https://github.com/haxtheweb/issues/issues/2476)

## 9.2 - Loading and presenting data
- We want to load data from the fox website using fetch
- The API for this is located at https://randomfox.ca/floof/
- working with and walking through JSON data
```json
{
  "data": [
    {
      "source": "https://github.com/btopro.png",
      "title": "Inventor"
    },
    {
      "source": "https://github.com/haxtheweb.png",
      "title": "Invention"
    }
  ]
}
```
- Here's a codepen that has comments spelling out how to work with JSON data as well as fetch information from websites:
- https://codepen.io/btopro/pen/LEGdLyo?editors=1010
- This is a good plugin to get for inspecting and viewing JSON data responses -- https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en
- IntersectionOberser implementation article I wrote awhile back -- https://dev.to/btopro/adding-an-intersectionobserver-to-any-web-component-3io1
- You are not required to use IntersectionObserver however several designs I saw proposed would make it easier to generate a solution while using

Conditional rendering in this case would be helpful!
```js
render() {
  return this.elementVisible
    ? html`Cute fox ${this.image}`
    : ``; // otherwise render nothing
}
```

## 9.3 - Working day in class
- Work to get Check-in 1 far along as possible
- The requirement for the check in is getting the names of things initially in place, having an image-card type of element which presents the image data
- Laying out this card in some manor, being able to request data from https://randomfox.ca/floof/ and presenting the image-card on screen so that when we refresh the new fox appears each time
- This will demonstrate you have a grasp on the design aspects as well as data loading apsects of this project

## Saturday Coding in the community opportunity
https://hackpsu.org/
### Evidence
- You are registered and check in at the event
- you produce code on the weekend / a project you are striving towards
- You turn in the repo produced on the weekend (whatever that may be, doesn't have to be related to class but can be) in the Canvas dropbox
- attend the whole event, submit what you did / evidence you were there, get 10% credit for the class while networking and learning by doing (whatever you do!)
## Sunday
- Check-in 1 is due. See project for requirements for check in 1.
- The further you get on it early, the more feedback you can receive, the beter your solution, the better the outcomes

# Looking ahead to 10
- We'll work on data modeling in class. What is the structure of our API? How should we store data? Comparing and contrasting approaches
- We'll look at localStorage API. How it can be used to store data across page loads

