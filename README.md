# Experis Web Framework 2 #

EWF 2 is a major improvement on the original Experis Web Framework, and we decided that the changes were significant enough to warrant a new version number. Therefore, EWF 2 will be managed as a separate project from the original.

The primary goal in version 2 was to allow the framework to integrate into any existing HTML without the need to add design-specific class names like "size-3" and "two-column." With CSS pre-processors like Sass, we can now map common rules to any CSS selector through functions and mixins.

**What separates EWF from other RWD frameworks:**

*   **Extremely lightweight**

    Unlike most other frameworks, only the styles you use are included in the final CSS. And by using the Sass [@extend directive](http://awardwinningfjords.com/2010/07/27/sass-extend-introduction.html), your CSS can be even smaller.

*   **Makes only one HTTP request**

    EWF 2 compiles all of your Sass code into a single CSS file, so users only need to download one file.

*   **Allows for semantic HTML class names**

    There's no need to include classes like "span4," "three columns," or "show-on-phones" in your HTML. Use classes that are relevant to your HTML markup, and manage your design in the CSS, as best practices dictate.

*   **Organized file structure**

    EWF 2 uses the structure recommended by [The Sass Way](http://thesassway.com/beginner/how-to-structure-a-sass-project) website, allowing you to separate Sass code into different components that can be reused in multiple projects.

*   **Compass integration**

    If you like the benefits that are offered by Sass and Compass, you'll be right at home with EWF 2.

Open the readme.htm file in a modern browser for more details.
