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
	<script type="text/javascript" src="Gunstats.js"></script>
	
	<style>
		
	</style>
	
</head>
<body>

<center><h1 id="head">CS:GO STATS</h1></center>
<center><h2 id="head">GUN STATS</h2></center>
<div class="input-form">
	<div class="entry-head">
	  <h4>Enter Steam Id to View Data</h4>
	</div>
	<input type="text" id="getCustom" placeholder="Custom ID"/><br />
	<hr width="45%" align="left"><h5 id="head">OR</h5><hr width="45%" align="right">
	<input type="text" id="getId64" placeholder="SteamID"/><br />
	<button  id="getData">Get Game Data</button>
</div>

<!--<?php
//if (isset($_COOKIE["user"])){
?>-->
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div id="gunKills" class="chart"></div>
    </div>
  </div>
	
  <div class="row">
    <div class="col-md-6">
      <div id="knifeKills" class="chart"></div>
    </div>
    <div class="col-md-6">
      <div id="grenadeKills" class="chart"></div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
      <div id="pistolKills" class="chart"></div>
    </div>
    <div class="col-md-6">
      <div id="shotgunKills" class="chart"></div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
      <div id="subKills" class="chart"></div>
    </div>
    <div class="col-md-6">
      <div id="rifleKills" class="chart"></div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
      <div id="machineKills" class="chart"></div>
    </div>
	<div class="col-md-6">
      <div id="SHKratioTaser" class="chart"></div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">
      <div id="SHKratioPistol" class="chart"></div>
    </div>
    <div class="col-md-6">
      <div id="SHKratioShot" class="chart"></div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div id="SHKratioSub" class="chart"></div>
    </div>
    <div class="col-md-6">
      <div id="SHKratioMachine" class="chart"></div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div id="SHKratioRifle" class="chart"></div>
    </div>
  </div>
</div>

<!--<?php
//}else{
?>-->
<center><div class="error"><h4 id="head">
<?php
	//echo "ENTER STEAM ID TO VIEW DATA";
//}
?>
</h4></div></center>



  

</body>
</html>