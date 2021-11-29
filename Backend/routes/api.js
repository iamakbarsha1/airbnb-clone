const express = require('express');

const router = express.Router();
const BlogPost = require('../models/blogPost');
const jwt = require('jsonwebtoken');

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

// User Register route
router.post('/user/register', async (req,res) => {
   console.log(req.body)
   try {
      await BlogPost.create({
         firstname: req.body.firstname,
         lastname: req.body.lastname,
         email: req.body.email,
         username: req.body.username,
         password: req.body.password,
      })
      res.json({ status: 'ok' });
   } catch(err) {
      console.log(err);
      res.json({ status: "error" });
   }
});

// User Login route
router.get('/user/login', async (req,res) => {
   const user = await BlogPost.findOne({
      email: req.body.email,
      password: req.body.password,
   })
   if (user) {

      const token = jwt.sign(
         {
            firstname: user.name,
            email: user.email,
         },
         'secret123' 
      )
      res.json({ status: 'ok', user: token });
   }
   else {
      res.json({ status: "error", user: false });
   }
});


router.get('/name', (req,res) => {
   const data = {
      username: "Syed Mohammed Hamza",
      age: 0.9
   };
   res.json(data);

});


module.exports = router;
