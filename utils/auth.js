const jwt = require("jsonwebtoken")
const secret_key = "gambit-challenge"

const auth = async(req, res, next)=> {
    if (req.method === "GET") {
        return next()
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsMSIsImlhdCI6MTY3Nzg0NzIzMSwiZXhwIjoxNjc3OTMzNjMxfQ.6tFqEi6R7UGlR1IbZhqZi9gY3T-MLFEhXpEsc2WjOlk"
      
    //await req.headers.authorization.split("")[1]
    if (!token){
        return res.status(400).json({message: "User doesn't have token."})
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