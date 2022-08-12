import { Router } from "express";
const router = Router();
import { sign } from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import { compare } from "bcryptjs";
import { get } from "config";
import authMiddleware from "../middleware/authMiddleware";

import { findById, findOne } from "../models/User";

//@route    GET api/auth
//@desc     Get logged in user
//@access   Private
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    POST api/users
//@desc     Log in user
//@access   Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    console.debug("Executing auth post req");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const isMatch = await compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      sign(
        payload,
        get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

export default router;
