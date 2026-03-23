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
- [Week 6](sp26/week-6.md)
- [Week 7](sp26/week-7.md)
- [Week 8](sp26/week-8.md)
- [Week 9](sp26/week-9.md)

# THE GITHUB FOR THE FULL PROJECT DIRECTIONS
SEE REQUIREMENTS https://github.com/haxtheweb/issues/issues/2617
# Week 10

# 10.1 - api design

## Examples to review from submission:
- Past example -- not same project but useful to see paralels in events, loading multiple, an alternative layout, etc https://github.com/elliebluejay/fox-api
- Another past example, this time for 'copy link' to clipboard sample -- https://github.com/dcagliola/image-api/blob/main/image-api.js#L370-L379
- example for working with localstorage to store likes (and dislikes in this example) -- https://github.com/dcagliola/image-api/blob/main/image-api.js#L294-L308
- interesting visual example though it lacks multiple elements and needs to be broken out into multiple elements -- https://github.com/travisGTHB/project-1/blob/main/project-1.js#L329-L348
- design and image needs sizing better but overall does a lot of things we're looking for even getting into remembering via localstorage -- https://github.com/cjh6976-prog/Instagram-Project/blob/main/instagram-project.js#L132
- https://github.com/igasparraj16/insta-app/blob/main/play-list.js#L160-L166 -- no need to use `getAttribute` everywhere; you're accessing DOM nodes but then they are a reference in memory so you can access the properties. It's not a huge deal, just helps to realize you are working with a JS object and not just a random div. So `curSlide.photo` will work bc of the Lit property definitions

## Reminder from the Project 1 requirements **Projects lacking the following will receive a max of 50% if not lower**
These are the assumed base line requirements. Without these, there is nothing to grade.
- It needs to use DDD
- It needs to be able to able to load multiple images from a single JSON endpoint
- It needs to be created using the hax webcomponent CLI / tooling
- It needs to have a working demo on vercel otherwise it's not actually working
- It can't say "uploaded" as in directly placing the files up
- It can't blatantly be filled with emojis and additional files directly illustrating that you did not actually write it. This is AI augmenting solutions not AI writing all the code for us.

 ## In class activity to start the data modeling process
As per the requirements listed in the issue above:

> Your API needs to support multiple images (name, date taken, thumbnail source, full size source), author info (name, image, user since, name of channel)

- In our app we likely need to support:
  - Author name
  - Author photo
  - Images and the metadata associated with them for presenting the images
- https://www.json.org/ -- has details of the specification of JSON but quickly (minus the comments because comments in JSON are not allowed)

```json
{
  "name": "value",        // String
  "name": 67,             // Number
  "name": true            // Boolean
  "name": ['cool, 'guy'], // Array of Strings accessed as name[0] or name[1] or by map or forEach through the data
  "name": {               // Object with keys .last and .first. accessed as name.last and name.first in this instance
    "last" : "Olle",
    "first": "B"
  },
  "name": [               // An Array of objects whos keys are .link and .label . In this case sending 3 objects in the array.
    {
      "link": "https://hax.psu.edu",
      "label": "HAX PSU"
    },
    {
      "link": "https://haxtheweb.org",
      "label": "HAX Docs"
    },
    {
      "link": "https://hax.cloud",
      "label": "HAX Experiments"
    }
  ]
}

```

- With your pod, discuss the data that needs to come from your API in order to feed your photo app
- Whiteboard / draw out / type up / visualize the data types required
- See if there are ways you can normalize the names of your properties in your element to simplify wiring it up to your API
- we are using the random fox as an initial working example. I'd copy the code for this elsewhere and then refactor for loading the new data structure you work on
- This is not "ask AI to write me a data model" class.
- **Attendence today is turning in photographic evidence of your discussion and output from today in class**

# 10.2
- localStorage / recalling portions of state so we can keep track of likes on the photos (locally only, this is not stored)
- There's a lot of examples above from day 1 relative to how to potentially implement this feature
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Vercel `/api/` endpoints for loading data and working with vercel in local development.
- https://github.com/btopro/ist-vercel-demo -- look at how the `/api/` endpoint works for the weather.js
- `npm i -g vercel` -- install locally so you can test endpoints you make
- Way more advanced example (and reading) if interested in how we use this in HAX: https://dev.to/btopro/duck-duck-go-example-1kbf

# 10.3
- `Routing` example -- updating the URL to reflect 'state' in the page
- visualizing routing expectation for the project:

![Media](https://github.com/user-attachments/assets/95818d9e-054a-4283-8323-c3e0f3588d20)


an example
```js
function updateQueryParam(key, value) {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set(key, value); // Set or update a parameter

    // Update the browser URL without reloading
    history.pushState(null, '', currentUrl.toString());
}
```

# Check in 2
- for Sunday your project should be taking shape visually
- It should start being wired up to the new data structure you planned out
- there should be the notes you took in making your structure
- you should take a stab at wiring up routing as well as localstorage
- You'll have time next week to finalize things for the submission of this project
