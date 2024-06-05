<?php
$server="localhost";
$username="root";
$password="root";
$db="Mydata";
$connect=new mysqli($servers,$username,$password,$db) ;
if($connect->connect_error){
    echo "connection errors";
}
?>
echo"hello world";