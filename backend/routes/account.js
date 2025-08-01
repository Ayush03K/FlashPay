const express = require("express");
const { Account, Transaction } = require("../db");
const { z } = require("zod");
const { authMiddleware } = require("./middlewares");
const { default: mongoose } = require("mongoose");
const app = express();

const router1 = express.Router();

router1.get("/balance", authMiddleware, async function (req, res) {
  try {
    const account = await Account.findOne({
      userId: req.userId,
    });

    if (!account) {
      return res.status(404).json({ msg: "Account not found" });
    }

    console.log(req.userId);
    console.log(account.balance);

    res.json({
      balance: account.balance,
    });

  } catch (error) {
    console.error("Error fetching balance:", error.message);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

//NOT SO PERFECT SOLUTION
// router1.post("/transfer",authMiddleware,async function(req,res){
//     const { amount,to } = req.body;
//     const account = await Account.findOne({
//         userId : req.userId
//     });
//     if(account.balance < amount){
//         return res.status(409).json({
//             msg : "insufficient Balance"
//         })
//     }
//     const toAccount = await Account.findOne({
//         userId : to
//     })
//     if(!toAccount){
//         return res.status(409).json({
//             msg : "Invalid Account"
//         })
//     }
//     await Account.updateOne({
//         userId : req.userId
//     },{
//         $inc:{
//             balance : -amount
//         }
//     })
//     await Account.updateOne({
//         userId : to
//     },{
//         $inc : {
//             balance : amount
//         }
//     })
//     res.json({
//         msg : 'Transaction Successful'
//     })
// })

router1.post("/transfer", authMiddleware, async (req, res) => {
  try {
    const { to, amount } = req.body;
    const fromUserId = req.userId;

    const session = await mongoose.startSession();
    session.startTransaction();

    const sender = await Account.findOne({ userId: fromUserId }).session(session);
    const receiver = await Account.findOne({ userId: to }).session(session);

    if (!receiver) {
      await session.abortTransaction();
      return res.status(400).json({ msg: "Receiver account not found" });
    }

    if (sender.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({ msg: "Insufficient balance" });
    }

    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save({ session });
    await receiver.save({ session });

    await Transaction.create([
      {
        from: fromUserId,
        to,
        amount,
        timestamp: new Date()
      }
    ], { session });

    await session.commitTransaction();
    res.json({ msg: "Transfer successful" });

  } catch (e) {
    console.error(e); // <--- see what exact error you're getting
    res.status(500).json({ msg: "Internal server error", error: e.message });
  }
});


router1.get("/transactions", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const transactions = await Transaction.find({
      $or: [{ from: userId }, { to: userId }],
    })
      .sort({ createdAt: -1 })
      .populate("from", "username")  // Only returns firstName instead of full user object
      .populate("to", "username");

     const formattedTransactions = transactions.map((txn) => ({
      _id: txn._id,
      amount: txn.amount,
      status: txn.status || "completed", // fallback if status missing
      date: txn.timestamp ,
      from: txn.from?.username || "Unknown",
      to: txn.to?.username || "Unknown",
    }));

    res.json({ transactions: formattedTransactions });
  } catch (err) {
    console.error("Error fetching transactions:", err);
    res.status(500).json({ msg: "Server error" });
  }
});


module.exports = router1;
