<?php
$to = "arrithnius@gmail.com";
$subject = "Test Email";
$message = "This is a test email from the server.";
$headers = "From: noreply@yourdomain.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Test email sent successfully!";
} else {
    echo "Failed to send test email.";
}
?>
