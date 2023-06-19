const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    name: String,
    title: String,
    content: String, 
    category : String,
	date : String,
	likes : [String],
    userId:String,
	comments : [{username : String, comment : String}]
})

const blogModel = mongoose.model("blog",blogSchema)

module.exports = {blogModel}