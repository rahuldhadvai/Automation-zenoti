<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());
}

//echo "Connected successfully";

$unique_app_names_query = "select DISTINCT app_name from `app_jsons`";

$unique_names = $conn->query($unique_app_names_query);
$noof_rows = mysqli_num_rows($unique_names);

$i=0;
$appnames = array();
    while($row = $unique_names->fetch_assoc()) {
        $appnames[$i] = $row["app_name"];
		$i++;
    }
$j=0;
$app_latest_versions = array();

	while($j < $noof_rows){
		
		$last_version_query  = "SELECT version FROM `app_jsons` WHERE app_name='".$appnames[$j]."' ORDER by 1 DESC LIMIT 1";
		$last_version = $conn->query($last_version_query);
		$row = mysqli_fetch_row($last_version);
		$app_latest_versions[$j] = $row[0];
		$j++;
	}
	
$app_last_modified = array(); 
$k=0;
	while($k < $noof_rows){
		
		$last_modified_query = "SELECT Last_Modified FROM `app_jsons` WHERE app_name='".$appnames[$k]."' and version='".$app_latest_versions[$k]."'";
		$last_modified = $conn->query($last_modified_query);
		$row_date = mysqli_fetch_row($last_modified);
		$app_last_modified[$k] = $row_date[0];
		$k++;

	}


	$data = array();
	$data['app_name_array'] = $appnames;
	$data['app_version_array'] = $app_latest_versions;
	$data['last_modified_array'] = $app_last_modified;
	echo json_encode($data);
	



?>