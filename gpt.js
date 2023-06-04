const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  if (username === "user" && password === "password") {
    // Redirect to dashboard page
    window.location.href = "dashboard.html";
  } else {
    errorMessage.innerText = "Invalid username or password";
  }
});
