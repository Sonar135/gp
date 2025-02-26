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


    $data=[];

    $query=mysqli_query($conn, "SELECT * from appointments $where ");


    $num_row=mysqli_num_rows($query);

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
                "time"=>$row["time"],
                "location"=>$row["location"],
                "type"=>$row["type"],
                "total" => $num_row,
            ];
        }
    }


    echo json_encode($data)

?>