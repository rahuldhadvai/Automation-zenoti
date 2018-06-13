<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());

	echo "Connected unsuccessfully";
}
//echo "Connected successfully";

$app_name = $_POST['app_name'];
$version = $_POST['version'];


$get_json_query = "SELECT json_string FROM `app_jsons` WHERE app_name='".$app_name."' and version='".$version."'";


$get_json = $conn->query($get_json_query);

$row = mysqli_fetch_row($get_json);
    $json_string = $row[0];
	
	echo $json_string;  


?>