<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require '../../vendor/autoload.php';

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

function sendContactFormEmail($firstname, $email, $phone, $inquiry, $message) {
    $response = [];

    if (!empty($email) && !empty($message)) {
        try {
            $mail = new PHPMailer(true);
            $mail->SMTPDebug = 0;
            $mail->isSMTP();
            $mail->Host       = $_ENV['MAIL_HOST'];
            $mail->SMTPAuth   = true;
            $mail->Username   = $_ENV['MAIL_USERNAME'];
            $mail->Password   = $_ENV['MAIL_PASSWORD'];
            $mail->SMTPSecure = $_ENV['MAIL_ENCRYPTION'];
            //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = $_ENV['MAIL_PORT'];

            $mail->setFrom($email, $firstname);
            $mail->addReplyTo($email, $firstname);

            $mail->addAddress($_ENV['MAIL_RECIPIENT']);

            $mail->isHTML(true);
            $mail->Subject = 'Contact Form | ' . htmlspecialchars($inquiry);
            
            // convert img to base64
            $imagePath = '../IMAGES/white.png';
            $imageData = base64_encode(file_get_contents($imagePath));

            // Create the data URI
            $imageSrc = 'data:image/png;base64,' . $imageData;

            $mail->Body = '
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Contact Form Submission</title>
            <style>
                body {
                font-family: "Raleway", "Poppins", sans-serif;
                background-color: #f9f9f9;
                margin: 0;
                padding: 10px;
                color: #333;
                }
                .email_container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #fff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
                }
                .header {
                background-color: #0766ad;
                color: #fff;
                text-align: center;
                padding: 20px 0;
                }
                .header img {
                max-width: 150px;
                margin-bottom: 20px;
                }
                .header h1 {
                margin: 0;
                font-size: 24px;
                }
                .form {
                padding: 30px;
                }
                .form p {
                margin-bottom: 15px;
                font-size: 16px;
                }
                .label {
                font-weight: bold;
                color: #0766ad;
                }
                .footer {
                background-color: #f1f1f1;
                text-align: center;
                padding: 15px;
                font-size: 12px;
                color: #666;
                }
            </style>
            </head>
            <body>
            <div class="email_container">
                <div class="header">
                    <img src="' . $imageSrc . '" alt="logo" />
                <h1>You have New Message!</h1>
                </div>
                <div class="form">
                <p><span class="label">First Name:</span> ' . htmlspecialchars($firstname) . '</p>
                <p><span class="label">Email:</span> ' . htmlspecialchars($email) . '</p>
                <p><span class="label">Phone:</span> ' . htmlspecialchars($phone) . '</p>
                <p><span class="label">Inquiry Type:</span> ' . htmlspecialchars($inquiry) . '</p>
                <p><span class="label">Message:</span></p>
                <p>' . nl2br(htmlspecialchars($message)) . '</p>
                </div>
                <div class="footer">
                <p>This message was sent via your website\'s contact form.</p>
                </div>
            </div>
            </body>
            </html>';

            $mail->AltBody = "First Name: " . htmlspecialchars($firstname) . "\n" .
                             "Email: " . htmlspecialchars($email) . "\n" .
                             "Phone: " . htmlspecialchars($phone) . "\n" .
                             "Type of Inquiry: " . htmlspecialchars($inquiry) . "\n" .
                             "Message:\n" . htmlspecialchars($message);

            $mail->send();
            $response = ["success" => true, "message" => "Your message has been sent successfully!"];
        } catch (Exception $e) {
            $response = ["success" => false, "error" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"];
        }
    } else {
        $response = ["error" => "Email and message are required fields."];
    }

    return $response;
}

try {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        throw new Exception("Invalid JSON input.");
    }

    $firstname = $data['firstname'] ?? '';
    $email = $data['email'] ?? '';
    $phone = $data['phone'] ?? '';
    $inquiry = $data['inquiry'] ?? '';
    $message = $data['message'] ?? '';

    $response = sendContactFormEmail($firstname, $email, $phone, $inquiry, $message);
    echo json_encode($response);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(["error" => $e->getMessage()]);
}


