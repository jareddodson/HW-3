// Assignment code here
var passwordLength = window.prompt("Choose a password length of at least 8 characters and no more than 128 characters");
console.log(passwordLength);
var passwordCharacters = window.prompt("What would you like to include: lowercase, uppercase, numeric, and/or special characters?");
console.log(passwordCharacters);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
