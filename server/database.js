const { Pool } = require("pg");
require("dotenv").config();

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

const pool = new Pool(config);

const message = () => {
    try {
        console.log("Server listening on port 3000");
    } catch (e) {
        console.log(e);
    }
};

//message();

module.exports = pool;
