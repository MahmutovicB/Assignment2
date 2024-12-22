<?php
header('Content-Type: application/json');

$response = array('success' => false, 'message' => '');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $response['success'] = true;
    $response['message'] = 'Registration successful!';
}

echo json_encode($response);
?>