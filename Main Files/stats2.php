<html>
<head>
    <title>Game Page</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="stat.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.4/js.cookie.min.js"> </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
     <script type="text/javascript" src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
	<script type="text/javascript" src="Gstat.js"></script>
	<script type="text/javascript" src="Mapstat.js"></script>
	<script type="text/javascript" src="Gunstats.js"></script>	
	<style>
		body{
			background-image: url("dota.jpg");
		}
		chart{
			text-align:center;
		}
	</style>

</head>
<body>
	
    <?php include('header.php'); ?>
		
	<div class="input-form">
	<div class="entry-head">
	  <h4>Enter Steam Id to View Data</h4>
	</div>
	<input type="text" id="getCustom" placeholder="Custom ID"/><br />
	<hr width="45%" align="left"><h5 id="head">OR</h5><hr width="45%" align="right">
	<input type="text" id="getId64" placeholder="SteamID"/><br />
	<button  id="getData">View Stats</button>
	</div>

       

     <div class="container">
		<div class="row">
			 <div class="pad-bg">  
		   
		   <ul class="nav nav-tabs" id="tab">
			<li class="active"><a data-toggle="tab" href="#windows">Windows</a></li>
			<li><a data-toggle="tab" href="#mac">Mac OS X</a></li>
			<li><a data-toggle="tab" href="#linux">SteamOS + Linux</a></li>
		   </ul>

		<div class="tab-content">
		<div id="windows" class="tab-pane fade in active">
			<?php include('gstat2.php'); ?>
		</div>
		<div id="mac" class="tab-pane fade"><ul>
			<?php include('gunstats2.php'); ?>
		</div>
		<div id="linux" class="tab-pane fade">
			<?php include('mapstat2.php'); ?>
		</div>
		</div>
          </div>
		</div>
	</div>

	

  
    
  
<?php include('footer.php');?>
</body>
</html>