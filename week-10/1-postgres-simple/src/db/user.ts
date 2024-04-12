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
    try{
        const text = 'INSERT INTO users(username, password, name) VALUES($1, $2, $3) RETURNING *'
        const values = [username, password, name]

        const res = await client.query(text,values)
        if(res.rows[0]) {
            return res.rows[0]
        }
    }
    catch(e) {
        console.log("Insertation is not success:", e)
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
    try {
        const text = 'SELECT * FROM users WHERE userId = $1 RETURNING *'
        const values = [userId]

        const res = await client.query(text, values)
        if(res.rows[0]) {
            return res.rows[0]
        }
    } 
    catch (err) {
        console.log("User did not exist:", err)
    }
}
