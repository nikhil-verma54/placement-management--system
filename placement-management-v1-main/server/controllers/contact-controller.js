const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const response = await req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "Message Send Successfully" });
  } catch (error) {
    return res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = contactForm;
