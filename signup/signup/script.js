function signup() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
  
    // Perform validation and signup logic here
    // You can use JavaScript to validate the form inputs and create an account
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);
    console.log("Confirm Password:", confirmPasswordInput.value);
  
    // Reset the form after successful signup
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  }