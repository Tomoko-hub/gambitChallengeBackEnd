const jwt = require("jsonwebtoken")
const secret_key = "gambit-challenge"

const auth = async(req, res, next)=> {
    if (req.method === "GET") {
        return next()
        //return handler(req,res)
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsMSIsImlhdCI6MTY3ODA5OTAzMSwiZXhwIjoxNjc4MjI4NjMxfQ.KG6nGy1LQmaVGZ0uN-5y6qReicRQMrP74I0KmXbRUuo"
    //await req.headers.authorization.split("")[1]
    if (!token){
        return res.status(401).json({message: "User doesn't have token."})
    }
    try{
        const decoded = jwt.verify(token, secret_key)
        req.body.email = decoded.email //User who already logged in 
        return next()
    }catch(err){
        return res.status(400).json({message: "Inccorect token.Please login."})
    }
}

module.exports = auth