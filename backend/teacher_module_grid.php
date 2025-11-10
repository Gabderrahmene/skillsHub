<?php
require 'verify.php';
$user = require_login();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {

    $pid = isset($_GET['prof']) ? intval($_GET['prof']) : 0;
    if (!$pid)
        send_json(['error' => 'prof id required'], 400);


    if ($user !== $pid || $_SESSION['role'] !== "teacher") {
        send_json(['error' => 'Forbidden'], 403);
    }

    $stmt = $pdo->prepare("SELECT m.id_module, m.title, m.description, COUNT(DISTINCT l.id_lesson) AS size FROM modules m LEFT JOIN lessons l ON l.id_module = m.id_module WHERE m.id_user = ? GROUP BY m.id_module, m.title, m.description");
    $stmt->execute([$pid]);
    $rows = $stmt->fetchAll();
    send_json($rows);
    exit;
}

send_json(['error' => 'Method not allowed'], 405);