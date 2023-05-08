# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Age calculator app solution](#frontend-mentor---age-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

Finished project on a 1440px screen
![Finished project on 1440px](solution/PC%20solution.png)

Finished project on a 375px screen
<br />
![Finished project on 375px](solution/Phone%20solution.png)

### Links

- Solution URL: [solution on my frontend mentor profile](https://www.frontendmentor.io/profile/zsoltvarju)
- Live Site URL: [live site on netlify](https://singular-piroshki-ca5a01.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla JavaScript
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

This is my first Junior challenge, and I must say that I found it to be more complex than I anticipated. I dedicated three days to this project and encountered several obstacles that required extensive research. However, I am pleased with the outcome, although I acknowledge that further improvements can be made.

During the polishing phase of the project, I encountered two primary issues. Firstly, I encountered difficulty with the animation. Although I used a translate transform to create an animation that appears from the side and falls into place, I experienced difficulties with the text next to the animation constantly jumping as the numbers transitioned from one digit to two digits. While I am aware that setting an exact width may have resolved the issue, doing so would have conflicted with the project's design. As a possible solution, I considered developing a secondary animation that would allow the text to fall into their corresponding positions after the number animation completes. However, I remain uncertain about this approach.

Secondly, I encountered challenges when designing the project for larger screen sizes. Although I began designing the project with mobile devices in mind, I attempted to set the container's maximum width and its child's width to 100%. Unfortunately, this approach did not work as intended, and I am uncertain as to why. Despite these issues, I intend to proceed to the next project and revisit this one later to address these concerns.

I would appreciate any assistance with these issues and look forward to resolving them in the future.



### Continued development

I intend to make further additions to this project as I believe it is not complete, and I am not satisfied with the outcome.


### Useful resources

- Kevin Powell's  [blog](https://www.kevinpowell.co/) I highly recommend his channel to anyone who wants to learn web development.
- Josh Comeau's [blog](https://www.joshwcomeau.com/) I also recommend his channel to anyone who wants to learn web development.
- Dave Gray's [blog](https://daveceddia.com/) I also recommend his channel to anyone who wants to learn web development.
- [MDN](https://developer.mozilla.org/en-US/) I think this is the best place to look up things.

Some pages i wish i could find earlier:
- [CSS Tricks](https://css-tricks.com/)
- [CSS Cheat Sheet](https://htmlcheatsheet.com/css/)
- [HTML Cheat Sheet](https://htmlcheatsheet.com/)
- [JS Cheat Sheet](https://htmlcheatsheet.com/js/)
- [CSS Grid Cheat Sheet](https://grid.malven.co/)
- [Flexbox Cheat Sheet](https://flexbox.malven.co/)


## Author

- Frontend Mentor - [@zsoltvarju](https://www.frontendmentor.io/profile/zsoltvarju)


