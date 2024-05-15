const User = require("../models/userModel");

const singUpUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send("Please provide all required credentials");
    }

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).send("The user already exists");
        }

        const user = await User.create({
            username, // Map 'name' to 'username'
            email,
            password
        });

        res.status(201).json({
            username: user.username,
            email: user.email
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal server error");
    }
};

module.exports = { singUpUser };
