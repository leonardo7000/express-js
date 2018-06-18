const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/goit');

mongoose.connection.on('error', (e) => {
    console.log('check your database');
    console.log(e);
});
mongoose.connection.once('open', function() {
    // we're connected!
    console.log('all okay, DB is started!');

});
