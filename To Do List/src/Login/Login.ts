function signInUser() {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
  
    const email = emailInput.value;
    const password = passwordInput.value;
  
    signIn(email, password);
  }
  