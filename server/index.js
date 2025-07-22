import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import cors from "cors";
import User from "./model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const generateToken = async (id) => {
  const payload = id;
  return jwt.sign(payload, process.env.AUTH_SECRET);
};

app.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      res
        .status(402)
        .json({ success: false, message: "Please provide all the details" });
    }

    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
    })
    const user = createdUser.toObject();
    delete user.password;
    const token = await generateToken(user._id.toString());
    res.cookie("token", token);

    res.json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(402)
        .json({ success: false, message: "Please provide all the details" });
    }

    const user = await User.findOne({ email }).select("+password").lean();
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    delete user.password;
    const token = await generateToken(user._id.toString());
    console.log(token);
    res.cookie("token", token);
    res.json({
      success: true,
      user,
      message: "You're now logged in",
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
});

mongoose
  .connect(process.env.MONGODBURI)
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
