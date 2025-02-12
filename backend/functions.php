<?php
    include 'connect.php';


    
    function create_user($conn, $email, $fname, $password, $confirm , $gender, $age, $bg, $bt ){

   
  
        $insert= "INSERT INTO users (name,  email,  password, gender, age, blood_group, blood_type, reg_date) VALUES (?,?,?,?,?,?,?,?)";   
        
      

        $date=date("Y-m-d");
  

        $stmt2=mysqli_stmt_init($conn);

        if(!mysqli_stmt_prepare($stmt2, $insert)){
            header("location: user_auth.php?error=stmtfailed");
            exit();
        }
    
        
        $hashed_pwd=password_hash($password, PASSWORD_DEFAULT);

        mysqli_stmt_bind_param($stmt2, 'ssssssss', $fname,   $email,  $hashed_pwd, $gender, $age, $bg, $bt, $date);
        mysqli_stmt_execute($stmt2);
        mysqli_stmt_close($stmt2);
        
        echo json_encode([
            "status"=>"success"
        ]);
        exit();
    }







    function invalid_password($password){
        // Check if password contains at least one uppercase letter, one lowercase letter, and one special character
        if (!preg_match('/[A-Z]/', $password) || // Check for at least one uppercase letter
            !preg_match('/[a-z]/', $password) || // Check for at least one lowercase letter
            !preg_match('/[^a-zA-Z0-9]/', $password)) { // Check for at least one special character
            return true; // Password does not meet the criteria
        } else {
            return false; // Password meets the criteria
        }
    }

    function invalid_email($email){
        $result;
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $result= true;
        }

        else{
            $result= false;
        }

        return $result;
    
    }


    function pwd_match($password, $confirm){
        $result;
        if($password !== $confirm){
            $result= true;
        }
        
        else{
            $result=false;
        }
        return $result;
    }

    function email_exists($conn, $email){
        $result;
    
        $query="SELECT * FROM users WHERE email=?";
    
        $stmt=mysqli_stmt_init($conn);

        if(!mysqli_stmt_prepare($stmt, $query)){
            header("location: user_auth.php?error=stmtfailed");
            exit();
        }
    
        
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        $result= mysqli_stmt_get_result($stmt);
    
        if($row=mysqli_fetch_assoc($result)){
            return $row;
        }

        else{
            $result= false;
            return $result;
        }

        mysqli_stmt_close($stmt);
    }




    

    function login($conn, $email, $password){
        $uidexist= email_exists($conn, $email);

        if($uidexist===false){
            echo json_encode([
                "status"=>"invalid"
            ]);
            exit();
        }

        $pwdHashed=$uidexist["password"];
        $checkedpwd=password_verify($password, $pwdHashed);

        if($checkedpwd===false){
            echo json_encode([
                "status"=>"invalid"
            ]);
            exit();
        }

        else if($checkedpwd===true){
            session_start();

            $_SESSION["id"]=$uidexist["id"];
            $_SESSION["email"]=$uidexist["email"];
            $_SESSION["name"]=$uidexist["name"];
            
          
     
   
         

            echo json_encode([
                'status' => 'success',
                'redirect_url' => 'main.html'
            ]);
        }
    }

















    // creating the restaurant...............................................................................................................//////////////////////////




    function rest_exists($conn, $name){
        $result;
    
        $query="SELECT * FROM restaurant WHERE name=?";
    
        $stmt=mysqli_stmt_init($conn);

        if(!mysqli_stmt_prepare($stmt, $query)){
            header("location: res_auth.php?error=stmtfailed");
            exit();
        }
    
        
        mysqli_stmt_bind_param($stmt, "s", $name);
        mysqli_stmt_execute($stmt);
        $result= mysqli_stmt_get_result($stmt);
    
        if($row=mysqli_fetch_assoc($result)){
            return $row;
        }

        else{
            $result= false;
            return $result;
        }

        mysqli_stmt_close($stmt);
    }


    function create_restaurant($conn, $email, $fname,  $phone, $password, $confirm ){
        $user_type="restaurant";
  
        $insert= "INSERT INTO restaurant (name,  phone, email,  password, user_type) VALUES (?,?,?,?,?)";

        $stmt2=mysqli_stmt_init($conn);

        if(!mysqli_stmt_prepare($stmt2, $insert)){
            header("location: res_auth.php?error=stmtfailed");
            exit();
        }
    
        
        $hashed_pwd=password_hash($password, PASSWORD_DEFAULT);

        mysqli_stmt_bind_param($stmt2, 'sssss', $fname, $phone,  $email,  $hashed_pwd, $user_type);
        mysqli_stmt_execute($stmt2);
        mysqli_stmt_close($stmt2);
        
        header("location: res_auth.php?error=success");
        exit();
    }


    function empty_res_signup($email, $fname, $phone, $password, $confirm ){
        $result;
        if($email=="" or $fname=="" or  $phone=="" or $password=="" or $confirm=="" ){
            $result= true;
        }
        else {
            $result=false;
        } 

        return $result;
    }



    function empty_res_login($name, $password){
        $result;
        if($name=="" or $password==""){
            $result= true;
        }
        else {
            $result=false;
        } 

        return $result;
    }


    function res_login($conn, $name, $password){
        $uidexist= rest_exists($conn, $name);

        if($uidexist===false){
            header("location: res_auth.php?error=wrongLogin");
            exit();
        }

        $pwdHashed=$uidexist["password"];
        $checkedpwd=password_verify($password, $pwdHashed);

        if($checkedpwd===false){
            header("location: res_auth.php?error=wrongLogin");
            exit();
        }

        else if($checkedpwd===true){
            session_start();

            $_SESSION["id"]=$uidexist["id"];
            $_SESSION["email"]=$uidexist["email"];
            $_SESSION['name']=$uidexist['name'];
            $_SESSION['user_type']=$uidexist['user_type'];
          
     
   
         

            header("location: stock.php");
            exit();
        }
    }



?>