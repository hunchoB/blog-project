document.addEventListener('DOMContentLoaded', function () {
    let submitButton = document.getElementById('submit');
    let toMainPage = document.getElementById('notice');


    function transitTo() {
        toMainPage.click();
    }

    submitButton.onclick = function () {
        setTimeout(transitTo, 5000);
    }
});