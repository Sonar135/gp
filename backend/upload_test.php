<?php
    include "connect.php";


    if(isset($_GET["v"])){
        $patient=$_GET["v"];
    }
    

    $targetDir = "files/";
    $targetFile = $targetDir. basename($_FILES["file"] ["name"]);
    // $fileType = strtolower (pathinfo($targetFile, PATHINFO_EXTENSION));
    $file_name=$_FILES["file"]["name"];
    $test=$_POST["test_done"];
 
    move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile);

    $query=mysqli_query($conn, "INSERT into result (result, email, test_done, date) values ($file_name, $patient, $test, CURTIME())");


    if($query){
        echo json_encode([
            "status"=>"success"
        ]);
    }
?>