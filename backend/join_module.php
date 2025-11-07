<?php
require 'verify.php';
$user = require_login();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $body = json_decode(file_get_contents('php://input'), true);
    $mid = intval($body['id_module']) ?? 0;
    $sid = intval($body['id_student']) ?? 0;
    if (!$sid)
        send_json(['error' => 'student id required'], 400);

    if (!$mid)
        send_json(['error' => 'module id required'], 400);

    if ($user !== $sid) {
        send_json(['error' => 'Forbidden'], 403);
    }
    $stmt = $pdo->prepare("SELECT * FROM modules WHERE id_module = ?");
    $stmt->execute([$mid]);
    if (!$stmt->fetch()) {
        send_json(['error' => 'module doesn\'t exist'], 409);
    }
    $stmt = $pdo->prepare("SELECT * FROM progress WHERE id_module = ? AND id_user = ?");
    $stmt->execute([$mid, $sid]);
    if ($stmt->fetch()) {
        send_json(['error' => 'module already joined'], 409);
    }


    $stmt = $pdo->prepare("INSERT INTO progress (id_module, id_user, progress) VALUES (?, ?, 0)");
    $stmt->execute([$mid, $sid]);

    send_json(['success' => "module joined successfully"], 201);
    exit;
}

send_json(['error' => 'Method not allowed'], 405);