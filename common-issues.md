# Common Issues for New Web Developers

**New to web development? You're in the right place!** 🎯

This guide helps you solve the most common problems students face when starting web development. Before asking for help, check this list first - it covers 90% of the issues you'll encounter.

**Don't panic!** Every developer has been where you are. These problems are normal and solvable.

## 🚀 Quick Start for New Students

**First time here? Follow these steps in order:**

1. **Install Node.js** - Go to [nodejs.org](https://nodejs.org) and download the LTS version
2. **Install the HAX CLI** - Open terminal and run: `npm install --global @haxtheweb/create`
3. **Test it works** - Run: `hax --version` (you should see a version number)
4. **Explore HAX** - Run: `hax start` (launches interactive menu with Merlin 🧙)
5. **Create your first component** - Choose "webcomponent" from the menu, or run: `hax webcomponent`
6. **If something breaks** - Check the sections below!

# Table of Contents
- [🚀 Quick Start for New Students](#-quick-start-for-new-students)
- [HAX Command Line Tool](#hax-command-line-tool)
  - [What is HAX?](#what-is-hax)
  - [Installing HAX CLI](#installing-hax-cli)
  - [Main HAX Commands](#main-hax-commands)
  - [HAX Troubleshooting](#hax-troubleshooting)
- [Windows Installation](#windows-installation-issues)
- [MacOS Installation](#macos-installation-issues)
  - [Modifying Folder Ownership](#modifying-folder-ownership)
  - [Changing the Node PATH (Advanced)](#changing-the-node-path-advanced)
  - [Using Sudo (Last Resort)](#using-sudo-last-resort)
- [I did X and it didn't work](#i-did-x-and-it-didnt-work)
  - [Terminal / command line](#terminal--command-line-problems)
    - [It says "whatever" is not a command](#problem-whatever-is-not-a-command)
    - [Common commands](#common-commands)
  - [Browser / your running code](#browser--your-running-code)
  - [HTML common mistakes](#html-common-mistakes)
  - [CSS common mistakes](#css-common-mistakes)
  - [JS Common mistakes](#js-common-mistakes)
- [Get in the habit of doing these all the time](#get-in-the-habit-of-doing-these-all-the-time)
- [Video of how to get started / OS level explainer](#video-of-how-to-get-started--os-level-explainer)
- [Lit life cycle activity](#lit-life-cycle-activity)

## HAX Command Line Tool

### What is HAX?
**HAX** is "The Web : CLI" - a powerful command-line interface for building modern web components and sites. It provides:
- An interactive wizard for choosing what to build (`hax start`)
- Tools for creating and managing web components (`hax webcomponent`)
- HAXsite creation and management (`hax site`)
- Development servers and build tools
- Integration with the HAX ecosystem

### Installing HAX CLI

**Step 1: Install Node.js**
- Download from [nodejs.org](https://nodejs.org) (get the LTS version)
- Verify: `node --version` (should show a version like v18.x.x or higher)

**Step 2: Install HAX globally**
```bash
npm install --global @haxtheweb/create
```

**Step 3: Test installation**
```bash
hax --version
```

**If you get "command not found" errors, check the installation troubleshooting sections below.**

### Main HAX Commands

#### `hax start` - Interactive Menu
**The main entry point - shows you options for what to build**
- Launches an interactive wizard with Merlin 🧙
- Helps you choose between creating web components, sites, etc.
- Great for beginners who want to explore what HAX can do

```bash
hax start
```

#### `hax webcomponent` - Create Web Components
**Build Lit-based web components with HAX recommendations**

**Common usage:**
```bash
# Interactive creation
hax webcomponent

# Create component with specific name
hax webcomponent --name my-awesome-button

# Start development server for existing web component project
hax webcomponent start

# Add new element to existing project
hax webcomponent wc:element
```

**Available actions:**
- `start` - Launch project development server
- `wc:stats` - Check status of web component
- `wc:element` - Add new Lit component to existing project
- `wc:haxproperties` - Write haxProperties schema

#### `hax site` - Create and Manage HAX Sites
**Build and manage HAX-powered websites**

**Common usage:**
```bash
# Interactive site creation
hax site

# Create site with specific name
hax site --name my-awesome-site

# Launch existing site in browser
hax site start

# Launch in development mode
hax site serve

# Add a new page
hax site node:add
```

**Popular actions:**
- `start` - Launch site in browser
- `serve` - Development mode with live reloading
- `node:add` - Add a new page
- `node:edit` - Edit existing page
- `site:theme` - Change site theme
- `site:stats` - Check site statistics

### HAX Troubleshooting

#### Problem: "hax: command not found"
**Solutions:**
1. **Install HAX:** `npm install --global @haxtheweb/create`
2. **Permission issues:** Check MacOS/Windows installation sections above
3. **Restart terminal** after installation
4. **Check PATH:** Try `npm list -g @haxtheweb/create`

#### Problem: HAX commands fail with permission errors
**On MacOS/Linux:**
```bash
# Fix npm permissions (recommended method)
npm config set prefix ~/.local
export PATH=$PATH:~/.local/bin
```

**On Windows:** Use PowerShell as Administrator (see Windows section above)

#### Problem: "hax start" shows weird characters or doesn't work
**Possible causes:**
1. **Terminal doesn't support Unicode** - Try a different terminal (Windows Terminal, iTerm2, etc.)
2. **Old Node.js version** - Update to Node.js LTS
3. **Terminal window too small** - Make it wider/taller

#### Problem: Development server won't start
**Check these:**
1. **Port in use:** Look for "EADDRINUSE" error - close other servers or use different port
2. **Wrong directory:** Make sure you're in a project folder with `package.json`
3. **Dependencies missing:** Run `npm install` in the project folder
4. **Firewall blocking:** Allow Node.js through your firewall

#### Common HAX Workflow
**For beginners, this is the typical flow:**

1. **Start HAX and explore:**
   ```bash
   hax start
   ```

2. **Create your first web component:**
   ```bash
   hax webcomponent
   # Follow the prompts to name your component
   ```

3. **Start development:**
   ```bash
   cd your-component-name
   hax webcomponent start
   ```

4. **Edit and test:** Make changes to your component and see them live

5. **Later, create a site to showcase your components:**
   ```bash
   hax site
   # Follow prompts to create a site
   ```

## Windows Installation Issues

### Problem: "Scripts are disabled" Error
If you see this error when trying to run Node.js commands:
```ps1
Error on terminal: node.ps1 cannot be loaded because running scripts is disabled on this system.
```

**What this means:** Windows blocks downloaded programs from running by default for security.

**How to fix it:**

1. **Open PowerShell as Administrator**
   - Press `Windows key + X`
   - Click "Windows PowerShell (Admin)" or "Terminal (Admin)"
   - If you see a popup asking "Do you want to allow this app to make changes?", click "Yes"

2. **Run this command** (copy and paste it exactly):
   ```ps1
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
   ```
   - Press Enter
   - If it asks "Do you want to change the execution policy?", type `Y` and press Enter

3. **Close PowerShell and open a new terminal window**

**What this does:** Allows Windows to run trusted programs (like Node.js) that you download, while still blocking potentially harmful scripts.

## MacOS Installation Issues

### Problem: "Permission denied" Error
If you see this error when trying to install packages:
``` bash
EACCES: permission denied, access '/usr/local/lib/node_modules'
```

**What this means:** MacOS is protecting system folders from being modified. This is good for security!

**Three ways to fix it** (pick ONE method):

### Modifying Folder Ownership
You can change the owner of this global **node_modules** folder to yourself. Either target the specific `node` folder:
* ```
  sudo chown -R $USER /usr/local/lib/node_modules
  ```
  
Or target its parent `usr/local`:
* ```
  sudo chown -R $USER /usr/local/bin
  sudo chown -R $USER /usr/local/man
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

### Using Sudo (Last Resort)
As a Unix-based operating system, MacOS allows you to run console commands as an administrator, or superuser. **sudo** is short for **superuser do**. You can run a command with **sudo** by adding it to the front of the line.
* ```
  sudo npm install -g packagename
  ```
  
* ```
  sudo hax start
  ```
  
**NOTE:** This will work for the scope of the class, but there are some inherent security implications with it. In this circumstance, every **Node** process will run as a **superuser**. Any malicious script would then have full permissions on your system. Only use this approach as a last resort.

## I did X and it didn't work

### Terminal / command line problems

**First things to check:**
- **Look for error messages** - They're usually in red text and tell you exactly what's wrong
- **Check for typos** - Terminal commands don't start with `$` (that's just how tutorials show them)
- **Make sure you're in the right folder** - Many commands only work in specific directories

#### Problem: "whatever is not a command" 
**What this means:** You're trying to run a command that isn't installed or available.

**The universal fix for web development projects:**
Every project folder that has a `package.json` file needs to be "installed" first. Here's the process:

1. **Download the project** 
   ```bash
   git clone https://github.com/username/project-name.git
   ```

2. **Go into the project folder**
   ```bash
   cd project-name
   ```

3. **Install the project's dependencies** (this downloads all the tools it needs)
   ```bash
   npm install
   ```

4. **Start the project** (check the `package.json` file for available commands)
   ```bash
   npm start
   ```
   or sometimes:
   ```bash
   npm run dev
   ```

**IMPORTANT:** You MUST be in the same folder as the `package.json` file to run these commands!

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
