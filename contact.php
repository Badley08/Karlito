<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "karlluberisse1308@gmail.com";
    $subject = "Nouveau message de votre portfolio - $name";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message envoyé avec succès!'); window.location.href='index.php';</script>";
    } else {
        echo "<script>alert('Erreur lors de l\\'envoi du message.'); window.location.href='index.php';</script>";
    }
}
?>