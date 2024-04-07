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
    const query = {
        text: 'INSERT INTO todos(title, description, done, user_id) VALUES($1, $2, $3, $4)',
        values: [title, description, false, userId],
      }
    await client.query(query)
    //console.log("Response: ",res)

    return {
        title,
        description,
        done: false,
        id: userId
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
    const updateQuery = {
        text: 'UPDATE todos SET done = true where id = $1',
        values: [todoId],
    }
    await client.query(updateQuery)
    const getQuery = {
        text: 'SELECT title, description, done, user_id from todos where id = $1',
        values: [todoId],
        rowMode: 'array'
    }
    const res = await client.query(getQuery)
    //console.log(res)
    return {
        title: res.rows[0][0],
        description: res.rows[0][1],
        done: res.rows[0][2],
        id: res.rows[0][3]
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
    const getQuery = {
        text: 'SELECT title, description, done, user_id from todos where user_id = $1',
        values: [userId],
        rowMode: 'array'
    }
    const res = await client.query(getQuery)
    console.log(res)

    return [{
        user_id: userId,
        title: res.rows[0][0],
        description: res.rows[0][1],
        done: res.rows[0][2],
        id: res.rows[0][3]
    }]
}