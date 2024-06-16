import {client} from "../index";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
interface User{
    username:string;
    password:string;
    name:string
}
export async function createUser(
	username: string,
	password: string,
	name: string
) {
	const syntax = 'INSERT INTO users(username,password,name) VALUES($1,$2)'
    const values = [username,password,name]
    const res = await client.query(syntax,values)
    const user:User = res[0];

    
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
	// return {
	// 	username: await client.query(`
    //             SELECT username FROM users where userID="userID"
    //             `),
	// 	password: await client.query(`
    //             SELECT password FROM users where userID="userID"
    //             `),
	// 	name: await client.query(`
    //             SELECT name FROM users where userID="userID"
    //             `),
	// };
}
