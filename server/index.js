const express = require('express');
const app = express();
const router = express.Router();
const PORT = 4500;
const bodyParser = require('body-parser');
const setupRoutes = require('./routes.js');
const cors = require('cors');

setupRoutes(router);

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
