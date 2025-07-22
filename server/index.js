import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import cors from "cors";
import User from "./model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      res.json({ success: false, message: "Please provide all the details" });
    }

    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    const user = createdUser.toObject();
    delete user.password;
    const token = jwt.sign(
      {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      process.env.AUTH_SECRET
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hour
    });

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
      return res.json({
        success: false,
        message: "Please provide all the details",
      });
    }

    const user = await User.findOne({ email }).select("+password").lean();
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    delete user.password;
    const token = jwt.sign(
      {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      process.env.AUTH_SECRET
    );
    console.log(token);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hour
    });
    res.json({
      success: true,
      user,
      message: "You're now logged in",
      token,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
});

app.get("/verify-token", (req, res) => {
  try {
    const token = req.cookies.token; // ✅ Read from cookie, not headers

    if (!token) {
      return res.json({
        success: false,
        message: "No token found in cookies",
      });
    }

    const decoded = jwt.verify(token, process.env.AUTH_SECRET);
    console.log("Auto Login API works", decoded);

    return res.json({ success: true, user: decoded });
  } catch (error) {
    console.error("Token verification failed:", error.message);
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
