<?php
  $connect = mysqli_connect("localhost","root","","dws_db");
  if(mysqli_connect_errno()) {  
      die("Failed to connect with MySQL: ". mysqli_connect_error());  
  }
  $sql = "SELECT * FROM users WHERE email LIKE '$email' AND pass LIKE '$password';";
  $result = mysqli_query($connect, $sql);
  $id = "";
  $reg_date = "";
  $username= "";
  if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
          $id = $row["ID"];
          $reg_date = $row["Reg_Date"];
          $username = $row["First_Name"];
      }
  }
  $connect->close();
  $cookie_one = "id";
  $cookie_two = "username";
  $cookie_three = "regdate";
  setcookie($cookie_one, $id, time() + (86400 * 7), "/");
  setcookie($cookie_two, $username, time() + (86400 * 7), "/");
  setcookie($cookie_three, $reg_date, time() + (86400 * 7), "/");
  header("Location:Menu.php");
  exit();