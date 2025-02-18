<?php

    include "connect.php";

    $email="";

    session_start();

    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];

    }

     if(isset($_GET["v"])){
        $email =   htmlentities( $_GET['v']);
        $filters[] = "email = '$v'";
    }
      
    
  


    $query=mysqli_query($conn, "SELECT * from users where email='$email'");

    while($row=mysqli_fetch_assoc($query)){

        $query2=mysqli_query($conn, "SELECT id, CONCAT('#', LPAD(id, 4, '0')) AS registration_number FROM users where email='$email'");
    while($row2=mysqli_fetch_assoc($query2)){
        echo json_encode([
            "status"=>"success",
            "name"=>$row["name"],
            "gender"=>$row["gender"],
            "age"=>$row["age"],
            "bg"=>$row["blood_group"],
            "bt"=>$row["blood_type"],
            "email"=>$row["email"],
            "password"=>$row["password"],
            "reg_no"=>$row2["registration_number"],
            "bp"=>$row["bp"],
            "hr"=>$row["hr"],
            "glucose"=>$row["glucose"],
            "cholesterol"=>$row["cholesterol"],
            "reg_date"=>$row["reg_date"],
        ]);
    }
     
    }



   
?>