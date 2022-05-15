const express = require('express');
const cors = require("cors");
const morgan = require('morgan');

const app = express();

// Getting routes
const customerRouter = require('./routes/customer.routes');

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(customerRouter);

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));