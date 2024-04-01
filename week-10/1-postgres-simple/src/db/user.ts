import {client} from "..";

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
    const createUserQuery = `INSERT INTO USERS (username, password, name) VALUES ($1, $2, $3) RETURNING *`
    const user=   await client.query(createUserQuery, [username, password, name]);
    return user.rows[0];
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
    const getUserQuery = `SELECT * FROM USERS WHERE id = $1`;
    const user =  await client.query(getUserQuery, [userId]);
    return user.rows[0];
}
