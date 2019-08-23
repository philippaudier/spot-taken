
import * as express from "express"
import * as path from "path"

export function exposeProductionAngularApp(app) {
    console.log("dirname: " + __dirname);
    app.use(express.static(__dirname + "./../dist/spot-taken"));

    // For all GET requests, send back index.html
    // so that PathLocationStrategy can be used
    // only for routes not matched by previous middlewares, so order is important
    console.log(path.join(__dirname, "./../dist/spot-taken/index.html"));
    app.get("/*", (req, res) => {
        console.log('serving index.html');
        res.sendFile(path.join(__dirname, "./../dist/spot-taken/src/index.html"));
    }
    );
}
