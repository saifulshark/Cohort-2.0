import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try {
        const text = 'INSERT INTO todos (userId, title, description) VALUES ($1, $2, $3) RETURNING *'
        const values = [userId, title, description]
        const res = await client.query(text, values)
        if(res.rows[0]) {
            return res.rows[0]
        }
    }
    catch (err) {
        console.log("Error while insertation todo:", err)
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        const text = `UPDATE todos SET done = true WHERE todoId = $1 RETURNING *`
        const values = [todoId]
        const res = await client.query(text, values)
        if(res.rows[0]) {
            return res.rows[0]
        }
    }
    catch (err) {
        console.log("Error while updating todo:", err)
    }
}
/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try {
        const text = "SELECT * FROM todos WHERE userId = $1"
        const values = [userId]

        const res = await client.query(text, values)
        return res.rows
    }
    catch (err) {
        console.log("Invalid query:", err)
    }
}