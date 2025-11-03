<?php
require 'config.php';


$body = json_decode(file_get_contents('php://input'), true);
$email = $body['email'] ?? '';
$password = $body['password'] ?? '';
$nom = $body['nom'] ?? null;
$prenom = $body['prenom'] ?? null;

if (!$email || !$password) {
    send_json(['error' => 'email and password required'], 400);
}
$stmt = $pdo->prepare("SELECT id_student FROM student WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetch()) {
    send_json(['error' => 'User exists'], 409);
}


$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $pdo->prepare("INSERT INTO student (email, password, nom, prenom) VALUES (?, ?, ?, ?)");
$stmt->execute([$email, $hash, $nom, $prenom]);

send_json(['id' => (int) $pdo->lastInsertId()], 201);

?>