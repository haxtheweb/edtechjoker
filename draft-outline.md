# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Tutoring support on campus
TAs have office hours and we use time in class for help too, but https://ist.psu.edu/learning/tutoring/university-park is also available.

# Past weeks
- [Week 1](sp26/week-1-2.md)
- [Week 2](sp26/week-1-2.md)
- [Week 3](sp26/week-3.md)
- [Week 4](sp26/week-4.md)
- [Week 5](sp26/week-5.md)
- [Week 6](sp16/week-6.md)

# Week 7 - The one with another project
Lots of time this week and next https://github.com/haxtheweb/issues/issues/1914

## Crit
- counter-apps
- https://github.com/jtarchb/counter-app
- https://github.com/sawyerw/counter-app-1
- https://github.com/mikegoga/counter-app

## PBL -- stretching to solve a real world problem -- The next 2 weeks.
- Counters are silly, but they give us the fundamentals of what's involved in creating and delivering an "app". Now let's try our hands at one that's a little bigger scope
- We have lots of content at work teaching art courses online. It is common for faculty to want to showcase student work or famous artist using a gallery type of approach
- Here is the issue: https://github.com/haxtheweb/issues/issues/1914

# Requirements
- Meet the requirements of the issue
- Must be produced using the hax tooling `hax webcomponent` command in order to create the app
- Must use the Design System (DDD) in order to provide visual consistency
- Must support light and dark mode effectively
- Must be mobile responsive
- Must use 4 custom web components. 2 are listed in the issue but there's another 2 that easily can be added
- Can pull in outside code / elements as desired (this would count toward the other 2)
- Can work together with others to craft the optimal solution.
- Everyone turns in their own repo / work, but you can collaborate to build

# 7.2
- Here is the issue: https://github.com/haxtheweb/issues/issues/1914

# 7.3
- Here is the issue: https://github.com/haxtheweb/issues/issues/1914

## Logic needed and working ahead
We've talked about events, but not event "bubbling" persay. When you click, technically that event goes up through the DOM. We also can create any event we feel like.
- Custom event https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

So for your element to work with several different tags, it means you can (for example) have your listing / dots / track element do the following:
- be told how many slides there are from the `play-list-project` tag. It would count the tags in the `constructor()` via a querySelectorAll, then pass that number down to the `dots` element
- The `dots` element would then print out the number of dots based on number of tags found
- listening for a `@click` on a dot, we run a method
- That method needs to know which dot we clicked (let's say the 3rd one). **then it can issue a custom event to notify the parent**

```js
const index = e.detail.index; // need a way of tracking which item was clicked I am just saying it's index
const indexChange = new CustomEvent("play-list-index-changed", {
  composed: true,
  bubbles: true,
  detail: {
    index: index
  },
});
this.dispatchEvent(indexChange);
```

This will bubble up and convert your click into a `play-list-index-changed` event. Then in the render method for your `play-list-project` tag, you can listen for the `@play-list-index-changed` event on your `dots` element, and run a method that updates `index` across the whole little "app". This is a common state management technique called "Unidirectional Data Flow"

