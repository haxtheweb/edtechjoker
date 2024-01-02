# week 1 - Hello Joker, Tooling basics
## Tuesday
- Introduction to class
- 1 of the only days I'll talk the entire time and you'll sit there going "wow, this guy is really full of himself".
  - Other days you'll draw the same conclusion but with less talking on my part. Mostly just a presence really.
- Definitely some of my best material from a comedic timing perspective
  - fun old person fact: This goes along with years of traveling and speaking on topics in Drupal-land

## Wednesday (no class, just messing with you)
- Sit in your room in nervous anticipation of class Thursday
- But if you can get nodeJS, npm, and open-wc installed that'd speed things up in class. If not, we'll have a support group (aka all of class) to help fix

## Thursday
- Quick review of what microservices are and micro frontends.
  - We'll keep coming back to this and where things slot into this picture
- What is tooling? what do I need? Why do I need it? What does it do? Why is the world written in JavaScript!??!? (an unknowable question)
- This will establish one of the many technologies that swirl around this tech space.
  - Why web components are not the only source of truth, they are often spoken in the same area because of how small and portable they are
- Lab: Getting tooling installed and being able to establish a hello world boilerplate using web components
- Past students of mine: Roam the class helping people get things installed, but then you'll have a different homework 😵‍💫
- I want you to bunch up a bit based on OS your using (today only). Windows machines in one area, Linux one area, OSX one area
## Homework / Lab
- Download / install VSCode if you don't have an code editor you prefer
- Here's the plugins I recommend for this class (aka mine)
![plugin list](https://user-images.githubusercontent.com/329735/149564931-b7f93da6-38a1-424f-b4fd-5ff57c07597a.png)
- Read: https://dev.to/saifullahusmani/complete-web-development-roadmap-122m to get a sense of just how dence the "full stack" of web development is and what all the words are and how they generally fit together. We'll keep revising / positioning what we're talking about as far as where it lands in the landscape so we have a clear picture.
- Write a blog post about how to get NodeJS, NPM, and all the other dependencies installed in order to launch https://open-wc.org/guides/#quickstart
- Best way to be successful and get started with this assignment (as far as ideal order for YOU)
  - install all the stuff mentioned.
  - **HIGHLY RECOMMENDED**: Install https://ohmyz.sh/ (windows users: https://dev.to/vsalbuq/how-to-install-oh-my-zsh-on-windows-10-home-edition-49g2 )
    - This will give you a terminal that feels like the one that I use in class all the time and is generally what 1337 devs use across OS
  - Make a github account
  - create a repo on github with whatever name you want like `edtechjoker-lab1` or whatever makes sense for you
  - Establish a secure, SSH key based handshake with github - https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh
  - This involves generating an SSH key on your computer, and then copying the relevant public key info into your github profile
  - Navigate to a folder via terminal as to where you'd like to store ALL these projects this semester
  - for me that's `cd ~/Documents/git/edtechjoker` but you can name it whatever makes sense to you
  - protip: `mkdir -p ~/Documents/git/edtechjoker` will automatically create the repo path on MOST operating systems
  - in that folder, run `git clone git@github.com:YOURUSERNAME/YOURREPO.git`
  - `cd YOURREPO` to get into this git repo
  - `npm init @open-wc` and follow the prompts to make a `hello-world` element (I'll do this in class)

- Resources to help
  - Me installing a whole bunch of stuff and explaining it (the above in case you miss it) -- https://www.youtube.com/watch?v=r_mio0e6v1g
  - Lit playground - https://lit.dev/tutorial/ interactive tutorial (make sure it's in JS and not TS mode) - 
  - Lit docs - https://lit.dev/docs/ (the library used by open-wc, tutorial above)
  - Open-WC docs - bookmark for later / powerskim as this will be more about immersion in the field than "getting it" all -- https://open-wc.org/docs/
### Expectations for lab submission
- Join our slack channel https://bit.ly/haxslack for the course and join the `#edtechjoker` channel
- Using this tooling I want you to make an element named hello-world / some boilerplate name of your choosing
- Your element should resemble 1 of the following:
  - https://lit.dev/playground/#sample=examples/full-component (simple)
  - https://lit.dev/playground/#sample=examples/motion-simple (do this if you're used npm previously)
  - However, I want you to run through the Lit tutorial and any other JS resources you might stubmle on and try to understand what the different parts of these very simple files mean and the functionality they are providing.
  - writing `// whatever` is how you leave a JS comment. Any block of code you understand I want you to put a comment about what it's doing
  - any block of code / syntax / idea you DON'T UNDERSTAND that's great (we're here to learn these things), but I want you to put a comment about what doesn't make sense (for example if you see `super();` and that means nothing to you, then I'd leave a comment like `// I think this is requried but no idea why`. something like thiat). We're trying to identify and grep code that we didn't write. Remember; effort based grading, not perfection in comprehension day one.
  - The files in open-wc to edit are in the `/src` directory
  - to try out your project run `npm start` or `yarn start` (if you install with yarn, start with yarn; npm if you install with, start with it)
  - also npm / yarn `run` will tell you all the commands that are possible if you want to play more
  - This is universal information for ANY JS project that has a `package.json` file and we'll dig into it next week
  - Make sure you toggle from "TS" to "JS". We will minimize our usage of TS (TypeScript) and will focus on JS (JavaScript)
  - ![the lit.dev doc site format](https://user-images.githubusercontent.com/329735/149159596-7eaed586-4ba2-46db-86a7-11a3274b83ed.png)
- put this element in version control and push it up to github `git push origin master` or `git push origin main` or via the GUI
- Write a blog post on this process on dev.to that includes the following:
  - Screenshots and links to other spaces and videos that helped you learn how to do this as needed
  - What NPM / nodejs is, why developers have landed on this convention, what does it provide you the ability to do on the web?
  - Links to Lit, open-wc and other resources you used in order to solve this lab
- Last semester Students of mine: Install docker and get a copy of HAXcms running locally on your machine https://github.com/elmsln/haxcms
- Please help others get dependencies installed as you'll have all this from last class
- Write up how to get docker installed on your machine
- Use HAXcms as a backdrop (screenshots etc) so that your tutorial involves installing something real
- Explain what docker is, why you think it's useful
- Yes. I am very aware that I didn't cover this at all. Welcome to being the loss-leader on assignments when you've had a topic last semester. **#ThatsIST**
