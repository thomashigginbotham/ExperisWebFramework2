# XWF

Experis Web Framework is a RWD system that focuses on accurate grid layouts, semantic markup, and efficiency. It does not include button styles, jQuery carousels, or other design elements and functionality that you may never use or end up overwriting anyway.

## Quick Start

XWF is available as a Yeoman generator, a Bower package, by cloning this repo, or by downloading an old fashioned ZIP file.

  * [Install with Yeoman](http://yeoman.io/): `npm install -g generator-xwf` `yo xwf`
  * [Install with Bower](http://bower.io/): `bower install xwf`
  * [Clone this repo](http://git-scm.com/downloads): `git clone https://github.com/thomashigginbotham/ExperisWebFramework2.git`
  * [Download a ZIP file](https://github.com/thomashigginbotham/ExperisWebFramework2/archive/master.zip)

## Using the Grid System

Creating columns means having an HTML element to act as the row container with direct child elements that act as the columns. This is similar to most RWD frameworks and is best explained through examples.

### HTML

    <section class="authors">
        <div class="author-main">Roald Dahl</div>
        <div class="author">L. Frank Baum</div>
        <div class="author">J. K. Rowling</div>
    </section>

### SCSS

    .authors {
        @include row();
    }
    .author-main {
        @include column(6);
    }
    .author {
        @include column(3);
    }

In the example above, there will be 3 columns with the first column spanning half of the available space and the other two filling the remaining space. XWF uses a 12-column grid by default but it can be changed by updating the `$col-count` variable in **stylesheets/partials/_base.scss**.

In addition to standard rows/columns, XWF offers a `grid()` mixin for creating multi-row layouts of equal-width cells without the need for multiple row containers.

### HTML

    <ul class="comedian-thumbnails">
        <li><img src="robin-williams.jpg" alt="Robin Williams"/></li>
        <li><img src="richard-pryor.jpg" alt="Richard Pryor"/></li>
        <li><img src="george-carlin.jpg" alt="George Carlin"/></li>
        <li><img src="jim-carrey.jpg" alt="Jim Carrey"/></li>
    </ul>

### SCSS

    ul {
        @include grid(2);
    }

## Compiling Sass into CSS

XWF is written with [Sass](http://sass-lang.com/). There are no pre-made CSS classes such as `col-xs-6` or `large-4 columns`. You are free to create these classes, but it is better to use semantic class names like `nav-sidebar` so that your HTML is design agnostic, portable, and easier to understand.

Grunt tasks are provided to automate the compilation process. Use `grunt serve` to start a basic web server with LiveReload support. Entering `grunt` by itself will create a **dist** folder containing your production-ready code.

## RequireJS

[RequireJS](http://requirejs.org/) is recommended in order to keep your JavaScript modular and testable. XWF comes with a sample jQuery plugin and some basic RequireJS configuration that will automatically update when you install new Bower packages. Even if you are unfamiliar with RequireJS and writing jQuery plugins, you should be able to edit the sample plugin to gain a good footing and be on your way to writing great code.

## Copyright/License
Experis Web Framework is freely available under the [MIT license](http://opensource.org/licenses/MIT).
