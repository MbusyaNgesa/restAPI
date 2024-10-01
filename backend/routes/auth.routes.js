import express from "express";
import { User } from "../models/user.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log("Users retrieved from database", users);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post("/users", async (req, res) => {
  console.log("Post received");

  const { name, age, email, work } = req.body;
  try {
    if (!email) {
      throw new Error("Email required");
    }
    const user = new User({
      name,
      age,
      email,
      work,
    });

    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
    throw new Error("This is false data:");
  }
  res.send();
});

export default router;
