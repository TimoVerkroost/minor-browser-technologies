# Final Assignment
**Use case:** I want to save my favorite t-shirts with nerdy-texts, and the next time I visit the website I want to see my saved items.

## Description feature
The user visit the website where he/she can assemble a t-shirt with some "nerdy" text. But when the user leaves the website and came back again the saved text must be recovered, so the user won't have to fill in the text fields again.

## Accessibility
The user can use tab to go through the website and tested it with a screen reader. Used the HTML5 validator to validate my HTML code with the result of no errors.

## Browser support
If the browser can read HTML the feature will work, the newer the browser is the more of the shiny things will be supported.

### Tested on devices / browsers

| **Device**              | **Browser / OS**     | 
| ----------------------- |:--------------------:|
| Apple iPod              | deviceLAB  |
| Apple iPad              | deviceLAB  | 
| Microsoft Surface       | deviceLAB  |
| Google Nexus            | deviceLAB  |  
| Kindle                  | deviceLAB  |
| Nokia Windows Phone     | deviceLAB  |
| VirtualBox              | IE8     / Windows 7  |
| VirtualBox              | IE9     / Windows 7  |
| VirtualBox              | IE10    / Windows 7  |
| VirtualBox              | IE11    / Windows 7  |
| iPhone 5s               | Safari  / iOS 10.3   |
| MacBook                 | Safari  / macOS 10.12.3 |
| MacBook                 | Chrome 57  / macOS 10.12.3 |
| MacBook                 | Opera 43  / macOS 10.12.3 |
| MacBook                 | FireFox 52  / macOS 10.12.3 |

## Structure
The base of my application is server-side where some variables are saved that makes us less dependent of the user it's browser. To do this I used: NodeJS with an Express server + Handlebars templating. This will serve a static HTML page but I can handle some input server-side so I can make it more personal for the user.

### HTML
First I started with the plain HTML, I did this with a basic form tag and some input fields. Those input fields will be saved on the server so we don't need any javascript to store the data client-side. With this form the user can add his/her name and 1-3 "Nerdy" texts to save or to create a shirt, the name and minimal 1 "Nerdy" text is required to pass the form (client-side validation).
  
  When the user decide to create the shirt he/she can choice between some sizes and also that input will be displayed as feedback to the user.
  
#### Not supported
* None

### CSS
To make the HTML more shiny I styled the page with CSS. With this I can make the UX for the user better. Of course the HTML is the foundation of the page so the user can use the page without the CSS but it's less shiny. I tried to make the CSS cross browser so it works also in the older browser like IE8. Unfortunately not everything works in the older browser. But the most essential styling works.

#### Not supported
* Transitions - IE8, IE9, IE10.
* Appearance - All IE versions, Firefox.
* Box-shadow - IE8
* @supports - All IE versions.
* @media CSS3 Media Queries - IE8.

### JavaScript
Use of LocalStorage to store data of the user that isn't needed to succesfully go through the website, only to make the UX better so the user doesn't have to fill in all the values all over again.

If the user fills in the text field for the shirt text, the text on the shirt will change in what the user added. This is live so change are directly visible. Another live change is when the user changes his size the shirt will scale (smaller size = smaller shirt, bigger size = bigger shirt).

**Note:** HTML5Shiv is added for HTML5 support in older browsers. This is a JavaScript file.

#### Not supported
* addEventListener - IE8.

## Screenshots
### Without CSS
![Without CSS](https://github.com/TimoVerkroost/minor-browser-technologies/tree/master/final-assignment/repo-images/without-css.png "Without CSS")

### With CSS
![With CSS](https://github.com/TimoVerkroost/minor-browser-technologies/tree/master/final-assignment/repo-images/with-css.png "With CSS")

## Sources
* [Canisuse](http://caniuse.com/#search=web%20storage)
* [Whatwg](https://html.spec.whatwg.org/multipage/webstorage.html#webstorage)

## Licence
MIT © Timo Verkroost