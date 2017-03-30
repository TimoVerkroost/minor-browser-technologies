# Final Assignment
**Use case:** I want to save my favorite t-shirts with nerdy-texts, and the next time I visit the website I want to see my saved items.

## Description feature
The user visit the website where he/she can assemble a t-shirt with some "nerdy" text. But when the user leaves the website and came back again the saved text must be recovered, so the user won't have to fill in the text fields again.

## Browser support

## Accessibility issues

## Structure
The base of my application is server-side where some variables are saved that makes us less dependent of the user it's browser. To do this I used: NodeJS with an Express server + Handlebars templating. This will serve a static HTML page but I can handle some input server-side so I can make it more personal for the user.

### HTML
First I started with the plain HTML, I did this with a basic form tag and some input fields. Those input fields will be saved on the server so we don't need any javascript to store the data client-side. With this form the user can add his/her name and 1-3 "Nerdy" texts to save or to create a shirt, the name and minimal 1 "Nerdy" text is required to pass the form (client-side validation).
  
  When the user decide to create the shirt he/she can choice between some sizes and also that input will be displayed as feedback to the user.

### CSS
To make the HTML more shiny I styled the page with CSS. With this I can make the UX for the user better. Of course the HTML is the foundation of the page so the user can use the page without the CSS but it's less shiny. I tried to make the CSS cross browser so it works also in the older browser like IE8. Unfortunately not everything works in the older browser. But the most essential styling works.

### JavaScript

## Tested on devices / browsers
* Apple iPod - deviceLAB
* Apple iPad - deviceLAB
* Microsoft Surface - deviceLAB
* Google Nexus - deviceLAB
* Samsung Galaxy - deviceLAB
* Kindle - deviceLAB
* Nokia Windows Phone - deviceLAB
* IE8 Windows 7 - VirtualBox
* IE9 Windows 7 - VirtualBox
* IE10 Windows 7 - VirtualBox
* IE11 Windows 7 - VirtualBox
* Safari iOS 10.3
* Safari macOS 10.12.3
* Goolge Chrome 57 on macOS 10.12.3
* Opera 43 on macOS 10.12.3
* FireFox 52 on macOS 10.12.3

## Sources
* [Canisuse](http://caniuse.com/#search=web%20storage)
* [Whatwg](https://html.spec.whatwg.org/multipage/webstorage.html#webstorage)