<?php

    include "connect.php";

    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];
    }

    $where="";
    $filters=[];


    if(isset($_GET["v"])){
        $v =   htmlentities( $_GET['v']);
        $filters[] = "email = '$v'";
    }

    if (count($filters) > 0) {
        $where = " AND " . implode(" AND ", $filters);
    }


    $query=mysqli_query($conn, "SELECT * from queries $where");


    if(mysqli_num_rows($query)<1){
        echo json_encode([
            "status"=>"empty"
        ]);
    }

    else{
        while($row=mysqli_fetch_assoc($query)){
            echo json_encode([
                "status"=>"success",
                "name"=>$row["name"],
                "email"=>$row["email"],
                "date"=>$row["date"],
                "phone"=>$row["phone"],
                "time"=>$row["time"],
                "subject"=>$row["subject"],          
            ]);
        }
    }


    

?>