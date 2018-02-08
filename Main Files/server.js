$(function (){
	
	
	$.ajax({
				 dataType: 'JSONP',
				url: `https://json2jsonp.com/?url=${encodeURIComponent(`https://api.steampowered.com/ICSGOServers_730/GetGameServersStatus/v1/?key=CF287EF9D049517AD75478BD1F56D778`)}`,
				jsonCallback: 'callback',
				type : 'GET',
				
				success: function printData(datas) {
					
					
					$.each(datas, function(key , value){
					if(key === "India"){
						document.getElementById("csgo_india").innerHTML=value.load;
						document.getElementById("csgo_india").style.textTransform = "uppercase";
						return;
					}
					else if(key === "Peru"){
						document.getElementById("csgo_peru").innerHTML=value.load;
						document.getElementById("csgo_peru").style.textTransform = "uppercase";
						return;
					}
					else if(key === "EU West"){
						document.getElementById("csgo_eu_west").innerHTML=value.load;
						document.getElementById("csgo_eu_west").style.textTransform = "uppercase";
						return;
					}
					else if(key === "EU East"){
						document.getElementById("csgo_eu_east").innerHTML=value.load;
						document.getElementById("csgo_eu_east").style.textTransform = "uppercase";
						return;
					}
					else if(key === "India East"){
						document.getElementById("csgo_india_east").innerHTML=value.load;
						document.getElementById("csgo_india_east").style.textTransform = "uppercase";
						return;
					}
					else if(key === "Hong Kong"){
						document.getElementById("csgo_hk").innerHTML=value.load;
						document.getElementById("csgo_hk").style.textTransform = "uppercase";
						return;
					}
					else if(key === "Spain"){
						document.getElementById("csgo_spain").innerHTML=value.load;
						document.getElementById("csgo_spain").style.textTransform = "uppercase";
						return;
					}
					else if(key === "Chile"){
						document.getElementById("csgo_chile").innerHTML=value.load;
						document.getElementById("csgo_chile").style.textTransform = "uppercase";
						return;
					}
					else if(key === "US Southwest"){
						document.getElementById("csgo_us_southwest").innerHTML=value.load;
						document.getElementById("csgo_us_southwest").style.textTransform = "uppercase";
						return;
					}
					else if(key === "US Southeast"){
						document.getElementById("csgo_us_southeast").innerHTML=value.load;
						document.getElementById("csgo_us_southeast").style.textTransform = "uppercase";
						return;
					}
					else if(key === "US Northwest"){
						document.getElementById("csgo_us_northwest").innerHTML=value.load;
						document.getElementById("csgo_us_northwest").style.textTransform = "uppercase";
						return;
					}
					else if(key === "US Northeast"){
						document.getElementById("csgo_us_northeast").innerHTML=value.load;
						document.getElementById("csgo_us_northeast").style.textTransform = "uppercase";
						return;
					}
					else if(key === "EU North"){
						document.getElementById("csgo_eu_north").innerHTML=value.load;
						document.getElementById("csgo_eu_north").style.textTransform = "uppercase";
						return;
					}
					else if(key === "Emirates"){
						document.getElementById("csgo_emirates").innerHTML=value.load;
						document.getElementById("csgo_emirates").style.textTransform = "uppercase";
						return;
					}
					else if(key === "South Africa"){
						document.getElementById("csgo_southafrica").innerHTML=value.load;
						document.getElementById("csgo_southafrica").style.textTransform = "uppercase";
						return;
					}
					else if(key === "Brazil"){
						document.getElementById("csgo_brazil").innerHTML=value.load;
						document.getElementById("csgo_brazil").style.textTransform = "uppercase";
						return;
					}
					else if(key === "Japan"){
						document.getElementById("csgo_japan").innerHTML=value.load;
						document.getElementById("csgo_japan").style.textTransform = "uppercase";
						return;
					}
					else if(key === "Australia"){
						document.getElementById("csgo_australia").innerHTML=value.load;
						document.getElementById("csgo_australia").style.textTransform = "uppercase";
						return;
					}
					else if(key === "Singapore"){
						document.getElementById("csgo_singapore").innerHTML=value.load;
						document.getElementById("csgo_singapore").style.textTransform = "uppercase";
						return;
					}
					else if(key === "SessionsLogon"){
						document.getElementById("csgo_sessions").innerHTML=value;
						document.getElementById("csgo_sessions").style.textTransform = "uppercase";
						return;
					}
					else if(key === "SteamCommunity"){
						document.getElementById("community").innerHTML=value;
						document.getElementById("community").style.textTransform = "uppercase";
						return;
					}
					else if(key === "IEconItems"){
						document.getElementById("csgo_community").innerHTML=value;
						document.getElementById("csgo_community").style.textTransform = "uppercase";
						return;
					}
					else if(key === "online_servers"){
						document.getElementById("online_servers").innerHTML=value;
						return;
					}
					else if(key === "online_players"){
						document.getElementById("online_players").innerHTML=value;
						return;
					}
					else if(key === "searching_players"){
						document.getElementById("searching_players").innerHTML=value;
						return;
					}
					else if(key === "scheduler"){
						document.getElementById("csgo_mm_scheduler").innerHTML=value;
						document.getElementById("csgo_mm_scheduler").style.textTransform = "uppercase";
						document.getElementById("webapi").style.textTransform = "uppercase";
						return;
					}
					else if(key === "search_seconds_avg"){
						document.getElementById("search_seconds_avg").innerHTML=value+" seconds";
						return;
					}
					else if(typeof value === 'object'){
						printData(value);
					}
						
					});
					
				},
				complete: function(datas){
					$('.status').each(function() {
						//alert($(this).text());
						if ( $(this).text()=="low" ) {
						$(this).addClass('lowload');
						 }
						else if ( $(this).text()=="normal" ) {
						$(this).addClass('lowload');
						 }
						else if ( $(this).text()=="medium" ) {
						$(this).addClass('medload');
						 }
						else if ( $(this).text()=="high" ) {
						$(this).addClass('highload');
						 }
						 else if ( $(this).text()=="critical" ) {
						$(this).addClass('medload');
						 }
						 else if ( $(this).text()=="surge" ) {
						$(this).addClass('highload');
						 }
						 else if ( $(this).text()=="offline" ) {
						$(this).addClass('highload');
						 }
						  else if ( $(this).text()=="idle" ) {
						$(this).addClass('idleload');
						 }
						  else if ( $(this).text()=="delayed" ) {
						$(this).addClass('medload');
						 }
						 
						 
					});
				}
					
				
			});		
	
	$('.status').each(function() {
});
	
});