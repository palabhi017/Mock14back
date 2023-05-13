const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    name: String,
    title: String,
    content: String, 
    category : String,
	date : String,
	likes : Number,
    userId:String,
	comments : [{username : String, content : String}]
})

const blogModel = mongoose.model("blog",blogSchema)

module.exports = {blogModel}