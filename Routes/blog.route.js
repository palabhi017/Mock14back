const express = require("express")
const blogRouter = express.Router()
const {blogModel} = require("../Models/blogModel")

blogRouter.post("/add", async(req,res)=>{
// console.log(req.body)
    try {
        const blog = new blogModel(req.body)
        await blog.save()
        res.send("blog added successfully")
    } catch (error) {
        res.send(error)
    }
})

blogRouter.get("/", async(req,res)=>{
    const { page = 1, limit = 10 } = req.query;
    try {

        let q={}
        let sort={}
        if(req.query.category){
            q.category = req.query.category
        }
        if(req,query.title){
            q.title = { $regex: req.query.title, $options: 'i'}
        }
        if(req.query.sort){
            sort.date = +req.query.date
        }
        let blog = await blogModel.find(q).sort(sort).skip((page-1)*limit).limit(limit)
        res.json({"blog": blog})
    } catch (error) {
        res.send(error)
    }
})

blogRouter.delete("/delete/:id", async(req,res)=>{
const id = req.params.id
    try {
         await blogModel.findByIdAndDelete(id)
        res.send("blog Deleted successfully")
    } catch (error) {
        res.send(error)
    }
})

blogRouter.patch("/update/:id", async(req,res)=>{
    const id = req.params.id
    const data = req.body
    try {
    
             await blogModel.findByIdAndUpdate({_id:id},data)
            res.send("blog Updated successfully")
        } catch (error) {
            res.send(error)
        }
    })

    blogRouter.patch("like/:id", async(req,res)=>{
        const id = req.params.id
        const data = req.body
        try {
        
                 await blogModel.findByIdAndUpdate({_id:id},data)
                res.send("Likes Updated successfully")
            } catch (error) {
                res.send(error)
            }
        })
        blogRouter.patch("comment/:id", async(req,res)=>{
            const id = req.params.id
            const data = req.body
            try {
            
                     await blogModel.findByIdAndUpdate({_id:id},data)
                    res.send("Comment Added successfully")
                } catch (error) {
                    res.send(error)
                }
            })
    
module.exports ={blogRouter}