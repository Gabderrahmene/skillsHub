<?php
require 'config.php';


$body = json_decode(file_get_contents('php://input'), true);
$email = $body['email'] ?? '';
$password = $body['password'] ?? '';

if (!$email || !$password) {
    send_json(['error' => 'email and password required'], 400);
}


$stmt = $pdo->prepare("SELECT id_user, password,role FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password'])) {
    send_json(['error' => 'Invalid credentials'], 401);
}


session_regenerate_id(true);


$_SESSION['user'] = (int) $user['id_user'];
$_SESSION['email'] = $email;
$_SESSION['role'] = $user['role'];

send_json([
    'user' => $_SESSION['user'],
    'role' => $_SESSION['role'],
]);