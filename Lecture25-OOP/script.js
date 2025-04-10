function validate() {
    const error = document.getElementById("errorMessage");
  
    const username = document.getElementById("username").value;
    if (username === "") {
      error.textContent = "Username is empty";
      return false;
    }
  
    const email = document.getElementById("mail").value;
    if (email === "") {
      error.textContent = "Email is empty";
      return false;
    }
  
    const password = document.getElementById("password").value.trim();
    if (password === "") {
      error.textContent = "Password is empty";
      return false;
    }
  
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword === "") {
      error.textContent = "Confirm Password is empty";
      return false;
    }
  
    if (password !== confirmPassword) {
      error.textContent = "Passwords do not match";
      return false;
    }
  
    return true;
  }  