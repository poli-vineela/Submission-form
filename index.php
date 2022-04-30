<?php
$servername = "mysql.hostinger.co.uk";
$database = "u266072517_name";
$username = "u266072517_user";
$password = "buystuffpwd";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";
 
$sql = "INSERT INTO Students (name, lastname, email) VALUES ('Test', 'Testing', 'Testing@tesing.com')";
// checks if our query was successful
//It simply displays a success message if the query which we ran was successful.
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
//displays a different message in case our query wasn’t successful:
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>