const server = require('./api/server');

const port = 1234;

// START YOUR SERVER HERE

server.listen(port, () => {
    console.log(`Running on port: ${port}`)
})