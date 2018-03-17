<?php
	
$servername ="localhost";
$database = "app";
$username = "root";
$password = "mysql";



$conn = mysqli_connect($servername, $username, $password, $database);



if (!$conn) {

    die("Connection failed: " . mysqli_connect_error());

}

//mysql_select_db("app") or die("Could not find database ".mysql_error());

?>
<!DOCTYPE html>
<html>
<head>
	<title>results</title>
	<link rel="stylesheet" type="text/css" href="searchstyle.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
     <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<style>
		body{
			background-image: url("dota.jpg");
		}
		.video{
			height: 100%;
			width: 100%;
			opacity: 0;
		}
	</style>

</head>
<body>
	<?php include('header.php'); ?>
	<div class="row about-data">
        <div class="about">
          <div class="pad-bg">  
          <h3  class="about-header">Search Results</h3>
          	
	<!--<div class="modal fade" id="myModal" role="dialog">
		<div class="modal-dialog">
		    <div class="modal-content">
			<div class="modal-header">
			  <button type="button" class="close" data-dismiss="modal">&times;</button>
			</div>
			<div class="modal-body">
				<video controls="controls" id="vid-play">
				<source src="http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256676540\/movie480.webm?t=1481922273" type="video/webm" />
				</video>
			</div>
			<div class="modal-footer">
			  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
			</div>
		    </div>
		</div>
	</div>




	<div class="main_content">
    <div id="temp" class="container">
        <div class="row">
        <div class="col-md-8 slide">
            <div class="col-md-12 headImage">
            </div>
            <div class="col-md-12 slider">
            <div class="well">

      <div class="row about-data">
        <div class="col-md-8 about">
          <div class="pad-bg">  
          <h3  class="about-header">Search Results</h3>
          	<center>-->
          		<?php
	$query = $_POST['query'];
		
		$query = mysqli_real_escape_string($conn, $query);
		$query = htmlspecialchars($query);
		//$query = mysqli_real_escape_string($conn, $_POST['query']);
		//$query = mysqli_real_escape_string($query);

		$raw_results = mysqli_query($conn,"SELECT * FROM apps WHERE (`name` LIKE '%".$query."%') OR (`appid` LIKE '%".$query."%')") or die(mysqli_error());
		//$raw_results = mysqli_query($conn,"SELECT * FROM app WHERE ('name' LIKE '%.$query.%' )  ") or die(mysqli_error());
		$i=5;
		if(mysqli_num_rows($raw_results) > 0){
			while ($results = mysqli_fetch_array($raw_results) ) {
				
				
				echo sprintf("<a href=\"http://scroch.com/Mishall/GamePage.php?id=%s\">%s - %s</a>", $results["appid"],$results["appid"],$results["name"]);
				echo "<br>";
				$i=$i-1;
				
				//echo "<p><h3>".$results['name']."</h3>".$results['id']."</p>";
			}
		}
		else{
			echo "no results";
		}
	
	

?>
		</center>   
        </div>
        </div>
<?php include('footer.php');?>
</body>
</html>