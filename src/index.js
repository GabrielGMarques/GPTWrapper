const express = require('express');
const chatgptRoutes = require('./routes/chatgpt.routes');
const envConfig = require('../env-config');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api', chatgptRoutes);

app.listen(envConfig.expressPort, () => {
    console.log(`Server is running on port ${envConfig.expressPort}`);
});

