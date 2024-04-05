import User from "../models/userModel.js";

export const singUpUser = async (req, res) => {
  const { useremail, name, password } = req.body;

  try {
    // Check if the user exists
    const userExist = await User.find({ $or: [{ email: useremail }, { username: name }] });

    // If userExist is not empty, it means the user already exists
    if (userExist.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create a new user document
    const newUser = new User({
      username: name,
      email: useremail,
      password: password
    });

    // Save the new user to the database
    await newUser.save();

    // Send a success response with the user details
    res.status(201).json({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email
    });
  } catch (error) {
    // If an error occurs, send a 500 status code with the error message
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
