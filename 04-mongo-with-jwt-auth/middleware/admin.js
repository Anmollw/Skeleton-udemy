const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    const verify = jwt.verify(jwtToken,JWT_SECRET);
    if (verify.username){
        next();
    }
    else{
        res.status(403).json({
            message : "You are not authenticated"
        });
    }





}

module.exports = adminMiddleware;