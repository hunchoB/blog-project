let popap = document.getElementById("popup");
let btn = document.getElementById("submit");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
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