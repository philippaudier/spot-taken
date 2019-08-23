import * as bodyParser from "body-parser"
import * as compression from "compression"
import { startKeepAlive } from "./keepAlive"
import * as http from 'http'
import * as express from "express"
import * as sourceMapSupport from "source-map-support"
import {corsMiddleware} from "./cors-middleware"
import {exposeProductionAngularApp} from "./expose-angular-middleware"
import {connectToDb} from "./database/database"

sourceMapSupport.install()// to get stack traces pointing to ts files

init()

async function init() {
    const app = express()
    startKeepAlive(http)
    const port = process.env.PORT || 8081

    configureExpressApp(app, port)
    await connectToDb()
    console.log("starting server")
    console.log("--=== Server started ===--")
}

function configureExpressApp(app, port) {
    setUpGlobalMiddlewares(app)
    app.listen(port)
    console.log("listening on port " + port)
    exposeProductionAngularApp(app)
}

function setUpGlobalMiddlewares(app) {
    app.use(compression())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(corsMiddleware)
}