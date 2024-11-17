const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware= (req,res,next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(419).json({ msg : 'kol'});
    }

    const token = authHeader.split(" ")[1];
    // console.log(token);
    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        // console.log(decoded);
        req.userId = decoded.userId;
        // console.log(req.userId)
        next();
    }
    catch(err){
        console.error("JWT Verification Error:", err);
        res.status(419).json({msg : 'mol'});
    }
}
module.exports = {
    authMiddleware
}