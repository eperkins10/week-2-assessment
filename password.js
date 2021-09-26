const { SSL_OP_NO_QUERY_MTU } = require('constants');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome to the validator tool! Please enter a password", function(input){
	tokens = input.split(' ');
	
	password = tokens[0];
	

    console.log(password);
            
if (password.length >= 10) {
                console.log("Success! the password worked");
            } else {
                console.log("Oops! your password isn't long enough")

            }
    reader.close()

});