function validateContact() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("msgErr").innerHTML = "";

    var namePattern = /^[A-Za-z\s]+$/;

    if (name === "") {
        document.getElementById("nameErr").innerHTML = "Please enter your name";
        return false;
    }
    if (!namePattern.test(name)) {
        document.getElementById("nameErr").innerHTML = "Name must contain only letters";
        return false;
    }

    if (email === "") {
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailErr").innerHTML = "Enter a valid email format";
        return false;
    }

    if (message === "") {
        document.getElementById("msgErr").innerHTML = "Please enter your message";
        return false;
    }

    if (message.length < 10) {
        document.getElementById("msgErr").innerHTML = "Message must be at least 10 characters long";
        return false;
    }

    return true; 
}
