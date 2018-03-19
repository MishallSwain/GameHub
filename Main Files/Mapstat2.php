<!DOCTYPE html>
<html>
<head>
    <title>General Stats Page</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="stat.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.4/js.cookie.min.js"> </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
 
    <script type="text/javascript" src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
	<script type="text/javascript" src="Mapstat.js"></script>
	<style>

	</style>
	
</head>
<body>

<center><h1 id="head">CS:GO STATS</h1></center>
<center><h2 id="head">MAP STATS</h2></center>
<div class="input-form">
	<div class="entry-head">
	  <h4>Enter Steam Id to View Data</h4>
	</div>
	<input type="text" id="getCustom" placeholder="Custom ID"/><br />
	<hr width="45%" align="left"><h5 id="head">OR</h5><hr width="45%" align="right">
	<input type="text" id="getId64" placeholder="SteamID"/><br />
	<button  id="getData">Get Game Data</button>
</div>


<div class="row">
    <div class="col-md-6">
		<p id="wlassault" class="text"></p>
      <div id="assault" class="chart"></div>
    </div>
    <div class="col-md-6">
		<p id="wlitaly" class="text"></p>
      <div id="italy" class="chart"></div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
		<p id="wloffice" class="text"></p>
      <div id="office" class="chart"></div>
    </div>
    <div class="col-md-6">
		<p id="wlaztec" class="text"></p>
      <div id="aztec" class="chart"></div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
		<p id="wlcobble" class="text"></p>
      <div id="cobble" class="chart"></div>
    </div>
    <div class="col-md-6">
		<p id="wldust2" class="text"></p>
      <div id="dust2" class="chart"></div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
		<p id="wldust" class="text"></p>
      <div id="dust" class="chart"></div>
    </div>
    <div class="col-md-6">
		<p id="wlinferno" class="text"></p>
      <div id="inferno" class="chart"></div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
		<p id="wlnuke" class="text"></p>
      <div id="nuke" class="chart"></div>
    </div>
    <div class="col-md-6">
		<p id="wltrain" class="text"></p>
      <div id="train" class="chart"></div>
    </div>
  </div>
  
<center><div class="error"><h4 id="head">

</h4></div></center>

  

  
  

</body>
</html>