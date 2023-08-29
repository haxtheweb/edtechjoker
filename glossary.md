 # Glossary
Write a paragraph explaining the term below, including 2-3 relevent links to more information about the topic.

## Front end Developer
A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app. When you visit a website, the design elements you see were created by a front-end developer. Front-end developers create the user interface (UI) that determines what each part of a site or application does and how it will look.

More to read: https://www.coursera.org/articles/front-end-developer, https://bootcamp.berkeley.edu/resources/coding/learn-web-development/what-does-a-front-end-web-developer-do/

## HTML


## CSS


## JavaScript


## Yarn


## NPM


## Package Manager

## Markdown


## Git


## Content Management System


## Drupal CMS


## WordPress CMS


## Backdrop CMS
Backdrop CMS is a user-friendly and powerful open-source content management system (CMS) that emerged as a fork of Drupal 7. It is designed to simplify website development and management, particularly for small to medium-sized businesses and non-profit organizations. Backdrop CMS retains many of the robust features of Drupal 7 while offering a more streamlined and intuitive user interface. It focuses on providing a balance between flexibility and ease of use, making it an ideal choice for individuals and organizations that require a solid online presence without the steep learning curve of more complex CMS platforms.

Some key features and characteristics of Backdrop CMS include:

- **Fork of Drupal 7:** Backdrop CMS maintains compatibility with many Drupal 7 modules and themes, making the transition relatively smooth for those already familiar with Drupal.
- **User-Friendly Admin Interface:** The admin interface is designed to be more straightforward and user-friendly, allowing users to manage content and configurations with ease.
- **Custom Content Types:** Backdrop CMS allows users to define and manage custom content types, enabling them to structure their content according to specific needs.
- **Responsive Themes:** The system supports responsive design, ensuring that websites built with Backdrop CMS look and function well on various devices.
- **Active Community:** While smaller than Drupal's community, the Backdrop CMS community is active and provides support, modules, and themes to extend the platform's functionality.

For more information, you can visit the [Backdrop CMS website](https://backdropcms.org/).

Here's an example of defining a custom content type in Backdrop CMS using code:

```php
/**
 * Implements hook_install().
 */
function mymodule_install() {
  // Define a custom content type.
  $type = array(
    'type' => 'custom_content',
    'name' => t('Custom Content'),
    'base' => 'node_content',
    'description' => t('A custom content type.'),
    // Add more settings and fields as needed.
  );
  node_type_save($type);
}
```

This code demonstrates how a custom content type can be defined and installed within a module in Backdrop CMS.

## GravCMS


## Gulp.js


## IDE
An IDE, or Integrated Development Environment, is an application used to write, run, and test code. IDEs are used by programmers to develop software in an easy manner without having to risk ruining live versions of the code. Basic functions of an IDE usually include a source code editor, a build automation tool, and a debugger. 
https://umbraco.com/knowledge-base/development-environment/#:~:text=The%20purpose%20of%20a%20development,working%20on%20a%20live%20website.

## VSCode
Visual Studio Code, commonly known as VScode, is a source code editor created by everyone's favorite company Microsoft. Features include debugging, syntax highlighting, code completion, snippets, code refactoring and Git. VScode is a useful tool to wrtie a multitude of coding languages in a singular loaction/application.
https://code.visualstudio.com/
https://en.wikipedia.org/wiki/Visual_Studio_Code


## Syntactically Awesome Style Sheets (Sass)


## Web Components


## LitElement


## lit-html


## HAXcms


## WCFactory


## LRNWebComponents


## ELMS: Learning Network


## HAX (editor)


## Open Source Software


## Apereo Foundation


## TravisCI


## Bash (sh)


## SEO

## PHP


## Express.js


## Bootstrap (design library)


## Angular

## React

## Vue.js


## Golang


## SQL


## MySQL


## WebAssembly


## Python


## Docker

## Vagrant


## VirtualBox


## Composer


## Kubernetes / K8s


## Accessibility / A11y


## Internationalization / i18n


## User Experience / Usability


## Open Educational Resources (OER)


## Nginx


## Apache Web server


## Varnish


## Traefik (Golang)


## HTMLElement


## Webpack


## OpenFaaS


## PaaS
(Platform as a Service) 
PaaS (Platform as a Service), as the name suggests, provides you computing platforms which typically includes operating system, programming language execution environment, database, web server etc. Examples: AWS Elastic Beanstalk, Windows Azure, Heroku, Force.com, Google App Engine, Apache Stratos.

## SaaS
Saas stands for Software as a Service and is a way for applications to be accessed over the internet
(Software as a Service) is a software licensing and delivery model in which software is licensed on a subscription basis.

# Btopro
