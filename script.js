// function signup() {
//     var nameInput = document.getElementById("name");
//     var emailInput = document.getElementById("email");
//     var passwordInput = document.getElementById("password");
//     var confirmPasswordInput = document.getElementById("confirm-password");
  
//     console.log("Name:", nameInput.value);
//     console.log("Email:", emailInput.value);
//     console.log("Password:", passwordInput.value);
//     console.log("Confirm Password:", confirmPasswordInput.value);
  

//     nameInput.value = "";
//     emailInput.value = "";
//     passwordInput.value = "";
//     confirmPasswordInput.value = "";
//   }

function signup() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm-password");

  // Remove whitespaces from all inputs
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var password = passwordInput.value.trim();
  var confirmPassword = confirmPasswordInput.value.trim();

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);

  // Check if password is a float or integer
  if (!isNaN(password)) {
    if (password.includes('.')) {
      console.log("Password is a float.");
    } else {
      console.log("Password is an integer.");
    }
  } else {
    console.log("Password is not a number.");
  }

  // Convert the current date to a number
  var currentDate = new Date();
  var dateAsNumber = +currentDate;
  console.log("Current Date as Number:", dateAsNumber);

  // Reset the form
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
}

