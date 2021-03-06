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
	<script type="text/javascript" src="Gstat.js"></script>
	<style>
	</style>
</head>
<body>
<center><h1 id="head">CS:GO STATS</h1></center>
<center><h2 id="head">GENERAL STATS</h2></center>
<div class="input-form">
	<div class="entry-head">
	  <h4>Enter Steam Id to View Data</h4>
	</div>
	<input type="text" id="getCustom" placeholder="Custom ID"/><br />
	<hr width="45%" align="left"><h5 id="head">OR</h5><hr width="45%" align="right">
	<input type="text" id="getId64" placeholder="SteamID"/><br />
	<button  id="getData">Get Game Data</button>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-6">
		<p id="kd" class="text"></p>
      <div id="kill-death" class="chart"></div>
    </div>
    <div class="col-md-6">
		<p id="wl" class="text"></p>
      <div id="win-loss" class="chart"></div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
		<p id="mwl" class="text"></p>
      <div id="match-win-loss" class="chart"></div>
    </div>
	<div class="col-md-6">
		<p id="time" class="text"></p>
		<div class="non-chart">
			<p class="legend-head">Time Played</p>
		</div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
		<p id="hostage" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Hostages Rescued</p>
	  </div>
    </div>
    <div class="col-md-6">
		<p id="headshot" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Headshots</p>
	  </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
		<p id="window" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Windows Broken</p>
	  </div>
    </div>
	<div class="col-md-6">
      <div id="bombDP" class="chart"></div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
		<p id="domination" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Dominations</p>
	  </div>
    </div>
    <div class="col-md-6">
		<p id="mvp" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">MVPs</p>
	  </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
		<p id="dom-over" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Domination Overkills</p>
	  </div>
    </div>
    <div class="col-md-6">
		<p id="revenge" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Revenges</p>
	  </div>
    </div>
  </div>
  
    <div class="row">
    <div class="col-md-6">
		<p id="pistol" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Pistol Rounds Won</p>
	  </div>
    </div>
	<div class="col-md-6">
		<p id="decal" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Decals Sprayed</p>
	  </div>
    </div>
	</div>
	
	<div class="row">
    <div class="col-md-6">
		<p id="money" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Money Spent</p>
	  </div>
    </div>
	<div class="col-md-6">
		<p id="damage" class="text"></p>
      <div class="non-chart">
		<p class="legend-head">Damage Done</p>
	  </div>
    </div>
	</div>
	</div>
 
<center><div class="error"><h4 id="head">

</h4></div></center>


</body>
</html>