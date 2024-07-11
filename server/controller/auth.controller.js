import { randomProfilePicGenerator } from "../helpers/common.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      surName: user.surName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in the login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { firstName, surName, email, password, dateOfBirth, gender } =
      req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // PASSWORD HASHING
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      firstName,
      surName,
      email,
      dateOfBirth,
      password: hashedPassword,
      gender,
      profilePic: randomProfilePicGenerator(firstName, gender),
    });

    if (hashedPassword && newUser) {
      await newUser.save();
      generateTokenAndSetCookie(newUser._id, res);
      res.status(200).json({
        _id: newUser._id,
        firstName: newUser.firstName,
        surName: newUser.surName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid User data" });
    }
  } catch (error) {
    console.log("Error in the signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successful" });
  } catch (error) {
    console.log("Error in the logout controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
