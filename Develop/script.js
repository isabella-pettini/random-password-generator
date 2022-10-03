// Assignment Code
var generateBtn = document.querySelector("#generate");


// Variables for lower, upper, numeric, special characters

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Array for password criteria
var passwordCriteria = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!@#$%^&*_-+="];

// Prompts for user input
// var userChoice1 = window.prompt("Lowercase Letters? Yes or No: ");
// var userChoice2 = window.prompt("Uppercase Letters? Yes or No: ");
// var userChoice3 = window.prompt("Numbers? Yes or No: ");
// var userChoice4 = window.prompt("Special Characters? Yes or No: ");
// var userChoice5 = window.prompt("Enter character length between 8-128");

// Add function for user input
function generatePassword () {
  var length = window.prompt("Select characters between 8-128:");
  if (!length) {
    alert("Please select a value.");
  } else if (length > 8 || length < 128); {
    alert("Password length must be between 8 and 128 characters");
  } if (length < 8 || length > 128) {
    
  }
}


// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword()



//array methods to store all details for gen password
//start with writing out logic for password generator

// promts for password criteria
// length of character prompt 8 - 128 characters
// character types prompt - lowercase, uppercase, numeric, and or special characters


// have 4 variables for the criteria

