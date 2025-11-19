<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "dflowershop";

$conn = new mysql($servername, $username, $password, $database);
if($conn->connect_error){
    die("Connection failed: " .$conn->connect_error);
}
echo "Connected Successfully";