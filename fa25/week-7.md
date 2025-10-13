
# Week 7 - The one with another project

## Crit
- counter-app -- https://github.com/elliebluejay/counter-app

# HAX Club meets Mondays - 7pm 121 Ag Engineering building
- tonight we'll keep working on forming teams
- It's a great place to work in the hax ecosystem and learn through open source contribution

# Code sprint requirement out of class
- 10% of your grade is experiential learning through code sprint participation. This is wrapped up in 2, 5%, 3 hour blocks of time out experiencing coding and open source in the world.
- Oct 25 is HACK PSU. Participation in this event, which I'll be at most of the weekend, constitutes 5%. Register a team and bring a project to work on (HAX or otherwise, this is about engagement in open source / open community of coding) and work all weekend and you'll get the full 10%.
- **There is a special guest lecture Oct 13th at 7pm for HAX Club. This lecture is the fusion of technology, life advise, and purpose. What we do with the skills we attain matters, and we have big questions to resolve when we leave the classroom with these super powers. What will you do with yours?**
- **attending this lecture can be leveraged to replace a code-sprint requirement and I highly recommend attending.**
- I will ask that devices are away. Laptops, Phones, just you.. listen, and write things down you find relevant. The lecture is about an hour with time for questions and discussion after.
- There will be other opportunities to attend and participate in sprints at HAX Club that count but these are 2 big ones coming up this month

## PBL -- stretching to solve a real world problem -- The next 2 weeks.
- Counters are silly, but they give us the fundamentals of what's involved in creating and delivering an "app". Now let's try our hands at one
- These are some requirements I came up with for a project I was thinking of recently. As a youth hockey president, I have to manage a decent sized budget relative to how many teams we have and how much ice is. This serves as a great base to put our skills to use to try and solve a problem by making a very small 'app'
- Here is the issue: https://github.com/haxtheweb/issues/issues/2359


# Requirements
- Meet the requirements of the issue
- Must be produced using the hax tooling `hax webcomponent` command in order to create the app
- Must use the Design System (DDD) in order to provide visual consistency
- Must support light and dark mode effectively
- Must be mobile responsive
- Must use more than 1 web component. 1 that is the 'app' called `ice-planner` and at least 1 other. Could be `app-button` or `number-input` or any parts of the app you think would be useful to make into a stand alone web component to leverage in your code
- Can pull in outside code / elements as desired
- Can work together in pairs to attack this problem (unique submissions still turned in but encouraged to work together)

## AI for Ideation
- Let's take today and work on the counter app but using two different services to understand how we can use AI to ideate as opposed to actually building the app for us.
- https://bolt.new/ (web)
- https://warp.dev/ (locally)

# 7.2
- Here is the issue: https://github.com/haxtheweb/issues/issues/2359
- White boarding the problem
- Naming components (at least 1)
- What events on input fields can help us react to user input?
- Some reasonable defaults to help visualize the problem:
  - Ice costs $300 / hour
  - Number of slots for a season is 50 (so 50 hours)
  - Overhead for transaction fees is 2%
  - Coaches cost $3000
  - Jerseys cost $88
  - number of players should default to 1 (so you don't get division by 0 errors)
- Support a logo, team name property as well as setting default values vs clicking / typing in inputs to change values.
- When we modify any of the above values, it should recalculate the total as well as the total per player costs

- At the end of this class period, take a picture of your whiteboarding discussion and post it to Teams so others can review.

# 7.3
- Here is the issue: https://github.com/haxtheweb/issues/issues/2359
- More time working on the problem and starting to code the solution
- For Sunday you will be expected to turn in the following:
  - Code that is on github, building, that is named `ice-planner`
  - drawings, white boards, visuals of what you intend to build
  - Code that starts working and apears to meet the objectives
  - AI can be used to help build, but must meet the following core requirements (where AI can struggle..)


