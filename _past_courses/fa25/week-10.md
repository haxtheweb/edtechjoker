# Week 10

# 10.1 - api design

## Examples to review from submission:
- https://github.com/elliebluejay/fox-api
- https://github.com/dcagliola/image-api
## Reminder from the Project 1 requirements **Projects lacking the following will receive a max of 50% if not lower**
These are the assumed base line requirements. Without these, there is nothing to grade.
- It needs to use DDD
- It needs to be able to able to load multiple images from a single JSON endpoint
- It needs to be created using the hax webcomponent CLI / tooling
- It needs to have a working demo on vercel otherwise it's not actually working
- It can't say "uploaded" as in directly placing the files up
- It can't blatantly be filled with emojis and additional files directly illustrating that you did not actually write it. This is AI augmenting solutions not AI writing all the code for us.

 ## In class activity to start the data modeling process
- In our app we likely need to support:
  - Author name
  - Author photo
  - Author social media link
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
- Whiteboard the data types required
- See if there are ways you can normalize the names of your properties in your element to simplify wiring it up to your API
- Keep an instance of your random fox card in your project so that the LAs can review it as your pushing up new code
- This is not "ask AI to write me a data model" class.
- **Attendence today is turning in photographic evidence of your discussion and output from today in class**

# 10.2
- localStorage / recalling portions of state so we can keep track of likes on the photos (locally only, this is not stored)
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Vercel `/api/` endpoints for loading data and working with vercel in local development.
- https://github.com/btopro/ist-vercel-demo -- look at how the `/api/` endpoint works for the weather.js
- `npm i -g vercel` -- install locally so you can test endpoints you make
- Way more advanced example (and reading) if interested in how we use this in HAX: https://dev.to/btopro/duck-duck-go-example-1kbf

# 10.3 - Halloween
- There will be no class today, work on your projects for Check in 2

# Sunday
- Check in 2 is due
- Next week will largely be a working week and reviewing things in class that people have created
- If you still think you can just turn in whatever AI stuff you have via Copy and Paste, it's not going to go well

