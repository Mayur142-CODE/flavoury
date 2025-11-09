function validateReply(event) {
    if (!event) event = window.event;

    if (event.preventDefault) event.preventDefault();

    var to = document.getElementById("replyTo").value.trim();
    var subject = document.getElementById("replySubject").value.trim();
    var message = document.getElementById("replyMessage").value.trim();

    document.getElementById("replyToErr").innerHTML = "";
    document.getElementById("replySubjectErr").innerHTML = "";
    document.getElementById("replyMessageErr").innerHTML = "";

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (to === "") {
        document.getElementById("replyToErr").innerHTML = "Please enter recipient email";
        return false;
    }
    if (!emailPattern.test(to)) {
        document.getElementById("replyToErr").innerHTML = "Enter a valid email address";
        return false;
    }

    if (subject === "") {
        document.getElementById("replySubjectErr").innerHTML = "Please enter a subject";
        return false;
    }
    if (subject.length < 3) {
        document.getElementById("replySubjectErr").innerHTML = "Subject must be at least 3 characters";
        return false;
    }

    if (message === "") {
        document.getElementById("replyMessageErr").innerHTML = "Please write a message";
        return false;
    }
    if (message.length < 10) {
        document.getElementById("replyMessageErr").innerHTML = "Message must be at least 10 characters long";
        return false;
    }

    try {
        var modalEl = document.getElementById('replyModal');
        var modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (!modalInstance) modalInstance = new bootstrap.Modal(modalEl);
        modalInstance.hide();
    } catch (e) {
        console.log("Modal closed");
    }

    document.getElementById("replyForm").reset();

    return false;
}
