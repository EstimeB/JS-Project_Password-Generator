
// Arrays
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t','u', 'v', 'w', 'x', 'y', 'z'];
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'p', 'Q', 'R', 'S','T','U', 'V', 'W', 'X', 'Y', 'Z'];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
let charLength = 8;
let arrChoice = [];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let accPrompts = prompts();
  let passwordText = document.querySelector("#password");
  if (accPrompts) {
    let genPassword = generatePassword();
    passwordText.value = genPassword;
  }
  else {
    passwordTest.value = "";
  }

}

// Generate password function
function generatePassword() {
  let password = "";
  for (let i = 0; i < charLength; i++) {
      let randomIndex = Math.floor(Math.random() * accPrompts.length);
      password = password + accPrompts[randomIndex];
  }
  return password;
}

// Generate functions
function prompts() {
  accPrompts = [];
  charLength = parseInt(prompt("How many characters would you like in your password?"));
  if (isNaN(charLength) || charLength < 8 || charLength > 128 ) {
      alert("Must be between 8 and 128 characters.");
      return;
  }
  if (confirm) {
    arrChoice = arrChoice.concat(upper,lower, numbers, symbols);
  }
  return true;
}