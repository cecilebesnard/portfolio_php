<?php

$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="De: $nom \n Message: $message";
$recipient = "besnardcecile81@gmail.com";
$subject = "Formulaire de contact";
$mailheader = "De: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('location: index.php');
exit;



