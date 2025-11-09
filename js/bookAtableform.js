function validateBooking() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var guests = document.getElementById("guests").value;
    var request = document.getElementById("request").value.trim();

   
    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("phoneErr").innerHTML = "";
    document.getElementById("dateErr").innerHTML = "";
    document.getElementById("timeErr").innerHTML = "";
    document.getElementById("guestErr").innerHTML = "";
    document.getElementById("requestErr").innerHTML = "";

    
    var namePattern = /^[A-Za-z\s]+$/;

    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;

    
    var phonePattern = /^[0-9]{10}$/;

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
    if (!emailPattern.test(email)) {
        document.getElementById("emailErr").innerHTML = "Enter a valid email format";
        return false;
    }

    if (phone === "") {
        document.getElementById("phoneErr").innerHTML = "Please enter your phone number";
        return false;
    }
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneErr").innerHTML = "Enter a valid 10-digit phone number";
        return false;
    }

    if (date === "") {
        document.getElementById("dateErr").innerHTML = "Please select a booking date";
        return false;
    }

    var today = new Date().toISOString().split("T")[0];
    if (date < today) {
        document.getElementById("dateErr").innerHTML = "Booking date cannot be in the past";
        return false;
    }

    if (time === "") {
        document.getElementById("timeErr").innerHTML = "Please select a booking time";
        return false;
    }

    if (guests === "") {
        document.getElementById("guestErr").innerHTML = "Please select number of guests";
        return false;
    }

    
    if (request !== "" && request.length < 5) {
        document.getElementById("requestErr").innerHTML = "Request should be at least 5 characters";
        return false;
    }

    return true; 
}
