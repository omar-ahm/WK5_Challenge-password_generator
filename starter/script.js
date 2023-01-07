// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password length
function getPasswordOptions() {
 var passwordLength = prompt("Enter the length of your password (You must enter a number only between 10-64 characters)");
 while (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
  alert("Password length must be between 10-64 characters. Try again. "); // Alert is the user enters a below 10 or over 64
  passwordLength = prompt("Enter the length of your password (Must be between 10-64 characters"); // Then prompts user again for input
 } // This loop will continue running until the user enters a number between 10-64

 var specChar = confirm("Do you want to include $pecial characters? ");
 var numChar = confirm("Do you want to include numeric characters? ");
 var lowChar = confirm("Do you want to include lowerCASE characters? ");
 var uppChar = confirm("Do you want to include UPPERcase characters? ")

 // key calue pairs for option selection 
 var passwordOptions = {
  passwordLength: passwordLength,
  specChar: specChar,
  numChar: numChar,
  lowChar: lowChar,
  uppChar: uppChar
 };
 return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var optionsSelected = [];

  // Access the character type arrays to combine and create the password
  // that gets stored in the "optionsSelected" array
  if (options.specChar){
    optionsSelected = optionsSelected.concat(specialCharacters);
  }
  if (options.numChar){
    optionsSelected = optionsSelected.concat(numericCharacters);
  }
  if (options.lowChar){
    optionsSelected = optionsSelected.concat(lowerCasedCharacters);
  }
  if (options.uppChar){
    optionsSelected = optionsSelected.concat(upperCasedCharacters);
  }

  // Declare variable for where the final password will be stored
  var password = "";

  // For loop to iterate and generate password based on user selections
  for (var i = 0; i <options.passwordLength; i++) {
    password += getRandom(optionsSelected)
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);