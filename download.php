<?php
include "backend/connect.php";

if (isset($_GET['id'])) {
    $id = intval($_GET['id']); // Sanitize input
    $query = mysqli_query($conn, "SELECT * FROM result WHERE id = $id");

    if ($query && mysqli_num_rows($query) > 0) {
        $row = mysqli_fetch_assoc($query);
        $filename = $row['result'];
        $file = "files/".$filename."";

        if (file_exists($file)) {
            // Set headers to force download
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($file));
            readfile($file);
            exit;
        } else {
            echo "File not found.";
        }
    } else {
        echo "Invalid file ID.";
    }
} else {
    echo "No file specified.";
}
?>
