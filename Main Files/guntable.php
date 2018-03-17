<html>
<head>
	<title>Server Status</title>
	<link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
     <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="server.css">
	<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src="gundata.js"></script>
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
	<button  id="getData">Get Game Data</button>
</div>


<div  class="container">
<div class="weapons">
<span class="name">Weapons </span>
</div>
<div class="wpkills">
<span class="name">Total Kills</span>
</div>
<div class="wpshots">
<span class="name">Total Shots </span>
</div>
<div class="wphits">
<span class="name">Total Hits </span>
</div>
</div>
<hr/>


<div class="container">
<div class="weapons">
<div class="wplists">
<img class="wpicon" src="ak.png" alt="ak">
</div>
<div class="wplists">
<img class="wpicon" src="m4a4.png" alt="m4a4">
</div>
<div class="wplists">
<img class="wpicon" src="awp.png" alt="awp">
</div>
<div class="wplists">
<img class="wpicon" src="aug.png" alt="aug">
</div>
<div class="wplists">
<img class="wpicon" src="sg.png" alt="sg553">
</div>
<div class="wplists">
<img class="wpicon" src="famas.png" alt="famas">
</div>
<div class="wplists">
<img class="wpicon" src="galil.png" alt="galil">
</div>
<div class="wplists">
<img class="wpicon" src="scar.png" alt="scar">
</div>
<div class="wplists">
<img class="wpicon" src="g3.png" alt="g3sg1">
</div>
<div class="wplists">
<img class="wpicon" src="ssg08.png" alt="ssg08">
</div>
<div class="wplists">
<img class="wpicon" src="mac10.png" alt="mac-10">
</div><div class="wplists">
<img class="wpicon" src="mp7.png" alt="mp7">
</div>
<div class="wplists">
<img class="wpicon" src="p90.png" alt="p90">
</div>
<div class="wplists">
<img class="wpicon" src="ump.png" alt="ump-45">
</div><div class="wplists">
<img class="wpicon" src="mp9.png" alt="mp9">
</div><div class="wplists">
<img class="wpicon" src="bizon.png" alt="pp-bizon">
</div><div class="wplists">
<img class="wpicon" src="negev.png" alt="negev">
</div>
<div class="wplists">
<img class="wpicon" src="m249.png" alt="m249">
</div>
<div class="wplists">
<img class="wpicon" src="usp.png" alt="usp">
</div>
<div class="wplists">
<img class="wpicon" src="deagle.png" alt="deagle">
</div>
<div class="wplists">
<img class="wpicon" src="tec9.png" alt="tec-9">
</div>
<div class="wplists">
<img class="wpicon" src="57.png" alt="fiveseven">
</div>
<div class="wplists">
<img class="wpicon" src="p250.png" alt="p250">
</div>
<div class="wplists">
<img class="wpicon" src="dual.png" alt="dual berettas">
</div>
<div class="wplists">
<img class="wpicon" src="glock.png" alt="glock18">
</div>
<div class="wplists">
<img class="wpicon" src="nova.png" alt="nova">
</div>
<div class="wplists">
<img class="wpicon" src="xm.png" alt="xm1014">
</div>
<div class="wplists">
<img class="wpicon" src="mag7.png" alt="mag-7">
</div>
<div class="wplists">
<img class="wpicon" src="sawed.png" alt="sawed off">
</div>
</div>

<div class="wpkills">
<div class="lists" id="kills_ak">
...
</div>
<div class="lists" id="kills_m4">
...
</div>
<div class="lists" id="kills_awp">
...
</div>
<div class="lists" id="kills_aug">
...
</div>
<div class="lists" id="kills_sg">
...
</div>
<div class="lists" id="kills_famas">
...
</div>
<div class="lists" id="kills_galil">
...
</div>
<div class="lists" id="kills_scar">
...
</div>
<div class="lists" id="kills_g3">
...
</div>
<div class="lists" id="kills_ssg">
...
</div>
<div class="lists" id="kills_mac10">
...
</div>
<div class="lists" id="kills_mp7">
...
</div>
<div class="lists" id="kills_p90">
...
</div>
<div class="lists" id="kills_ump">
...
</div>
<div class="lists" id="kills_mp9">
...
</div>
<div class="lists" id="kills_bizon">
...
</div>
<div class="lists" id="kills_negev">
...
</div>
<div class="lists" id="kills_m249">
...
</div>
<div class="lists" id="kills_usp">
...
</div>
<div class="lists" id="kills_deagle">
...
</div>
<div class="lists" id="kills_tec9">
...
</div>
<div class="lists" id="kills_57">
...
</div>
<div class="lists" id="kills_p250">
...
</div>
<div class="lists" id="kills_elite">
...
</div>
<div class="lists" id="kills_glock">
...
</div>
<div class="lists" id="kills_nova">
...
</div>
<div class="lists" id="kills_xm">
...
</div>
<div class="lists" id="kills_mag7">
...
</div>
<div class="lists" id="kills_sawed">
...
</div>

