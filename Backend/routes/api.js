const express = require('express');

const router = express.Router();
const BlogPost = require('../models/blogPost');

// Routes
router.get('/', (req,res) => {
   // const data = {
   //    username: "akbar sha",
   //    age: 21
   // };
   BlogPost.find({  })
      .then((data) =>  {
         console.log('Data : ', data);
         res.json(data);
      })
      .catch((error) => {
         console.log('Error : ', error);
      });
});

router.post('/save', (req,res) => {
   console.log("Body: ", req.body);
   const data = req.body;

   // Instance of BlogPost
   const newBlogPost = new BlogPost(data);

   // .save()
   newBlogPost.save((error) => {
      if (error) {
         res.status(500).json({ msg: "Sorry, Internal Server Error"});
         return;
      } 
      return res.json({
            msg: "Your Data has been SAVED !!" 
         });
   });
});

router.get('/name', (req,res) => {
   const data = {
      username: "Syed Mohammed Hamza",
      age: 0.9
   };
   res.json(data);

});


module.exports = router;
