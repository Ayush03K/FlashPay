const express = require("express");
const { User, Account } = require("../db");
const z = require("zod");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middlewares");
const { JWT_SECRET } = require("../config");
const app = express();
const router1 = express.Router();
const signupSchema = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});
router1.post("/signup", async function (req, res) {
  try {
    const { success } = signupSchema.safeParse(req.body);
    if (!success) {
      return res.status(419).json({ msg: "Error or incorrect inputs" });
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(409).json({ msg: "User already exists" });
    }

    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    const userId = user._id;
    const name = user.firstName;

    await Account.create({
      userId,
      balance: 1 + Math.random() * 10000,
    });

    const token = jwt.sign({ userId }, JWT_SECRET);

    res.json({
      msg: "Token created successfully",
      token,
      name,
      profile: {
        userId,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ msg: "Something went wrong on signup" });
  }
});

router1.post("/signin", async function (req, res, next) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({
        msg: "Incorrect username or password",
      });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    //complete uptp signin if i want to get token can do signin to get token and also check the balance in account using postman not just need work on balance frontend
    res.json({
      msg: "Login successful",
      token,
      name: user.firstName,
      profile: {
        userId: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

router1.get("/find", async function (req, res, next) {
  const filter = req.query.filter || "";
  try {
    const users = await User.find({
      $or: [
        {
          firstName: {
            $regex: filter,
          },
        },
        {
          lastName: {
            $regex: filter,
          },
        },
      ],
    });
    res.json({
      users: users.map((user) => {
        // i need to practice java script
        return {
          id: user._id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      }),
    });
  } catch (error) {
    console.log("incorrect input");
  }
});

const updateBody = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
});

router1.put("/update", authMiddleware, async function (req, res, next) {
  const { success } = updateBody.safeParse(req.body); //safeParse can be useful if you prefer handling validation results without using try-catch blocks. It's a little more verbose so let's look at both a valid and invalid flow.
  if (!success) {
    return res.status(419).json({
      msg: "error in handling the details",
    });
  }
  await User.updateOne({ id: req.userId }, req.body);
  return res.json({
    msg: "update successfully",
  });
});

module.exports = router1;
