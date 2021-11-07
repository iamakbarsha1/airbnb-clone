const mongoose = require('mongoose');

// Schemas
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
   firstname: String,
   lastname: String,
   email: {
      type: String,
      required: true,
      unique: true
   },
   username: {
      type: String,
      required: true,
      unique: true
   },
   password: String,
   date: {
      type: String,
      default: Date.now()
   }
},
{
   collection: "blogposts"
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost;