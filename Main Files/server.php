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
	<script src="server.js"></script>
</head>
<body>
	<?php include('header.php'); ?>
	
<div class="container">
<h1 class="title">Steam Services Status</h1>
<div id="psa"></div>
<div class="services-container">
<div class="services">
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


<div class="services">
<h2 class="services-title">CS:GO Regions</h2>
<div class="service sep">
<span class="name">EU West </span>
<span class="status" id="csgo_eu_west">…</span>
</div>
<div class="service">
<span class="name">EU East </span>
<span class="status" id="csgo_eu_east">…</span>
</div>
<div class="service">
<span class="name">EU North </span>
<span class="status" id="csgo_eu_north">…</span>
</div>
<div class="service sep">
<span class="name">US Northwest </span>
<span class="status" id="csgo_us_northwest">…</span>
</div>
<div class="service">
<span class="name">US Northeast </span>
<span class="status" id="csgo_us_northeast">…</span>
</div>
<div class="service">
<span class="name">US Southwest </span>
<span class="status" id="csgo_us_southwest">…</span>
</div>
<div class="service">
<span class="name">US Southeast </span>
<span class="status" id="csgo_us_southeast">…</span>
</div>
<div class="service">
<span class="name">Peru </span>
<span class="status" id="csgo_peru">…</span>
</div>
<div class="service sep">
<span class="name">Australia </span>
<span class="status" id="csgo_australia">…</span>
</div>
<div class="service">
<span class="name">Brazil </span>
<span class="status" id="csgo_brazil">…</span>
</div>
<div class="service">
<span class="name">Chile </span>
<span class="status" id="csgo_chile">…</span>
</div>
<div class="service">
<span class="name">Emirates </span>
<span class="status" id="csgo_emirates">…</span>
</div>
<div class="service">
<span class="name">India </span>
<span class="status" id="csgo_india">…</span>
</div>
<div class="service">
<span class="name">India East </span>
<span class="status" id="csgo_india_east">…</span>
</div>
 
<div class="service">
<span class="name">Japan </span>
<span class="status" id="csgo_japan">…</span>
</div>
<div class="service">
<span class="name">Hong Kong </span>
<span class="status" id="csgo_hk">…</span>
</div>
<div class="service">
<span class="name">Singapore </span>
<span class="status" id="csgo_singapore">…</span>
</div>
<div class="service">
<span class="name">South Africa </span>
<span class="status" id="csgo_southafrica">…</span>
</div>
<div class="service">
<span class="name">Spain </span>
<span class="status" id="csgo_spain">…</span>
</div>
</div>
</div>
</div>
<!--<div class="footer">
<div class="container">
<div class="pull-right">
<a target="_blank" href="https://twitter.com/SteamStatus" class="twitter-follow-button" data-show-count="false" data-size="large" data-dnt="true">Follow @SteamStatus</a>
</div>
Refreshing in <span id="js-refresh">&infin;</span> seconds
</div>
</div>-->
<div class="footer-oreos">
<div class="container">

<p>A <a target="_blank" href="#">GameHub</a> project</p>
<p>Developed by GameHub</p>
</div>
</div>

<?php include('footer.php');?>

</body>
</html>