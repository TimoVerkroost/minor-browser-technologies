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
                 http://cloud.funda.nl/377_groot.jpg  600w"
    >
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

### Color

### JavaScript

#### Cookies

#### LocalStorage

### Broadband internet

### Mouse/Trackpad won't work