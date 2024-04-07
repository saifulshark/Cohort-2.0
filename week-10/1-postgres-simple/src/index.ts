import { Client } from 'pg'
import { DB_URL } from './config';

export const client = new Client({
    connectionString: DB_URL
});

declare global{
    interface todo{
        userId: number,
        title: string,
        description: string
    }
}