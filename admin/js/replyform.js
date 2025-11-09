function validateReply(event) {
    // If called from onsubmit with event, capture it. If not provided, try to get it.
    if (!event) event = window.event;

    // Prevent default submission — we handle closing / sending here.
    if (event.preventDefault) event.preventDefault();

    var to = document.getElementById("replyTo").value.trim();
    var subject = document.getElementById("replySubject").value.trim();
    var message = document.getElementById("replyMessage").value.trim();

    // Clear previous errors
    document.getElementById("replyToErr").innerHTML = "";
    document.getElementById("replySubjectErr").innerHTML = "";
    document.getElementById("replyMessageErr").innerHTML = "";

    // Patterns
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    // Validate To (email)
    if (to === "") {
        document.getElementById("replyToErr").innerHTML = "Please enter recipient email";
        return false;
    }
    if (!emailPattern.test(to)) {
        document.getElementById("replyToErr").innerHTML = "Enter a valid email address";
        return false;
    }

    // Validate Subject
    if (subject === "") {
        document.getElementById("replySubjectErr").innerHTML = "Please enter a subject";
        return false;
    }
    if (subject.length < 3) {
        document.getElementById("replySubjectErr").innerHTML = "Subject must be at least 3 characters";
        return false;
    }

    // Validate Message
    if (message === "") {
        document.getElementById("replyMessageErr").innerHTML = "Please write a message";
        return false;
    }
    if (message.length < 10) {
        document.getElementById("replyMessageErr").innerHTML = "Message must be at least 10 characters long";
        return false;
    }

    // ===== If you want to actually send the reply via AJAX, do it here =====
    // Example (placeholder):
    // var payload = { to: to, subject: subject, message: message };
    // fetch('/admin/send-reply', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    //   .then(res => res.json()).then(resp => { /* handle response */ });

    // Close the modal on success
    try {
        var modalEl = document.getElementById('replyModal');
        var modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (!modalInstance) modalInstance = new bootstrap.Modal(modalEl);
        modalInstance.hide();
    } catch (e) {
        // bootstrap not available or an error — fallback to hide via data attribute
        console.log("Modal closed");
    }

    // Optionally clear the form after successful send
    document.getElementById("replyForm").reset();

    // Show a quick success feedback — you can replace this with a nicer toast
    // alert("Reply sent successfully"); // optional

    // We already handled everything, prevent default navigation/submission
    return false;
}
