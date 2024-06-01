function login() {
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

 
    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }

  
    window.location.href = "dashboard.html";
}
