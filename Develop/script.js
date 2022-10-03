// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for lower, upper, numeric & special characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Write password to the #password input
var writePassword = function () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function for user input to generate password
function generatePassword() {
  var password = "";
  var passwordCrit = "";
  // Ask for length of password
  var length = window.prompt("Enter character length between 8-128");
  if (length < 8 || length > 128) {
  window.alert("Please enter a number between 8-128");
    return;
  } 
  else {
    // Ask for alpha, numeric & symbol criteria
    var lower = window.confirm("If you want to include lowercase letters - Press 'Ok'.");
    var upper = window.confirm("If you want to include uppercase letters - Press 'Ok'.");
    var num = window.confirm("If you want to include numbers - Press 'Ok'.");
    var sym = window.confirm("If you want to include special characters - Press 'Ok'.");
    // If no user input was selected
   if (!lower && !upper && !num && !sym){
    window.alert("At least 1 criteria needs to be selected.");
    return;
   } 
  // User says Ok to lowercase characters
   if (lower){
    passwordCrit = passwordCrit+(lowerCase);
   }
  // User says Ok to uppercase characters 
   if (upper){
    passwordCrit = passwordCrit+(upperCase);
   }
  // User says Ok to numbers
   if (num){
    passwordCrit = passwordCrit+(numeric);
   }
  // User says Ok to symbols
   if (sym){
    passwordCrit = passwordCrit+(symbols);
   }

  // loop to select password based on user input.
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * passwordCrit.length);
    password = password + passwordCrit[index];
  }
  // Generate password
  return (password);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword()