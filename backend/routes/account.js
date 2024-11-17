const express = require('express');
const { Account } = require('../db');
const { z } = require('zod');
const { authMiddleware } = require('./middlewares');
const { default: mongoose } = require('mongoose');
const app = express();

const router1 = express.Router();

router1.get("/balance",authMiddleware,async function(req,res){
    const account =await Account.findOne({
        userId : req.userId
    });
    console.log(req.userId)
    console.log(account.balance)
    res.json({
        balance : account.balance,
    })
})
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

router1.post("/transfer",authMiddleware,async function(req,res){
    const session = await mongoose.startSession();
    session.startTransaction();
    const { amount,to } = req.body;
    const account = await Account.findOne({
        userId : req.userId 
    }).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        res.status(400).json({
            msg : "insufficient balance"
        })
    } 
    const toAccount = await Account.findOne({
        userId : to 
    }).session(session);

    if(!toAccount ){
        session.abortTransaction();
        res.status(400).json({
            msg : 'invalid account'
        })
    }
    await Account.updateOne({
        userId : req.userId
    },{
        $inc : {
            balance : -amount
        }
    }).session(session);

    await Account.updateOne({
        userId : to
    },{
        $inc : {
            balance : amount
        }
    }).session(session);
    -
    session.commitTransaction();
    res.json({
        msg : 'Transactional Successful'
    })
})
module.exports = router1;