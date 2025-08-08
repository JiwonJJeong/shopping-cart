# Shopping Cart Application

## Learning Goals
* React Testing: Use React Testing Library to test UI and DOM elements
* Client-side Routing: Use React Router to implement client-side routing
* Upgrade Fetching Data in React: Use custom hooks and error handling to abstract and improve data fetching

## Highlight Problem: Keeping buy count update functions DRY
### Data Structure Choice
* Situation: Each shop item should have its own buy count data.
* Problem: Creating separate states = repetitive code.
* Consider: In the future, my items might be selected or randomized, so relying on array index as an ID is not the best.
* Solution: Create a dictionary of item buy counts with keys as the item ids.
### Higher-order Functions to Limit Repetition
* Situation: The ItemCard and CartItem components needs a function that updates the buy count for a specific item, taking only the new value as input.
* Problem: Creating separate functions = repetitive code.
* Consider: Learned from PL:A(https://www.coursera.org/learn/programming-languages#modules): Higher-ordered functions lets me return a function, and partial application on curried functions lets me return a function with some arguments fixed.
* Solution: Create a single, general curried function. Then partially apply the id to pass a customized function to each of 40 components.

## Personal Takeaways
* Correctly pass functions with parameters to props and attributes using anonymous functions ()=>func(...)
* Querying by role in React testing uses the accessible tag (eg: "paragraph", not "p")
* User event simulations should be async code