<?php
// Starting session
require 'steamauth/steamauth.php';
if(isset($_SESSION['steamid']))
{
	$cookie_name = "user";
	$cookie_value = $_SESSION['steamid'];
	setcookie($cookie_name, $cookie_value, time() + (86400), "/");
}
?>
<html>
<head>
<!--<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
<script src="http://code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-autocomplete/1.0.7/jquery.auto-complete.js"></script>
<link rel="stylesheet" type="text/css" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" />-->
<script type="text/javascript" src="jquery-1.10.2.js"></script>
<script type="text/javascript" src="jquery.auto-complete.js"></script>
<link rel="stylesheet" type="text/css" href="jquery-ui.css">
<script type="text/javascript" src="jquery-ui.js"></script>
</head>
<body>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2000px-Steam_icon_logo.svg.png" style="width:1.8em;height:1.8em;">
        </button>
        <a class="navbar-brand" href="#">GameStat</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
            <li>
			<?php
				if (!isset($_SESSION['steamid'])){ 
					echo loginbutton(); 
				}
				else{ 
					?>
					 <a id="goprofile" href=""><img id="getprofile" src=""></a>
					<?php
					echo logoutbutton(); 
					
				 }
				?>
			</li>
        </ul>
        </div>
    </div>
</nav>

    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                 </button>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                <li><a href="HomePage.php">Home</a></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Stats<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    <li><a href="Gstat.php">General</a></li>
                    <li><a href="Gunstats.php">Guns</a></li>
                    <li><a href="Mapstat.php">Maps</a></li>
                    </ul>
                </li>
				 <li><a href="compare.php">Compare</a></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Top<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    <li><a href="genre.html">Top</a></li>
                    <li><a href="#">Top Sellers</a></li>
                    <li><a href="#">Upcoming</a></li>
                    </ul>
                </li>
                <li><a href="server.php">Server</a></li>
				<li><a href="showprofile.php">Profile</a></li>
                </ul>
                <form action="search.php" method="post" class="navbar-form navbar-right">
                <div class="input-group">
                    <input type="text" name="query" id="customerAutocomplte" class="ui-autocomplete-input form-control" placeholder="Search" autocomplete="off">
                        <div class="input-group-btn">
                            <button  class="btn btn-default" type="submit">
                                <i class="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                </div>
                </form>
            </div>
        </div>
    </nav>
	
	
	<script type="text/javascript"> 
		$(document).ready(function($){
			$('#customerAutocomplte').autocomplete({
				source:'suggest.php', 
				minLength:2,
				select: function(event,ui){
					var code = ui.item.id;
					if(code != '') {
						location.href = 'https://gamestat.in/GamePage.php?id=' + code;
					}
				},
						// optional
				html: true, 
				// optional (if other layers overlap the autocomplete list)
				open: function(event, ui) {
					$(".ui-autocomplete").css("z-index", 1000);
				}
			});
		});
        </script>
<body>
</html>