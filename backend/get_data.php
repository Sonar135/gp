<?php

    include "connect.php";

    $email="";

    session_start();

     if(isset($_GET["v"])){
        $email =$_GET['v'];
    }

   else if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];

    }

 
      
    
  


    $query=mysqli_query($conn, "SELECT * from users where email='$email'");

    while($row=mysqli_fetch_assoc($query)){

        $query2=mysqli_query($conn, "SELECT id, CONCAT('#', LPAD(id, 4, '0')) AS registration_number FROM users where email='$email'");
    while($row2=mysqli_fetch_assoc($query2)){


        $bp=$row["bp"]===null?"":$row["bp"];
        $hr=$row["hr"]===null?"":$row["hr"];
        $glucose=$row["glucose"]===null?"":$row["glucose"];
        $chol=$row["cholesterol"]===null?"":$row["cholesterol"];

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
            "bp"=>$bp,
            "hr"=>$hr,
            "glucose"=>$glucose,
            "cholesterol"=>$chol,
            "reg_date"=>$row["reg_date"],
        ]);
    }
     
    }



   
?>