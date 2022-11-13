// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Prathamesh123:Pass%40123@cluster0.7mcolzi.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



// client.connect(err => {
//   const collection = client.db("e-comm").collection("users");
//   // perform actions on the collection object
//   let data1 = { name: "rudra", rollNo: 2011630154 }
//   let result = collection.find(data1).toArray();
//   result.then((result) => {
//     console.log(result);
//   }).catch((err) => {
//     console.log(err);
//   });


// });

import express from 'express';
import multer from 'multer'


import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
var app =   express();  
var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './uploads');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  
var upload = multer({ storage : storage}).single('myfile');  
  
app.get('/',function(req,res){  
      res.sendFile(__dirname+"/iasd.html");  
      // res.send("hi"+__dirname);

});  
  
app.post('/uploadjavatpoint',function(req,res){  
    upload(req,res,function(err) {  
        if(err) {  
            return res.end("Error uploading file."+err);  
        }  
        res.end("File is uploaded successfully!");  
    });  
});  
  
app.listen(2000,function(){  
    console.log("Server is running on port 2000");  
});  