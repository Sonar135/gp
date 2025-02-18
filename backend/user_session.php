<?php
    session_start();

    $data=[
        "status"=> "logged out"
    ];
    if(isset($_SESSION["id"])){
        $email=$_SESSION["email"];
        $name=$_SESSION["name"];

        $data=[
            "status"=> "logged in",
            "email"=> $email,
            "name"=> $name,
            "type"=> "patient",
        ];
    }



    echo json_encode($data);
?>