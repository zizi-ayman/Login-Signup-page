<?php
    if(isset($_COOKIE["id"])) {
        header("Location:Menu.php");
    }elseif(isset($_POST['signuppage'])){
        $connect = mysqli_connect("localhost","root","","dws_db");
        if(mysqli_connect_errno()) {  
            die("Failed to connect with MySQL: ". mysqli_connect_error());  
        }  
        $firstname ='';
        $lastname ='';
        $email ='';
        $password ='';

        if(isset($_POST['fname'])){
            $firstname = $_POST['fname'];  
        }  
        if(isset($_POST['lname'])){
            $lastname = $_POST['lname'];  
        }  
        if(isset($_POST['email'])){
            $email = $_POST['email'];
        }  
        if(isset($_POST['password'])){
            $password = $_POST['password'];
        }  
        
            //to prevent from mysqli injection  
            $firstname = stripcslashes($firstname);  
            $lastname = stripcslashes($lastname);
            $email = stripcslashes($email);
            $password = stripcslashes($password);  

            $firstname = mysqli_real_escape_string($connect, $firstname);  
            $lastname = mysqli_real_escape_string($connect, $lastname);
            $email = mysqli_real_escape_string($connect, $email);
            $password = mysqli_real_escape_string($connect, $password);
            $date = date("Y/m/d");

            $sql = "INSERT INTO users (First_Name, Last_Name, email, pass,Reg_Date) VALUES ('$firstname','$lastname','$email','$password','$date');";
            //$result = mysqli_query($connect, $sql);
            if($connect->query($sql) === TRUE){
                include('cookie.php');
            } else{
                echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
            }
            $connect->close();
        }else{
            include('Signup.html');
        }
?>