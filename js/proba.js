let form = document.getElementById("anketa");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартное действие браузера при отправке формы
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let comm = document.getElementById("comm").value;
    let error = false;

    if (!name.trim() || !phone.trim() || !email.trim()) {
        message.innerHTML = "Ошибка: заполните обязательные поля";
        error = true;
    } else if (!/\d{10}/.test(phone)) {
        message.innerHTML = "Ошибка: неправильно введен номер телефона";
        error = true;
    } else if (!/^.+@.+\..+$/.test(email)) {
        message.innerHTML = "Ошибка: неправильно введен адрес электронной почты";
        error = true;
    }

    if (!error) {
        let xhr = new XMLHttpRequest(); // Создаем объект XMLHttpRequest
        xhr.open("POST", "send.php"); // Указываем метод и адрес, на который отправляем запрос
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); // Указываем тип контента
        xhr.onload = function() {
            if (xhr.status === 200) {
                message.innerHTML = xhr.responseText; // Выводим сообщение об успешной отправке или об ошибке
                form.reset(); // Очищаем форму
            } else {
                message.innerHTML = "Ошибка: произошла ошибка при отправке заявки"; // Выводим сообщение об ошибке
            }
        };
        xhr.send("name=" + name + "&phone=" + phone + "&email=" + email + "&comm=" + comm); // Отправляем данные формы
    }
});