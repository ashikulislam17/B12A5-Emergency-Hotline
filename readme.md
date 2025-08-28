1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 

getElementById:

      => Gets one element by its ID.
      => Returns just that one element.

getElementsByClassName:

      => Receives all the ones with the same class name.
      => Returns a list of elements.

querySelector:

      => Returns the first element that matches a given CSS selector.
      => Returns just one element.

querySelectorAll:

      => Returns all elements matched any CSS selectors.
      => Returns a list of elements.


2. How do you **create and insert a new element into the DOM**?

Answer: 

To make a new element in the DOM or in between:

=> Use document.createElement("tag") to create a new element.
=> Use parent.appendChild(newElement) with the newElement to add it to the page.


3. What is **Event Bubbling** and how does it work?

Answer: 

Event Bubbling is when an event happens on an element, and from there up to its parent, grandparent and to the top of the page.


4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: 

Event Delegation is a technique to listen for an event on many elements by listening for a single event on their parent.

It is useful for:

=> It is faster and more memory efficient.
=> This approach is shorter, easier to maintain, and requires less code to write and manage.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer:

=> Use preventDefault() to stop things such as a link opening a new page, or a form being submitted.
=> Stop the bubbling of this event; prevent any parent handlers from being notified. Use.stopPropagation() instead of returning false.