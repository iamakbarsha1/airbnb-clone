// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const BlogPost = require('./Backend/models/blogPost');

// const BlogPost = require('../Backend/models/blogPost');
const routes = require('./Backend/routes/api')


const app = express();
const PORT = process.env.PORT || 8080; // step 1 - port can be changed



// connecting mongoose / mongodb
// step 2 - process.env.MONGODB_URI
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

// Used to check whether mongoose is connected or not
mongoose.connection.on('connected', () => {
   console.log('Mongoose is Connected!!');
});

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Saving our data to mongodb
// const data = {
//    firstname: "",
//    lastname: ""
// };

// const newBlogPost = new BlogPost(data); //instance of Model


// newBlogPost.save((error) => {
//    if(error) {
//       console.log("Oops! Error Occured");
//    } else {
//       console.log("data has been Saved !");
//    }
// });

app.use(cors());
// Http request logger
app.use(morgan('tiny'));
app.use('/api', routes);

//step 3 - process.env.NODE_ENV === "production" 
// if(process.env.NODE_ENV === "production") {
//    app.use(express.static(".next"))
// }

app.listen(PORT, console.log(`Server is running at : ${PORT}`));


// const {MongoClient} = require("mongodb");

// async function main() {

//    const uri = "mongodb+srv://demo:akbarsha@cluster0.b9cc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//    // Instance of MongoClient
//    const client = new MongoClient(uri);

//    // Connect My Cluster
//    try {
//       await client.connect();

//    // calling listDatabases function
//       // await listDatabases(client);

//    // calling createListing
//       // await createListing(client, {
//       //    name: "Akbar Sha Hotel",
//       //    summary: "a 5-star hotel",
//       //    bedrooms: 70,
//       //    bathrooms: 70
//       // });

//    // calling MultipleListings
//       await createMultipleListings(client, [
//          {
//             name: "Naushad",
//             summary: "Modern House",
//             property_type: "House",
//             bedrooms: 5,
//             bathrooms: 4.5,
//             beds: 5
//          },
//          {
//             name: "Syed Mohammed Hamza",
//             summary: "Ruby Landmarks",
//             property_type: "Appartment",
//             bedrooms: 100,
//             bathrooms: 5,
//             beds: 200
//          },
//          {
//             name: "Sahina Begum",
//             summary: "Beach View Resort",
//             property_type: "Resort",
//             bedrooms: 5,
//             bathrooms: 4.6,
//             beds: 10,
//             last_review: new Date()
//          }
//       ]);

//    } catch (e) {
//       console.error(e);
//    } finally {
//       await client.close();
//    }
// }

// // Call main() function
// main().catch(console.error);

// // Create Single Listing (C_RUD) - insertOne()
// async function createListing(client, newListing) {
//    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne
//    (newListing);

//    console.log(`New listing created with the following id: ${result.insertedId}`);
// }

// // Create Multiple Listing (C_RUD) - insertMany()
// async function createMultipleListings(client, newListings) {
//    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany
//    (newListings);

//    console.log(`${result.insertedCount} listing created with the following ids :`);
//    console.log(result.insertedIds);
// }

// // List Databases function
// async function listDatabases(client) {
//       const databasesList = await client.db().admin().listDatabases();

//       console.log("Databases :");
//       databasesList.databases.forEach(db => {
//          console.log(`- ${db.name}`);
//       });
// }