function signUp() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (!email || !password || !email.value || !password.value) {
    alert("Please fill in both Email and Password.");
    return;
  }

  localStorage.setItem("signupemail", email.value);
  localStorage.setItem("signuppassword", password.value);

  alert("Sign up successful!");
  window.location.href = "login.html";
}

function login() {
  let loginEmail = document.getElementById("loginemail");
  let loginPassword = document.getElementById("loginpassword");

  if (!loginEmail || !loginPassword || !loginEmail.value || !loginPassword.value) {
    alert("Please enter your email and password.");
    return;
  }

  let storedEmail = localStorage.getItem("signupemail");
  let storedPassword = localStorage.getItem("signuppassword");

  if (storedEmail === loginEmail.value && storedPassword === loginPassword.value) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Incorrect email or password.");
  }
}

function logout() {
  localStorage.removeItem("signupemail");
  localStorage.removeItem("signuppassword");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  let signupBtn = document.getElementById("signupBtn");
  let loginBtn = document.getElementById("loginBtn");
  let logoutBtn = document.getElementById("logoutBtn");
  let profilebtn = document.getElementById("profilebtn");

  let localEmail = localStorage.getItem("signupemail");
  let localPassword = localStorage.getItem("signuppassword");

  const isLoggedIn = localEmail !== null && localPassword !== null;

  if (loginBtn) loginBtn.style.display = isLoggedIn ? "none" : "inline-block";
  if (signupBtn) signupBtn.style.display = isLoggedIn ? "none" : "inline-block";
  if (logoutBtn) logoutBtn.style.display = isLoggedIn ? "inline-block" : "none";
  if (profilebtn) profilebtn.style.display = isLoggedIn ? "inline-block" : "none";
});