require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const newuser = require("./routes/newuser");
const { db } = require("./db/db");

const app = express();

const PORT = process.env.PORT;

//routes
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);
app.use("/api/newuser", newuser);

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Listening to port", PORT);
  });
};

server();
