<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());
}
echo "Connected to Database successfully";


// Create a table in the database

$table = "create table app_jsons(
	
	app_name varchar(30) NOT NULL PRIMARY KEY,
	json_string varchar(10000)
)";

if ($conn->query($table) === TRUE) {
    echo ", Table app_jsons created successfully";
} else {
    echo ", Error creating table: " . $conn->error;
}  

?>
