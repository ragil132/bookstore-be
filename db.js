const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_book');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Failed to connect to database'));
db.once('open', () => {
    console.log('Success to connect to database');
});