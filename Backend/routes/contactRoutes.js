const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Save contact message
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully 🚀",
    });
  } catch (error) {
    console.error("Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

module.exports = router;
