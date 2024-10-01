import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//Sending a GET request
// app.get("/", (req, res) => {
//   res.send("Hello Ngesa");
// });

app.get("/users", (req, res) => {
  req.body;
});
app.use(express.json());
app.use("/auth", authroutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running");
});
