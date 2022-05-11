# ccc
# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## Overview

### The challenge

Users should be able to generate advice by clicking the dice. 

### Links

- Solution URL: https://github.com/ToniHunter274/Advice-generator-API.git
- Live Site URL: [Add live site URL here]

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- JSON
- Advice API

### What I learned

On the course of re-creating this project, I learnt how to use semantic HTML and also how to integrate an API into a webpage. 



```html
<main></main>
```
```css
.getDice {
  position: absolute;
  inset: calc(100% - 2.7rem) calc(50% - 2.6rem);
  cursor: pointer;
}
```
```js
const url = 'https://api.adviceslip.com/advice';


// Get Random
const getAdvice = async () => {
  get('spin').style.display = 'inline-block';
  try {
    const res = await fetch(url);
    const data = await res.json(); 
    return data;
  } catch (err) {
    console.log(err);
  }
}
```

### Continued development

I would continue to work on my HTML,CSS and Javascript..To get better at the Semantic HTML and also how how to use some of the css code properly such as inset, calc() and so on.

### Useful resources

- James Bretz-Auddity.

## Author

- Website - [Oluwatoni Odetola]
- Frontend Mentor - [@ToniHunter274]
- Twitter - [@Mide_022]

## Acknowledgments

I would like to acknownlegde James Bretz(Auddity), his solution helped me in solving my problems,very easy to understand and instructional.
