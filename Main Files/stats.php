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
	<script type="text/javascript" src="Gstat2.js"></script>
	<script type="text/javascript" src="Mapstat2.js"></script>
	<script type="text/javascript" src="Gunstats2.js"></script>	
	<style>
		body{
			background-image: url("dota.jpg");
		}
		chart{
			text-align:center;
		}
		#favv{
			background-color: rgba(0,0,0,0.6);
			
		}
		.opac{
			background-color:rgba(55,55,55,0);
		}
		.favgunmap{
			background-color: rgba(0,0,0,0.6);
			width:450px;
			height:500px;
			border-size:1px;
			border:solid;
			border-color:white;
		}
		.kdbox{
			width:700px;
			height:500px;
		}
		.fav{
			margin:100px;
			width:100%;
			
		}
		.favgun{
			display:inline-block;
			height:300px ;
			width:400px;
		}
		.kdtext{
			top:42%;
		}
		.statkd{
			display:inline-block;
			width:100%;
			height:100%;
		}
		
	</style>

</head>
<body>
	
    <?php include('header.php'); ?>
		
	<div id="hidethisshit" class="input-form">
	<div class="entry-head">
	  <h4>Enter Steam Id to View Data</h4>
	</div>
	<input type="text" id="getCustom" placeholder="Custom ID"/><br />
	<hr width="45%" align="left"><h5 id="head">OR</h5><hr width="45%" align="right">
	<input type="text" id="getId64" placeholder="SteamID"/><br />
	<button  id="getData">View Stats</button>
	</div>

    <div id="favv" class="container fav">
		<div class="row">
			<div class="col-sm-3 favgunmap">
				<div class="favgun">
					<img id="favgunimg" style=" position:absolute;" height="300px" width="400px" src="">	
				</div>
				<div>
					<p id="favgunname" style="text-align:center; color:white; font-size:3em;" > AK47 </p>
					<p style="text-align:center; color:white; font-size:2.5em;" > Favorite Weapon</p>
					<p id="favgunkill" style=" margin-left:30%;  color:white; font-size:2em;" >  <img width="30px" height="30px" src="kills.png"> Kills</p> 
				</div>
			</div>
			<div class=" col-sm-5 kdbox">
			<div style="min-height:400px; min-width:700px">
				<p id="favkd" class="text kdtext"></p>
				<div id="statkd" class="chart"></div>
			</div>
			<div id="accuracy" style=" margin-left:35%; margin-top:10px; color:white; font-size:2em; min-height:100px; min-width:300px" >
				 <img style="margin-left:10%;" width="40px" height="40px" src="headshot.png"> 
			</div>
			</div>
			<div class=" col-sm-3 favgunmap">
				<div class="favgun">
					<img style=" position:absolute; margin-left:50px; margin-top:10px;" height="300px" width="300px" src="dust2.png">	
				</div>
				<div >
					<p id="favmapname" style="text-align:center; color:white; font-size:3em;" > de_dust2 </p>
					<p style="text-align:center; color:white; font-size:2.5em;" > Favorite Map</p>
					<p id="favmapwins" style=" margin-left:30%;  color:white; font-size:2em;" > <img width="30px" height="30px" src="wins.png"> wins </p> 
				</div>
			</div>
		</div>
	</div>

      <div class="col-md-12 about">
          <div class="pad-bg">  
           <h3 class="about-header">Detailed Stats</h3>
		   
		   <ul class="nav nav-tabs" id="tab">
			<li ><a data-toggle="tab" href="#windows">General Stats</a></li>
			<li><a data-toggle="tab" href="#mac">Weapons Stats</a></li>
			<li><a data-toggle="tab" href="#linux">Map Stats</a></li>
		   </ul>

		<div class="tab-content opac">
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
    <div class="col-md-12" style="width:100%;">
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