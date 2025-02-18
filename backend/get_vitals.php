<?php

    include "connect.php";
    session_start();

    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];
    }

    $where = "WHERE 1";
    $filters=[];


    if(isset($_GET["v"])){
        $v =   htmlentities( $_GET['v']);
        $filters[] = "email = '$v'";
    }

    if (count($filters) > 0) {
        $where.= " AND " . implode(" AND ", $filters);
    }

    $data=[];


    $query=mysqli_query($conn, "SELECT * from users $where");


    if(mysqli_num_rows($query)<1){
        echo json_encode([
            "status"=>"empty"
        ]);
    }

    else{
        while($row=mysqli_fetch_assoc($query)){
          $data[]= [
                "status"=>"success",
                "bp"=>$row["bp"],
                "hr"=>$row["hr"],
                "cholesterol"=>$row["cholesterol"],
                "glucose"=>$row["glucose"],
                "email"=>$row["email"],
            ];
        }
    }


    
    echo json_encode($data)
?>