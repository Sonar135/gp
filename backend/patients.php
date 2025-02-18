<?php

    include "connect.php";

    // if(isset($_SESSION["id"])){
    //     $email=$_SESSION["email"];
    //     $name=$_SESSION["name"];

    // }


    $query=mysqli_query($conn, "SELECT * from users where ");


    if(mysqli_num_rows($query)<1){
        echo json_encode([
            "status"=>"empty"
        ]);
    }

    else{
        while($row=mysqli_fetch_assoc($query)){

            $query2=mysqli_query($conn, "SELECT id, CONCAT('#', LPAD(id, 4, '0')) AS registration_number 
FROM users");

while($row2=mysqli_fetch_assoc($query2)){
    echo json_encode([
        "status"=>"success",
        "name"=>$row["name"],
        "email"=>$row["email"],
        "reg_no"=>$row2["registration_number"],
    ]);

}
          
        }
    }


    

?>