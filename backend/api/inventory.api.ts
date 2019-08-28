import {sqlQuery} from '../database/database'

// GET ALL
export function setUpGetInventory(app) {
    app.get('/api/inventory', async (req, res) => {
        let inventoryResult = await sqlQuery(`
            SELECT * FROM inventory ORDER BY item_id ASC
        `)
        console.log(inventoryResult.rows)
        res.json(inventoryResult.rows)
    })
}

// POST
export function setUpPostInventory(app) {
    app.post('/api/inventory', async (req, res) => {
        console.log(req.body)
        try {
            let inventoryResult = await sqlQuery(`
                INSERT INTO inventory (name, quantity, state)
                    VALUES
                    ('${req.body.name}', '${req.body.quantity}', '${req.body.state}')
            `)
            
            res.status(201).json({
                msg: 'item created'
            })
        } catch (e) {
            console.error(e)
            res.status(500).json({
                msg: 'error'
            })
        }

    })
}

// UPDATE
export function setUpUpdateInventory(app) {
    app.put('/api/inventory/:itemid', async (req, res) => {
        console.log(req.params.itemid)
        console.log(req.body)
        try {
            let inventoryResult = await sqlQuery(`
                UPDATE inventory
                SET name = ('${req.body.name}'),
                    quantity = ('${req.body.quantity}'),
                    state = ('${req.body.state}')
                WHERE item_id = ${req.params.itemid};
            `)
            res.status(201).json({
                msg: 'inventory updated'
            })
        } catch (e) {
            console.error(e)
            res.status(500).json({
                msg: 'error'
            })
        }

    })
}

// DELETE
export function setUpDeleteInventory(app) {
    app.delete('/api/inventory/delete/:itemid', async (req, res) => {
        console.log(req.params.itemid)
        try {
            let inventoryResult = await sqlQuery(`
                DELETE FROM inventory
                WHERE item_id = ${req.params.itemid};
                ALTER SEQUENCE inventory_item_id_seq RESTART WITH 1;
                UPDATE inventory SET item_id=nextval('inventory_item_id_seq')
            `)

            res.status(201).json({
                msg: 'item deleted from inventory'
            })
        } catch (e) {
            console.error(e)
            res.status(500).json({
                msg: 'error'
            })
        }

    })
}

