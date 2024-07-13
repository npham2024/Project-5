# Project-5
 All Project 5 Assignments (Module 10 in Zybooks)
## 9.18 LAB: User registration form (JavaScript)
First I made sure to get each element and their input values. The trickest part about this  assignment was the validiations that were needed to put into place. I used `.test` when using regex to test the inputs against the desired constraints. Storuing each type of error before displaying them when the user clicks on the submit button. Then removing the class `hide` if there were any errors in order to display the errors. If there weren't any in the array take I needed to add the class to not show anything.  

### Takeaways
-  Used the `.test()` method when dealing with regex
- Used the `forEach` method when iterating through the array. 
- Validations are important and take lots of testing to make sure they are corrcetly in place. 

## 9.19 LAB: Super heroes and villains (JavaScript)
Object oriented programming making classes and using inhiertance to make child and parent classes than extend. Overall straight forward did not have problem with this one. 

## Takeaways
- Classes in Javascript
- Extending classes to make use of a parent class constructor. 

## 9.20 LAB: Grocery list (JavaScript)
Straight forward with this project. Accessed the local storage which we got back as a string. Used the `split('')` method to display as an array. When saving the list saved as a string.

### Takeaways
- Can effectivly access local storage. 
- local storage stores key and value pairs indefinitely
- session stoarge stores key and vallue pairs which disappear when the browser is closed. 

## 10.10 LAB: Currency Conversion (jQuery)
- This was difficult possibly because it was the first project right after the activities. A lot of it was syntax difficulties. Starting off I ran into the problem of `for ... of` vs `for ... in` when trying to find names for the currency abbervations. `of` is more used for arrays while `for... in` is used for objects which returns the keys of the object. Also `val()` and `text()` helped me learn that `val()` is used for input usually and `text()` returns the text of an element when updating the results. 

### Takeaways
- Practiced event listeners `.on` and the different kinds of events that trigger them. 
- `append` elements onto other elements. 
- Overall saw the similarities of using regular javascript and jquery. 

## 10.11 LAB: Quote web API (jQuery)
- This is similar to the activity we did in Project 4. It was straight forward. I did run into a little confusion when I tried to put `let html = "<ol>"` inside of my done function. It would claim that it was not being called. I had to throw it outside of the ajax call. I was able to show the error message in this project. 

### Takeaways
- Practive using Ajax to make XMLHttpRequest
- These calls don't require nesting text/parameters inside of the url

## 10.12: LAB: To-do list (jQuery)
- This project was fairly straight forward. However I did struggle when with the `.eq` function for the list of elements. At first I was trying to use `[index]` but that did not work. It is used more for javascript arrays not jquery objects. 

### Takeaways
- Used `detach()`
- Used `insertAfter` and `insertBefore`
- I didn't write the code but I didn't know about the `this.parentElement` to find the index of the current node's parent. 

## 10.13: LAB: Memory game (jQuery)
- This was hard. Got to experiment a lot with animations and timing. I used another parameter with the `slideUp` function. Instead of using `queue` used the callback function to make it slide up and down without it immediately doing so. Didn't understand why the instructions wanted to `$game.hide()` as the very first step. Removed it to make testing the game possible. At the end I see why.

### Takeaways
- Using animitions on elements/ jquery objects
- Set timers 
- chaining animations and other functions to elements. 