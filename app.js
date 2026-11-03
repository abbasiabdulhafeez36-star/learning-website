function signUp() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (!email || !password) return;

  localStorage.setItem("signupemail", email.value);
  localStorage.setItem("signuppassword", password.value);

  window.location.href = "login.html";
}


function login() {
  let loginEmail = document.getElementById("loginemail");
  let loginPassword = document.getElementById("loginpassword");

  if (!loginEmail || !loginPassword) return;

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
  let signupBtn = document.getElementById("signup");
  let loginBtn = document.getElementById("login");
  let logoutBtn = document.getElementById("logoutBtn"); 
  let localEmail = localStorage.getItem("signupemail");
  let localPassword = localStorage.getItem("signuppassword");

  console.log(localEmail, localPassword);
  

  if (localEmail === null && localPassword === null) {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (signupBtn) signupBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";
  } 
  if (localEmail !== null && localPassword !== null)  {
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  }
});