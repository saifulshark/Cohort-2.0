100xDevsCohort - Revision - Upto Week 6.

1. In react, a component should only return a single root element because react needs a single entry point to render and manage the components output. 

2. Reconciliation involves the process of identifying the parts of the virtual DOM that is changed and updating those parts only in the actual Dom. 

3. Instead of wrapping a component elements with a div, we can use a feature in react called fragments <></> that allows you to wrap the elements without introducing an extra node in the real Dom. 

4. Object destructuring is a feature in JavaScript that allows you to extract value from an object and assign them to variable in a more concise and convenient way. This can make your code cleaner and more readible.
- const { firstName, lastName, age } = person;
- const { firstName, lastName, age, gender = 'Unknown' } = person;
- const { firstName: first, lastName: last } = person;
- const student = { name: 'Alice', details: { grade: 'A', age: 21 } };
  const { name, details: { grade, age } } = student; //nestedDestructuring

5. Re-rendering is the process of updating the components due to the changes in the states or props. In this react only updates the necessary part of the DOM

6. The rule of thump in react is that we should keep these re-renderings to a minimum for optimal performance.

7. Pushing the state down: It is a better practice to place the state management of a component at the lowest possible level. That means, if a child components states are managed by itself/inside of it, when a state change happens only that components will re-render, or if we place those in the parents then the parents and all the other components will too re-render.

8. 'React.memo' is a higher order component that memorize the rendered output of a component. It prevents a component from re-rendering if it's props haven't changed. It's useful for preventing the unnecessary renders of functional components that render the same output given the same props.
const MemoizedComponent = React.memo(MyComponent);

9. React.useMemo is a hook that memoizes the result of a function or computation and re-computes it only when one of its dependencies changes. It's useful for optimizing expensive calculations inside functional components.
const memoizedValue = React.useMemo(() => computeExpensiveValue(a, b), [a, b]);

Key Differences:
Purpose:
React.memo: Memoizes the rendered output of a component to prevent unnecessary renders.
React.useMemo: Memoizes the result of a function or computation to optimize performance.
Usage:
React.memo: Used as a higher-order component to wrap around a functional component.
React.useMemo: Used as a hook inside a functional component to memoize values or computations.
Dependencies:
React.memo: Automatically memoizes based on props.
React.useMemo: Requires an array of dependencies to specify when to re-compute the memoized value.

10. In React, when rendering a list of elements using the map function, it is crucial to assign a unique key prop to each element. The "key" is a special attribute that helps React identify which items have changed, been added, or been removed. This is essential for efficient updates and preventing unnecessary re-renders of the entire list.

11. In React, wrapper components are used to encapsulate and group common styling or thematic elements that need to be applied consistently across different parts of an application. These components act as containers for specific sections or functionalities, allowing for a clean and modular structure.

12. In react, there are 2 types of components. Class components and functional components.

13. 
In React, components form the UI's foundation, primarily divided into class-based and functional types.

Class-Based Components:
ES6 classes extending React.Component.
Utilize React lifecycle methods like componentDidMount.
Handle state and lifecycles internally.
Predominant before React 16.8 introduced hooks.

Functional Components:
Basic JavaScript functions taking props and returning React elements.
Post React 16.8, gained state and lifecycle management via hooks like useState.
Typically simpler to write and read.

Functional components, enhanced by hooks, are now the go-to in React for simplicity and added capabilities. Hooks like useState empower functional components, rivaling class-based ones. Class-based components persist, especially in older projects yet to adopt functional components or newer React versions.

14. React Hooks: Before react version 16.8 only class components had the state and life cycle features. React hooks enabled this on functional components making functional components can also use these state and lifecycle features without writing a class.

15. Using hooks developers can manage state, handle side effects, optimise performance, and create more reusable and readable functional component in react applications. (use***) 

16. useEffect is a react hook that can be used for performing tasks like data fetching, subscriptions, or manually changing the DOM etc. Has 2 arguments, code/Fn to execute and optional array of dependencies that decides when the effect should run.

17. The things, or operations, or behaviours that are outside of the react component rendering process are called as side effects. And hooks are the mechanisms in react to handle these side effects in functional components. Ex: useState, useEffect, useMemo, useCallback.

18. useState is a React Hook that enables functional components to manage state. It returns an array with two elements: the current state value and a function to update that value.

19. useMemo is a React Hook that is used to memoize the result of a computation, preventing unnecessary recalculations when the component re-renders. It takes a function (referred to as the "memoized function") and an array of dependencies. The memoized function will only be recomputed when the values in the dependencies array change.

20. useCallback is a React Hook that is used to memoize a callback function, preventing unnecessary re-creation of the callback on each render. This can be useful when passing callbacks to child components to ensure they don't trigger unnecessary renders.

21. - The `useEffect` hook in the `App` component sets up a 5-second interval that alternates the `render` state. This causes `MyComponent` to repeatedly appear and disappear, showcasing dynamic component behavior based on state updates.

<====================👆🏽==WEEK-6==👆🏽=========================>

22. Virtual DOM: React uses this for rendering/application improvements. It's a in memory light weight version of the actual DOM. When an update happens on the application the state change occurs and a new vDOM is created. then this vDOM gets compared with old vDOM to find the most optimal way of re-rendering.

23. When react determines the updates needed based on the virtual DOM diffing process it updates the real DOM with only the necessary changes. 

24. State: An object that represents the current state of the app. 

25. Components: The buliding block of react. 

26. Props: data that are passing from a parent component to it's child component is called props. Props in react are readonly. A child component cannot modify a probe that received from a parent component.

27. We can change the props, provide default values, pass fns as props, and destructuring is also supported.

<====================👆🏽==WEEK-5==👆🏽=========================>

## Classes vs IDs

**Classes:**

- **Definition:** Used to group multiple HTML elements together.
- **Syntax (HTML):** `<element class="class-name">Content</element>`
- **Syntax (CSS):** `.class-name { /* styles */ }`
- **Usage:** Can be shared by multiple elements; an element can have multiple classes.

**IDs:**

- **Definition:** Used to uniquely identify a specific HTML element.
- **Syntax (HTML):** `<element id="unique-id">Content</element>`
- **Syntax (CSS):** `#unique-id { /* styles */ }`
- **Usage:** Must be unique within a page; often used for styling or JavaScript interaction.

**Differences:**

- **Uniqueness:**
    - Classes can be shared; IDs must be unique within a page.
- **Application:**
    - Classes are for styling multiple elements.
    - IDs are for styling a specific element or targeting with JavaScript.

- `getElementById()` is specifically for selecting by ID.
- `getElementsByClassName()` selects by class name, but it returns a collection of elements.
- `querySelector()` is more flexible as it can select by any valid CSS selector and returns the first matching element.

<====================👆🏽==WEEK-5==👆🏽=========================>
<====================👆🏽==WEEK-4==👆🏽=========================>
