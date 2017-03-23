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

If there must be a fallback you can use the select element, this element is supported in all the browsers.

![Datalist IE9](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/datalist-ie9.png "Datalist IE9")

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
            or select from the list:
            <select name="myBrowser">
                <!-- Data that will be pushed in the input field -->
                <option value="">
                <option value="Chrome">Chrome
                <option value="Firefox">Firefox
                <option value="Internet Explorer">Internet Explorer
                <option value="Opera">Opera
                <option value="Safari">Safari
                <option value="Microsoft Edge">Microsoft Edge
            </select>
        </label>
    </datalist>
```

#### Demo link
[Demo link datalist](https://timoverkroost.github.io/minor-browser-technologies/2.1-assignment-feature-detection/demos/feature-html-2.html)

#### Sources
-   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
-   [Caniuse](http://caniuse.com/#search=datalist)
-   [Whatwg](https://html.spec.whatwg.org/multipage/forms.html#the-datalist-element)
-   [Agektmr](https://demo.agektmr.com/datalist/)
-   [Devcurry](http://www.devcurry.com/2011/08/html-5-datalist-element-with-fallback.html)

#

## CSS feature detection

### Appearance property
The appearance property defines how elements will look by default, this is based on the users operating system's theme. If the developer choices to not use this default styling he/she can disable it with appearance: none; now it's possible to style the element with other CSS properties. You can also let input fields look like other input fields.

To use this element it's required to use a browser vendor prefix otherwise it doesn't work.

#### Browser support
![Appearance support](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/caniuse-appearance.png "Appearance support")

#### Fallback
If the browser doesn't support it the fallback will always be the basic style of the element what is was before the reset. This feature is a good example of an enhancement because the default always works and when we need to make it shiny we can do that without breaking stuff.

For now the default appearance without prefix doesn't do anything but it's recommended to use it because maybe in the future it does work.

![Appearance IE9](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/appearance-ie9.png "Appearance IE9")

```css
    input[type="search"],
    select {
        -webkit-appearance: none;
        -moz-appearance:    none;
        /* without prefix it doesn't work for now but maybe later it does */
        appearance:         none;
        /* styling what can be done after appearance: none */
        border-radius: 0;
        border: .1em solid royalblue;
        padding: 1em 2em;
        background-color: aquamarine;
    }
```

#### Demo link
[Demo link Appearance](https://timoverkroost.github.io/minor-browser-technologies/2.1-assignment-feature-detection/demos/feature-css-1.html)

#### Sources
-   [Caniuse](http://caniuse.com/#search=appearance)
-   [Csswg](https://drafts.csswg.org/css-ui-4/#appearance-switching)
-   [CSS tricks](https://css-tricks.com/almanac/properties/a/appearance/)

#

### Object-fit property
In CSS you have background-size:contain | cover; to place a image in a element, but then it is a background image that is used for "decoration" what if we want the image to be loaded in the HTML as a "content image" and fit in the element. We can use Object-fit, this property will fit the image in the containing element. This property does not only work for images but also for videos. 
 
 The property is relative new and not widely supported, so in many browser it won't do what it supposed to do.

#### Browser support
![Object-fit support](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/caniuse-objectfit.png "Object-fit support")

#### Fallback
The default fallback is to not use the property so the image or video will not fit to the containing element. Als you can use background-size: cover | contain; but then it's not a HTML image/video anymore and it becomes a "decoration".

By default the width of the images are "auto" because they won't stretch when the object-fit is not supported. But when object-fit is supported (@support) the width is "100%" so the image can stretch but also scale because of the object-fit property so the image will fill the containing element.
 
 ```css
    img {
        height: 120px;
        max-width: 100%;
        background-color: #444;
    }
    
    img[class] {
        width: auto;
    }
    
    @supports (object-fit: fill)
        {
            img[class] {
                width: 100%;
            }
        }
 ```
 
 Compare IE9 on the left (no supported) with Chrome 57 on the right (supported):
 
 ![Object-fit IE9 chrome](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/objectfit-ie9-chrome.png "Object-fit IE9 chrome")

#### Demo link
Credits to CSS-tricks for the demo, I just modified it.
[Demo link Object-fit](https://timoverkroost.github.io/minor-browser-technologies/2.1-assignment-feature-detection/demos/feature-css-2.html)

#### Sources
-   [Caniuse](http://caniuse.com/#search=object-fit)
-   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
-   [CSS tricks](https://css-tricks.com/almanac/properties/o/object-fit/)
-   [Opera dev](https://dev.opera.com/articles/css3-object-fit-object-position/)

#

## JavaScript feature detection

### Geolocation feature
With the geolocation feature the browser can get the user it's geographical location. The output in the browser is Latitude and Longitude, with this data you can for example use Google Maps to place a marker on the location of the user.
 
**Note:** most browser ask the user first if they want to share their location and then execute the script.

#### Browser support
![Geo support](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/caniuse-geo.png "Geo support")

#### Fallback
If JavaScript doesn't work we can't get the geolocation from the user by clicking on the button. For this case I used the "noscript" tag so when there is no JavaScript the user can fill in a form with an address so he or she can fill in the location, maybe handle this address server side to transform it to lat and lng and get this back on the post.

If for some reason the geolocation feature gives an error for example: the user don't wan't to share it with your website, also a form with address info will appear so the user can fill in an address and sent it to the server.
For browser that don't support "classList" I added style.display = "block".

#### Demo link
Credits to w3schools for the demo, I just modified it.
[Demo link Geolocation](https://timoverkroost.github.io/minor-browser-technologies/2.1-assignment-feature-detection/demos/feature-js-1.html)

#### Sources
-   [Caniuse](http://caniuse.com/#search=geolocation)
-   [w3schools](https://www.w3schools.com/html/html5_geolocation.asp)
-   [W3C](https://www.w3.org/TR/geolocation-API/)

#

### Const deceleration
Declares a constant with block level scope, so it's identifier won't be reassigned. It's used in ES6 for better declaration of the JavaScript code, but it does basically the same as the legacy "var".

#### Browser support
![Const support](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/2.1-assignment-feature-detection/images/caniuse-const.png "Const support")

#### Fallback
Because const is an ES6 deceleration we can check if the browser does support this ES version. When it does support is we can use a script with ES6 and otherwise we can use an older variant like ES5.


#### Demo link
[Demo link Const](https://timoverkroost.github.io/minor-browser-technologies/2.1-assignment-feature-detection/demos/feature-js-2.html)

#### Sources
-   [Medium](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.kc7qo8llr)
-   [Caniuse](http://caniuse.com/#feat=const)
-   [ECMA international](http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations)
-   [Generatedcontent](http://generatedcontent.org/post/54444832868/variables-and-constants-in-es6)
-   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
