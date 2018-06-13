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
//echo "Connected successfully";

$app_name = $_POST['app_name'];
$app_json = $_POST['app_json'];
//echo $data_to_be_pass;


/*$table = "create table app_jsons(
	
	app_name varchar(30) NOT NULL PRIMARY KEY,
	json_string varchar(3000)
)";

if ($conn->query($table) === TRUE) {
    echo "Table app_jsons created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}  */


$last_version_query = "SELECT version FROM `app_jsons` WHERE app_name='".$app_name."' ORDER by 1 DESC LIMIT 1";

$last_version = $conn->query($last_version_query);

if(mysqli_num_rows($last_version) > 0)
{
	
	$row = mysqli_fetch_row($last_version);
    $latest_version_no = $row[0]+1;
	
	$current_date = date("d/m/y");
	
	$sql = "INSERT INTO app_jsons (app_name,version,Last_Modified, json_string)
					VALUES ('".$app_name."','".$latest_version_no."','".$current_date."','".$app_json."')";
 
	if ($conn->query($sql) === TRUE) {
		echo " Updated the latest version: ".$latest_version_no." successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
else{
	
		$current_date = date("d/m/y");
	$sql_new = "INSERT INTO app_jsons (app_name,version,Last_Modified, json_string)
								VALUES ('".$app_name."',1,'".$current_date."','".$app_json."')";
 
	if ($conn->query($sql_new) === TRUE) {
		echo "New App created as version: 1 successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
}


$conn->close();
?>