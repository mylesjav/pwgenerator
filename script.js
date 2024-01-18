var lowerCase=("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")
var upperCase=("A,B,C,D,E,F,G,H,I,J,K,L,M,O,N,P,Q,R,S,T,U,V,W,X,Y,Z")
var number=("0","1","2","3","4","5","6","7","8","9")
var specialCharacter=("!","@","#","$","%","^","&","*")
var passwordLength;
var userChoice;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecialcharacter;
var userCriteria=[];
var allCriteria;
var passwordBlank = []
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // console.log("hey you clicked the button")
  var password = passwordBlank.join("");
  console.log("Your Password is: " + password);
return password;
  // return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// ask for number of characters
passwordLength = prompt("Choose number of characters between 8 and 128 for your password");
console.log("Password length " + passwordLength);


// if(passwordLength) {

  if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("You must choose between 8 and 128");
  console.log("Password length " + passwordLength);
}
else {

// ask if they want lowercase
confirmLowercase = confirm("Did you want lowercase letters in password?");
// ask if they want uppercase
confirmUppercase = confirm("Did you want uppercase letters in password?");
// ask if they want digits
confirmNumber = confirm("Did you want digits in your password?");
// ask if they want special characters
confirmSpecialcharacter = confirm("Did you want special characters in your password?");
}


// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }
// No answer then
if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecialcharacter) {
  userCriteria = alert("You must choose a criteria");
// 4 true options
} else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecialcharacter) {
  userCriteria = lowerCase.concat(upperCase, number, specialCharacter);
  console.log(userCriteria);
}
// 3 true options
else if (confirmLowercase && confirmUppercase && confirmNumber) {
  userCriteria = lowerCase.concat(upperCase, number);
  console.log(userCriteria);
}
else if (confirmLowercase && confirmUppercase && confirmSpecialcharacter) {
  userCriteria = lowerCase.concat(upperCase, specialCharacter);
  console.log(userCriteria);
}
else if (confirmLowercase && confirmNumber && confirmSpecialcharacter) {
  userCriteria = lowerCase.concat(number, specialCharacter);
  console.log(userCriteria);
}
else if (confirmUppercase && confirmNumber && confirmSpecialcharacter) {
  userCriteria = upperCase.concat(number, specialCharacter);
  console.log(userCriteria);
}
// 2 true options
else if (confirmLowercase && confirmUppercase) {
  userCriteria = lowerCase.concat(upperCase);
  console.log(userCriteria);
}
else if (confirmLowercase && confirmNumber) {
  userCriteria = lowerCase.concat(number);
  console.log(userCriteria);
}
else if (confirmLowercase && confirmSpecialcharacter) {
  userCriteria = lowerCase.concat(specialCharacter);
  console.log(userCriteria);
}
else if (confirmUppercase && confirmNumber) {
  userCriteria = upperCase.concat(number);
  console.log(userCriteria);
}
else if (confirmUppercase && confirmSpecialcharacter) {
  userCriteria = upperCase.concat(special);
  console.log(userCriteria);
}
else if (confirmNumber && confirmSpecialcharacter) {
  userCriteria = number.concat(specialCharacter);
  console.log(userCriteria);
}
// 1 true option
else if (confirmLowercase) {
  userCriteria = lowerCase;
  console.log(userCriteria);
}
else if (confirmUppercase) {
  userCriteria = blankUpper.concat(upperCase);
  console.log(userCriteria);
}
else if (confirmNumber) {
  userCriteria = number;
  console.log(userCriteria);
}
else if (confirmSpecialcharacter) {
  userCriteria = specialCharacter;
  console.log(userCriteria);
}

var password = [];

//for loop random selection
for (var i = 0; i < passwordLength; i++) {
  var allCriteria = userCriteria[Math.floor(Math.random() * userCriteria.length)];
  passwordBlank.push(allCriteria);
  console.log(allCriteria);
}

  // Empty variable for the password length
 
  



// Join and return the password 
//   var password = passwordBlank.join("");
//   console.log("Your Pasword is: " + password);
// return password;
// }

  

