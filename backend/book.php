<?php

    include "connect.php";

    $name=$_POST["name"];
    $email=$_POST["email"];
    $phone=$_POST["phone"];
    $text= htmlentities($_POST["text"]);


    
    $query= mysqli_query($conn, "INSERT into queries (name, email, phone, date,  time, subject) values('$name', '$email', '$phone', CURDATE(), CURTIME(), '$text')");

    if($query){
        echo json_encode([
            "status"=>"success",
        ]);
    }

    else{
        echo json_encode([
            "status"=>"error"
        ]);
    }



   
?>