# Week 10: Project 2: Refinement of our card comp
## Tuesday
- Blogging pro tips / harshness
  - I read your blog posts
  - I am aware of those that phone it in
  - Blog posts are initially collected on a "did you do it" basis
  - Once all blog posts are submitted I'll ask that a "series" be created on dev.to which links them all together
  - We'll then review them all as a whole (8 was this one, 9 and 10 are in the coming weeks)
  - All blog posts that don't have code in them that is explained relative to the concept in question will be 50% deduction
  - When including code, using the ` character 3x so ``` and then putting code on the next line, then an ending line with ``` will allow it to present the code as formatting was intended. This is more effective (and accessible) than screenshots of code.
- Test running and how to perform and modify tests to work for your element
  - https://dev.to/open-wc/testing-workflow-for-web-components-g73
  - https://modern-web.dev/guides/test-runner/getting-started/
  - https://github.com/ist402groupj/project-two/blob/master/test/app.test.js
- In class activity with other teams:
  - 1 person / pair from each group shifts left.
  - Share your repo w/ another team
  - switch laptops or clone and setup their project locally to review code
    - Each pair should be looking through code of the other group at the same time
  - Create an issue that has 3 recommendations for how they could improve their element overall at a code level (CSS, JS logic, or HTML structure)
  - Create a list of things that can be removed or refactored in each element. Removing code is just as important as adding the Right code. This is variable but try to shoot for at least 3 things that can be removed / cleaned up.
  - Cards are to be enhanced based on the feedback received in the issues found
  - Here is an example of what I expect to see: https://github.com/TheKodingKrab/project-two/issues/14
  - Post a link to the issue queue of each project at the end of class. There should be 2 issues posted in each queue.
## Homework for Thursday
- Submit anything to the channel w/ a specific problem or topic your group needs help with
- Thursday will encompass reviewing these topics / specific issues and additional time to work
- Review requirements to see what areas you still need to work on: https://github.com/elmsln/edtechjoker/blob/master/fall-21/projects/p2-card/README.md
  - **a reminder that this is 20% of your overall grade in this course**
## Thursday
- Critique / feedback on anything submitted between
  - https://github.com/PenStat/penstat-project2 - test coverage review
  - https://github.com/3B4B/project-two - general review / test / storybook questions
- Questions from class:
  - What are our devDependencies? Should we just be importing it and using it as a tag?
  - Should expect(element).to.exist;  be able to see elements passed in as slots?  If so, this test is failing
expect(element.textContent).to.equal('I am content');  can the equals function have the value of html.  IE can I check for slotted content?
  - In general how do you show multiple elements in storybook so they are on different pages
  - How do you force arguments to only have a specific set of values?
- Requirements reminder https://github.com/elmsln/edtechjoker/blob/master/fall-21/projects/p2-card/README.md 
- Continue working on cards in groups while I roam around or show examples of conecpts within the context of people's repos at the front

## Homework
- Group check in 4
- Your card should be nearly finished
- All 4 elements should be demo'ed on your index.html page individually
- The over-arching card should have 3 different implementations to demonstrate flexibility in the card (different type, different slotted content, etc)
- Storybook documentation should nearly finished for all 3 elements
- Test coverage should be attempted for all 4 elements
- Post to the channel your updated Teamnotes and include in it any last lingering questions that we could possibly clear up Tuesday
