const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Function to read todos from the file
const readTodos = (callback) => {
    fs.readFile('./todos.json', 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            try {
                const todos = JSON.parse(data);
                callback(null, todos);
            } catch (e) {
                callback(e, null);
            }
        }
    });
};

// Function to write todos to the file
const writeTodos = (todos, callback) => {
    fs.writeFile('./todos.json', JSON.stringify(todos, null, 2), (err) => {
        callback(err);
    });
};

// GET /todos - Retrieve all todo items
app.get('/todos', (req, res) => {
    readTodos((err, todos) => {
        if (err) {
            res.status(500).send();
            return;
        }
        res.json(todos);
    });
});

// GET /todos/:id - Retrieve a specific todo item by ID
app.get('/todos/:id', (req, res) => {
    readTodos((err, todos) => {
        if (err) {
            res.status(500).send();
            return;
        }
        const todo = todos.find(t => t.id === parseInt(req.params.id));
        if (!todo) {
            res.status(404).send();
            return;
        }
        res.json(todo);
    });
});

// POST /todos - Create a new todo item
app.post('/todos', (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        description: req.body.description
    };
    readTodos((err, todos) => {
        if (err) {
            res.status(500).send();
            return;
        }
        todos.push(newTodo);
        writeTodos(todos, (err) => {
            if (err) {
                res.status(500).send();
                return;
            }
            res.status(201).json(newTodo);
        });
    });
});

// PUT /todos/:id - Update an existing todo item by ID
app.put('/todos/:id', (req, res) => {
    readTodos((err, todos) => {
        if (err) {
            res.status(500).send();
            return;
        }
        const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
        if (todoIndex === -1) {
            res.status(404).send();
            return;
        }
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description = req.body.description;
        writeTodos(todos, (err) => {
            if (err) {
                res.status(500).send();
                return;
            }
            res.json(todos[todoIndex]);
        });
    });
});

// DELETE /todos/:id - Delete a todo item by ID
app.delete('/todos/:id', (req, res) => {
    readTodos((err, todos) => {
        if (err) {
            res.status(500).send();
            return;
        }
        const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
        if (todoIndex === -1) {
            res.status(404).send();
            return;
        }
        todos.splice(todoIndex, 1);
        writeTodos(todos, (err) => {
            if (err) {
                res.status(500).send();
                return;
            }
            res.status(200).send();
        });
    });
});

// Handle undefined routes
app.all('*', (req, res) => {
    res.status(404).send();
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = app;
