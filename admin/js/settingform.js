function validateSettings() {
 
    var siteTitle = document.getElementById("siteTitle").value.trim();
    var tagline = document.getElementById("tagline").value.trim();
    var logoUrl = document.getElementById("logoUrl").value.trim();
    var ctaText = document.getElementById("ctaText").value.trim();
    var address1 = document.getElementById("address1").value.trim();
    var city = document.getElementById("city").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var primaryColor = document.getElementById("primaryColor").value.trim();
    var secondaryColor = document.getElementById("secondaryColor").value.trim();
    var accentColor = document.getElementById("accentColor").value.trim();
    var neutralColor = document.getElementById("neutralColor").value.trim();
    var fontStyle = document.getElementById("fontStyle").value;

    document.querySelectorAll("span[id$='Err']").forEach(e => e.innerHTML = "");

    var urlPattern = /^(https?:\/\/)?([\w\d\-]+\.)+[\w]{2,}(\/.*)?$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    var phonePattern = /^[0-9]{10}$/;
    var hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    if (siteTitle === "") {
        document.getElementById("siteTitleErr").innerHTML = "Please enter site title";
        return false;
    }

    if (tagline === "") {
        document.getElementById("taglineErr").innerHTML = "Please enter tagline";
        return false;
    }

    if (logoUrl === "" || !urlPattern.test(logoUrl)) {
        document.getElementById("logoErr").innerHTML = "Enter valid logo URL (https://...)";
        return false;
    }

    if (ctaText === "") {
        document.getElementById("ctaErr").innerHTML = "Please enter header CTA text";
        return false;
    }

    if (address1 === "") {
        document.getElementById("address1Err").innerHTML = "Please enter address line 1";
        return false;
    }

    if (city === "") {
        document.getElementById("cityErr").innerHTML = "Please enter city name";
        return false;
    }

    if (phone === "" || !phonePattern.test(phone.replace(/\D/g, ""))) {
        document.getElementById("phoneErr").innerHTML = "Enter a valid 10-digit phone number";
        return false;
    }

    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailErr").innerHTML = "Enter a valid email";
        return false;
    }

    if (!hexPattern.test(primaryColor)) {
        document.getElementById("primaryColorErr").innerHTML = "Enter valid HEX color (e.g. #0d6efd)";
        return false;
    }
    
    if (!hexPattern.test(secondaryColor)) {
        document.getElementById("secondaryColorErr").innerHTML = "Enter valid HEX color";
        return false;
    }
    if (!hexPattern.test(accentColor)) {
        document.getElementById("accentColorErr").innerHTML = "Enter valid HEX color";
        return false;
    }
    if (!hexPattern.test(neutralColor)) {
        document.getElementById("neutralColorErr").innerHTML = "Enter valid HEX color";
        return false;
    }

    if (fontStyle === "") {
        document.getElementById("fontStyleErr").innerHTML = "Please select font style";
        return false;
    }

    return true; 
}
