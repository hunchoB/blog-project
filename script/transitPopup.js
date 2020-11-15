document.addEventListener('DOMContentLoaded', function () {


    let popap = document.getElementById("popup");
    let btn = document.getElementById("submit");
    let span = document.getElementsByClassName("close")[0];
    let toMainPage = document.getElementById("mainLink");

    function transitTo() {
        toMainPage.click();
    }

    // alert(userLogin);

    btn.onclick = function () {

        let userLogin = document.getElementById("usernamesignup").value;
        let userMail = document.getElementById("emailsignup").value;
        let password = document.getElementById("passwordsignup").value;
        let repeatPassword = document.getElementById("passwordsignup_confirm").value;

        if (userLogin != "" && userMail != ""  && password != "" && repeatPassword != "" && password == repeatPassword) {
            setTimeout(function() { $f.submit(); }, 6300);
            setTimeout(transitTo, 5000);
            popap.style.display = "block";
        } else {
            alert("Check your entering field!!");
        }
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
// 