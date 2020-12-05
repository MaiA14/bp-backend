
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const stream = require('./stream');

const counterRoutes = require('./api/event/eventRoutes');

app.use('/api/event', counterRoutes);

const port = 3030;
http.listen(port, () => {
    console.info('Server is running on port: ' + port)
});
stream.readStream()