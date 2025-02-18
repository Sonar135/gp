<?php

    include "connect.php";

    // if(isset($_SESSION["id"])){
    //     $email=$_SESSION["email"];
    //     $name=$_SESSION["name"];

    // }


    $patient=$_POST["patient"];
    $location=$_POST["location"];
    $hospital=$_POST["hospital"];
    $time=$_POST["time"];
    $date=$_POST["date"];
    $type=$_POST["app_type"];


    $query=mysqli_query($conn, "INSERT into appointments (hospital, email, location, date, time, type) values('$hospital', '$patient', '$location', '$date', '$time', '$type')");


    
    
       if($query){
        echo json_encode([
            "status"=>"success",        
        ]);
    
       }
         
    


    

?>