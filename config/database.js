const mongoose = require('mongoose');

require("dotenv").config();

const Connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>  console.log("DB connection is established"))
    .catch((error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1); 
    });
}

module.exports = Connect;