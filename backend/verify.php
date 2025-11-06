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
