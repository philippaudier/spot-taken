import {setUpGetBookings, setUpPostBooking} from './bookings.api'

export function setUpWebAPIs(app) {
    setUpGetBookings(app)
    setUpPostBooking(app)    
}

