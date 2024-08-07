import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://100xDevDB_owner:q6J4rLvacXWP@ep-blue-dream-a1cheprz.ap-southeast-1.aws.neon.tech/100xDevDB?sslmode=require");
    // postgresql://100xDevDB_owner:q6J4rLvacXWP@ep-blue-dream-a1cheprz.ap-southeast-1.aws.neon.tech/100xDevDB?sslmode=require
    await client.connect();
    return client;
}