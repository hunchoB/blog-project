document.addEventListener('DOMContentLoaded', function () {

    let popap = document.getElementById("popup");
    let btn = document.getElementById("submit");
    let span = document.getElementsByClassName("close")[0];
    let toMainPage = document.getElementById('notice');

    function transitTo() {
        toMainPage.click();
    }

    btn.onclick = function () {
        setTimeout(transitTo, 5000);
        popap.style.display = "block";

    }

    span.onclick = function () {
        popap.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == popup) {
            popap.style.display = "none";
        }
    }
});