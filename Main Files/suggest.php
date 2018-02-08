<?php
$servername ="mysql.hostinger.in";
$database = "u375838234_dysap";
$username = "u375838234_zyteq";
$password = "swagnigga69";



$mysqli = mysqli_connect($servername, $username, $password, $database);

 
/* if the 'term' variable is not sent with the request, exit */
if ( !isset($_REQUEST['term']) ) {
	exit;
}
 
 
/* Connect to database and set charset to UTF-8 */
if($mysqli->connect_error) {
  echo 'Database connection failed...' . 'Error: ' . $mysqli->connect_errno . ' ' . $mysqli->connect_error;
  exit;
} else {
  $mysqli->set_charset('utf8');
}
 
/* retrieve the search term that autocomplete sends */
$term = trim(strip_tags($_GET['term'])); 
/* replace multiple spaces with one */
$term = preg_replace('/\s+/', ' ', $term);
 
$a_json = array();
$a_json_row = array();
 
$a_json_invalid = array(array("id" => "#", "value" => $term, "label" => "Only letters and digits are permitted..."));
$json_invalid = json_encode($a_json_invalid);
 
/* SECURITY HOLE *************************************************************** */
/* allow space, any unicode letter and digit, underscore and dash                */
if(preg_match("/[^\040\pL\pN_-]/u", $term)) {
  print $json_invalid;
  exit;
}
/* ***************************************************************************** */
 
if ($data = $mysqli->query("SELECT * FROM games WHERE name LIKE '%$term%' OR appid LIKE '%$term%' ORDER BY appid , name")) {
	while($row = mysqli_fetch_array($data)) {
		$name = htmlentities(stripslashes($row['name']));
		$appid = htmlentities(stripslashes($row['appid']));
		//$customercode= htmlentities(stripslashes($row['customercode']));
		$a_json_row["id"] = $appid;
		$a_json_row["value"] = $name.' '.$appid;
		$a_json_row["label"] = $name.' '.$appid;
		array_push($a_json, $a_json_row);
		
	}
}
 
/* jQuery wants JSON data */
echo json_encode($a_json);
flush();
 
$mysqli->close();