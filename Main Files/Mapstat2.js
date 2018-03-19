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
	var id64;
	 var delay=100;
	var customid;
	var url;
	var id;
	var txt;
	
	var w_ck_assault;     var t_ck_assault;
    var w_ck_italy;       var t_ck_italy;
    var w_ck_office;      var t_ck_office;
    var w_de_aztec;        var t_de_aztec;
    var w_de_cbbl;        var t_de_cbbl;
    var w_de_dust2;      var t_de_dust2;
    var w_de_dust;        var t_de_dust;
    var w_de_inferno;    var t_de_inferno;
    var w_de_nuke;        var t_de_nuke;
    var w_de_train;       var t_de_train;
	
	
	$("#getData").click(function() {
     customid =  $("#GetAppid").val(); 
	 
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=CF287EF9D049517AD75478BD1F56D778&vanityurl=${customid}`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			success: function printData(datas) {
				
				
				$.each(datas, function(key , value){
				if(key === "steamid"){
					id = value;
					return;
				}
				else if(typeof value === 'object'){
					printData(value);
				}
					
				});
				
			}
			
				
			
		});	
			});		
		
			id= userid;
		if(getCookie("user")){
			$.ajax({
				 dataType: 'JSONP',
				url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=CF287EF9D049517AD75478BD1F56D778&steamid=${id}`)}`,
				jsonCallback: 'callback',
				type : 'GET',
				success: function(datas) {
					console.log(datas)
					var totalStats = datas.playerstats.stats;
					var reqFields10 = ["total_wins_map_cs_assault"];
					var reqFields11 = ["total_wins_map_cs_italy"];
					var reqFields12 = ["total_wins_map_cs_office"];
					var reqFields13 = ["total_wins_map_de_aztec"];
					var reqFields14 = ["total_wins_map_de_cbble"];
					var reqFields15 = ["total_wins_map_de_dust2"];
					var reqFields16 = ["total_wins_map_de_dust"];
					var reqFields17 = ["total_wins_map_de_inferno"];
					var reqFields18 = ["total_wins_map_de_nuke"];
					var reqFields19 = ["total_wins_map_de_train"];
					var reqFields20 = ["total_rounds_map_cs_assault"];
					var reqFields21 = ["total_rounds_map_cs_italy"];
					var reqFields22 = ["total_rounds_map_cs_office"];
					var reqFields23 = ["total_rounds_map_de_aztec"];
					var reqFields24 = ["total_rounds_map_de_cbble"];
					var reqFields25 = ["total_rounds_map_de_dust2"];
					var reqFields26 = ["total_rounds_map_de_dust"];
					var reqFields27 = ["total_rounds_map_de_inferno"];
					var reqFields28 = ["total_rounds_map_de_nuke"];
					var reqFields29 = ["total_rounds_map_de_train"];
					
					
					
					var filteredStats10 = totalStats.filter((totalStat) => {
						return reqFields10.includes(totalStat.name);
					})
					 $.each(filteredStats10, function(key , order){
						
						console.log(key + ":" + order);
						w_ck_assault = order.value;
					});
					var filteredStats11 = totalStats.filter((totalStat) => {
						return reqFields11.includes(totalStat.name);
					})
					 $.each(filteredStats11, function(key , order){
						
						console.log(key + ":" + order);
						w_ck_italy = order.value;
					}); 
					var filteredStats12 = totalStats.filter((totalStat) => {
						return reqFields12.includes(totalStat.name);
					})
					 $.each(filteredStats12, function(key , order){
						
						console.log(key + ":" + order);
						w_ck_office = order.value;
					}); 
					var filteredStats13 = totalStats.filter((totalStat) => {
						return reqFields13.includes(totalStat.name);
					})
					 $.each(filteredStats13, function(key , order){
						
						console.log(key + ":" + order);
						w_de_aztec = order.value;
					});
					var filteredStats14 = totalStats.filter((totalStat) => {
						return reqFields14.includes(totalStat.name);
					})
					 $.each(filteredStats14, function(key , order){
						
						console.log(key + ":" + order);
						w_de_cbbl = order.value;
					}); 
					var filteredStats15 = totalStats.filter((totalStat) => {
						return reqFields15.includes(totalStat.name);
					})
					 $.each(filteredStats15, function(key , order){
						
						console.log(key + ":" + order);
						w_de_dust2 = order.value;
					}); 
					var filteredStats16 = totalStats.filter((totalStat) => {
						return reqFields16.includes(totalStat.name);
					})
					 $.each(filteredStats16, function(key , order){
						
						console.log(key + ":" + order);
						w_de_dust = order.value;
					}); 
					var filteredStats17 = totalStats.filter((totalStat) => {
						return reqFields17.includes(totalStat.name);
					})
					 $.each(filteredStats17, function(key , order){
						
						console.log(key + ":" + order);
						w_de_inferno = order.value;
					}); 
					var filteredStats18 = totalStats.filter((totalStat) => {
						return reqFields18.includes(totalStat.name);
					})
					 $.each(filteredStats18, function(key , order){
						
						console.log(key + ":" + order);
						w_de_nuke = order.value;
					}); 
					var filteredStats19 = totalStats.filter((totalStat) => {
						return reqFields19.includes(totalStat.name);
					})
					 $.each(filteredStats19, function(key , order){
						
						console.log(key + ":" + order);
						w_de_train = order.value;
					}); 
					var filteredStats20 = totalStats.filter((totalStat) => {
						return reqFields20.includes(totalStat.name);
					})
					 $.each(filteredStats20, function(key , order){
						
						console.log(key + ":" + order);
						t_ck_assault = order.value;
					});
					var filteredStats21 = totalStats.filter((totalStat) => {
						return reqFields21.includes(totalStat.name);
					})
					 $.each(filteredStats21, function(key , order){
						
						console.log(key + ":" + order);
						t_ck_italy = order.value;
					}); 
					var filteredStats22 = totalStats.filter((totalStat) => {
						return reqFields22.includes(totalStat.name);
					})
					 $.each(filteredStats22, function(key , order){
						
						console.log(key + ":" + order);
						t_ck_office = order.value;
					}); 
					var filteredStats23 = totalStats.filter((totalStat) => {
						return reqFields23.includes(totalStat.name);
					})
					 $.each(filteredStats23, function(key , order){
						
						console.log(key + ":" + order);
						t_de_aztec = order.value;
					});
					var filteredStats24 = totalStats.filter((totalStat) => {
						return reqFields24.includes(totalStat.name);
					})
					 $.each(filteredStats24, function(key , order){
						
						console.log(key + ":" + order);
						t_de_cbbl = order.value;
					}); 
					var filteredStats25 = totalStats.filter((totalStat) => {
						return reqFields25.includes(totalStat.name);
					})
					 $.each(filteredStats25, function(key , order){
						
						console.log(key + ":" + order);
						t_de_dust2 = order.value;
					}); 
					var filteredStats26 = totalStats.filter((totalStat) => {
						return reqFields26.includes(totalStat.name);
					})
					 $.each(filteredStats26, function(key , order){
						
						console.log(key + ":" + order);
						t_de_dust = order.value;
					}); 
					var filteredStats27 = totalStats.filter((totalStat) => {
						return reqFields27.includes(totalStat.name);
					})
					 $.each(filteredStats27, function(key , order){
						
						console.log(key + ":" + order);
						t_de_inferno = order.value;
					}); 
					var filteredStats28 = totalStats.filter((totalStat) => {
						return reqFields28.includes(totalStat.name);
					})
					 $.each(filteredStats28, function(key , order){
						
						console.log(key + ":" + order);
						t_de_nuke = order.value;
					}); 
					var filteredStats29 = totalStats.filter((totalStat) => {
						return reqFields29.includes(totalStat.name);
					})
					 $.each(filteredStats29, function(key , order){
						
						console.log(key + ":" + order);
						t_de_train = order.value;
					});
					w_ck_assault = check( w_ck_assault );
					 t_ck_assault = check( t_ck_assault );
					 w_ck_italy = check( w_ck_italy );
					 t_ck_italy = check( t_ck_italy );
					 w_ck_office = check( w_ck_office );
					 t_ck_office = check( t_ck_office );
					 w_de_aztec = check( w_de_aztec );
					 t_de_aztec = check( t_de_aztec );
					 w_de_cbbl = check( w_de_cbbl );
					 t_de_cbbl = check( t_de_cbbl );
					 w_de_dust2 = check( w_de_dust2 );
					 t_de_dust2 = check( t_de_dust2 );
					 w_de_dust = check( w_de_dust );
					 t_de_dust = check( t_de_dust );
					 w_de_inferno = check( w_de_inferno );
					 t_de_inferno = check( t_de_inferno );
					 w_de_nuke = check( w_de_nuke );
					 t_de_nuke = check( t_de_nuke );
					 w_de_train = check( w_de_train );
					 t_de_train = check( t_de_train );
				},
					complete: function(datas){
					fullChart();
					favmap();
				}
				
				});
		}
		
function favmap(){
	
	var www = Math.max(w_ck_assault,w_ck_italy, w_ck_italy,w_ck_office,w_de_aztec, w_de_cbbl, w_de_dust2, w_de_inferno , w_de_train, w_de_nuke)
	$("#favmapwins").append(" " + www);
}

function fullChart() {
    CanvasJS.addColorSet("shades",
                [
                "#00FF00",
                "#FF0000"                
                ]);
	setTimeout(function() {
              

var chart11 = new CanvasJS.Chart("assault",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Assault",
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
       {  y: w_ck_assault, legendText:"Wins" },
       {  y: (t_ck_assault - w_ck_assault), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wlassault").innerHTML = (w_ck_assault/(t_ck_assault - w_ck_assault)*1.00).toFixed(2);
   ratioColor("wlassault");
   
   var chart12 = new CanvasJS.Chart("italy",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Italy",
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
       {  y: w_ck_italy, legendText:"Wins" },
       {  y: (t_ck_italy - w_ck_italy), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wlitaly").innerHTML = (w_ck_italy/(t_ck_italy - w_ck_italy)*1.00).toFixed(2);
   ratioColor("wlitaly");
   
   var chart13 = new CanvasJS.Chart("office",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Office",
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
       {  y: w_ck_office, legendText:"Wins" },
       {  y: (t_ck_office - w_ck_office), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wloffice").innerHTML = (w_ck_office/(t_ck_office - w_ck_office)*1.00).toFixed(2);
   ratioColor("wloffice");
   
   var chart14 = new CanvasJS.Chart("aztec",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Aztec",
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
       {  y: w_de_aztec, legendText:"Wins" },
       {  y: (t_de_aztec - w_de_aztec), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wlaztec").innerHTML = (w_de_aztec/(t_de_aztec - w_de_aztec)*1.00).toFixed(2);
   ratioColor("wlaztec");
   
   var chart15 = new CanvasJS.Chart("cobble",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Cobble",
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
       {  y: w_de_cbbl, legendText:"Wins" },
       {  y: (t_de_cbbl - w_de_cbbl), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wlcobble").innerHTML = (w_de_cbbl/(t_de_cbbl - w_de_cbbl)*1.00).toFixed(2);
   ratioColor("wlcobble");
   
   var chart16 = new CanvasJS.Chart("dust2",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Dust2",
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
       {  y: w_de_dust2, legendText:"Wins" },
       {  y: (t_de_dust2 - w_de_dust2), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wldust2").innerHTML = (w_de_dust2/(t_de_dust2 - w_de_dust2)*1.00).toFixed(2);
   ratioColor("wldust2");
   
   var chart17 = new CanvasJS.Chart("dust",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Dust",
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
       {  y: w_de_dust, legendText:"Wins" },
       {  y: (t_de_dust - w_de_dust), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wldust").innerHTML = (w_de_dust/(t_de_dust - w_de_dust)*1.00).toFixed(2);
   ratioColor("wldust");
   
   var chart18 = new CanvasJS.Chart("inferno",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Inferno",
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
       {  y: w_de_inferno, legendText:"Wins" },
       {  y: (t_de_inferno - w_de_inferno), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wlinferno").innerHTML = (w_de_inferno/(t_de_inferno - w_de_inferno)*1.00).toFixed(2);
   ratioColor("wlinferno");
   
   var chart19 = new CanvasJS.Chart("nuke",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Nuke",
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
       {  y: w_de_nuke, legendText:"Wins" },
       {  y: (t_de_nuke - w_de_nuke), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wlnuke").innerHTML = (w_de_nuke/(t_de_nuke - w_de_nuke)*1.00).toFixed(2);
   ratioColor("wlnuke");
   
   var chart20 = new CanvasJS.Chart("train",
    {
      animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Train",
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
       {  y: w_de_train, legendText:"Wins" },
       {  y: (t_de_train - w_de_train), legendText:"Loss" }
       ]
     }
     ]
   });
   
   document.getElementById("wltrain").innerHTML = (w_de_train/(t_de_train - w_de_train)*1.00).toFixed(2);
   ratioColor("wltrain");
   
    chart11.render();
	chart12.render();
	chart13.render();
	chart14.render();
	chart15.render();
	chart16.render();
	chart17.render();
	chart18.render();
	chart19.render();
	chart20.render();
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
					Mapstat(sid);
			}
				
			
			});	
		
	}
	else if(id64!=false){
		Mapstat(id64);
		
	}
	else{
		alert("enter valid id");
	}
});	

function Mapstat(id){
	
	$.ajax({
				 dataType: 'JSONP',
				url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=CF287EF9D049517AD75478BD1F56D778&steamid=${id}`)}`,
				jsonCallback: 'callback',
				type : 'GET',
				success: function(datas) {
					console.log(datas)
					var totalStats = datas.playerstats.stats;
					var reqFields10 = ["total_wins_map_cs_assault"];
					var reqFields11 = ["total_wins_map_cs_italy"];
					var reqFields12 = ["total_wins_map_cs_office"];
					var reqFields13 = ["total_wins_map_de_aztec"];
					var reqFields14 = ["total_wins_map_de_cbble"];
					var reqFields15 = ["total_wins_map_de_dust2"];
					var reqFields16 = ["total_wins_map_de_dust"];
					var reqFields17 = ["total_wins_map_de_inferno"];
					var reqFields18 = ["total_wins_map_de_nuke"];
					var reqFields19 = ["total_wins_map_de_train"];
					var reqFields20 = ["total_rounds_map_cs_assault"];
					var reqFields21 = ["total_rounds_map_cs_italy"];
					var reqFields22 = ["total_rounds_map_cs_office"];
					var reqFields23 = ["total_rounds_map_de_aztec"];
					var reqFields24 = ["total_rounds_map_de_cbble"];
					var reqFields25 = ["total_rounds_map_de_dust2"];
					var reqFields26 = ["total_rounds_map_de_dust"];
					var reqFields27 = ["total_rounds_map_de_inferno"];
					var reqFields28 = ["total_rounds_map_de_nuke"];
					var reqFields29 = ["total_rounds_map_de_train"];
					
					
					
					var filteredStats10 = totalStats.filter((totalStat) => {
						return reqFields10.includes(totalStat.name);
					})
					 $.each(filteredStats10, function(key , order){
						
						console.log(key + ":" + order);
						w_ck_assault = order.value;
					});
					var filteredStats11 = totalStats.filter((totalStat) => {
						return reqFields11.includes(totalStat.name);
					})
					 $.each(filteredStats11, function(key , order){
						
						console.log(key + ":" + order);
						w_ck_italy = order.value;
					}); 
					var filteredStats12 = totalStats.filter((totalStat) => {
						return reqFields12.includes(totalStat.name);
					})
					 $.each(filteredStats12, function(key , order){
						
						console.log(key + ":" + order);
						w_ck_office = order.value;
					}); 
					var filteredStats13 = totalStats.filter((totalStat) => {
						return reqFields13.includes(totalStat.name);
					})
					 $.each(filteredStats13, function(key , order){
						
						console.log(key + ":" + order);
						w_de_aztec = order.value;
					});
					var filteredStats14 = totalStats.filter((totalStat) => {
						return reqFields14.includes(totalStat.name);
					})
					 $.each(filteredStats14, function(key , order){
						
						console.log(key + ":" + order);
						w_de_cbbl = order.value;
					}); 
					var filteredStats15 = totalStats.filter((totalStat) => {
						return reqFields15.includes(totalStat.name);
					})
					 $.each(filteredStats15, function(key , order){
						
						console.log(key + ":" + order);
						w_de_dust2 = order.value;
					}); 
					var filteredStats16 = totalStats.filter((totalStat) => {
						return reqFields16.includes(totalStat.name);
					})
					 $.each(filteredStats16, function(key , order){
						
						console.log(key + ":" + order);
						w_de_dust = order.value;
					}); 
					var filteredStats17 = totalStats.filter((totalStat) => {
						return reqFields17.includes(totalStat.name);
					})
					 $.each(filteredStats17, function(key , order){
						
						console.log(key + ":" + order);
						w_de_inferno = order.value;
					}); 
					var filteredStats18 = totalStats.filter((totalStat) => {
						return reqFields18.includes(totalStat.name);
					})
					 $.each(filteredStats18, function(key , order){
						
						console.log(key + ":" + order);
						w_de_nuke = order.value;
					}); 
					var filteredStats19 = totalStats.filter((totalStat) => {
						return reqFields19.includes(totalStat.name);
					})
					 $.each(filteredStats19, function(key , order){
						
						console.log(key + ":" + order);
						w_de_train = order.value;
					}); 
					var filteredStats20 = totalStats.filter((totalStat) => {
						return reqFields20.includes(totalStat.name);
					})
					 $.each(filteredStats20, function(key , order){
						
						console.log(key + ":" + order);
						t_ck_assault = order.value;
					});
					var filteredStats21 = totalStats.filter((totalStat) => {
						return reqFields21.includes(totalStat.name);
					})
					 $.each(filteredStats21, function(key , order){
						
						console.log(key + ":" + order);
						t_ck_italy = order.value;
					}); 
					var filteredStats22 = totalStats.filter((totalStat) => {
						return reqFields22.includes(totalStat.name);
					})
					 $.each(filteredStats22, function(key , order){
						
						console.log(key + ":" + order);
						t_ck_office = order.value;
					}); 
					var filteredStats23 = totalStats.filter((totalStat) => {
						return reqFields23.includes(totalStat.name);
					})
					 $.each(filteredStats23, function(key , order){
						
						console.log(key + ":" + order);
						t_de_aztec = order.value;
					});
					var filteredStats24 = totalStats.filter((totalStat) => {
						return reqFields24.includes(totalStat.name);
					})
					 $.each(filteredStats24, function(key , order){
						
						console.log(key + ":" + order);
						t_de_cbbl = order.value;
					}); 
					var filteredStats25 = totalStats.filter((totalStat) => {
						return reqFields25.includes(totalStat.name);
					})
					 $.each(filteredStats25, function(key , order){
						
						console.log(key + ":" + order);
						t_de_dust2 = order.value;
					}); 
					var filteredStats26 = totalStats.filter((totalStat) => {
						return reqFields26.includes(totalStat.name);
					})
					 $.each(filteredStats26, function(key , order){
						
						console.log(key + ":" + order);
						t_de_dust = order.value;
					}); 
					var filteredStats27 = totalStats.filter((totalStat) => {
						return reqFields27.includes(totalStat.name);
					})
					 $.each(filteredStats27, function(key , order){
						
						console.log(key + ":" + order);
						t_de_inferno = order.value;
					}); 
					var filteredStats28 = totalStats.filter((totalStat) => {
						return reqFields28.includes(totalStat.name);
					})
					 $.each(filteredStats28, function(key , order){
						
						console.log(key + ":" + order);
						t_de_nuke = order.value;
					}); 
					var filteredStats29 = totalStats.filter((totalStat) => {
						return reqFields29.includes(totalStat.name);
					})
					 $.each(filteredStats29, function(key , order){
						
						console.log(key + ":" + order);
						t_de_train = order.value;
					});
					w_ck_assault = check( w_ck_assault );
					 t_ck_assault = check( t_ck_assault );
					 w_ck_italy = check( w_ck_italy );
					 t_ck_italy = check( t_ck_italy );
					 w_ck_office = check( w_ck_office );
					 t_ck_office = check( t_ck_office );
					 w_de_aztec = check( w_de_aztec );
					 t_de_aztec = check( t_de_aztec );
					 w_de_cbbl = check( w_de_cbbl );
					 t_de_cbbl = check( t_de_cbbl );
					 w_de_dust2 = check( w_de_dust2 );
					 t_de_dust2 = check( t_de_dust2 );
					 w_de_dust = check( w_de_dust );
					 t_de_dust = check( t_de_dust );
					 w_de_inferno = check( w_de_inferno );
					 t_de_inferno = check( t_de_inferno );
					 w_de_nuke = check( w_de_nuke );
					 t_de_nuke = check( t_de_nuke );
					 w_de_train = check( w_de_train );
					 t_de_train = check( t_de_train );
				},
					complete: function(datas){
					fullChart();
					favmap();
				}
				
				});
	
	
}	
	
		
});
	