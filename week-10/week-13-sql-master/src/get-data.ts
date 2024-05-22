import { getClient } from "./utils";

async function getUsers() {
    const client = await getClient();
    
    const selectUsersText = 'SELECT * FROM users';
    const userRes = await client.query(selectUsersText);
    
    console.log("Users:");
    for (let user of userRes.rows) {
        console.log(`ID: ${user.id}, Email: ${user.email}`);
    }
}

async function getUserFromEmail(email: string) {
    let client;
    try{
        client = await getClient();
        const selectUserText = 'SELECT * FROM users WHERE email = $1';
        const userRes = await client.query(selectUserText, [email]);
        
        if (userRes.rows.length > 0) {
            console.log('User found:', userRes.rows[0]); // Output user data
            return userRes.rows[0]; // Return the user data
          } else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
          }
    } catch (error){
        console.error('Error during fetching user:', error);
        throw error; // Rethrow or handle error appropriately
    }
    finally{
        if(client){
            await client.end(); // Close the client connection
        }
    }  
}

async function getTodosForUser(userId: number) {
    const client = await getClient();
    
    const selectTodosText = 'SELECT * FROM todos WHERE user_id = $1';
    const todoRes = await client.query(selectTodosText, [userId]);
    
    console.log(`Todos for User ID ${userId}:`);
    for (let todo of todoRes.rows) {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Description: ${todo.description}, Done: ${todo.done}`);
    }
}

getUsers();

getUserFromEmail("john.do11e@gmail2.com")

const userIdToFetch = 2;
getTodosForUser(userIdToFetch);