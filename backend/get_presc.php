<?php

    include "connect.php";
    session_start();
    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];

    }

    $data=[];


    $query=mysqli_query($conn, "SELECT * from prescriptions where email='$email' ");


    if(mysqli_num_rows($query)<1){
        echo json_encode([
            "status"=>"empty"
        ]);

        exit();
    }

    else{
        while($row=mysqli_fetch_assoc($query)){
          $data[]= [
                "status"=>"success",
                "meds"=>$row["meds"],
                "email"=>$row["email"],
                "date"=>$row["date"],             
            ];
        }
    }


    
echo json_encode($data)
?>