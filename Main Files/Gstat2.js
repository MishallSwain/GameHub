 function ratioColor(id){
	var x = document.getElementById(id).innerHTML;
	if(x > 1)
		document.getElementById(id).style.color = "#00FF00";
	else if(x < 1)
		document.getElementById(id).style.color = "#FF0000";
}
function check(i){
	if (i === undefined || i === null) {
		return 0;
	}else{
		return i;
	}
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
 $(function (){
	 var userid = getCookie("user");
	
	var delay=100;
	var id64;
	var customid;
	var url;
	var id;
	var txt;
	var kills;
    var deaths ;
    var time;
    var planted ;
    var diffused ;
    var wins  ;
    var total_played ;
	var loss = total_played - wins;
    var m_won ;
    var m_played ;
	var damage;
	var money;
   
    var headshots ;
    var pistolRounds;
    var decal;
    var hostages;
    var windows;
    var mvps;

    var domination;
    var dom_overkill;
    var revenge;
	
	
				
		
	if(!!getCookie("user")){
		id=userid;
		
			$.ajax({
				 dataType: 'JSONP',
				url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=CF287EF9D049517AD75478BD1F56D778&steamid=${id}`)}`,
				jsonCallback: 'callback',
				type : 'GET',
				success: function(datas) {
					console.log(datas)
					var totalStats = datas.playerstats.stats;
					var reqFields = ["total_kills"];
					var reqFields2 = ["total_deaths"];
					var reqFields3 = ["total_planted_bombs"];
					var reqFields4 = ["total_defused_bombs"];
					var reqFields5 = ["total_matches_played"];
					var reqFields6 = ["total_matches_won"];
					var reqFields7 = ["total_rounds_played"];
					var reqFields8 = ["total_wins"];
					var reqFields9 = ["total_time_played"];
					var reqFields10 = ["total_rescued_hostages"];
					var reqFields11 = ["total_damage_done"];
					var reqFields12 = ["total_money_earned"];
					var reqFields13 = ["total_decal_sprays"];
					var reqFields14 = ["total_broken_windows"];
					var reqFields15 = ["total_dominations"];
					var reqFields16 = ["total_domination_overkills"];
					var reqFields17 = ["total_revenges"];
					var reqFields18 = ["total_mvps"];
					var reqFields19 = ["total_wins_pistolround"];
					var reqFields20 = ["total_kills_headshot"];
					
					
					var filteredStats20 = totalStats.filter((totalStat) => {
						return reqFields20.includes(totalStat.name);
					})
					 $.each(filteredStats20, function(key , order){
						
						console.log(key + ":" + order);
						headshots = order.value;
					});
					var filteredStats10 = totalStats.filter((totalStat) => {
						return reqFields10.includes(totalStat.name);
					})
					 $.each(filteredStats10, function(key , order){
						
						console.log(key + ":" + order);
						hostages = order.value;
					});
					var filteredStats11 = totalStats.filter((totalStat) => {
						return reqFields11.includes(totalStat.name);
					})
					 $.each(filteredStats11, function(key , order){
						
						console.log(key + ":" + order);
						damage = order.value;
					}); 
					var filteredStats12 = totalStats.filter((totalStat) => {
						return reqFields12.includes(totalStat.name);
					})
					 $.each(filteredStats12, function(key , order){
						
						console.log(key + ":" + order);
						money = order.value;
					}); 
					var filteredStats13 = totalStats.filter((totalStat) => {
						return reqFields13.includes(totalStat.name);
					})
					 $.each(filteredStats13, function(key , order){
						
						console.log(key + ":" + order);
						decal = order.value;
					});
					var filteredStats14 = totalStats.filter((totalStat) => {
						return reqFields14.includes(totalStat.name);
					})
					 $.each(filteredStats14, function(key , order){
						
						console.log(key + ":" + order);
						windows = order.value;
					}); 
					var filteredStats15 = totalStats.filter((totalStat) => {
						return reqFields15.includes(totalStat.name);
					})
					 $.each(filteredStats15, function(key , order){
						
						console.log(key + ":" + order);
						domination = order.value;
					}); 
					var filteredStats16 = totalStats.filter((totalStat) => {
						return reqFields16.includes(totalStat.name);
					})
					 $.each(filteredStats16, function(key , order){
						
						console.log(key + ":" + order);
						dom_overkill = order.value;
					}); 
					var filteredStats17 = totalStats.filter((totalStat) => {
						return reqFields17.includes(totalStat.name);
					})
					 $.each(filteredStats17, function(key , order){
						
						console.log(key + ":" + order);
						revenge = order.value;
					}); 
					var filteredStats18 = totalStats.filter((totalStat) => {
						return reqFields18.includes(totalStat.name);
					})
					 $.each(filteredStats18, function(key , order){
						
						console.log(key + ":" + order);
						mvps = order.value;
					}); 
					var filteredStats19 = totalStats.filter((totalStat) => {
						return reqFields19.includes(totalStat.name);
					})
					 $.each(filteredStats19, function(key , order){
						
						console.log(key + ":" + order);
						pistolRounds = order.value;
					}); 
					var filteredStats = totalStats.filter((totalStat) => {
						return reqFields.includes(totalStat.name);
					})
					 $.each(filteredStats, function(key , order){
						
						console.log(key + ":" + order);
						kills = order.value;
					}); 
					var filteredStats2 = totalStats.filter((totalStat) => {
						return reqFields2.includes(totalStat.name);
					})
					 $.each(filteredStats2, function(key , order){
						
						console.log(key + ":" + order);
						deaths = order.value;
					}); 
					var filteredStats9 = totalStats.filter((totalStat) => {
						return reqFields9.includes(totalStat.name);
					})
					 $.each(filteredStats9, function(key , order){
						
						console.log(key + ":" + order);
						time = order.value;
					}); 
					var filteredStats3 = totalStats.filter((totalStat) => {
						return reqFields3.includes(totalStat.name);
					})
					 $.each(filteredStats3, function(key , order){
						
						console.log(key + ":" + order);
						planted = order.value;
					}); 
					var filteredStats4 = totalStats.filter((totalStat) => {
						return reqFields4.includes(totalStat.name);
					})
					 $.each(filteredStats4, function(key , order){
						
						console.log(key + ":" + order);
						diffused = order.value;
					}); 
					var filteredStats5 = totalStats.filter((totalStat) => {
						return reqFields5.includes(totalStat.name);
					})
					 $.each(filteredStats5, function(key , order){
						
						console.log(key + ":" + order);
						m_played = order.value;
					}); 
					var filteredStats6 = totalStats.filter((totalStat) => {
						return reqFields6.includes(totalStat.name);
					})
					 $.each(filteredStats6, function(key , order){
						
						console.log(key + ":" + order);
						m_won = order.value;
					}); 
					var filteredStats7 = totalStats.filter((totalStat) => {
						return reqFields7.includes(totalStat.name);
					})
					 $.each(filteredStats7, function(key , order){
						
						console.log(key + ":" + order);
						total_played = order.value;
					}); 
					var filteredStats8 = totalStats.filter((totalStat) => {
						return reqFields8.includes(totalStat.name);
					})
					 $.each(filteredStats8, function(key , order){
						
						console.log(key + ":" + order);
						wins = order.value;
					}); 
					loss= total_played -  wins;	
					kills = check(kills);
					deaths = check(deaths);
					time = check(time);
					planted = check(planted);
					diffused = check(diffused);
					wins = check(wins);
					total_played = check(total_played);
					m_won = check(m_won);
					m_played = check(m_played);
					damage = check(damage);
					money = check(money);
				   
					headshots = check(headshots);
					pistolRounds = check(pistolRounds);
					decal = check(decal);
					hostages = check(hostages);
					windows = check(windows);
					mvps = check(mvps);

					domination = check(domination);
					dom_overkill = check(dom_overkill);
					revenge = check(revenge);
				},
					complete: function(datas){
					fullChart();
				}
				});
				
	}
	function fullChart(){
		CanvasJS.addColorSet("shades",
					[
					"#00FF00",
					"#FF0000"                
					]);
		setTimeout(function() {
				  
			  
						
		 chart1 = new CanvasJS.Chart("kill-death",
		{
		  animationEnabled: true,
		  colorSet: "shades",
		  backgroundColor: "rgba(0,0,0,0.6)",
		  title:{
			text: "Kill/Death Ratio",
			fontColor: "white"
		  },
		  legend:{
			verticalAlign: "bottom",
			horizontalAlign: "center",
			fontColor: "white"
		  },
		  data: [
		  {
		   startAngle: -90, 
		   innerRadius: "95%",
		   type: "doughnut",
		   showInLegend: true,
		   dataPoints: [
		   {  y: kills, legendText:"Kills" },
		   {  y: deaths, legendText:"Deaths" }
		   ]
		 }
		 ]
	   });
	   document.getElementById("kd").innerHTML = (kills/deaths*1.00).toFixed(2);
	   ratioColor("kd");
	   
	    chartkd = new CanvasJS.Chart("statkd",
		{
		  animationEnabled: true,
		  colorSet: "shades",
		  backgroundColor: "rgba(0,0,0,0)",
		  title:{
			text: "Kill/Death Ratio",
			fontColor: "white"
		  },
		  legend:{
			verticalAlign: "bottom",
			horizontalAlign: "center",
			fontColor: "white"
		  },
		  data: [
		  {
		   startAngle: -90, 
		   innerRadius: "95%",
		   type: "doughnut",
		   showInLegend: true,
		   dataPoints: [
		   {  y: kills, legendText:"Kills" },
		   {  y: deaths, legendText:"Deaths" }
		   ]
		 }
		 ]
	   });
	   document.getElementById("favkd").innerHTML = (kills/deaths*1.00).toFixed(2);
	   ratioColor("favkd");
	   
		chart2 = new CanvasJS.Chart("win-loss",
		{
		  animationEnabled: true,
		  colorSet: "shades",
		  backgroundColor: "rgba(0,0,0,0.6)",
		  title:{
			text: "Game Win/Loss Ratio",
			fontColor: "white"
		  },
		  legend:{
			verticalAlign: "bottom",
			horizontalAlign: "center",
			fontColor: "white"
		  },
		  data: [
		  {
		   startAngle: -90, 
		   innerRadius: "95%",
		   type: "doughnut",
		   showInLegend: true,
		   dataPoints: [
		   {  y: wins, legendText:"Wins" },
		   {  y: loss, legendText:"Loss" }
		   ]
		 }
		 ]
		});
		
	   document.getElementById("wl").innerHTML = (wins/loss*1.00).toFixed(2);
	   ratioColor("wl");
	   
		chart2m = new CanvasJS.Chart("match-win-loss",
		{
		  animationEnabled: true,
		  colorSet: "shades",
		  backgroundColor: "rgba(0,0,0,0.6)",
		  title:{
			text: "Match Win/Loss Ratio",
			fontColor: "white"
		  },
		  legend:{
			verticalAlign: "bottom",
			horizontalAlign: "center",
			fontColor: "white"
		  },
		  data: [
		  {
		   startAngle: -90, 
		   innerRadius: "95%",
		   type: "doughnut",
		   showInLegend: true,
		   dataPoints: [
		   {  y: m_won, legendText:"Wins" },
		   {  y: (m_played - m_won) , legendText:"Loss" }
		   ]
		 }
		 ]
		});
		
		document.getElementById("time").innerHTML = (time/60/60).toFixed(2)+"hr";
		document.getElementById("hostage").innerHTML = (hostages); 
		document.getElementById("headshot").innerHTML = (headshots);
		document.getElementById("window").innerHTML = (windows);
		document.getElementById("domination").innerHTML = (domination);
		document.getElementById("mvp").innerHTML = (mvps);
		document.getElementById("dom-over").innerHTML = (dom_overkill);
		document.getElementById("revenge").innerHTML = (revenge);
		document.getElementById("pistol").innerHTML = (pistolRounds);
		document.getElementById("decal").innerHTML = (decal); 
		//document.getElementById("damage").innerHTML = (damage);
		if(damage>1000000){
			document.getElementById("damage").innerHTML = (damage/1000000).toFixed(2)+"mil";
		}else if(money>1000){
			document.getElementById("damage").innerHTML = (damage/1000).toFixed(2)+"k";
		}else{
			document.getElementById("damage").innerHTML = (damage);
		}
		//document.getElementById("money").innerHTML = (money);
		if(money>1000000){
			document.getElementById("money").innerHTML = (money/1000000).toFixed(2)+"mil";
		}else if(money>1000){
			document.getElementById("money").innerHTML = (money/1000).toFixed(2)+"k";
		}else{
			document.getElementById("money").innerHTML = (money);
		}
		
	   document.getElementById("mwl").innerHTML = (m_won/(m_played - m_won)*1.00).toFixed(2);
	   ratioColor("mwl");

		 chart3 = new CanvasJS.Chart("bombDP",
		{
		  animationEnabled: true,
		  colorSet: "shades",
		  backgroundColor: "rgba(0,0,0,0.6)",
		  title:{
			text: "Bombs",
			fontColor: "white"
		  },
		  axisX:{
			  labelFontColor: "white"
		  },
		  axisY:{
			gridThickness: 1,
			gridDashType: "shortDot",
			gridColor: "white",
			labelFontColor: "white"
		  },
		  dataPointMaxWidth: 100,
		  data: [
		  {
			type: "column",  
			showInLegend: false,
			dataPoints: [      
			{  y: planted,  label: "Planted"},        
			{  y: diffused,  label: "Diffused"}
			]
		  }
		  ]
		});

		chartkd.render();
		chart1.render();
		
		chart2.render();
		chart2m.render();
		chart3.render();
				}, delay);
				
				
	}	
	
	$("#getData").click(function() {
     //customid =  $("#getCustom").val();
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
				/*if(key === "steamid"){
					id = value;
					var user = getCookie("user");
					if (username != "") {
						alert("Welcome again " + username);
					} else {
						username = prompt("Please enter your name:", "");
						if (username != "" && username != null) {
							setCookie("username", username, 365);
						}
					}
					return;
				}
				else if(typeof value === 'object'){
					printData(value);
				}*/
					
				});
				
			},
			complete: function(datas){
					GStat(sid);
			}
				
			
			});	
		
	}
	else if(id64!=false){
		GStat(id64);
		
	}
	else{
		alert("enter valid id");
	}
});	

