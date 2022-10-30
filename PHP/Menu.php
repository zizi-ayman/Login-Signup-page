<?php
  $cookie_one = "id";
  $cookie_two = "username";
  $cookie_three = "regdate";
  $diff = "";
  if(!isset($_COOKIE[$cookie_one])) {
    header("Location:../index.php");
  } else {
    include('../HTML/Menu.html');
  }
?>