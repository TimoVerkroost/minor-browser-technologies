# Assignment 2.1 - Feature detection

## HTMl feature detection

### Picture element

The Picture element is a container for multiple image sources which loaded based on the user agent, screen resolution, media query and image format support. 

This element is very experimental because most older browsers don't support it. On the other hand it's very easy to place a fallback in the picture tag, simply place on the end of the tag the legacy <img> tag.

```html
    <picture>
        <!-- Responsive images -->
        <source srcset="demos/images/1200x800.png" media="(min-width: 37.5em)">
        <source srcset="demos/images/600x400.png" media="(min-width: 18.75em)">
        <source srcset="demos/images/300x200.png">
    
        <!-- Fallback for srcset - legacy <img> tag -->
        <img alt="alt-tag" title="title-tag" src="demos/images/600x400.png">
    </picture>
```

[Demo link](https://timoverkroost.github.io/minor-browser-technologies/2.1-assignment-feature-detection/demos/feature-html-1.html)

#### Sources
-   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
-   [Caniuse](http://caniuse.com/#search=Picture)
-   [HTML5test](http://html5test.com/compare/feature/responsive.picture.html)
-   [Whatwg](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)