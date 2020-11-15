document.addEventListener('DOMContentLoaded', function () {


    const form = document.querySelector(".form");
    const input = document.querySelector(".input");
    const button = document.querySelector(".button")
    const modal = document.querySelector(".popup");
    const toMainPage = document.getElementById("mainLink");

    function submit(e) {
        const popupDisplay = getComputedStyle(popup).display;
        popupDisplay === "none" && e.preventDefault();

        let userLogin = document.getElementById("usernamesignup").value;
        let userMail = document.getElementById("emailsignup").value;
        let password = document.getElementById("passwordsignup").value;
        let repeatPassword = document.getElementById("passwordsignup_confirm").value;

        if (userLogin != "" && userMail != "" && password != "" && repeatPassword != "" && password == repeatPassword) {
            popup.style.display = 'block';
            setTimeout(() => form.submit(), 4000);
            setTimeout(() => toMainPage.click(), 5000);
        } else {
            alert("Check your entering field!!");
        }
    }
    form.addEventListener("submit", submit);

});
// 