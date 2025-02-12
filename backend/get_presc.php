<?php

    include "connect.php";

    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];

    }


    $query=mysqli_query($conn, "SELECT * from prescriptions where email='$email' ");


    if(mysqli_num_rows($query)<1){
        echo json_encode([
            "status"=>"empty"
        ]);
    }

    else{
        while($row=mysqli_fetch_assoc($query)){
            echo json_encode([
                "status"=>"success",
                "meds"=>$row["meds"],
                "email"=>$row["email"],
                "date"=>$row["date"],             
            ]);
        }
    }


    

?>