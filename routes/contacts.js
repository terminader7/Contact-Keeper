const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const User = require("../models/User");
const Contact = require("../models/Contact");

//@route    GET api/contacts
//@desc     Get all users contacts
//@access   Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });

    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    re;
  }
});

//@route    POST api/contacts
//@desc     Add new contact
//@access   Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

//@route    Put api/contacts/:id
//@desc     Update contact
//@access   Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route    DELETE api/contacts
//@desc     Delete contact
//@access   Private
router.delete("/", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
