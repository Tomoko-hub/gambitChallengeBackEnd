const jwt = require("jsonwebtoken")
const secret_key = "gambit-challenge"

const auth = async(req, res, next)=> {
    if (req.method === "GET") {
        return next()
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhYXZpQGVtYWlsLmNvbSIsImlhdCI6MTY3Nzk1MDE5MywiZXhwIjoxNjc4MDc5NzkzfQ.LOyiWMLP5z3x1EguEgtlbHz5FtUL6xHYJv6CLONVCyI"
      
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