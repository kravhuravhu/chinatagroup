<?php
use Dotenv\Dotenv;

require '../../vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

if (file_exists(__DIR__ . '/../../.env')) {
    echo $_ENV['MAIL_HOST'] . "\n";
    echo $_ENV['MAIL_USERNAME'] . "\n";
    echo $_ENV['MAIL_PASSWORD'] . "\n";
    echo $_ENV['MAIL_RECIPIENT'] . "\n";
} else {
    echo "No .env file found!";
}