<?php
require 'config.php';


$body = json_decode(file_get_contents('php://input'), true);
$email = $body['email'] ?? '';
$password = $body['password'] ?? '';

if (!$email || !$password) {
    send_json(['error' => 'email and password required'], 400);
}


$stmt = $pdo->prepare("SELECT id_student, password, nom, prenom FROM student WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password'])) {
    send_json(['error' => 'Invalid credentials'], 401);
}


session_regenerate_id(true);


$_SESSION['user'] = (int) $user['id_student'];
$_SESSION['email'] = $email;

if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}


send_json([
    'user' => $_SESSION['user'],
    'email' => $_SESSION['email'],
    'csrf_token' => $_SESSION['csrf_token']
]);