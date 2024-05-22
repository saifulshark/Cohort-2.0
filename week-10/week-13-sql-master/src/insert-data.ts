import { getClient } from "./utils";

async function createUser(username: string, email: string, password: string) {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id';
    const userValues = [username, email, password];

    try{
        let response = await client.query(insertUserText, userValues);
        console.log('Insertion success:', response);
    }
    catch (err) {
        console.error('Error during the insertion:', err);
    }
    finally{
        await client.end(); // Close the client connection
    }
}

async function createEntries(title: string, description: string, user_id: number, done: boolean) {
    const client = await getClient();
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = [title, description, user_id, done];

    try{
        let response = await client.query(insertTodoText, todoValues);
        console.log('Todo Added: ', response);
    }
    catch (err) {
        console.error('Error during TODO insertion:', err);
    }
    finally{
        await client.end(); // Close the client connection
    }
}

createUser('username5', 'user5@example.com', 'user_password').catch(console.error);
createEntries('Be a Web 3 Dev', 'Ethereum & solidity', 1, false).catch(console.error);