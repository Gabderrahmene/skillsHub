<?php

require 'config.php';


function require_login()
{
    if (empty($_SESSION['user'])) {
        http_response_code(401);
        echo json_encode(['error' => 'Not authenticated']);
        exit;
    }
    return $_SESSION['user'];
}
function require_csrf()
{
    $headers = getallheaders();
    $clientToken = $headers['X-CSRF-Token'] ?? $headers['x-csrf-token'] ?? null;
    if (!$clientToken || empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $clientToken)) {
        http_response_code(403);
        echo json_encode(['error' => 'Invalid CSRF token']);
        exit;
    }
}
