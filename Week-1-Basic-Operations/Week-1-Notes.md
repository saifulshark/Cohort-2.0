# Quick Notes about the CSS Flexbox

Flexbox (Flexible Box) is a layout model in CSS.

- `display: flex;` - Turns an element into a flex container.
- `flex-direction:` Defines the direction of the main axis (row, row-reverse, column, column-reverse).
- `justify-content:` Aligns items along the main axis (flex-start, flex-end, center, space-between, space-around).
- `align-items:` Aligns items along the cross axis (flex-start, flex-end, center, baseline, stretch).
- `align-self:` Overrides align-items for a specific item.
- `flex-wrap:` Defines whether items should wrap onto multiple lines (nowrap, wrap, wrap-reverse).
- `flex-flow:` Shorthand for flex-direction and flex-wrap.
- `order:` Specifies the order of a flex item.
- `flex-grow:` Defines the ability for a flex item to grow.
- `flex-shrink:` Defines the ability for a flex item to shrink.
- `flex-basis:` Specifies the initial size of a flex item.
- `flex:` Shorthand for flex-grow, flex-shrink, and flex-basis.

**Example:**
```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex-grow: 1;
  order: 2;
}
```

# Callback Functions in JavaScript

Callback functions in JavaScript are functions passed as arguments to another function and executed later. They're commonly used for asynchronous operations.

**Example:**
```javascript
function fetchData(url, callback) {
  // Simulating an asynchronous operation, like an API call
  setTimeout(() => {
    const data = { result: 'Some data' };
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log('Processed data:', data.result);
}

// Usage
fetchData('https://api.example.com/data', processData);
```

In this example, `processData` is a callback function passed to `fetchData`. It gets executed when the asynchronous operation inside `fetchData` completes. This way, callbacks enable handling operations that take time to finish.

# Static Functions in Class, JavaScript

In JavaScript, static functions in a class are associated with the class itself rather than instances of the class. They are defined using the `static` keyword.

**Example:**
```javascript
class Calculator {
  // Static method to add two numbers
  static add(x, y) {
    return x + y;
  }

  // Static method to multiply two numbers
  static multiply(x, y) {
    return x * y;
  }
}

// Using static methods without creating an instance
const sumResult = Calculator.add(5, 3);
const productResult = Calculator.multiply(4, 2);

console.log('Sum:', sumResult);         // Output: Sum: 8
console.log('Product:', productResult); // Output: Product: 8
```

In this example, `add` and `multiply` are static methods of the `Calculator` class. You can call these methods directly on the class without creating an instance. Static methods are useful for utility functions that don't require access to instance-specific data.

# Callback Functions in JavaScript

Callback functions in JavaScript are functions passed as arguments to another function and executed later. They're commonly used for asynchronous operations.

**Example:**
```javascript
function fetchData(url, callback) {
  // Simulating an asynchronous operation, like an API call
  setTimeout(() => {
    const data = { result: 'Some data' };
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log('Processed data:', data.result);
}

// Usage
fetchData('https://api.example.com/data', processData);
```

In this example, `processData` is a callback function passed to `fetchData`. It gets executed when the asynchronous operation inside `fetchData` completes. This way, callbacks enable handling operations that take time to finish.

# Static Functions in Class, JavaScript

In JavaScript, static functions in a class are associated with the class itself rather than instances of the class. They are defined using the `static` keyword.

**Example:**
```javascript
class Calculator {
  // Static method to add two numbers
  static add(x, y) {
    return x + y;
  }

  // Static method to multiply two numbers
  static multiply(x, y) {
    return x * y;
  }
}

// Using static methods without creating an instance
const sumResult = Calculator.add(5, 3);
const productResult = Calculator.multiply(4, 2);

console.log('Sum:', sumResult);         // Output: Sum: 8
console.log('Product:', productResult); // Output: Product: 8
```

In this example, `add` and `multiply` are static methods of the `Calculator` class. You can call these methods directly on the class without creating an instance. Static methods are useful for utility functions that don't require access to instance-specific data.

# Async Functions vs. Sync Functions in JavaScript with Examples

### Synchronous Function
```javascript
function syncFunction() {
  console.log('Sync function executed');
}
```

### Asynchronous Function Using Async/Await
```javascript
async function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Async function executed');
      resolve();
    }, 1000);
  });
}
```

### Using Synchronous Function
```javascript
syncFunction();
```

### Using Asynchronous Function
```javascript
asyncFunction().then(() => console.log('Async function resolved'));
```

