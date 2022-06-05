<?php

// Connect to database
$mysqli = new mysqli("localhost","root","","weather_update");
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

// Execute SQL query
$sql = "SELECT * FROM weather ORDER BY weather_when DESC limit 1";

$result = $mysqli -> query($sql);

// Error ?
if($result == false) {
	echo("<h4>SQL error description: " . $mysqli -> error . "</h4>");
}

// Get data, convert to JSON and print
$row = $result -> fetch_assoc();
print json_encode($row);

// Free result set and close connection
$result -> free_result();
$mysqli -> close();

?>
