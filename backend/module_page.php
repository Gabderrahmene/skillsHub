<?php
require 'verify.php';
$user = require_login();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {

    $sid = isset($_GET['student']) ? intval($_GET['student']) : 0;
    if (!$sid)
        send_json(['error' => 'student id required'], 400);


    if ($user !== $sid) {
        send_json(['error' => 'Forbidden'], 403);
    }

    $stmt = $pdo->prepare("SELECT m.id_module, m.title, m.description, COUNT(DISTINCT l.id_lesson) AS size, CONCAT(u.nom, ' ', u.prenom) AS author, CASE WHEN p.id_user IS NULL THEN 0 ELSE 1 END AS joined FROM modules m LEFT JOIN lessons l ON l.id_module = m.id_module LEFT JOIN users u ON u.id_user = m.id_user LEFT JOIN progress p ON p.id_module = m.id_module AND p.id_user = ? GROUP BY m.id_module, m.title, m.description, u.nom, u.prenom;");
    $stmt->execute([$sid]);
    $rows = $stmt->fetchAll();
    send_json($rows);
    exit;
}

send_json(['error' => 'Method not allowed'], 405);