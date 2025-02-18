<?php
include "connect.php";

if(isset($_GET["v"])){
    $patient = $_GET["v"];
} else {
    echo json_encode(["status" => "error", "message" => "Patient not specified."]);
    exit;
}

$targetDir = "../files/";

// Sanitize and create a unique file name to avoid collisions
$originalFileName = basename($_FILES["file"]["name"]);
$fileExtension = strtolower(pathinfo($originalFileName, PATHINFO_EXTENSION));

// Remove unwanted characters from file name
$sanitizedFileName = preg_replace("/[^a-zA-Z0-9_\-\.]/", "", $originalFileName);
$uniqueFileName = uniqid() . "_" . $sanitizedFileName;
$targetFile = $targetDir . $uniqueFileName;

// Optionally, validate file type (example: allow only certain extensions)
$allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx'];
if (!in_array($fileExtension, $allowedExtensions)) {
    echo json_encode(["status" => "error", "message" => "Invalid file type."]);
    exit;
}

// Attempt to move the uploaded file
if (!move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
    echo json_encode(["status" => "error", "message" => "Failed to upload file."]);
    exit;
}

// Get the test_done value and sanitize it
$test = isset($_POST["test_done"]) ? $_POST["test_done"] : "";

// Escape variables for the SQL query
$escapedFileName = mysqli_real_escape_string($conn, $uniqueFileName);
$escapedPatient   = mysqli_real_escape_string($conn, $patient);
$escapedTest      = mysqli_real_escape_string($conn, $test);

// Build the SQL query string. We use NOW() for current date and time.
$sql = "INSERT INTO result (result, email, test_done, date) VALUES ('$escapedFileName', '$escapedPatient', '$escapedTest', NOW())";

$query = mysqli_query($conn, $sql);

if ($query) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => mysqli_error($conn)]);
}

mysqli_close($conn);
?>
