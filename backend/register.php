<?php
require 'config.php';


$body = json_decode(file_get_contents('php://input'), true);
$email = $body['email'] ?? '';
$password = $body['password'] ?? '';
$nom = $body['nom'] ?? '';
$prenom = $body['prenom'] ?? '';
$niveau = $body['niveau'] ?? '';

if (!$email || !$password || !$nom || !$prenom || !$niveau) {
    send_json(['error' => 'all informations required'], 400);
}
$stmt = $pdo->prepare("SELECT id_user FROM users WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    send_json(['error' => 'User exists'], 409);
}
if ($niveau === "teacher") {
    send_json(['error' => 'Forbidden'], 403);
}

$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("INSERT INTO users (nom, prenom, email, password, role, points) VALUES (?, ?, ?, ? ,?,0)");
$stmt->execute([$nom, $prenom, $email, $hash, $niveau]);

send_json(['success' => "user registered successfully"], 201);