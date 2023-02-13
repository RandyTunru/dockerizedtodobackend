const express = require('express');
const app = express();
const router = require('./routes');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.static('./assets'));

app.use('/', router)

app.listen(5000, () => {
    console.log('Server is running on port 5000');
    });

