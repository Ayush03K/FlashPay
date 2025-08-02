const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if authHeader is missing or malformed
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authorization header missing or malformed." });

  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    console.log("Authenticated user:", req.userId);
    next();
  } catch (err) {
    console.error("JWT Verification Error:", err);
    return res.status(401).json({ error: "Invalid or expired token. Please log in again." });
  }
};

module.exports = {
  authMiddleware,
};
