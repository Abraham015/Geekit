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

message();

module.exports = pool;
/*
const getCliente = async() => {
    try {
        const res = await pool.query("select * from cliente");
        console.log(res.rows);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const insertUser = async() => {
    const text =
        "INSERT INTO cliente (nombreCliente,nicknameCliente,fechaNacimiento,fotoPerfil,direccion,contrasena) VALUES ($1,$2,$3,$4,$5,$6)";
    const values = [
        "admin",
        "admin",
        "2022-06-06",
        "prueba",
        "localhost",
        "admin",
    ];
    const res = await pool.query(text, values);
    console.log(res);
    pool.end();
};

insertUser();*/