import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    required: true,
  },
  work: String,
});

export const User = mongoose.model("User", userSchema);
