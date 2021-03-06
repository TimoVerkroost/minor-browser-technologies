# Assignment 1.1 - Breek het Web

## Feature breaking
*   Images
*   LocalStorage

### Images
What if your images won't load? Or what if your internet connection is so poor that images take ages to load?

#### Problems they cause when not loaded or loaded slowly
*   Broken image.
*   If content relays on specific images, the content will lose it's purpose.
*   When images will loaded after the content was loaded, the content will jump to make space for the images.
*   Console errors.
*   Some browsers have an option that saves data, the first thing this option does is block images (because most of the pageload are images).

#### How can I test it
*   In Google Chrome you can disable images to load in the settings, [see how](http://nimishprabhu.com/disable-images-in-google-chrome-browse-without-loading-images.html).
*   Show down internet connection (simulate) with throttling in Google Chrome, [see how](https://css-tricks.com/throttling-the-network/).

#### Example websites with this problem
*   [NU.nl](http://www.nu.nl/) - does use many images on their desktop website, but when I turned images off only the Alt-tags shown, this is not a bad thing but the whole experience of the website was lost.
*   [Google Images](https://images.google.com/) - if you disable images to show this website is completely useless because it's all about the images here no Alt-tags shown only some colors.

#### Possible solutions
*   Use alt-tag on an image so when it won't load you always get a description of the image in text (you need to write it by yourself).
*   Do not relay on images as first priority.
*   [Websites](http://line25.com/articles/20-minimal-web-designs-dont-rely-images)that not relay on images.
*   Sometimes you can use CSS or SVG instead of an image, this is allot faster so if you can replace the image for 1 of these do it.
    * Inline HTML SVG example
    ```html
    <svg width="400" height="100">
      <rect width="400" height="100" style="fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)" />
    </svg>
    ```
    * Inline CSS SVG example
    ```css
    body { 
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='400' height='100' style='fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)' /></svg>");
    }
    ```
    * You can also use gradients in CSS
    ```css
    body { 
        background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    }
    ```
    
### LocalStorage
Save data to the storage of the browser can be a easy get away for performance increase but how good does this work?

#### Problems it cause
*   When you use private modes with your browser LocalStorage, SessionStorage, enz.. won't work (not Google Chrome).[Source: Caniuse](http://caniuse.com/#search=localstorage).
* Opera Mini does not support Storage add all.
* Internet Explorer does not support storing most of the ASCII characters with codes under x20.[Source: Caniuse](http://caniuse.com/#search=localstorage).

#### How can I test it
*   Use private modes of the browser for example Safari
*   Use Opera Mini to test it.
*   Test on [http://html5demos.com/storage](http://html5demos.com/storage)

#### Example websites with this problem
*   [TypeKit](https://typekit.com/) is using LocalStorage to save the text that you want to use for testing a font. Luckily this is a feature that is not essential for the website but it's nice to have.
*   Every website with a login to save the username so when you revisit the website the username is already filled in.

#### Possible solutions
*   Store data in variables, but the downside of this is that the performance will decrease.
*   Make fallback with variable storage when it's not supported. 
    * Check if storage is supported. [Source](https://www.w3schools.com/html/html5_webstorage.asp)
    ```javascript
        if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
        } else {
            // Sorry! No Web Storage support..
        }
    ```