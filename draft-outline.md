# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Past weeks
- [Week 1 & 2 - git / intro](fa24/week1-2.md)
- [Week 3](fa24/week-3.md)
- [Week 4](fa24/week-4.md)

# Week 5
## Recognition
- This is my life now
- staring at the screen
- my eyes bleed
- my heart races
- Did I apply `'` or `"` or ` on that line? Did I put `css` or `cs`?
- It's all a blur. a dark, sunken eyed blur.

So that aside, when we take the first leep into big kid web development, it is shockingly difficult at first. I can see that in the feedback you gave to answers. Today, we're going to go through some of the things that went well as well as what didn't. The goal of today is to get everyone in class to have their web component working and get everyone the help they need.

# Crit
- https://github.com/djr23523/Polaris-Chip
- https://github.com/nrousseau4/polaris-chip
- https://github.com/SkylerKoba88/polaris-chip
- video of the above: https://youtu.be/Yv6L7fTrhv4
- Install these and follow along if it helps but what's more likely is that you should have your own code up and running and as I run through things if you have similar issues in your code, you should be taking note of the changes to apply

# Enhancements for Thursday
- Once you get your code working the way we discuss in class (A card that is my-card which you can define several copiies of in the index.html) Then I'd like you to make the following enhancements
- We need to use the `<slot></slot>` tag. This tag allows you to define where "flexible HTML areas" should be presented. Properties in lit will only allow you to do Strings, NOT HTML (even bolding text in a paragraph will be escaped as opposed to bold)
- We need to use CSS variables and then demonstrate how they work in the index.html file

The goal is for Thursday, to have working cards which have the following in your `index.html` and rendering correctly.
```html
<style>
my-card[fancy] {
  --my-card-fancy-bg: #FF0000;
}
</style>
<my-card title="Minesotta Wild">
  <p>A professional hockey team, yet they have terrible colors. I wish I had a <strong>AWESOME</strong> neon yellow / lime jersey like their retro-reverse jerseys</p>
</my-card>
```

# Thursday
- Starting to work more with ShadowRoots, event listeners and trying to get our buttons working in the index.html
- how we can querySelect in the main document (index.html) in order to set properties automatically to remain stateful
- how we can use named slots to support multiple slots

# Homework
- Homework will be dictated based on the progression I see in class this week
- Most likely it will be remaking your buttons from the prior assignment so that we get all the same capabilities but in a web component world
