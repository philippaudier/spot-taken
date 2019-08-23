
export function startKeepAlive(http) {
    setInterval(() => {
        const options = {
            host: 'spot-taken.herokuapp.com',
            port: 80,
            path: '/'
        };
        http.get(options, (res) => {
            res.on('data', () => {
                try {
                    // optional logging... disable after it's working
                    console.log("HEROKU : Ping successful");
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', (err) => {
            console.log("Error: " + err.message);
        });
    }, 20 * 30 * 1000); // load every 20 minutes
}