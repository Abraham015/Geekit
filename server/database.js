const { Pool } = require("pg");

const config = {
    user: "postgres",
    host: "localhost",
    password: "admin",
    database: "geekit",
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
