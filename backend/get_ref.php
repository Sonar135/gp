<?php

    include "connect.php";
    session_start();
    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];

    }

    $data=[];


    $query=mysqli_query($conn, "SELECT * from referrals where email='$email' ");


    if(mysqli_num_rows($query)<1){
        echo json_encode([
            "status"=>"empty"
        ]);

    }

    else{
        while($row=mysqli_fetch_assoc($query)){
           $data[]= [
                "status"=>"success",
                "hospital"=>$row["hospital"],
                "email"=>$row["email"],
                "date"=>$row["date"],
                "location"=>$row["location"],          
            ];
        }
    }


    
    echo json_encode($data)
?>