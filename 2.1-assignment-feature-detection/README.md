# Assignment 2.1 - Feature detection

## HTMl feature detection

### Picture element
The Picture element is a container for multiple image sources which loaded based on the user agent, screen resolution, media query and image format support. 

#### Browser support
![Picture support](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/caniuse-picture.png "Picture support")

### Fallback
This element is very experimental because most older browsers don't support it. On the other hand it's very easy to place a fallback in the picture tag, simply place on the end of the tag the legacy img tag.

Because the browser is parsing through the DOM elements and will skip the elements it won't support, the fallback needs to be just before the closing of the picture element, otherwise it won't work.

```html
    <picture>
        <!-- Responsive images for browsers that support the Picture tag -->
        <source srcset="images/1200x800.png" media="(min-width: 37.5em)">
        <source srcset="images/600x400.png" media="(min-width: 18.75em)">
        <source srcset="images/300x200.png">
    
        <!-- Fallback - with legacy img tag -->
        <img alt="alt-tag" title="title-tag" src="images/600x400.png">
    </picture>
```

### Demo link
[Demo link](https://timoverkroost.github.io/minor-browser-technologies/2.1-assignment-feature-detection/demos/feature-html-1.html)

#### Sources
-   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
-   [Caniuse](http://caniuse.com/#search=Picture)
-   [HTML5test](http://html5test.com/compare/feature/responsive.picture.html)
-   [Whatwg](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)
