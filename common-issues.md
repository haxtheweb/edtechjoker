# Common issues

This is a list of common problems and common remedies. Before raising your hand or saying your stuck, ensure you've consulted this list as it's most likely what I am going to ask you to run through.

# Table of Contents
[Windows Installation](#windows-installation)

[MacOS Installation](#macos-installation)

[I did X and it didn't work](#i-did-x-and-it-didnt-work)

## Windows Installation
If you have an error like this:
```ps1
Error on terminal: node.ps1 cannot be loaded because running scripts is disabled on this system.
```
Then you'll need to modify your PowerShell permissions on Windows with the following steps.

1. Open **PowerShell** as **Administrator**
2. Run the command
   
   ``` ps1
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
   ```

3. Restart your terminal

PowerShell blocks all scripts downloaded from the internet by default. This command will allow PowerShell to run downloads that have a trusted signature.

## MacOS Installation
If you have an error like this with **global** commands:
``` bash
EACCES: permission denied, access '/usr/local/lib/node_modules'
```
Then you'll need to modify some folder permissions on your system. MacOS is more locked down than Windows or Linux, but there are a few ways to overcome this.

### Using Sudo
As a Unix-based operating system, MacOS allows you to run console commands as an administrator, or superuser. **sudo** is short for **superuser do**. You can run a command with **sudo** by adding it to the front of the line.
* ```
  sudo npm install -g packagename
  ```
  
* ```
  sudo hax start
  ```
  
This will work for the scope of the class, but the **sudo** keyword will need to be used before every **global** command.

### Modifying Folder Ownership
You can also change the owner of this global **node_modules** folder to yourself. This can be more convenient since you won't need to use **sudo** on every command. Either target the specific `node` folder:
* ```
  sudo chown -R $USER /usr/local/lib/node_modules
  ```
  
Or target its parent `usr/local`:
* ```
  sudo chown -R $USER /usr/local/
  ```

**NOTE:** Do not modify these commands without consulting the teaching team. Running **chown** (change owner) on the top level `/usr/` folder can risk breaking your OS install.

### Changing the Node PATH (Advanced)
Making your own custom **Node PATH** is a more preferred solution for security purposes. However, it is also more complex to setup. If you're interested in trying to apply this, please follow these commands in order:
1. Make a new folder in your **home** directory
   
   ```
   mkdir "${HOME}/.npm-packages"
   ```

2. Point to your new folder with **npm**. This makes it the new target for global packages.
   
   ```
   npm config set prefix "${HOME}/.npm-packages"
   ```
   
4. Make sure that you're currently in the **home** directory
   
   ```
   cd ~
   ```
   
5. Enter your **.zshrc** file
   
   ```
   open -t .zshrc
   ```
   
6. Add your new folder to the **system PATH** by pasting these lines at the end of the file
   
   ```
   NPM_PACKAGES="${HOME}/.npm-packages"
     
   export PATH="$PATH:$NPM_PACKAGES/bin"
     
   # Preserve MANPATH if you already defined it somewhere in your config.
   # Otherwise, fall back to `manpath` so we can inherit from `/etc/manpath`.
   export MANPATH="${MANPATH-$(manpath)}:$NPM_PACKAGES/share/man"
   ```
   
6) Save the file and restart your terminal

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
4. YOU MUST BE IN THE SAME DIRECTORY AS THAT package.json FILE IN ORDER TO EXECUTE COMMANDS

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

### HTML common mistakes
- attributes MUST be like so `<p class="whatever">`. some systems (like codepen) will allow `<p CLASS = "STUFF">` or `<P class=stuff>` but these are not correct and can cause issues.
- It's always `<` tag name in lower case, space, attribute name, =", then the value and then ". Tag must always end with `>` and to bee complete will have a matching `</tagname>` or `</p>`
- VSCode will at times identify an open tag without a closing

### CSS common mistakes
- `#thing` would target `<p id="thing">`
- `.thing` would target `<p class="thing">`
- `.thing .nesting .here` is `<p class="thing"><div class="nesting"><a class="here">`
- `.thing.nesting.here` without spaces, implies `<p class="thing nesting here">` because you can stack classes / selectors together
- ALL css attributes MUST have `;` at the end of them. JS is forgiving at times but CSS is not. for example `p.orange { color: orange }` will break
- `<p class="orange">` with a `p.orange { color: orange;}` will work
- Try to target class names and not tag names (generally)
- Try to avoid using `id="whatever"`. While not "wrong", over-use of this approach can cause accessibility errors in certain situations and `<section class="whatever">` is just as specific if you never use "whatever" elsewhere
- you can sorta "make up" selectors when we get into web components via attributes. This allows you to somewhat abuse the specification of HTML for CSS purposes and is a good thing but you won't see it a lot outside of web components
  - example: `<my-tag cool>` could have a selector internally of `:host([cool]) { background-color: green;}`
  - more universal / vanillaJS / any context example: `<div data-cool="data-cool">` w/ a global selector of `div[data-cool] { background-color: green; }`
- CSS scoping when we get into web components, is that CSS does not cascade when you see "shadow-root" in the browser inspector. This is a feature, not a bug, but frustrating at first for sure!

### JS Common mistakes
- We will be doing modular javascript which means that local "tooling" or development tools, actually build and make the code work while you review it.
- As a result when you reference other code it should be like `import "@whatever/library/thing.js";` and NOT `import "../../../../node_modules/@whatever/library/thing.js"`
JS feedback loop when using NPM
- find asset on npm
- `npm install --save @what/ever`
- `npm run start` (restart / reload your development environment)
- import the code into your code like `import "@what/ever/thing.js"`
- now, if it's another webcomponent then you'll be able to use the `<what-ever>` tag

# Get in the habit of doing these all the time.
This is literally the feedback loop of the job and the way to solve 99% of issues. If you hate this, you might end up hating development. If this makes sense, hopefully you have just found your passion.

# Video of how to get started / OS level explainer
- https://www.youtube.com/watch?v=cwTswuFkMH4

# Lit life cycle activity
- https://lit.dev/tutorials/ make sure you do all the tutorials
