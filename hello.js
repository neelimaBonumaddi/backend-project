const registerUser =require('./registration');
const number =require('./registration');
const os = require('os');
const fs = require('fs');
const express = require('express');

function hello()
{
    console.log("hello from node js");
}
hello();

 const isExisting = registerUser.CheckForUser() 
 if(isExisting)
 {
    console.log("user is already there");
 }
 else
 {   
 registerUser.registerUser()
 }

 console.log(os.hostname());
 console.log(os.freemem());
 console.log(os.machine());
 console.log(os.homedir());
 console.log(os.loadavg());
 console.log(os.EOL);

 fs.writeFile('./sample.txt', 'Testing FS Modules',(err)=>{
    if(err){
        console.log("Error Occured While creating file");
        return;
    }
    console.log("file created succesfully");
 })

 fs.readFile('./sample.txt', 'utf8', (err, data)=>{
    if(err){
        console.log("error occured");
        return
    }
    console.log('data in file:', data);
 })

 const app=express();

app.get('/' , (req,res)=>{
   console.log(req);
   res.send("hey, welcome to the server")
})
app.get('/saybye', (req,res)=>{
   console.log(res);
   res.send("ok bye!...")
})

app.post('/saybye', (req,res)=>{
   console.log("post Route");
   res.send("post Route");
})

app.post('/postUserDetails', (req,res)=>{
   console.log(res);
   res.send("post User Details route");
})

app.put('/updateUserDetails', (req,res)=>{
   console.log(res);
   res.send("Updated User Details Route");
})

app.delete('/deleteUserDetails', (req,res)=>{
   res.send("User Route Is Deleted");
})



 app.listen(3000,()=>{
    console.log("your server is running");
 })