In the above code, `syncFunction` runs synchronously, whereas `asyncFunction` is asynchronous and uses async/await with a Promise. Note the difference in how they are called and executed.

## What are Async Functions and Callback Functions in JavaScript, and What is the Difference Between Them?

### Async Function:
An async function is a function that implicitly returns a promise and enables asynchronous, non-blocking operations using the `await` keyword. They are defined with the `async` keyword.

**Example:**
```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
```

### Callback Function:
A callback function is a function passed as an argument to another function, to be executed at a later time, usually upon completion of an operation.

**Example:**
```javascript
function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data));
}
```

### Difference:
Async functions provide a modern approach to handle asynchronous operations with better readability due to promises and the `await` keyword. Callback functions are an older method, which can lead to less readable and harder-to-maintain code due to "callback hell" or "pyramid of doom". Each methodology offers a distinct approach to asynchronous programming in JavaScript.

## Promise in JavaScript

A promise is an object representing the eventual completion or failure of an asynchronous operation. It is used to handle asynchronous operations more easily and avoid callback hell.

**Example:**
```javascript
// Creating a simple promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  const success = true;

  if (success) {
    resolve('Operation successful');
  } else {
    reject('Operation failed');
  }
});

// Handling the promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

In this example, the `myPromise` object represents an asynchronous operation. If the operation is successful, `resolve` is called with the result; otherwise, `reject` is called with an error. The `then` method is used to handle the successful resolution, and the `catch` method is used to handle any errors. Promises simplify the syntax for working with asynchronous code.

## Promise in JavaScript (Non-Technical Explanation)

Imagine you order food from a restaurant. You make the order, and the restaurant gives you a promise—a note saying they received your order and will let you know when it's ready.

### Making the Promise:

- You tell the restaurant what you want (like making a promise).
- They give you a note (the promise) and say, "We got your order. We'll either bring you the food when it's ready or let you know if something goes wrong."

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Imagine placing an order here
  const success = true;

  if (success) {
    resolve('Your food is on the way!');
  } else {
    reject('Oops, something went wrong with your order.');
  }
});
```

### Waiting for the Promise:

Now, you can go on with other things (continue with your day) while waiting for the restaurant to fulfill their promise.

### Getting the Result:

When the food is ready, you get the result (either your food or an explanation if something went wrong).

```javascript
// Imagine waiting for your order here
myPromise
  .then(result => console.log(result)) // Success: Your food is on the way!
  .catch(error => console.error(error)); // Failure: Oops, something went wrong.
```

In essence, a promise is like a commitment. It lets you do other things while the restaurant (or any operation) works on your request, and once it's done, you get the result. If anything goes wrong, they inform you about the issue. Hope this helps in conveying the concept!

## Async/Await in JavaScript (Non-Technical Explanation)

Imagine you're in a coffee shop and order a coffee. Instead of waiting at the counter, you tell the barista, "I'll be at my table; let me know when the coffee is ready." Async/Await is like that – it lets you go on with other things until your awaited task is done.

### 1. Making an Async Request:

- You make your request (order coffee) and tell them to let you know when it's ready (async).
- You don't wait at the counter; you go back to your table and do other things.

```javascript
async function makeCoffee() {
  // Imagine ordering coffee here
  const coffee = await waitForCoffee();
  console.log(coffee); // Your coffee is ready!
}
```

### 2. Async Function:

- The `async` keyword tells the function to expect asynchronous operations inside.
- `await` is like saying, "Pause here until the awaited task is done."

```javascript
async function waitForCoffee() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Your coffee is ready!');
    }, 3000);
  });
}
```

### Technical Explanation with Code:

#### 1. Making an Async Request:

- You create an async function (`makeCoffee`) to handle your request.
- Inside, you use `await` to pause the function until the awaited task (`waitForCoffee`) is complete.

```javascript
async function makeCoffee() {
  const coffee = await waitForCoffee();
  console.log(coffee); // Your coffee is ready!
}
```

#### 2. Async Function:

- The `async` keyword is used to define a function that handles asynchronous operations.
- `waitForCoffee` returns a promise, and `await` pauses the function until the promise is resolved.

```javascript
async function waitForCoffee() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Your coffee is ready!');
    }, 3000);
  });
}
```

Async/Await makes asynchronous code look and behave more like synchronous code, making it easier to understand and manage. It's like telling the computer, "Pause here until this part is done, then continue."