function GStat(id){
	
	$.ajax({
				 dataType: 'JSONP',
				url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=CF287EF9D049517AD75478BD1F56D778&steamid=${id}`)}`,
				jsonCallback: 'callback',
				type : 'GET',
				success: function(datas) {
					console.log(datas)
					var totalStats = datas.playerstats.stats;
					var reqFields = ["total_kills"];
					var reqFields2 = ["total_deaths"];
					var reqFields3 = ["total_planted_bombs"];
					var reqFields4 = ["total_defused_bombs"];
					var reqFields5 = ["total_matches_played"];
					var reqFields6 = ["total_matches_won"];
					var reqFields7 = ["total_rounds_played"];
					var reqFields8 = ["total_wins"];
					var reqFields9 = ["total_time_played"];
					var reqFields10 = ["total_rescued_hostages"];
					var reqFields11 = ["total_damage_done"];
					var reqFields12 = ["total_money_earned"];
					var reqFields13 = ["total_decal_sprays"];
					var reqFields14 = ["total_broken_windows"];
					var reqFields15 = ["total_dominations"];
					var reqFields16 = ["total_domination_overkills"];
					var reqFields17 = ["total_revenges"];
					var reqFields18 = ["total_mvps"];
					var reqFields19 = ["total_wins_pistolround"];
					var reqFields20 = ["total_kills_headshot"];
					
					
					var filteredStats20 = totalStats.filter((totalStat) => {
						return reqFields20.includes(totalStat.name);
					})
					 $.each(filteredStats20, function(key , order){
						
						console.log(key + ":" + order);
						headshots = order.value;
					});
					var filteredStats10 = totalStats.filter((totalStat) => {
						return reqFields10.includes(totalStat.name);
					})
					 $.each(filteredStats10, function(key , order){
						
						console.log(key + ":" + order);
						hostages = order.value;
					});
					var filteredStats11 = totalStats.filter((totalStat) => {
						return reqFields11.includes(totalStat.name);
					})
					 $.each(filteredStats11, function(key , order){
						
						console.log(key + ":" + order);
						damage = order.value;
					}); 
					var filteredStats12 = totalStats.filter((totalStat) => {
						return reqFields12.includes(totalStat.name);
					})
					 $.each(filteredStats12, function(key , order){
						
						console.log(key + ":" + order);
						money = order.value;
					}); 
					var filteredStats13 = totalStats.filter((totalStat) => {
						return reqFields13.includes(totalStat.name);
					})
					 $.each(filteredStats13, function(key , order){
						
						console.log(key + ":" + order);
						decal = order.value;
					});
					var filteredStats14 = totalStats.filter((totalStat) => {
						return reqFields14.includes(totalStat.name);
					})
					 $.each(filteredStats14, function(key , order){
						
						console.log(key + ":" + order);
						windows = order.value;
					}); 
					var filteredStats15 = totalStats.filter((totalStat) => {
						return reqFields15.includes(totalStat.name);
					})
					 $.each(filteredStats15, function(key , order){
						
						console.log(key + ":" + order);
						domination = order.value;
					}); 
					var filteredStats16 = totalStats.filter((totalStat) => {
						return reqFields16.includes(totalStat.name);
					})
					 $.each(filteredStats16, function(key , order){
						
						console.log(key + ":" + order);
						dom_overkill = order.value;
					}); 
					var filteredStats17 = totalStats.filter((totalStat) => {
						return reqFields17.includes(totalStat.name);
					})
					 $.each(filteredStats17, function(key , order){
						
						console.log(key + ":" + order);
						revenge = order.value;
					}); 
					var filteredStats18 = totalStats.filter((totalStat) => {
						return reqFields18.includes(totalStat.name);
					})
					 $.each(filteredStats18, function(key , order){
						
						console.log(key + ":" + order);
						mvps = order.value;
					}); 
					var filteredStats19 = totalStats.filter((totalStat) => {
						return reqFields19.includes(totalStat.name);
					})
					 $.each(filteredStats19, function(key , order){
						
						console.log(key + ":" + order);
						pistolRounds = order.value;
					}); 
					var filteredStats = totalStats.filter((totalStat) => {
						return reqFields.includes(totalStat.name);
					})
					 $.each(filteredStats, function(key , order){
						
						console.log(key + ":" + order);
						kills = order.value;
					}); 
					var filteredStats2 = totalStats.filter((totalStat) => {
						return reqFields2.includes(totalStat.name);
					})
					 $.each(filteredStats2, function(key , order){
						
						console.log(key + ":" + order);
						deaths = order.value;
					}); 
					var filteredStats9 = totalStats.filter((totalStat) => {
						return reqFields9.includes(totalStat.name);
					})
					 $.each(filteredStats9, function(key , order){
						
						console.log(key + ":" + order);
						time = order.value;
					}); 
					var filteredStats3 = totalStats.filter((totalStat) => {
						return reqFields3.includes(totalStat.name);
					})
					 $.each(filteredStats3, function(key , order){
						
						console.log(key + ":" + order);
						planted = order.value;
					}); 
					var filteredStats4 = totalStats.filter((totalStat) => {
						return reqFields4.includes(totalStat.name);
					})
					 $.each(filteredStats4, function(key , order){
						
						console.log(key + ":" + order);
						diffused = order.value;
					}); 
					var filteredStats5 = totalStats.filter((totalStat) => {
						return reqFields5.includes(totalStat.name);
					})
					 $.each(filteredStats5, function(key , order){
						
						console.log(key + ":" + order);
						m_played = order.value;
					}); 
					var filteredStats6 = totalStats.filter((totalStat) => {
						return reqFields6.includes(totalStat.name);
					})
					 $.each(filteredStats6, function(key , order){
						
						console.log(key + ":" + order);
						m_won = order.value;
					}); 
					var filteredStats7 = totalStats.filter((totalStat) => {
						return reqFields7.includes(totalStat.name);
					})
					 $.each(filteredStats7, function(key , order){
						
						console.log(key + ":" + order);
						total_played = order.value;
					}); 
					var filteredStats8 = totalStats.filter((totalStat) => {
						return reqFields8.includes(totalStat.name);
					})
					 $.each(filteredStats8, function(key , order){
						
						console.log(key + ":" + order);
						wins = order.value;
					}); 
					loss= total_played -  wins;	
					kills = check(kills);
					deaths = check(deaths);
					time = check(time);
					planted = check(planted);
					diffused = check(diffused);
					wins = check(wins);
					total_played = check(total_played);
					m_won = check(m_won);
					m_played = check(m_played);
					damage = check(damage);
					money = check(money);
				   
					headshots = check(headshots);
					pistolRounds = check(pistolRounds);
					decal = check(decal);
					hostages = check(hostages);
					windows = check(windows);
					mvps = check(mvps);

					domination = check(domination);
					dom_overkill = check(dom_overkill);
					revenge = check(revenge);
				},
					complete: function(datas){
					fullChart();
				}
				});
				
	
	
}

		
});


