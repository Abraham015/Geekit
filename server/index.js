const express=require("express");
const {Server}=require("socket.io");
const app=express();
const helmet=require("helmet");
const cors=require("cors");
const session=require("express-session");
const authRouter=require("./routers/authRouter");
const server = require("http").createServer(app);

// Getting routes
const foros = require('./routers/foros');
const cliente = require('./routers/cliente');
const productos = require('./routers/producto');
const discusiones = require('./routers/discusiones');

const io =new Server(server,{
  cors:{
    origin:"http://localhost:3000",
    credentials: "true",
  },
});

app.use(helmet());
app.use(cors({
  origin:"http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(session({
  secret: "iuiuiusdaficxzvmzx322343124123",
  credentials: true,
  name:"sid",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
    httpOnly: true,
    expires: 1000*60,
    /*sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax ",*/
  }
}));

app.use("/auth", authRouter);
app.use(foros);
app.use(cliente);
app.use(productos);
app.use(discusiones);



io.on("connect",socket=>{});

server.listen(4000,()=>{
  console.log("Server listening on port 4000");
});