# Assignment 2.1 - Feature detection

## HTMl feature detection

### Picture element
The Picture element is a container for multiple image sources which loaded based on the user agent, screen resolution, media query and image format support. 

#### Browser support
![Picture support](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/caniuse-picture.png "Picture support")

#### Fallback
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

#### Demo link
[Demo link picture](https://timoverkroost.github.io/minor-browser-technologies/2.1-assignment-feature-detection/demos/feature-html-1.html)

#### Sources
-   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
-   [Caniuse](http://caniuse.com/#search=Picture)
-   [HTML5test](http://html5test.com/compare/feature/responsive.picture.html)
-   [Whatwg](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)

#

### Datalist element
The datalist element contains a number of predefined options that can be used in another input field. You can see it as a helper/suggestion to fill in the input field.

#### Browser support
![Datalist support](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/caniuse-datalist.png "Datalist support")

#### Fallback
There is no direct fallback for datalist, if the browser doesn't support it the input type will be shown without the suggestions or predefined input. So it doesn't break anything it's only an enhancement.

If there must be a fallback you can use the select element that is more supported. But not in every browser. If the browser also doesn't support it will be a text input type so it won't break.

```html
    <label>
        Choose a browser from this list:
        <!-- Link to the datalist -->
        <input list="browsers" name="myBrowser" />
    </label>
    <datalist id="browsers">
        <!-- Data that will be pushed in the input field -->
        <option value="Chrome">
        <option value="Firefox">
        <option value="Internet Explorer">
        <option value="Opera">
        <option value="Safari">
        <option value="Microsoft Edge">
    </datalist>
    
    <!-- Fallback if browser doesn't support datalist then will the select shown -->
    <label>
        Choose a browser from this list:
        <!-- Link to the datalist -->
        <input list="browsers" name="myBrowser" >
    </label>
    <datalist id="browsers">
        <label>
            <select name="browsers">
                <!-- Data that will be pushed in the input field -->
                <option value="Chrome">
                <option value="Firefox">
                <option value="Internet Explorer">
                <option value="Opera">
                <option value="Safari">
                <option value="Microsoft Edge">
            </select>
        </label>
    </datalist>
```

#### Demo link
[Demo link datalist](https://timoverkroost.github.io/minor-browser-technologies/2.1-assignment-feature-detection/demos/feature-html-2.html)

#### Sources
-   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
-   [Caniuse](http://caniuse.com/#search=Picture)
-   [Whatwg](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)
-   [Agektmr](https://demo.agektmr.com/datalist/)

#

## CSS feature detection

### NAME element

#### Browser support

#### Fallback

#### Demo link

#### Sources

#

### NAME element

#### Browser support

#### Fallback

#### Demo link

#### Sources

#

## JavaScript feature detection

### NAME element

#### Browser support

#### Fallback

#### Demo link

#### Sources

#

### NAME element

#### Browser support

#### Fallback

#### Demo link

#### Sources

#