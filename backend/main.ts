import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as path from "path";
import { Pool, Client } from "pg";

require("source-map-support").install(); //to get stack traces pointing to ts files
const connectionString = 'postgressql://postgres:tiliChat1@localhost:5432/postgres';
const port = process.env.PORT || 8081;
let databaseClient;

async function init() {
    configureExpressApp();
    await connectToDb();
    console.log("starting server");
    console.log("--=== Server started ===--");
}

async function connectToDb() {
    databaseClient = new Client({
        connectionString
    });
    await databaseClient.connect();
    databaseClient.query('SELECT NOW()', (err, res) => {
        console.log(err, res);
        databaseClient.end();
    });
}

function configureExpressApp() {
    const app = express();
    setUpGlobalMiddlewares(app);
    app.listen(port);
    console.log("listening on port " + port);
    exposeFakeAPI(app);
    exposeProductionAngularApp(app);
}

function setUpGlobalMiddlewares(app) {
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}

function exposeProductionAngularApp(app) {
    console.log("dirname: " + __dirname);
    app.use(express.static(__dirname + "./../dist/spot-taken"));

    // For all GET requests, send back index.html
    // so that PathLocationStrategy can be used
    //only for routes not matched by previous middlewares, so order is important
    console.log(path.join(__dirname, "./../dist/spot-taken/index.html"));
    app.get("/*", (req, res) => {
        console.log('serving index.html');
        res.sendFile(path.join(__dirname, "./../dist/spot-taken/index.html"));
    }
    );
}

function exposeFakeAPI(app) {
    app.get("/api/testwebservice", (req, res) => {
        console.log('serving /api/testwebservice');
        res.json({
            message: 'bravo'
        });
    }
    );
}

init();
