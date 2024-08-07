import { getClient } from "../index";
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
    const client = await getClient();
    // console.log(client);
    const createTodoQuery = `INSERT INTO todos (user_Id, title, description) VALUES ($1, $2, $3) RETURNING id,title,description,done`;
    const res = await client.query(createTodoQuery,[userId, title, description]);
    // console.log(res);
    return res.rows[0];
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
    const client = await getClient();
    const updateTodoQuery = `UPDATE todos SET done = $1 WHERE id = $2 RETURNING *`;
    const res = await client.query(updateTodoQuery, [true,todoId])
    console.log(res);
    return res.rows[0];
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
    const client = await getClient();
    const getTodosQuery = `SELECT * FROM todos where user_id = $1`;
    const res = await client.query(getTodosQuery,[userId]);
    return res.rows;

}