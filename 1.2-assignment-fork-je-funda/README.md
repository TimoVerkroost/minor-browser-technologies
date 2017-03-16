# Assignment 1.2 - Fork je Funda
List with possible improvements that can be used in my Funda app.

## Refactor tips

### Images
*   Most of the images will load Async with AJAX calls to the Funda API, so add first they will load after the HTML, CSS and JS is loaded. (there is a loading indicator)
*   Compress image sizes, think that the size of the images can be lesser by compressing them.
*   The ALT-tags aren't as good everywhere so these need an update.
*   The picture images that are loaded came from the Funda API, but even they have different sizes so I could use srcset to detain the image size based on the screen size.
    ```html
    <img src="http://cloud.funda.nl/377_groot.jpg" 
         sizes="50vw"
         srcset="http://cloud.funda.nl/377_klein.jpg  200w,
                 http://cloud.funda.nl/377_middel.jpg 400w,
                 http://cloud.funda.nl/377_groot.jpg  600w" >
    ```
*   Suggest Funda to also support webp images, this format is smaller the png or jpeg so it will load faster. We have to put this in a picture element because we need a fallback for browser that do not support webp.
    ```html
    <picture>
        <!-- Webp images -->
        <source type="image/webp" srcset="http://cloud.funda.nl/377_groot.webp" media="(min-width: 640px)">
        <source type="image/webp" srcset="http://cloud.funda.nl/377_middel.webp" media="(min-width: 320px)">
        <source type="image/webp" srcset="http://cloud.funda.nl/377_klein.webp">
        
        <!-- Fallback for not supported browsers -->
        <source srcset="http://cloud.funda.nl/377_groot.jpg" media="(min-width: 640px)">
        <source srcset="http://cloud.funda.nl/377_middel.jpg" media="(min-width: 320px)">
        <source srcset="http://cloud.funda.nl/377_klein.jpg">
    
        <!-- Fallback for srcset -->
        <img alt="Description of the image" src="http://cloud.funda.nl/377_groot.jpg">
    </picture>
    ```

### Custom fonts
*   The app is using 1 custom font that is loaded from the server it self.
*   The font already has a similar classification fallback font named Serif.
*   Serif is the fallback, and is widely supported.
    ```css
    @font-face {
        font-family: "Proxima Nova";
        src: 
            url('ProximaNova-Regular.woff')  format('woff'),
            url('ProximaNova-Regular.woff2') format('woff2')
        font-weight: 400;
        font-style: normal;
    }
    
    body {
        font-family: /* custom font */ "Proxima Nova", 
                    /* fallback font */ sans-serif;
    }
    ```
*   Did not use icon fonts, a good thing :)
*   For icons there are SVG added to the page.
    ![icon images](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/1.2-assignment-fork-je-funda/images/icons-example-svg.png "Icon images")
    ```css
    .icon-heart-white {
        background: url(../images/heart.svg) no-repeat;
    }
    
    .icon-light-white {
        background: url(../images/idea-light.svg) no-repeat;
    }
    ```

### Color
*   The page uses the colors that Funda also uses.
*   I downloaded the tool "Sim Daltonism", then placed the lens on my app. The conclusion is that de contrast of the colors are high enough to see the difference between teh elements.
    ![color blind image](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/1.2-assignment-fork-je-funda/images/colorblind-example.png "color blind image")
*   Also tested it with black and white for eReaders.
*   Although I think the orange color that Funda uses will harder visible with sunlight on the screen, because it's a light color, a darker color will do better in that situation.
*   On [WebAIM](http://webaim.org/) I checked the contrast ratio with the result **2.09:1**, this is to low if we have to believe [WCAG 2.0](http://www.w3.org/TR/WCAG20/) for AA we need a minimum of 4.5:1 and for AAA 7:1 ratio.
    *   The improvement we can do is make the orange color darker.
    
### JavaScript
*   The whole app relays on JavaScript, so when we have no JavaScript the app won't work
    *   The AJAX calls need JavaScript, when AJAX calls are impossible 95% of the content is empty only the menu and footer will appear.
    ![nojs image](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/1.2-assignment-fork-je-funda/images/nojs-example.png "nojs image")
*   Serverside I can redirect the user to a page that works without JavaScript, but even then the houses can't be loaded because we can't make an API call.
    * What we can do is give the user feedback that he or she can't search for houses right now but we can give them some default selected houses or other relevant content.

#### Cookies
*   No cookies where used.

#### LocalStorage
*   The app is build with data that is saved in LocalStorage for the performance.
    *   A part of the app has a fallback for localStorage where the data is stored in an object.
    ```js
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
    } else {
        // Fallback (can be object storage)
    }
    ```
    *   The app must have a refactor so it doesn't relay on localStorage, although we can use the enhance the app for a better experience.
![localStorage](https://github.com/TimoVerkroost/minor-browser-technologies/blob/master/1.2-assignment-fork-je-funda/images/localstorage-example.png "localStorage")

### Broadband internet

### Mouse/Trackpad won't work