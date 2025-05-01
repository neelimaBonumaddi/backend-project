const registerUser =require('./registration')
const number =require('./registration')

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
