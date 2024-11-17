const express = require('express');
const { User,Account } = require('../db');
const z = require("zod");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require('./middlewares');
const { JWT_SECRET }= require("../config");
const app = express();
const router1 = express.Router();
const signupSchema = z.object({
    username : z.string().email(),
    firstName : z.string(),
    lastName : z.string(),
    password : z.string(),
});
router1.post("/signup",async function(req,res){
    const { success } = signupSchema.safeParse(req.body)
    if(!success){
        return res.status(419).json({
            msg : "error or inccorect inputs "            
        })
    }
    const existingUser = await User.findOne({username : req.body.username});
    if(existingUser){
        return res.status(419).json({
            msg : 'User already exist'
        })
    }
    const user = await User.create({
        username : req.body.username,
        password : req.body.password,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        msg : 'token create successfully',
        token : token
    })
})

router1.post("/signin",async function(req,res,next){
  const username = req.body.username;
  const password = req.body.password;

  const user =await User.findOne({
    username,
    password
  })
  if(user){
    console.log(user._id);
    const token = jwt.sign({
        userId: user._id 
    },JWT_SECRET)

    res.json({
        token
    })
  }
  else{
    res.json({
        msg : 'incorrect username or password'
    })
  }
})

    router1.get("/find",async function(req,res,next){
        const filter = req.body.filter || "";
        const users =await User.find({
            $or : [{
                firstName : {
                    "$regex" : filter 
                }
            },{
                lastName : {
                    "$regex" : filter
                }
            }]
        })
        res.json({
            users : users.map((user) => { // i need to practice java script
                return {
                    id : user._id,
                    username : user.username,
                    firstName :user.firstName,
                    lastName : user.lastName
                };
            })    
        });
    })

const updateBody = z.object({
    firstName : z.string().optional(),
    lastName : z.string().optional(),
    username : z.string().optional(),
    password : z.string().optional(),
})

router1.put("/update",authMiddleware,async function(req,res,next){
    const {success} = updateBody.safeParse(req.body); //safeParse can be useful if you prefer handling validation results without using try-catch blocks. It's a little more verbose so let's look at both a valid and invalid flow.
    if(!success){
        return res.status(419).json({
            msg : 'error in handling the details'
        })
    }
    await User.updateOne({id:req.userId},req.body)
    return res.json({
        msg: "update successfully"
    })
})

module.exports = router1;