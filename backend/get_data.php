<?php

    include "connect.php";

    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];

    }
  


    $query=mysqli_query($conn, "SELECT * from users where email='$email'");

    while($row=mysqli_fetch_assoc($query)){
        echo json_encode([
            "status"=>"success",
            "name"=>$row["name"],
            "gender"=>$row["gender"],
            "age"=>$row["age"],
            "bg"=>$row["blood_group"],
            "bt"=>$row["blood_type"],
            "email"=>$row["email"],
            "password"=>$row["password"],
            "reg_no"=>$row["reg_no"],
            "bp"=>$row["bp"],
            "hr"=>$row["hr"],
            "glucose"=>$row["glucose"],
            "cholesterol"=>$row["cholesterol"],
            "reg_date"=>$row["reg_date"],
        ]);
    }



   
?>