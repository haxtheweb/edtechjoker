# Node.js & HAXTheWeb Setup Guide

A comprehensive guide for installing Node.js and HAXTheWeb's `@haxtheweb/create` tool across macOS, Linux, and Windows.

---

## What You'll Install

1. **Node.js** - JavaScript runtime that lets you run JavaScript outside the browser
2. **npm** - Node Package Manager (comes with Node.js)
3. **@haxtheweb/create** - HAXTheWeb's project scaffolding tool

---

## Part 1: Install Node.js

<details>
<summary><strong>macOS</strong></summary>

### Using Homebrew (Recommended)

```bash
brew install node
```

### Verify Installation

```bash
node --version
npm --version
```

You should see version numbers like `v20.x.x` and `10.x.x`

### Alternative: Official Installer

Download the LTS version from [nodejs.org](https://nodejs.org/) and run the `.pkg` installer.

</details>

<details>
<summary><strong>Linux (Ubuntu/Debian)</strong></summary>

### Using NodeSource Repository

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Verify Installation

```bash
node --version
npm --version
```

You should see version numbers like `v20.x.x` and `10.x.x`

### Other Distributions

- **Fedora/RHEL/CentOS:**
  ```bash
  sudo dnf install nodejs
  ```

- **Arch Linux:**
  ```bash
  sudo pacman -S nodejs npm
  ```

</details>

<details>
<summary><strong>Windows</strong></summary>

### Using Official Installer (Recommended)

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version
3. Run the downloaded `.msi` installer
4. Follow the setup wizard:
   - Accept the license agreement
   - Keep default installation path
   - Check "Automatically install necessary tools" if prompted
   - Click through and finish the installation

### Verify Installation

Open PowerShell or Git Bash and run:

```powershell
node --version
npm --version
```

You should see version numbers like `v20.x.x` and `10.x.x`

### Alternative: Using Chocolatey

If you have Chocolatey installed:

```powershell
choco install nodejs-lts
```

### Alternative: Using Scoop

If you have Scoop installed:

```powershell
scoop install nodejs-lts
```

</details>

---

## Part 2: Install HAXTheWeb

### What is HAXTheWeb?

**HAXTheWeb** is a powerful web authoring system that makes it easy to create modern, accessible websites and web experiences. It provides a visual editor with drag-and-drop capabilities while generating clean, standards-based HTML.

The `@haxtheweb/create` tool scaffolds new HAX projects with best practices built-in.

### Install Globally (All Platforms)

Once Node.js is installed, run this command in your terminal:

```bash
npm install --global @haxtheweb/create
```

> **Note:** This might take a minute or two as npm downloads and installs the HAXTheWeb tools. You'll see progress indicators in your terminal.

### Verify Installation

```bash
npm list -g @haxtheweb/create
```

You should see output showing the installed version of `@haxtheweb/create`.

---

## Troubleshooting

### Permission Errors (macOS/Linux)

If you get `EACCES` permission errors when installing global packages, fix npm permissions:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

Then try installing again.

### Windows PATH Issues

If commands aren't recognized after installation:

1. Close and reopen your terminal/PowerShell
2. If still not working, restart your computer
3. Verify Node.js is in your PATH:
   ```powershell
   $env:Path -split ';' | Select-String node
   ```

### Version Conflicts

To check which versions are installed:

```bash
node --version
npm --version
```

To update npm to the latest version:

```bash
npm install -g npm@latest
```

---

## Additional Resources

- **Node.js Documentation:** [https://nodejs.org/docs/latest/api/](https://nodejs.org/docs/latest/api/)
- **npm Documentation:** [https://docs.npmjs.com/](https://docs.npmjs.com/)
- **HAXTheWeb GitHub:** [https://github.com/haxtheweb/](https://github.com/haxtheweb/)
- **Complete Visual Guide:** [https://trigerman.github.io/lesson3-nodejs.html](https://trigerman.github.io/lesson3-nodejs.html)

---

## Course Requirements

This guide was created to help students meet the following course requirements:

> Students need to have **Node.js**, **VS Code** configured, and be able to run the command:
> ```bash
> npm install --global @haxtheweb/create
> ```

Source: [IST256 Requirements](https://oer.hax.psu.edu/bto108/sites/ist256/requirements)


