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


    $query=mysqli_query($conn, "INSERT into appointments (hospital, email, location, date, time) values($hospital, $patient, $location, $date, $time");


    
    
       if($query){
        echo json_encode([
            "status"=>"success",        
        ]);
    
       }
         
    


    

?>