import * as path from "path"
import { Client } from "pg"

let databaseClient
const connectionString = 'postgres://postgres:123456@localhost:5432/spot-taken'

export async function connectToDb() {
    databaseClient = new Client({connectionString})
    await databaseClient.connect()
}

export async function deleteDatabase() {
    try {
        let result = await databaseClient.query(`
        DROP TABLE IF EXISTS bookings;
        DROP TABLE IF EXISTS users;
        `)
        console.log('database dropped')
    } catch (e) {
        console.error(e)
    }
}

export async function createDatabase() {
    try {
        let result = await databaseClient.query(`
            CREATE TABLE users (
                PK_user_id bigserial,
                name VARCHAR(100),
                PRIMARY KEY (PK_user_id)
            );   
        
            CREATE TABLE bookings (
                booking_id bigserial,
                start_date DATE,
                end_date DATE,
                FK_user_id INT REFERENCES users (PK_user_id),
                PRIMARY KEY (booking_id)
            );
        `)
        console.log('database created')
    } catch (e) {
        console.error(e)
    }
}