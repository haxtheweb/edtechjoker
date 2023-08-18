# Common issues

This is a list of common problems and common remedies. Before raising your hand or saying your stuck, ensure you've consulted this list as it's most likely what I am going to ask you to run through.

## I did X and it didn't work

### Terminal / command line
- look up before the command you typed, google the error. it's usually red, or some kind of "whatever is undefined"
- terminal commands don't start with a `$` and you may have copy and pasted incorrectly
- ensure you are in the correct directory when you run the command

#### It says "whatever" is not a command

every repo ever that has a `package.json` in it needs to be installed. The feedback loop is ALWAYS:
1. git clone / download the thing
2. go to the project in a terminal window and run `npm install` to install the dependencies
3. reading `package.json` you can see the commands available under `scripts` though `npm start` is pretty common followed by `npm run dev`

#### Common commands
- `cd` change directory `cd whatever` moves into the `whatever` directory
- `cd ../..` moves back 2 folders, `cd ..` back one
- `ls -las` lists things in a well printed way in the current directory
- `pwd` shows you the path to the current working directory
- `git pull origin master` (or git pull origin main) will get updated commits and code from the git repo

### Browser / your running code

It's blank / failed / didn't do what you expected
- Look at terminal, are there errors / warnings?
- Look in VS Code, is anything in red on the right edge? If so, scroll to see that code in view and hover for hints about what's wrong syntax or dependency wise
- Go to the browser, right click and hit Inspect. In the tab that opens, look at the `Console` to see if there are error messages

# Get in the habit of doing these all the time.
This is literally the feedback loop of the job and the way to solve 99% of issues. If you hate this, you might end up hating development. If this makes sense, hopefully you have just found your passion.

# Video of how to get started / OS level explainer
- coming soon

# Lit life cycle activity
- https://lit.dev/tutorials/ make sure you do all the tutorials