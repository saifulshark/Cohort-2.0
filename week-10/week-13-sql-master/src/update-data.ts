import { getClient } from "./utils";

async function updateTodo(todoId: number) {
    const client = await getClient();
    
    const updateTodoText = 'UPDATE todos SET title = $1 WHERE id = $2';
    await client.query(updateTodoText, ["Be a remote Web 3 Dev", todoId]);
    
    console.log(`Todo with ID ${todoId} updated to done!`);
}

const todoIdToUpdate = 2;
updateTodo(todoIdToUpdate);
