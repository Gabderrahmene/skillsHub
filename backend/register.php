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
$stmt = $pdo->prepare("SELECT id_student FROM student WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    send_json(['error' => 'User exists'], 409);
}


$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("INSERT INTO student (nom, prenom, email, password, niveau) VALUES (?, ?, ?, ? ,?)");
$stmt->execute([$nom, $prenom, $email, $hash, $niveau]);

send_json(['id' => (int) $pdo->lastInsertId()], 201);
