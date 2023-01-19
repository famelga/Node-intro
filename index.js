const inquirer = require('inquirer');


console.log("Hello, world!");
function hi() {
    inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "username",
        message: "Hi, what's your name?",
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log("Hi, " + answers.username + " nice to meet you!");
    })
}

hi();

