
<html>
<head>
    <title>Profile Page</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="stat.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.4/js.cookie.min.js"> </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
 
    <script type="text/javascript" src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
	<script src="profile.js"></script>
	<style>
	</style>
</head>
<body>
<?php include('header.php'); ?>
<div class="container" >
	<div class="row">
		<div style="padding-top:35px" class="col-md-3 col-sm-4 col-lg-3">
			<img src="#"  id="pfp" ></img>
		</div>
		<div class="col-md-9 statistics">
				<div class="pad-bg">
				<h3 class="statistics-header">Details</h3>
				<div class="stat">
				<div class="stat-row">
					<div class="stat-title">Nickname</div>
					<div id="nickname" class="stat-desc"></div>
				</div>
				<div class="stat-row">
					<div class="stat-title">Current State</div>
					<div id="state" class="stat-desc"> wewew </div>
				</div>
				<div class="stat-row">
					<div class="stat-title">Last log off</div>
					<div id="lastlog" class="stat-desc"></div>
				</div>
				<div class="stat-row">
					<div class="stat-title">Account created on</div>
					<div id="created" class="stat-desc"></div>
				</div>
				<div class="stat-row">
					<div class="stat-title">No. of Friends</div>
					<div id="nofriend" class="stat-desc"> </div>
				</div>
				<div class="stat-row">
					<div class="stat-title">Total Games</div>
					<div id="totalgame" class="stat-desc"> </div>
				</div>
				</div>
				</div>
		</div>
	</div>
	 <div class="pad-bg">  
          
           <h3 class="about-header">Profile Details</h3>
		   
		   <ul class="nav nav-tabs" id="tab">
			<li><a data-toggle="tab" href="#achieve"> CSGO Achievements</a></li>
			<li><a data-toggle="tab" href="#friendlist">Show Top 100 Friends</a></li>
			<li><a data-toggle="tab" href="#linux">Show Ban Stats</a></li>
			<li><a data-toggle="tab" href="#gamename">View Games</a></li>
		   </ul>

		<div class="tab-content">
		<div id="achieve" class="tab-pane fade">
		</div>
		<div id="friendlist" class="tab-pane fade"><ul>
		</div>
		<div id="linux" class="tab-pane fade">
		<div class="stat">
				<div class="stat-row">
					<div class="stat-title">Community Ban</div>
					<div id="commban" class="stat-desc"></div>
				</div>
				<div class="stat-row">
					<div class="stat-title">VAC ban</div>
					<div id="vacban" class="stat-desc"> wewew </div>
				</div>
				<div class="stat-row">
					<div class="stat-title">Total VAC bans</div>
					<div id="novacban" class="stat-desc"></div>
				</div>
				<div class="stat-row">
					<div class="stat-title">Total Game bans</div>
					<div id="nogameban" class="stat-desc"> </div>
				</div>
				<div class="stat-row">
					<div class="stat-title">Economy Ban</div>
					<div id="ecoban" class="stat-desc"> </div>
				</div>
				</div>
		</div>
		<div id="gamename" class="tab-pane fade">
		</div>
		</div>
         </div>
		
	
</div>


 
  
<?php include('footer.php');?>
</body>
</html>