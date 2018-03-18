<html>
<head>
    <title>Game Page</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/stat.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.4/js.cookie.min.js"> </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
     <script type="text/javascript" src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
	<script type="text/javascript" src="js/Gstat.js"></script>
	<script type="text/javascript" src="js/Mapstat.js"></script>
	<script type="text/javascript" src="js/Gunstats.js"></script>	
	<style>
		body{
			background-image: url("images/dota.jpg");
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
       
    <div class="col-md-12 about">
        <div class="pad-bg">  
			<h3 class="about-header">Stats</h3>
		   
			<ul class="nav nav-tabs" id="tab">
				<li class="active"><a data-toggle="tab" href="#windows">General Stats</a></li>
				<li><a data-toggle="tab" href="#mac">Weapons Stats</a></li>
				<li><a data-toggle="tab" href="#linux">Map Stats</a></li>
			</ul>

			<div class="tab-content">
				<div id="windows" class="tab-pane fade">
				
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
		
		
				</div>
				<div id="mac" class="tab-pane fade"><ul>
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
		 
				</div>
				<div id="linux" class="tab-pane fade">
					<div class="container"> 
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
  </div>
		</div>
		</div>
          </div>
        </div>

	

  
    
  
<?php include('footer.php');?>
</body>
</html>