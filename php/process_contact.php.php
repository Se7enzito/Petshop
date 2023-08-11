<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $newsletter = isset($_POST["newsletter"]) ? "Yes" : "No";

    if (empty($name) || empty($email) || empty($message)) {
        echo "Error: Some fields are empty. Please fill out required fields.";
    } else {
        $to = "your_email@example.com"; // Substitua pelo seu endereço de e-mail
        $subject = "New contact from the website";
        $messageContent = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message\nNewsletter: $newsletter";

        if (mail($to, $subject, $messageContent)) {
            echo "Message sent successfully! Thank you for contacting us.";
        } else {
            echo "Sorry, an unexpected error occurred. Please try again later.";
        }
    }
} else {
    echo "Invalid request. Please submit the form.";
}
?>
