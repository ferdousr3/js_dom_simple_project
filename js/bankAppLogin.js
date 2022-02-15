document.getElementById("login-btn").addEventListener("click", function () {
  //user Eamil
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //user password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  if (userEmail == "bankapp@gmail.com" && userPassword == "bank") {
    window.location.href = "banking.html";
  }
});
