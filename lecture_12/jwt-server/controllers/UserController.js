const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "super_secret_key";

exports.createUser = async (req, res) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const newUser = await user.save();
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// {
// "name": "Bojan",
// "email": "bojan@gmail.com",
// "password": "test123"
// }

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(404)
        .json({ message: "USer with this email is not found" });

    const isMatch = bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(404).json({ message: "Invalid password." });

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
        // Bojan: "SEMOS EDU",
      },
      SECRET_KEY,
      {
        expiresIn: "1m",
      }
    );

    res.status(200).json({
      message: "Login successfully",
      token,
      user,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
