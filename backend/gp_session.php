<?php
    session_start();

    $data=[
        "status"=> "logged out"
    ];
    if(isset($_SESSION["email"])){
        $email=$_SESSION["email"];

        $data=[
            "status"=> "logged in",
            "email"=> $email,
            "type"=> "gp",
        ];
    }



    echo json_encode($data);
?>