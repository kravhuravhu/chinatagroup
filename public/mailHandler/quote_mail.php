<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require '../../chinata_2025/vendor/autoload.php';

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__ . '/../../chinata_2025/');
$dotenv->load();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

function sendQuoteFormEmail($firstname, $email, $phone, $inquiry, $message, $files) {
    $response = [];
    $uploadedFiles = [];

    // Define allowed file types
    $allowedMimeTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword', 
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
        'image/jpeg', 
        'image/png', 
        'image/gif', 
    ];

    // Check if the number of files exceeds the limit
    if (!empty($files['name']) && count($files['name']) > 2) {
        return ["error" => "You can upload a maximum of 2 files."];
    }

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
            $mail->Port       = $_ENV['MAIL_PORT'];

            $mail->setFrom($email, $firstname);
            $mail->addReplyTo($email, $firstname);

            $mail->addAddress($_ENV['MAIL_RECIPIENT']);

            $mail->isHTML(true);
            $mail->Subject = 'Quotation Inquiry | ' . htmlspecialchars($inquiry);
            
            // convert img to base64
            $imagePath = '../IMAGES/default.png';
            $imageData = base64_encode(file_get_contents($imagePath));

            // Create the data URI
            $imageSrc = 'data:image/png;base64,' . $imageData;

            $mail->Body = '
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Quote Submission Form</title>
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
                            background-color: #cdcdcd;
                            color: #0766ad;
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
                            background-color: #0766ad;
                            text-align: center;
                            padding: 15px;
                            font-size: 12px;
                            color: #fff;
                        }
                    </style>
                </head>
                <body>
                    <div class="email_container">
                        <div class="header">
                            <img src="' . $imageSrc . '" alt="logo" />
                            <h1>Quotation Request</h1>
                        </div>
                        <div class="form">
                            <p><span class="label">First Name:</span> ' . htmlspecialchars($firstname) . '</p>
                            <p><span class="label">Email:</span> ' . htmlspecialchars($email) . '</p>
                            <p><span class="label">Phone:</span> ' . htmlspecialchars($phone) . '</p>
                            <p><span class="label">Service/Product of Interest:</span> ' . htmlspecialchars($inquiry) . '</p>
                            <p><span class="label">Project Details:</span> ' . nl2br(htmlspecialchars($message)) . '</p>
                            <p><span class="label">Supporting Documents (Optional):</span> ' . (isset($file) ? htmlspecialchars($file) : 'No file uploaded') . '</p>
                        </div>
                        <div class="footer">
                            <p>This message was sent via your website\'s quote form.</p>
                        </div>
                    </div>
                </body>
                </html>
            ';

            $mail->AltBody = "First Name: " . htmlspecialchars($firstname) . "\n" .
                             "Email: " . htmlspecialchars($email) . "\n" .
                             "Phone: " . htmlspecialchars($phone) . "\n" .
                             "Service/Product of Interest: " . htmlspecialchars($inquiry) . "\n" .
                             "Project Details:\n" . htmlspecialchars($message);

            // Attach files
            if (!empty($files)) {
                foreach ($files['tmp_name'] as $key => $tmp_name) {
                    if ($files['error'][$key] === UPLOAD_ERR_OK) {
                        // Validate file type
                        $fileMimeType = mime_content_type($tmp_name);
                        if (!in_array($fileMimeType, $allowedMimeTypes)) {
                            throw new Exception("Invalid file type. Only PDF, Word, Excel, and image files are allowed.");
                        }

                        // Store uploaded files
                        $uploadDir = __DIR__ . '/uploads/';
                        if (!is_dir($uploadDir)) {
                            mkdir($uploadDir, 0777, true);
                        }
                        $filePath = $uploadDir . basename($files['name'][$key]);
                        if (move_uploaded_file($tmp_name, $filePath)) {
                            $mail->addAttachment($filePath, $files['name'][$key]);
                            $uploadedFiles[] = $filePath;
                        } else {
                            throw new Exception("Failed to move uploaded file.");
                        }
                    } else {
                        throw new Exception("File upload error: " . $files['error'][$key]);
                    }
                }
            }

            $mail->send();
            $response = ["success" => true, "message" => "Your quotation request has been sent successfully!"];

            // Cleanup after sending
            cleanupUploadedFiles($uploadedFiles);

        } catch (Exception $e) {
            $response = ["success" => false, "error" => "Message could not be sent. Error: " . $e->getMessage()];
            cleanupUploadedFiles($uploadedFiles);
        }
    } else {
        $response = ["error" => "Email and message are required fields."];
    }

    return $response;
}

function cleanupUploadedFiles($files) {
    foreach ($files as $file) {
        if (file_exists($file)) {
            unlink($file);
        }
    }
}

try {
    $firstname = $_POST['firstname'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $inquiry = $_POST['inquiry'] ?? '';
    $message = $_POST['message'] ?? '';
    $files = $_FILES['documents'] ?? [];

    // Log the received files
    error_log(print_r($files, true));

    $response = sendQuoteFormEmail($firstname, $email, $phone, $inquiry, $message, $files);
    echo json_encode($response);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(["error" => $e->getMessage()]);
}