<?php
    include "connect.php";

    
    $bp=$_POST["bp"];
    $chol=$_POST["chol"];
    $gluc=$_POST["gluc"];
    $hr=$_POST["hr"];
    $patient=$_POST["patient"];

    $query=mysqli_query($conn, "UPDATE users set bp='$bp', cholesterol='$cholesterol', hr='$hr', glucose='$glucose' where email='$patient' ");


    if($query){
        echo json_encode([
            "status"=>"success"
        ]);
    }
?>