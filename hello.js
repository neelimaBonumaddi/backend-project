const registerUser =require('./registration')
function hello()
{
    console.log("hello from node js");
}
hello();

registerUser.CheckForUser(
    registerUser.registerUser()
)