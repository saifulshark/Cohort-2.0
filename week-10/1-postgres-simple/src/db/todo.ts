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
    const createTodoQuery = `INSERT INTO TODOS(user_id, title, description) VALUES ($1, $2, $3) RETURNING *`;
    const todo = await client.query(createTodoQuery, [userId, title, description]);
    return todo.rows[0];
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
    const updateTodoQuery = `UPDATE TODOS SET done = TRUE WHERE id = $1 RETURNING *`;
    const todo = await client.query(updateTodoQuery, [todoId]);
    return todo.rows[0];
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
    const getTodosQuery = `SELECT * FROM TODOS WHERE user_id = $1`;
    const todos = await client.query(getTodosQuery, [userId]);
    return todos.rows;
}