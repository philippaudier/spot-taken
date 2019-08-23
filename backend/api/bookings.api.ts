import {sqlQuery} from '../database/database'

export function setUpGetBookings(app) {
    app.get('/api/users/:userid/bookings', async (req, res) => {
        console.log(req.params.userid)
        let bookingsResult = await sqlQuery(`
            SELECT * FROM bookings WHERE fk_user_id = ${req.params.userid}
        `)
        console.log(bookingsResult.rows)
       
        res.json(bookingsResult.rows)
    })
}

export function setUpPostBooking(app) {
    app.post('/api/users/:userid/bookings', async (req, res) => {
        console.log(req.params.userid)
        console.log(req.body)
        try {
            let bookingsResult = await sqlQuery(`
                INSERT INTO bookings (start_date, end_date, FK_user_id)
                    VALUES
                    ('${req.body.start_date}', '${req.body.end_date}', ${req.params.userid})
            `)
            
            res.status(201).json({
                msg: 'created'
            })
        } catch (e) {
            console.error(e)
            res.status(500).json({
                msg: 'Bookings saved'
            })
        }

    })
} 