<?php

    include "connect.php";

    session_start();
    

    $where = "WHERE 1";
    $filters=[];


    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];

        $filters[] = "email = '$email'";
    }



    if (count($filters) > 0) {
        $where.= " AND " . implode(" AND ", $filters);
    }


    $query=mysqli_query($conn, "SELECT * from appointments $where ");


    if(mysqli_num_rows($query)<1){
        echo json_encode([
            "status"=>"empty"
        ]);
    }

    else{
        while($row=mysqli_fetch_assoc($query)){
            echo json_encode([
                "status"=>"success",
                "hospital"=>$row["hospital"],
                "email"=>$row["email"],
                "date"=>$row["date"],
                "time"=>$row["time"],
                "location"=>$row["location"],
                "type"=>$row["type"],
             
            ]);
        }
    }


?>