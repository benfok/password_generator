// Assignment Code

// handler on the generate button
var generateBtn = document.querySelector("#generate");

// defining the strings that the user will select or not through the prompts as characters that can make up the password
let lowerCase = 'abcdefghijklmnopqrstuvwyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
let numeric = '1234567890';
let specialChars = ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~';


// function to create the password by appending the strings above together based on user choice
function generatePassword () {
      let selectedChars = '';
            
      if (confirm('Include lowercase letters?')) {
        selectedChars += lowerCase;
      };
      
      if (confirm('Include UPPERCASE letters?')) {
        selectedChars += upperCase;
      };
      
      if (confirm('Include numbers?')) {
        selectedChars += numeric;
      };
      
      if (confirm('Include special characters?')) {
        selectedChars += specialChars;
      }

    // validates that at least one selection has been made
      if (selectedChars === '') {
        alert('Password must contain at least one character type');
      } else {
  
    // prompts the user for a password length, converts the string to a number and validates against the criteria
      passwordLength = prompt('How long would you like the password to be? (enter a number between 8 to 128)?');
      passwordLength = Number(passwordLength);
            if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
              alert('Please enter a number between 8 and 128')
            } else {

              // loops through the user-created string for the number of times specified as the length
                    let str = '';
                    for (let i = 0; i < passwordLength; i++) {
                      // the charAt method returns a single character from the string, with the index number being randomly generated
                      str += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
                  }
                  return str;
                  };
            }
    };


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', function(event){
  event.preventDefault();
   writePassword();
});

