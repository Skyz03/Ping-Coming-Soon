# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

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


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
This was a great challenge where I designed the layout as given in the file for client side validation plus added a form validation for inputs email. 

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot
![image](https://user-images.githubusercontent.com/42742924/129372074-bce11622-eeb9-497c-9b5f-a22e4e797689.png)
![image](https://user-images.githubusercontent.com/42742924/129372564-3e410823-17f1-47ff-b22f-187639a6f767.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
My process involved simple design of the layout first and added bits of JS code to continue with Email validation.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaSript (Client-side Form Validation)

### What I learned
This was one of the quick challange where I got a quick grasp of how JS works in the Website, like JS DOM communication with HTML which relates with CSS files and gets activated once the JS codes runs.

To see how you can add code snippets, see below:4

```css
#error {
  color: #dd6e6e;
  font-size: 0.8rem;
  position: absolute;
  top: 3.5rem;
  left: 1rem;
  font-style: italic;
}

```
```js
const email = document.getElementById("email")


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
        document.getElementById("error").innerHTML = "Please provide a valid email address";
    } else {
        document.getElementById("error").innerHTML = "";
    }
}
```


### Continued development
Regex can be implemented to make the email validation more accurate. 

### Useful resources
- Client Side form validation MDN Docs

## Author

- Website - Skyz03
