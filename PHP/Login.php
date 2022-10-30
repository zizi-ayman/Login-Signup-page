<?php
    session_start();
    if(isset($_COOKIE["id"])) {
        header("Location:Menu.php");
    }elseif(isset($_POST['loginpage'])){
        $connect = mysqli_connect("localhost","root","","dws_db");
        if(mysqli_connect_errno()) {  
            die("Failed to connect with MySQL: ". mysqli_connect_error());  
        }  
        $email ='';
        $password ='';
     
        if(isset($_POST['email'])){
            $email = $_POST['email'];
        }  
        if(isset($_POST['password'])){
            $password = $_POST['password'];
        }  
          
        //to prevent from mysqli injection  
        $email = stripcslashes($email);
        $password = stripcslashes($password);  

        $email = mysqli_real_escape_string($connect, $email);
        $password = mysqli_real_escape_string($connect, $password);

        $sql = "SELECT * FROM users WHERE email LIKE '$email' AND pass LIKE '$password';";
        $result = mysqli_query($connect, $sql);
        if ($result->num_rows > 0) {
            if($result){
                include('cookie.php');
            } else{
                echo "ERROR: Could not able to execute $sql. " . mysqli_error($connect);
            }
        }else{
            $_SESSION["info"] = "false";
            header("Location:Login.php");
        }
            $connect->close();
    }else{
        include('../HTML/Login.html');
    }
?>