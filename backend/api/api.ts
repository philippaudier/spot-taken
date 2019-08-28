import {
    setUpGetBookings,
    setUpPostBooking} from './bookings.api'
import {
    setUpGetInventory,
    setUpPostInventory,
    setUpUpdateInventory,
    setUpDeleteInventory } from './inventory.api'

import {
    setUpNewUser,
    setUpGetAllUsers,
    setUpDeleteUser } from './users.api'

export function setUpWebAPIs(app) {
    setUpGetBookings(app)
    setUpPostBooking(app)
    
    setUpGetInventory(app)
    setUpPostInventory(app)
    setUpUpdateInventory(app)
    setUpDeleteInventory(app)
    
    setUpNewUser(app)
    setUpGetAllUsers(app)
    setUpDeleteUser(app)
}

