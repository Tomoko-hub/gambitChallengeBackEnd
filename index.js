const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const jwt = require("jsonwebtoken")
const auth = require("./utils/auth")
const connectDB = require("./utils/database")
const { ResultModel, UserModel } = require("./utils/schemaModels")


//functions
//CREATE Result
app.post("/result/create",auth , async(req, res)=> {
    try{
        await connectDB()
        await ResultModel.create(req.body)
        return res.status(200).json({message:"Create result succeeded!"})
    }catch(err){
        return res.status(400).json({message:"Create result failed.."})
    }

})

//READ ALL RESULT
app.get("/", async(req,res)=> {
    try {
        await connectDB()
        const allResults = await ResultModel.find()
        return res.status(200).json({message: "Read all result success!", allResults: allResults})
    }catch(err){
        return res.status(400).json({message: "Read all result function faild."})
    }
})

//READ SINGLE RESULT
app.get("/result/:id", async(req, res)=> {
    try {
        await connectDB()
        const singleResult=await ResultModel.findById(req.params.id)
        return res.status(200).json({message: "Jes! Read single result success!", singleResult: singleResult})
    }catch(err){
        return res.status(400).json({message: "Read single result function failed."})
    }
})

//UPDATE RESULT
app.put("/result/update/:id", auth, async(req,res)=> {
    try {
            await connectDB()
            const singleResult = await ResultModel.findById(req.params.id)
            if (singleResult.email === req.body.email) {
                await ResultModel.updateOne({_id:req.params.id},req.body)
                return res.status(200).json({message: "Update method work!", singleResult: singleResult})
            }else{
                throw new Error()
            }
        }
    catch(err){
        return res.status(400).json({message: "Update method doesn't work."})
    }
})

//DELETE RESULT
app.delete("/result/delete/:id", auth, async(req, res)=>{
    try {
        await connectDB()
        const singleResult = await ResultModel.findById(req.param.id)
        if(singleResult.email === req.body.email){
            await ResultModel.deleteOne({_id:req.params.id})
            return res.status(200).json({message:"Delete method toimii!"})
        }else{
            throw new Error()
        }
    }catch(err){
        return res.status(400).json({message: "Delete method failed."})
    }
})


//USER functions
//Register User
app.post("/user/register", async(req, res) => {
    try {
        await connectDB()
        await UserModel.create(req.body)
        return res.status(200).json({message: "User register succeess!"})
    } catch(err){
        return res.status(400).json({message:"User register failed."})
    }
})

//Login User
const secret_key = "gambit-challenge"
app.post("/user/login", async(req, res)=> {
    try {
        await connectDB()
        const savedUserData = await UserModel.findOne({email: req.body.email})
        if (savedUserData) {
            if (req.body.password === savedUserData.password){
                const payload = { 
                    email : req.body.email 
                }
                const token = jwt.sign(payload, secret_key, {expiresIn: "36h"})
                console.log(token)
                return res.status(200).json({message: "You are login!", token:token })
            }
        }else{
            return res.status(400).json("Wrong password.")
        }
    }catch(err){
        return res.status(400).json({message: "Login failed.."})
    }
})

const port = process.env.PORT || 5000

app.listen(5000, ()=>{
    console.log(`Server is connected to localhost port ${port}!`)
})