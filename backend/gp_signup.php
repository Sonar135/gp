
<?php
 
    include 'functions.php';
    include 'connect.php';




        $email=$_POST['email'];
        $password=$_POST['password'];
        $confirm=$_POST['conpass'];



     
        

    

  

        if(invalid_email($email)!== false){
            echo json_encode([
                "status"=>"invalid_email"
            ]);
        exit();
        }

        if(pwd_match($password, $confirm)!== false){
      
            echo json_encode([
                "status"=>"pwd_match"
            ]);
            exit();
        }

        if (invalid_password($password)) {
            echo json_encode([
                "status"=>"invalid_pass"
            ]);
            exit();
 
        }

        if(email_exists($conn, $fname)!== false){
            echo json_encode([
                "status"=>"email_exists"
            ]);
      
            exit();
        }


     

        create_gp($conn, $email, $password);
    
        

?>


