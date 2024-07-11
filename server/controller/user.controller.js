import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    console.log(loggedInUser);
    const filteredUser = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );

    if (!filteredUser) return res.status(200).json([]);
    res.status(200).json(filteredUser);
  } catch (error) {
    console.log("Error in the getAllUsers controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
