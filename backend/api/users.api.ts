import {sqlQuery} from '../database/database'

// POST
export function setUpNewUser(app) {
    app.post('/api/users', async (req, res) => {
        console.log(req.body)
        try {
            let inventoryResult = await sqlQuery(`
                ALTER TABLE users DROP CONSTRAINT IF EXISTS name_con;
                ALTER TABLE users
                    ADD CONSTRAINT name_con
                    UNIQUE (name);
                
                INSERT INTO users (name)
                    VALUES ('${req.body.name}')
                    ON CONFLICT (name)
                    DO NOTHING;
                ALTER SEQUENCE users_PK_user_id_seq RESTART WITH 1;
                UPDATE users SET PK_user_id=nextval('users_PK_user_id_seq');
            `)
            res.status(201).json({
                msg: 'created'
            })
        } catch (e) {
            console.error(e)
            res.status(500).json({
                msg: 'error'
            })
        }

    })
}

export function setUpGetAllUsers(app) {
    app.get('/api/users', async (req, res) => {
        let usersResult = await sqlQuery(`
            SELECT * FROM users
        `)
        console.log(usersResult.rows)
       
        res.json(usersResult.rows)
    })
}

export function setUpDeleteUser(app) {
    app.delete('/api/users/:userid', async (req, res) => {
        console.log(req.params.userid)
        try {
            let bookingsResult = await sqlQuery(`
                DELETE FROM bookings
                    WHERE FK_user_id = ${req.params.userid};
                DELETE FROM users
                    WHERE PK_user_id = ${req.params.userid};
                ALTER SEQUENCE users_PK_user_id_seq RESTART WITH 1;
                UPDATE users SET PK_user_id=nextval('users_PK_user_id_seq');
            `)
            res.status(201).json({
                msg: 'user deleted'
            })
        } catch (e) {
            console.error(e)
            res.status(500).json({
                msg: 'error'
            })
        }

    })
}
