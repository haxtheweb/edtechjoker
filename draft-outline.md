# Draft outline
This is a draft of the course. The topics we'll cover and the order. It will be established and modified based on student needs and how things are going / what people ask for as far as needing things that match the trajectory we're on.

# Schedule
This schedule will be modified as we go. Look to it for what we are doing in clas that day / week. This becomes more refined as we get closer to the dates. I modulate based on needing to remediate on concepts of adding concepts based on how far we get that week.

# Common issues
Before saying "it doesn't work" with web development in general, please consult this [common issues document](common-issues.md). It is the solution to 95% of the problems I've seen young web devs have when working with web components, terminal, VS code and javascript/html/css more broadly.

# Past weeks
- [Week 1 & 2 - git / intro](sp24/week1-2.md)
- [Week 3 - card remediation](sp24/week3.md)
- [Week 4 - Card into web component](sp24/week4.md)

# Active Schedule

# Week 5 - More with Web components
As expected, results from homework were very mixed. It's not an easy subject, and some times we have to stretch a bit on something in order to see what we can retain. This week we start into thinking like an HTML spec author. This is deep thought work for sure and we are lucky to be building on abstractions, but let's start the process that they went through to think about the attribute and design considerations of the HTML primative tags (p, img, a, table, etc) and use that process to build our own card so that it is reusable like the original tags but more robust!
## Tues
- Let's review issues people had in doing that
- Crit:
  - https://github.com/ssambender/polaris-chip
  - https://github.com/emirahanna/polaris-chip
  - https://github.com/infodigger33/polaris-chip - This one let's fork / clone and dig into together

### Activity: Talk to people in your pod 20 min
- Did anyone get their card working? If so, let that person drive so to speak as far as explaining how they got their card working
- If anyone is completely lost and their card doesn't work, debug. what's broken about it? where are they stuck
- I saw a lot of components, but not all were reusable. Come up with 5 issues (among your pod, 5 total, not the same over and over) that you see when reviewing each other's code.
- What is NOT reusable by the following definition:
> A random person searches the internet for a Card that has your details on it
> Are they able to download it and write `<my-card title="Fresh Prince" fancy source="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPgSRgEYJ3lY8Ky8wNqfoJqWe2U2VMe-RIKbO_0HSXGj5sHA-_"></my-card>` and obtain a card that looks 'fancy' with the title fresh prince written on it and a picture of a better time?

If someone would get your card and not be able to replace the title / image on it with their own, it's not reusable. Work with your pod to get everyone's cards reusable. Add this card to your demo to ensure that you have support for gigantic images!

When you feel confident that everyone in your pod has a working card that is reusable, post the link to it on the teams channel.

## Let's get fancy with CSS selectors
- Adding a 'reflected' variable to our element. Reflected variables allow you to change the properties of your card and have the CSS change as a result
- live code demo adding a reflected variable in CSS so that `:host([fancy]) { background-color: golden; }` works
- Follow along and add support for `fancy` so that your hover state aligns with this if you have a focus / hover selector 

## Let's support flexible HTML areas in web components
- Some of you had properties that were "description" or really long blobs of text to put on the card.
- Let's try an experiment. In either your title or 'description' property try to make some of the text bold
- What happens? Why did this happen? Throw a screen shot in Teams of what happens when you tried to apply this

## Rescoping JS (bonus)
- A few were able to rescope their JS. Let's look at how web components should have made that easier to accomplish
- `.shadowRoot`... wth is that??
- Is there a better way to do this? When it comes to manually modifying a `.shadowRoot`, absolutely there's a more correct way with Lit. Let's look!

## Wed
- If your card isn't working / your having issues, talk to the LAs / reach out for help
- For Thursday, try to appl the 3 approaches above as best you can. Rescoping your JS based on the example we looked at in class, support flexible HTML, and support a `fancy` CSS selector.

## Thursday
- More remediation based on how far we got through the concepts above
- More building on and cleaning up the concepts of what we have
- Building our code to work on vercel / hooking up vercel

---

# TOPICS BELOW THIS LINE STILL IN FLUX SO WORK AHEAD AT YOUR OWN PERRIL

---
## Homework
- Remediations within your card to include the capabilities we covered in class

# Week 6-9 - The ones with some topics about stuff
- Lit Fundamentals
- Printing multiple items from a web service


# Week 10 - sPrInG bReAk
# Week 11 - The one where society doesn't shut down completely during spring break
## Tues - The one with the GuEsT LeCtUrE
- EdTechJoker talking about what Project EdTechJoker is and finding your purpose in this world

# Week 12-16 - Project 1 and 2 work
- Code hard, Kick butt and chew bubble gum*
  - *We're all out of bubble gum

# Week 17 - Final Destination
- no items, 5 stock, no mr game n watch
- Final project Due Wed of Finals week
