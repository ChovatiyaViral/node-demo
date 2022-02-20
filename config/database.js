const mongoose = require('mongoose');

exports.connect = () => {

    mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });

    mongoose.connection
        .once('open', () => console.log("connected ...."))
        .on('error', (error) => console.log(error))

};