# Shopping Cart Application
This is a mock shop website with cart item tracking made with React for The Odin Project course. The goal was to use React Testing Library and advanced React concepts to use test-driven development and better code modularity in React.

[Try it here!](https://shopping-cart-beta-tan-59.vercel.app/)

## Learning Goals
* React Testing: Use React Testing Library to test UI and DOM elements
* Isolated Unit Testing: Use mocks on child components, data, and functions to isolate tests
* Client-side Routing: Use React Router to implement client-side routing
* Upgrade Fetching Data in React: Use custom hooks and error handling to abstract and improve data fetching

## Highlight Problem: Keeping buy count update functions DRY
### Data Structure Choice
* Situation: Each shop item should have its own buy count data.
* Problem: Creating separate states = repetitive code.
* Consider: In the future, some items will be removed, added, and shifted around, so relying on array index as an ID is not the best.
* Solution: Create a dictionary of item buy counts with keys as the item ids.
### Higher-order Functions to Limit Repetition
* Situation: The ItemCard and CartItem components needs a function that updates the buy count for a specific item, taking only the new value as input.
* Problem: Creating separate functions = repetitive code.
* Consider: Learned from [PL:A Course](https://www.coursera.org/learn/programming-languages#modules): Higher-ordered functions lets me return a function, and partial application on curried functions lets me return a function with some arguments fixed.
* Solution: Create a single, general curried function. Then partially apply the id to pass a customized function to each of 40 components.

## Attribution
Forest background photo by <a href="https://unsplash.com/@paulius005?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paulius Dragunas</a> on <a href="https://unsplash.com/photos/time-lapse-photography-of-multi-step-waterfalls-cIxcxnwsnoI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Odin logo by [The Odin Project](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form)
      
      

## Personal Takeaways
* Correctly pass functions with parameters to props and attributes using anonymous functions ()=>func(...)
* Querying by role in React testing uses the accessible tag (eg: "paragraph", not "p")
* User event simulations should be async code
* There are pros and cons to storing data as an array vs object in the context or in the return of a custom hook
* Example of complex css selector >*:not(header) = any immediate child element that is not header
* MemoryRouter is a great way to test components using react-router-dom
