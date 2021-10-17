const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('./db');

const app = express();
const port = 4000;
const routeAccess = require('./routes');

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use('/book', routeAccess);

app.listen(port, () => {
    console.log(`Server is successfully started at port: ${port}`);
});