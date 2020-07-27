// declared variable inquirer find file inquirer
// store it in var fs

var inquirer = require("inquirer");
var fs = require('fs');
var http = require('http'); // 1 - Import Node.js core module 

const sayHello = require('./greeting.js') //declare variable and insert contents of file greetings.js
sayHello() // display sayHello message

// prompt user with User questions using inquirer  
// after user inputs data write password to userPassword.txt file 
function userQuestions (){
    inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username"
      
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  
  ])
  .then(function(data) {
      if (data.password !== data.confirm){ // checking if both entered passwords are same if not reenter all the information
        console.log("Passwords do not match, Please re-enter your information");
        userQuestions();
      }else{
        var fs = require("fs");
// storing user entered information in the userPassword.txt
        fs.writeFile("userPassword.txt",data.username + " : " + data.password, function(err) {

        if (err) {
            return console.log(err);
        }else{
            console.log("Success!");
        }
    
});
}
});
}
userQuestions();
  
/*var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..


    
    


});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..') */