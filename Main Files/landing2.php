<html>
<head>
    <title>Home Page</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<style>
		body{
			<!--background-image: url("steam.jpg");-->
			background-image: url(https://wallpaperlayer.com/img/2015/10/solid-light-blue-backgrounds-8501-8825-hd-wallpapers.jpg);
		}
		input[type="text"] 
		{
			text-align:center;
			width: 100%;
			height: 45px;
			border: 1px solid #CCC;
		}
		.btc{
			height:45px;
		}
		.input-group{
			
			padding-bottom:10px;
			opacity:0.9;
		}
		
		input[placeholder]{
			color:white;
		}
		
		
		.land{
			padding:1px;
			min-height:400px;
			min-width:200px;
			padding-bottom:50px;
			padding-top:50px;
		}
		.land2{
			min-height:320px;
			min-width:200px;
		}
		.container{
			
			
		}
		.inp{
			padding-top:50px;
		}

	</style>
</head>
<body>
	<?php include('header.php'); ?>
	
	<!--style="background-color:#212121; color:white;" -->
	<div class="input-group inp">
                    <input  type="text"  placeholder="Enter Custom Id">
                        <div class="input-group-btn">
                            <button id="getdata" class="btn btn-default btc">
                                <i class="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
	</div>
	<div class="container">
		<div class="row land land3">
			<div class="col-lg-3 land">
			<img style=" width: 200px; height: 200px; position: absolute;"  src="graph.png">
			<p align="justify" style="font-size:1.5em;  position: absolute; bottom: 0; ">See Detailed Graphs and Charts of your Stats</p>
			</div>
			<div class="col-lg-offset-1 col-lg-3 land">
			<img style=" width: 200px; height: 200px; position: absolute;"  src="compare.png">
			<p align="justify" style="font-size:1.5em;  position: absolute; bottom: 0; ">Compare your stats against World</p>
			</div>
			<div class="col-lg-offset-1 col-lg-3 land">
			<img style=" width: 200px; height: 200px; position: absolute;"  src="ct.png">
			<p align="justify" style="font-size:1.5em;  position: absolute; bottom: 0; ">See your favorite guns and maps</p>
			</div>
		</div>
		
		<div class="row land land3">
			<div class="col-lg-3 land">
			<img style=" width: 200px; height: 200px; position: absolute;"  src="news.png">
			<p align="justify" style="font-size:1.5em;  position: absolute; bottom: 0; ">Get latest news of your favorite Games</p>
			</div>
			<div class="col-lg-offset-1 col-lg-3 land">
			<img style=" width: 200px; height: 200px; position: absolute;"  src="meta.png">
			<p align="justify" style="font-size:1.5em;  position: absolute; bottom: 0; ">Get ratings and current players of your favorite Games</p>
			</div>
			<div class="col-lg-offset-1 col-lg-3 land">
			<img style=" width: 200px; height: 200px; position: absolute;"  src="game.png">
			<p align="justify" style="font-size:1.5em;  position: absolute; bottom: 0; ">See price discounts and many more stats of your favorite Games</p>
			</div>
		</div>
		<div class="row land">
			<div class="col-lg-offset-1 col-lg-3 land2">
			<img style=" width: 250px; height: 250px; position: absolute;"  src="server.png">
			<p align="justify" style="font-size:1.5em;  position: absolute; bottom: 0; ">Track Steam official servers and csgo servers</p>
			</div>
			<div class="col-lg-offset-2 col-lg-4 land2">
			<img style=" width: 250px; height: 250px; position: absolute;"  src="profile.png">
			<p align="justify" style="font-size:1.5em;  position: absolute; bottom: 0; ">See your and your friend's Profile</p>
			</div>
		</div>
	</div>
<?php include('footer.php');?>

</body>
</html>