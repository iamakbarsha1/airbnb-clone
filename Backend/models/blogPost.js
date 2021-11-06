const mongoose = require('mongoose');

// Schemas
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
   firstname: String,
   lastname: String,
   date: {
      type: String,
      default: Date.now()
   }
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost;