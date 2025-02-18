<?php

    include "connect.php";

    // if(isset($_SESSION["id"])){
    //     $email=$_SESSION["email"];
    //     $name=$_SESSION["name"];

    // }


    $patient=$_POST["patient"];
    $location=$_POST["location"];
    $hospital=$_POST["hospital"];


    $query=mysqli_query($conn, "INSERT into referrals (hospital, email, location, date) values('$hospital', '$patient', '$location', CURDATE())");


    
    
       if($query){
        echo json_encode([
            "status"=>"success",        
        ]);
    
       }
         
    


    

?>