const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const { json } = require("express");

// getUser Logic
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// getContats Logic
const getAllContacts = async (req, res) => {
  try {
    const contact = await Contact.find();
    if (!contact || contact.length === 0) {
      return res.status(400).json({ message: "No contact Found" });
    }
    return res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

// update user
const updateUserById = async (req, res) => {
  // console.log("delete", req.params.id);
  try {
    const id = req.params.id;
    let data = req.body;
    const updateUser = await User.updateOne({ _id: id }, {
      $set: data
    })
    if (res.status === 200) {
      return json(updateUser);
    } else {
      return json({ error: res });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// delete user
const deleteUserById = async (req, res) => {
  // console.log("delete", req.params.id);
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: `ObjectId(${id})` });
    if (res.status === 200) {
      return json({ message: `User Deleted Successfully` });
    } else {
      return json({ error: res });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getAllUsers, getAllContacts, deleteUserById, updateUserById };
