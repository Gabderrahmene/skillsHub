<?php
require 'verify.php';
$user = require_login();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {

    $sid = isset($_GET['student']) ? intval($_GET['student']) : 0;
    if (!$sid)
        send_json(['error' => 'student id required'], 400);


    if ($user['id'] !== $sid && $user['role'] !== 'admin') {
        send_json(['error' => 'Forbidden'], 403);
    }

    $stmt = $pdo->prepare("SELECT m.id_module, m.title,m.description,m.size,p.progress FROM progress AS p JOIN module AS m ON p.id_module = m.id_module WHERE p.id_student = ?");
    $stmt->execute([$sid]);
    $rows = $stmt->fetchAll();
    send_json($rows);
    exit;
}

send_json(['error' => 'Method not allowed'], 405);