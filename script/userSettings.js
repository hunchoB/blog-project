"use strict"

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', formImage.files[0]);

        if (error === 0) {
            form.classList.add('_sending');
            // let response = await fetch('Чудесный скрипт который должен написать бэекендер', {
            //     method: 'POST',
            //     body: formData
            // });
            // if (response.ok){
            //     let result = await response.json();
            //     alert(result.message);
            //     formPreview.innerHTML = '';
            //     form.reset();
            // }


            // form.classList.remove('_sending'); //Когда форма отправится то раскомментировать
        } else {
            alert('Заполните обязательные поля!!');


            // form.classList.remove('_sending'); //Когда форма отправится то раскомментировать
        }

    }

    function formValidate(form) {
        let error = 0;

        let oldPassword = document.getElementById("formOldPassword");
        let password = document.getElementById("formPassword");
        let repeatPassword = document.getElementById("formRepeatPassword");

        if (oldPassword.value != '' || password.value != '' || repeatPassword.value != '') {

            oldPassword.classList.add("_req");
            password.classList.add("_req");
            repeatPassword.classList.add("_req");

            let formReq = document.querySelectorAll('._req');

            for (let i = 0; i < formReq.length; i++) {
                const input = formReq[i];
                formRemoveError(input);

                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }

            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');

    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(input.value);
    }

    const formImage = document.getElementById('formImage');

    const formPreview = document.getElementById('formPreview');

    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file) {

        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Добавлять можно только изображения!');
            formImage.value = '';
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert('Слишкой большой файл. Необхожимо менее 2 МБ.');
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
        };
        reader.onerror = function (e) {
            alert("Упс, какая- то ошибка!");
        };
        reader.readAsDataURL(file);

    }
});