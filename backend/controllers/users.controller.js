import User from "../models/user.model.js";

export const getAllUsersForSidebar = async (req, res) => {
  try {
    const currentUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: currentUserId },
    }).select("-password");

    res.status(200).json(filteredUsers)
  } catch (error) {
    console.log("Error in getAllUsersForSidebar Controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
