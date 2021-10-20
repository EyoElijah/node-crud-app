const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const userRoute = require("./server/routes/router");
const connectDB = require("./server/database/connect");
dotenv.config();

const PORT = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");

// log request
app.use(morgan("tiny"));

// database
connectDB();

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//routes
app.use("/", userRoute);

app.listen(PORT, () => console.log(`server is started on port ${PORT}`));
