<?php

    include "connect.php";

    // if(isset($_SESSION["id"])){
    //     $email=$_SESSION["email"];
    //     $name=$_SESSION["name"];

    // }


    $patient=$_POST["patient"];
    $meds=$_POST["meds"];


    $query=mysqli_query($conn, "INSERT into prescriptions (meds, email, date) values($meds, $patient, CURDATE())");


    
    
       if($query){
        echo json_encode([
            "status"=>"success",        
        ]);
    
       }
         
    


    

?>