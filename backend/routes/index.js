// const express = require('express');
// const userRouter = require("./user");
// const accountRouter = require("./account");

// const app = express();

// const router1 = express.Router();


// router1.use("/api/v1/user", userRouter);
// router1.use("/api/v1/account", accountRouter);


// module.exports = router1;
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;