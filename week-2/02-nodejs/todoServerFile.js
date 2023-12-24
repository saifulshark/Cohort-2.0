const express = require('express')
const fs = require('fs')
const port = 3000
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/todos', (req, res)=>{
    fs.readFile('todos.json',"utf-8", (err, data)=>{
        if(err) throw err
        res.json(JSON.parse(data))
    })
})

app.get('/todos/:id', (req, res)=>{
    fs.readFile('todos.json', "utf-8", (err, data)=>{
        if (err){
            return res.status(404).send()
        }
        const id = parseInt(req.params.id)
        const todos = JSON.parse(data)
        const index = todos.findIndex(todo => todo.id===id)
        if(index===-1){
            res.status(404).send()
        }
        else{
            res.json(todos[index])
        }
    })
})

function jsonReadFile(){
    return new Promise(resolve=>{
        fs.readFile('todos.json', 'utf-8', (err, data)=>{
            if(err) throw err
            resolve(data)
        })
    })
}

function jsonWriteFile(todos){
    return new Promise(resolve =>{
        const transFormedData = JSON.stringify(todos)
        fs.writeFile('todos.json', transFormedData, (err)=>{
            if(err) throw err
            resolve(transFormedData)
        })
    })
}

async function postOperation(req, res){
    const value = await jsonReadFile()
    const todos = JSON.parse(value)
    const newTodo = {
        id: Math.floor(Math.random()*1000000),
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description
    }
    todos.push(newTodo)
    await jsonWriteFile(todos)
}

app.post('/todos', (req, res)=>{
    postOperation(req, res).then(()=>{
        res.status(201).send()
    })
})

async function operation(req, res, putOrDelete){
    const value = await jsonReadFile()
    const todos = JSON.parse(value)
    const index = todos.findIndex(todo => todo.id === parseInt(req.params.id))
    if(index ===-1){
        res.status(404).send()
    }
    else{
        putOrDelete(todos, index)
        await jsonWriteFile(todos)
        res.status(200).send()
    }
}

app.put('/todos/:id', (req, res)=>{
    operation(req, res, (todos, index)=>{
        todos[index].title = req.body.title
        todos[index].completed = req.body.completed
    })
})

app.delete('/todos/:id', (req, res)=>{
    operation(req, res,(todos, index)=>{
        todos.splice(index,1)
    })
})

app.use((req, res)=>{
    res.status(404).send()
})

app.listen(port, ()=>{
    console.log(`App is listening to the port ${port}`)
})

