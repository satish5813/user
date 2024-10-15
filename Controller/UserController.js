const User = require("../Modal/UserModal");

exports.UserPost = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.GetUserData = async (req, res) => {
  try {
    const data = await User.find();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.UserUpdate = async (req, res) => {
  try {
    const { id } = req.params; 
    const update = req.body; 

    const result = await User.updateOne({ _id: id }, { $set: update });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", result });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};
