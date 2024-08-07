Array destructuring and object destructuring are powerful features in JavaScript that allow you to extract data from arrays and objects respectively in a concise and readable way.

### Array Destructuring:
Array destructuring allows you to unpack values from arrays into distinct variables. Here's how it works:

```javascript
// Example 1: Basic array destructuring
const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
console.log(e); // Output: 5

// Example 2: Skipping elements
const [first, , third] = numbers;
console.log(first); // Output: 1
console.log(third); // Output: 3

// Example 3: Default values
const [x, y, z, w, v, u = 0] = numbers;
console.log(u); // Output: 0
```

### Object Destructuring:
Object destructuring allows you to extract properties from objects and bind them to variables with the same name. Here's how it works:

```javascript
// Example 1: Basic object destructuring
const person = { name: 'John', age: 30, country: 'USA' };
const { name, age, country } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(country); // Output: USA

// Example 2: Renaming variables
const { name: personName, age: personAge } = person;
console.log(personName); // Output: John
console.log(personAge); // Output: 30

// Example 3: Default values
const { name: userName, age: userAge, isAdmin = false } = person;
console.log(userName); // Output: John
console.log(userAge); // Output: 30
console.log(isAdmin); // Output: false
```

### Nested Destructuring:
You can also perform nested destructuring for arrays and objects:

```javascript
// Nested array destructuring
const nestedArray = [1, [2, 3], 4];
const [x, [y, z], w] = nestedArray;
console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3
console.log(w); // Output: 4

// Nested object destructuring
const nestedObject = { a: { b: 1, c: 2 }, d: 3 };
const { a: { b, c }, d } = nestedObject;
console.log(b); // Output: 1
console.log(c); // Output: 2
console.log(d); // Output: 3
```

Array and object destructuring can significantly improve code readability and make working with complex data structures much more straightforward and concise.