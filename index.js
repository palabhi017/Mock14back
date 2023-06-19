const express = require("express")
const app = express()
const {connection} = require("./db")
const { userRouter } = require("./Routes/Auth.route")
const { blogRouter } = require("./Routes/blog.route")
const cors = require("cors")
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/blogs",blogRouter)



app.listen(process.env.port, async()=>{
  try {
    
      await connection
      console.log("port is running")
  } catch (error) {
    console.log(error)
  }
})
