# Glossary

Define each term below by writing a paragraph explaining what it is and why it's important for web development. Include 2-3 relevant links for more information.

## Web Components 
Web components are a suite of standardized web platform technologies that let developers create custom, reusable HTML elements with their own structures, styling, and behavior, so they work across web pages and applications without interfering with other code. These components se broswer APIs such as custom elements, shadow DOM, and templates.

*https://developer.mozilla.org/en-US/docs/Web/API/Web_components

## Lit


## NPM
the node package manager is the default package manager for node.js.

*https://www.google.com/url?sa=i&source=web&rct=j&url=https://blog.packagecloud.io/what-is-npm/&ved=2ahUKEwiLo6bX_ZySAxWqNmIAHd_xGFoQqYcPegYIAQgAECo&opi=89978449&cd&psig=AOvVaw0pj5GgL1cNtsPPZ8fmJQEu&ust=1769096907864000

## Node.js
Node.js is essentially what runs JavaScript, It is what 'does' stuff within the file. It is a high performance, single-threaded event loop that is very popular for building modern web applications.It is also known for it's scalability and for having an extensive ecosystem:
*Event-Driven, non-blocking I/O = great for real time applications
*Collection of libraries making development easier

*https://www.geeksforgeeks.org/node-js/why-node-js/
*https://www.reddit.com/r/learnjavascript/comments/3d4hs5/eli5_what_in_the_heck_is_nodejs/

## JavaScript
- Client-side & server-side: Runs in the browser and on servers (via Node.js).
- Interpreted, not compiled: Executed line-by-line by the JS engine.
- Event-driven: Reacts to user actions (clicks, typing) and async events.
- Dynamically typed: Variables don’t need fixed types.
- First-class functions: Functions can be stored, passed, and returned.
- Asynchronous by default: Uses callbacks, promises, and async/await.
- Core of the web: Works with HTML (structure) and CSS (style).

''' // ===== Utilities =====
const greetUser = (name) => `Hello, ${name}!`;

// ===== DOM Elements =====
const greetButton = document.querySelector("#greet-btn");

// ===== Event Handlers =====
const handleGreetClick = () => {
  console.log(greetUser("David"));
};

// ===== Event Listeners =====
greetButton.addEventListener("click", handleGreetClick); '''


## Git


## HAXTheWeb


## Command Line Interface (CLI)

A Command Line Interface is a text-based interface that allows users to interact with a computer program, operating system, or development tool by typing commands into a terminal or console, rather than using graphical user interfaces.
 - https://www.contentstack.com/blog/tech-talk/the-evolution-of-command-line-interface-cli-a-historical-insight
 - https://www.geeksforgeeks.org/operating-systems/what-is-command-line-interface-cli/
 - https://aws.amazon.com/what-is/cli/?
