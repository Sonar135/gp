<?php

include "connect.php";

$data = [];

$query = mysqli_query($conn, "SELECT id, name, email, CONCAT('#', LPAD(id, 4, '0')) AS registration_number FROM users");

$num_row = mysqli_num_rows($query);

if ($num_row < 1) {
    echo json_encode([
        "status" => "empty"
    ]);
    exit(); // Stop further execution
} 

else{
    while ($row = mysqli_fetch_assoc($query)) {
        $data[] = [
            "status" => "success",
            "name" => $row["name"],
            "email" => $row["email"],
            "reg_no" => $row["registration_number"],
            "total" => $num_row
        ];
    } 
}



echo json_encode($data);
?>
