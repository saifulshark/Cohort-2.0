import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    
    const query = {
        text: 'INSERT INTO users(username, password, name) VALUES($1, $2, $3)',
        values: [username, password, name],
      }
    await client.query(query)
    //console.log("Response: ",res)

    return {
        username: username,
        password: password,
        name: name
    }

}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {

    const query = {
        text: 'SELECT username, password, name FROM users WHERE id = $1',
        values: [userId],
        rowMode: 'array'
      }
    
    const res = await client.query(query)
    return {
        id: userId,
        username: res.rows[0][0],
        password: res.rows[0][1],
        name: res.rows[0][2],
    }
    
}
