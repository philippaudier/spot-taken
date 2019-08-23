import * as path from "path"
import { Client } from "pg"

let databaseClient
const connectionString = 'postgres://postgres:123456@localhost:5432/spot-taken'

export async function connectToDb() {
    databaseClient = new Client({connectionString    })
    await databaseClient.connect()
    databaseClient.query('SELECT NOW()', (err, res) => {
        console.log(res.rows[0].now)
        databaseClient.end()
    })
}