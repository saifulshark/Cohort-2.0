### Async functions, introduced in ES2017, provide a more readable and concise way to work with asynchronous operations compared to traditional callback functions. Here are a few coding problems that will help you understand async functions and promises in JavaScript:

### 1. Simple Async Function

**Problem Statement:**
Create an async function `fetchData` that simulates fetching data from a server. The function should return a promise that resolves with a string "Data fetched successfully."

**Template:**
```javascript
async function fetchData() {
    // Simulate fetching data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 1000);
    });
}

// Usage
fetchData().then(data => console.log(data));
```

### 2. Error Handling in Async Functions

**Problem Statement:**
Modify the `fetchData` function to include error handling. If an error occurs while fetching data, the promise should be rejected with an error message.

**Template:**
```javascript
async function fetchData() {
    // Simulate fetching data with error handling
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate an error
            const error = true;
            if (error) {
                reject("Error fetching data.");
            } else {
                resolve("Data fetched successfully.");
            }
        }, 1000);
    });
}

// Usage
fetchData().then(data => console.log(data)).catch(error => console.error(error));
```

### 3. Using `await` with Async Functions

**Problem Statement:**
Create a function `processData` that uses the `await` keyword to wait for the `fetchData` function to complete before processing the data.

**Template:**
```javascript
async function processData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// Usage
processData();
```

### 4. Chaining Async Functions

**Problem Statement:**
Create two async functions, `fetchData` and `processData`. The `fetchData` function should fetch data from a server, and the `processData` function should process this data. Use the `await` keyword to ensure that `processData` waits for `fetchData` to complete before processing the data.

**Template:**
```javascript
async function fetchData() {
    // Implementation
}

async function processData() {
    try {
        const data = await fetchData();
        // Process data
    } catch (error) {
        console.error(error);
    }
}

// Usage
processData();
```

### 5. Parallel Execution of Async Functions

**Problem Statement:**
Create two async functions, `fetchData1` and `fetchData2`, that fetch data from two different servers. Use `Promise.all` to execute these functions in parallel and wait for both to complete.

**Template:**
```javascript
async function fetchData1() {
    // Implementation
}

async function fetchData2() {
    // Implementation
}

async function fetchAllData() {
    try {
        const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
        console.log(data1, data2);
    } catch (error) {
        console.error(error);
    }
}

// Usage
fetchAllData();
```

These problems will help you understand how to use async functions, promises, and the `await` keyword to handle asynchronous operations in JavaScript, including error handling, chaining, and parallel execution.