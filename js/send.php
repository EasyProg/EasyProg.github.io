<?php
$fio = $_POST['fio'];
$phone = $_POST['phone'];
$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$fio = urldecode($fio);
$phone = urldecode($phone);
$fio = trim($fio);
$phone = trim($phone);
//echo $fio;
//echo "<br>";
//echo $email;
if     (mail("kovkamy@gmail.com", "Заявка с сайта одежды", "ФИО:".$fio.". Phone: ".$phone ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
       echo "при отправке сообщения возникли ошибки";
}?>
