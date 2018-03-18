
<html>
<head>
    <title>Profile Page</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/stat.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:300,400" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.4/js.cookie.min.js"> </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
 
    <script type="text/javascript" src="http://canvasjs.com/assets/script/canvasjs.min.js"></script>
	<script type="text/javascript" src="js/showprofile.js"></script>
	<script>
	
	function myFunction() {
		
		var customid;
		var id64;
		var sid;
		var url;
		 if($("#getCustom").val()== '')
		customid= false;
		else
		customid =  $("#getCustom").val();
	
		if($("#getId64").val()== '')
		id64= false;
		else
		id64 = $("#getId64").val();
		if(customid!=false){
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=CF287EF9D049517AD75478BD1F56D778&vanityurl=${customid}`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			success: function printData(datas) {
				
				
				$.each(datas, function(key , value){
					
				if(key === "steamid"){
				sid = value;
				return;
				}
				else if(typeof value === 'object'){
					printData(value);
				}
					
				});
				
			},
			complete: function(datas){
				url = "./profile.php?id=" + sid ;
					location.replace(url);
			}
				
			
			});	
		
	}
	else if(id64!=false){
		url = "./profile.php?id=" + id64 ;
					location.replace(url);
		
	}
	else{
		alert("enter valid id");
	}

	
    
	}
</script>

	<style>
	
		body{
				background-image: url("images/steam.jpg");
			}
	</style>
</head>
<body>
<?php include('header.php'); ?>

<div id="input" class="input-form">
	<div class="entry-head">
	  <h4>Enter Steam Id to View Data</h4>
	</div>
	<input type="text" id="getCustom" placeholder="Custom ID"/><br />
	<hr width="45%" align="left"><h5 id="head">OR</h5><hr width="45%" align="right">
	<input type="text" id="getId64" placeholder="SteamID"/><br />
	<button onclick="myFunction()" id="getData" > Show Profile</button>
</div>


<?php include('footer.php');?>
</body>
</html>