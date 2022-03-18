// Assignment Code
let numbersEl = document.createElement("nUmbers");
let lowerCaseEl = document.createElement("lowerCase");
let upperCaseEl = document.createElement("upperCase");
let symbolsEl = document.createElement("sYmbols");
let lenghtEl = document.createElement("charLength");

let nUmbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t','u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'p', 'Q', 'R', 'S','T','U', 'V', 'W', 'X', 'Y', 'Z'];
let sYmbols = ['!', '@', '#', '$', '%', '^', '&', '*'];

let randomNumbers = nUmbers.concat(lowerCase, upperCase, sYmbols);

function generatePassword() {
  let password = ""
  let charLength = prompt("How many characters would you like in your password?")
  // Validation
  while ( parseInt(charLength) < "8" || parseInt(charLength) > 128 ) {
    charLength = prompt("Must be between 8 and 128 characters")
  }
} 

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

if (charLength >= 8 && charLength <= 128) {
  passwordText += prompt("randomNumbers")();
}

