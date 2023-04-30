<?php
// Построчно разберем, что происходит в этом скрипте
if ($_SERVER["REQUEST_METHOD"] == "POST") { // Проверяем, была ли отправлена форма методом POST
    if (isset($_POST["name"]) && isset($_POST["phone"]) && isset($_POST["email"])) { // Проверяем, все ли обязательные поля заполнены
        $name = $_POST["name"];
        $phone = $_POST["phone"];
        $email = $_POST["email"];
        $comment = $_POST["comm"];
        
        $email_message = "Имя: ".$name."\n";
        $email_message .= "Телефон: ".$phone."\n";
        $email_message .= "Почта: ".$email."\n";
        $email_message .= "Комментарий: ".$comment."\n";
        $headers = "From: info@reservation-service.ru"; // Указываем отправителя
        mail("contact@reservation-service.ru", "Новая заявка", $email_message, $headers); // Отправляем письмо на указанный адрес электронной почты
        echo "Ваша заявка успешно отправлена!"; // Выводим сообщение об успешной отправке
        }
        else {
        echo "Ошибка: заполните обязательные поля"; // Выводим сообщение об ошибке, если не все обязательные поля заполнены
    }
}
?>