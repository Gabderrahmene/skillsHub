<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");


$servername = "localhost";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=skillshub", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT m.id_module, m.title,m.description,m.size,p.progress FROM progress AS p JOIN module AS m ON p.id_module = m.id_module WHERE p.id_student = 1"); 
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    http_response_code(200);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($results,JSON_PRETTY_PRINT);
    }catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
$conn = null;
?> 