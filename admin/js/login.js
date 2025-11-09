function validateAdmin() {
    var email = document.getElementById("adminEmail").value.trim();
    var password = document.getElementById("adminPassword").value.trim();

   
    document.getElementById("adminEmailErr").innerHTML = "";
    document.getElementById("adminPassErr").innerHTML = "";

    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;

    if (email === "") {
        document.getElementById("adminEmailErr").innerHTML = "Please enter admin email";
        return false;
    }

    if (!emailPattern.test(email)) {
        document.getElementById("adminEmailErr").innerHTML = "Enter a valid email format";
        return false;
    }

    if (password === "") {
        document.getElementById("adminPassErr").innerHTML = "Please enter password";
        return false;
    }

    if (password.length < 6 || password.length > 12) {
        document.getElementById("adminPassErr").innerHTML = "Password must be 6–12 characters long";
        return false;
    }

    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!passFormat.test(password)) {
        document.getElementById("adminPassErr").innerHTML =
            "Password must contain at least 1 letter and 1 number";
        return false;
    }

    return true; 
}
