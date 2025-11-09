function validateLogin() {
    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value.trim();

    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email";
        return false;
    }

    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailFormat.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email format";
        return false;
    }

    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Please enter your password";
        return false;
    }

    if (password.length < 6 || password.length > 12) {
        document.getElementById("passwordError").innerHTML = "Password must be 6–12 characters long";
        return false;
    }

    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!passFormat.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must contain at least 1 letter and 1 number";
        return false;
    }

    return true; 
}

function validateRegister() {
    var first = document.getElementById("firstName").value.trim();
    var last = document.getElementById("lastName").value.trim();
    var email = document.getElementById("regEmail").value.trim();
    var password = document.getElementById("regPassword").value.trim();
    var cpassword = document.getElementById("confirmPassword").value.trim();
    var terms = document.getElementById("terms").checked;

    document.getElementById("firstErr").innerHTML = "";
    document.getElementById("lastErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("passErr").innerHTML = "";
    document.getElementById("cpassErr").innerHTML = "";
    document.getElementById("termsErr").innerHTML = "";

   
 var namePattern = /^[A-Za-z\s]+$/;

    if (first === "") {
        document.getElementById("firstErr").innerHTML = "Please enter your first name";
        return false;
    }
    if (!namePattern.test(first)) {
        document.getElementById("firstErr").innerHTML = "Name must contain only letters";
        return false;
    }
    if (!isNaN(first)) {
        document.getElementById("firstErr").innerHTML = "Name must contain only letters";
        return false;
    }

    if (last === "") {
        document.getElementById("lastErr").innerHTML = "Please enter your last name";
        return false;
    }
    if (!namePattern.test(last)) {
        document.getElementById("lastErr").innerHTML = "Name must contain only letters";
        return false;
    }
    if (!isNaN(last)) {
        document.getElementById("lastErr").innerHTML = "Name must contain only letters";
        return false;
    }

    
    if (email === "") {
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
    }

    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailFormat.test(email)) {
        document.getElementById("emailErr").innerHTML = "Enter a valid email format";
        return false;
    }


    if (password === "") {
        document.getElementById("passErr").innerHTML = "Please enter your password";
        return false;
    }

    if (password.length < 6 || password.length > 12) {
        document.getElementById("passErr").innerHTML = "Password must be 6–12 characters long";
        return false;
    }

    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!passFormat.test(password)) {
        document.getElementById("passErr").innerHTML =
            "Password must contain at least 1 letter and 1 number";
        return false;
    }

    
    if (cpassword === "") {
        document.getElementById("cpassErr").innerHTML = "Please confirm your password";
        return false;
    }

    if (password !== cpassword) {
        document.getElementById("cpassErr").innerHTML = "Passwords do not match";
        return false;
    }

    if (!terms) {
        document.getElementById("termsErr").innerHTML = "Please accept the terms and privacy policy";
        return false;
    }

    return true; 
}