</div>
<div class="wpshots">
<div class="lists" id="shots_ak">
...
</div>
<div class="lists" id="shots_m4">
...
</div>
<div class="lists" id="shots_awp">
...
</div>
<div class="lists" id="shots_aug">
...
</div>
<div class="lists" id="shots_sg">
...
</div>
<div class="lists" id="shots_famas">
...
</div>
<div class="lists" id="shots_galil">
...
</div>
<div class="lists" id="shots_scar">
...
</div>
<div class="lists" id="shots_g3">
...
</div>
<div class="lists" id="shots_ssg">
...
</div>
<div class="lists" id="shots_mac10">
...
</div>
<div class="lists" id="shots_mp7">
...
</div>
<div class="lists" id="shots_p90">
...
</div>
<div class="lists" id="shots_ump">
...
</div>
<div class="lists" id="shots_mp9">
...
</div>
<div class="lists" id="shots_bizon">
...
</div>
<div class="lists" id="shots_negev">
...
</div>
<div class="lists" id="shots_m249">
...
</div>
<div class="lists" id="shots_usp">
...
</div>
<div class="lists" id="shots_deagle">
...
</div>
<div class="lists" id="shots_tec9">
...
</div>

<div class="lists" id="shots_57">
...
</div>
<div class="lists" id="shots_p250">
...
</div>
<div class="lists" id="shots_elite">
...
</div>
<div class="lists" id="shots_glock">
...
</div>
<div class="lists" id="shots_nova">
...
</div>
<div class="lists" id="shots_xm">
...
</div>
<div class="lists" id="shots_mag7">
...
</div>
<div class="lists" id="shots_sawed">
...
</div>
</div>
<div class="wphits">
<div class="lists" id="hits_ak">
...
</div>
<div class="lists" id="hits_m4">
...
</div>
<div class="lists" id="hits_awp">
...
</div>
<div class="lists" id="hits_aug">
...
</div>
<div class="lists" id="hits_sg">
...
</div>
<div class="lists" id="hits_famas">
...
</div>
<div class="lists" id="hits_galil">
...
</div>

<div class="lists" id="hits_scar">
...
</div>
<div class="lists" id="hits_g3">
...
</div>
<div class="lists" id="hits_ssg">
...
</div>
<div class="lists" id="hits_mac10">
...
</div>
<div class="lists" id="hits_mp7">
...
</div>
<div class="lists" id="hits_p90">
...
</div>
<div class="lists" id="hits_ump">
...
</div>
<div class="lists" id="hits_mp9">
...
</div>
<div class="lists" id="hits_bizon">
...
</div>
<div class="lists" id="hits_negev">
...
</div>
<div class="lists" id="hits_m249">
...
</div>
<div class="lists" id="hits_usp">
...
</div>
<div class="lists" id="hits_deagle">
...
</div>
<div class="lists" id="hits_tec9">
...
</div>

<div class="lists" id="hits_57">
...
</div>
<div class="lists" id="hits_p250">
...
</div>
<div class="lists" id="hits_elite">
...
</div>
<div class="lists" id="hits_glock">
...
</div>
<div class="lists" id="hits_nova">
...
</div>
<div class="lists" id="hits_xm">
...
</div>
<div class="lists" id="hits_mag7">
...
</div>
<div class="lists" id="hits_sawed">
...
</div>
</div>
</div>

<?php include('footer.php');?>

</body>
</html>

CF287EF9D049517AD75478BD1F56D778