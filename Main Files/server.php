<html>
<head>
	<title>Server Status</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
     <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="css/server.css">
	<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script src="js/server.js"></script>
</head>
<body>
	<?php include('header.php'); ?>
	
<div class="container">
<h1 class="title">Steam Services Status</h1>
<div id="psa"></div>
<div class="services-container">
<div class="services" class="steamservice">
<h2 class="services-title">Steam Services</h2>
<div class="service">
<span class="name">Steam Community </span>
<span class="status" id="community">…</span>
</div>
<div class="service">
<span class="name">Steam Web API </span>
<span class="status" id="webapi">normal</span>
</div>
<div class="service mmstats">
<span class="name">Sessions Logon </span>
<span class="status" id="csgo_sessions">…</span>
</div>
<div class="service mmstats">
<span class="name">Player Inventories </span>
<span class="status" id="csgo_community">…</span>
</div>
<div class="service mmstats">
<span class="name">Matchmaking Scheduler </span>
<span class="status" id="csgo_mm_scheduler">…</span>
</div>


<h2 class="services-title">Matchmaking Services</h2>
<div class="service">
<span class="name">Servers Online </span>
<span class="status" id="online_servers">…</span>
</div>
<div class="service">
<span class="name">Players Online </span>
<span class="status" id="online_players">…</span>
</div>
<div class="service">
<span class="name">Players Searching </span>
<span class="status" id="searching_players">…</span>
</div>
<div class="service">
<span class="name">Average Search time </span>
<span class="status" id="search_seconds_avg">…</span>
</div>

</div>


<div class="services" class="csgoregion">
<h2 class="services-title">CS:GO Regions</h2>
<div class="service sep">
<span class="name"> <img class="flag" src="images/server/euflag.jpg"> EU West </span>
<span class="status" id="csgo_eu_west">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/euflag.jpg"> EU East </span>
<span class="status" id="csgo_eu_east">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/euflag.jpg"> EU North </span>
<span class="status" id="csgo_eu_north">…</span>
</div>
<div class="service sep">
<span class="name"> <img class="flag" src="images/server/usaflag.jpg"> US Northwest </span>
<span class="status" id="csgo_us_northwest">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/usaflag.jpg"> US Northeast </span>
<span class="status" id="csgo_us_northeast">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/usaflag.jpg"> US Southwest </span>
<span class="status" id="csgo_us_southwest">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/usaflag.jpg"> US Southeast </span>
<span class="status" id="csgo_us_southeast">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/peruflag.jpg"> Peru </span>
<span class="status" id="csgo_peru">…</span>
</div>
<div class="service sep">
<span class="name"><img class="flag" src="images/server/ausflag.jpg"> Australia </span>
<span class="status" id="csgo_australia">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/brazilflag.jpg"> Brazil </span>
<span class="status" id="csgo_brazil">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/chileflag.jpg"> Chile </span>
<span class="status" id="csgo_chile">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/uaeflag.jpg"> Emirates </span>
<span class="status" id="csgo_emirates">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/indiaflag.jpg"> India </span>
<span class="status" id="csgo_india">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/indiaflag.jpg"> India East </span>
<span class="status" id="csgo_india_east">…</span>
</div>
 
<div class="service">
<span class="name"><img class="flag" src="images/server/japanflag.jpg"> Japan </span>
<span class="status" id="csgo_japan">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/hkgflag.jpg"> Hong Kong </span>
<span class="status" id="csgo_hk">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/sgpflag.jpg"> Singapore </span>
<span class="status" id="csgo_singapore">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/saflag.jpg"> South Africa </span>
<span class="status" id="csgo_southafrica">…</span>
</div>
<div class="service">
<span class="name"><img class="flag" src="images/server/spflag.jpg"> Spain </span>
<span class="status" id="csgo_spain">…</span>
</div>
</div>
</div>
</div>
<div class="footer-oreos">
<div class="container">

<p>A <a target="_blank" href="#">GameStat</a> project</p>
<p>Developed by GameStat</p>
</div>
</div>

<?php include('footer.php');?>

</body>
</html>