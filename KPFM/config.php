<!-- config.php -->
<?php
$servername = "localhost";
$username = "username_db";
$password = "password_db";
$dbname = "KPFM";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
