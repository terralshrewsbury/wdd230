document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const message = document.getElementById("formmessage");

    confirmPassword.addEventListener("blur", checkPasswordMatch);

    function checkPasswordMatch() {
        if (password.value !== confirmPassword.value) {
            showMessage("❗❗ Passwords DO NOT MATCH ❗❗", "#fff0f3");
            clearPasswordFields();
        } else {
            hideMessage();
            confirmPassword.classList.remove("invalid");
        }
    }

    function showMessage(msg, bgColor) {
        message.textContent = msg;
        message.style.visibility = "visible";
        confirmPassword.style.backgroundColor = bgColor;
        confirmPassword.focus();
    }

    function hideMessage() {
        message.style.visibility = "hidden";
        confirmPassword.style.backgroundColor = "#fff";
    }

    function clearPasswordFields() {
        confirmPassword.value = "";
    }
});
function updateRatingValue() {
    var rangeInput = document.getElementById("pageRating");
    var ratingValueSpan = document.getElementById("ratingValue");

    ratingValueSpan.textContent = rangeInput.value;
}