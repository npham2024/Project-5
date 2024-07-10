# Project-5
 All Project 5 Assignments (Module 10 in Zybooks)

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