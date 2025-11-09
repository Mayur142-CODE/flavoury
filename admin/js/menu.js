function validateModalItem() {
    var name = document.getElementById("modalItemName").value.trim();
    var category = document.getElementById("modalCategory").value;
    var price = document.getElementById("modalPrice").value.trim();
    var status = document.getElementById("modalStatus").value;
    var image = document.getElementById("modalImage").value.trim();
    var desc = document.getElementById("modalDesc").value.trim();

    
    document.getElementById("modalItemNameErr").innerHTML = "";
    document.getElementById("modalCategoryErr").innerHTML = "";
    document.getElementById("modalPriceErr").innerHTML = "";
    document.getElementById("modalStatusErr").innerHTML = "";
    document.getElementById("modalImageErr").innerHTML = "";
    document.getElementById("modalDescErr").innerHTML = "";

    var namePattern = /^[A-Za-z\s]+$/;
    var urlPattern = /^(https?:\/\/)?([\w\d\-]+\.)+[\w]{2,}(\/.*)?$/;

    if (name === "") {
        document.getElementById("modalItemNameErr").innerHTML = "Please enter item name";
        return false;
    }
    if (!namePattern.test(name)) {
        document.getElementById("modalItemNameErr").innerHTML = "Item name must contain only letters";
        return false;
    }

    if (category === "") {
        document.getElementById("modalCategoryErr").innerHTML = "Please select category";
        return false;
    }

    if (price === "" || parseFloat(price) <= 0) {
        document.getElementById("modalPriceErr").innerHTML = "Enter a valid price greater than 0";
        return false;
    }

    if (status === "") {
        document.getElementById("modalStatusErr").innerHTML = "Please select status";
        return false;
    }

    if (image === "" || !urlPattern.test(image)) {
        document.getElementById("modalImageErr").innerHTML = "Enter a valid image URL (https://...)";
        return false;
    }

    if (desc === "") {
        document.getElementById("modalDescErr").innerHTML = "Please enter description";
        return false;
    }

    if (desc.length < 10) {
        document.getElementById("modalDescErr").innerHTML = "Description must be at least 10 characters long";
        return false;
    }

    return true; 
}
