 
 function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
 
 function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

 
 $(function (){
	var userid;
	var id = getParameterByName('id');
	var x;
	var y;
	var state;
	var idstring;
	var tempappid;
	
	
	
	$.ajax({
		dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=CF287EF9D049517AD75478BD1F56D778&steamids=${id}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function printData(datas) {
			$.each(datas, function(key , value){
				if(key === "avatarfull"){
					document.getElementById("pfp").src = value;
					//$(pfp).append("");
					
					return;
				}
				else if(key === "personaname"){
					$('#nickname').append(value);
					return;
				}
				else if(key === "timecreated"){
					x= timeConverter(value)
					$('#created').append(x);
					return;
				}
				else if(key === "lastlogoff"){
					y= timeConverter(value)
					$('#lastlog').append(y);
					return;
				}
				else if(key === "communityvisibilitystate"){
					if(value === "3")
						state= 1;
					else if(value === "1")
						state= 0;
					else
						state= 0;
					return;
				}
				else if(key === "profilestate"){
					if(value === 1){
						document.getElementById("state").innerHTML = "Online";
						//$('#state').append("Online");
						$('#state').addClass('online');
					}
					else if(value === 2){
						document.getElementById("state").innerHTML = "Busy";
						$('#state').addClass('busy');
					}
					else if(value === 3){
						document.getElementById("state").innerHTML = "Away";
						$('#state').addClass('others');
					}
					else if(value === 4){
						document.getElementById("state").innerHTML = "Snooze";
						$('#state').addClass('others');
					}
					else if(value === 5){
						document.getElementById("state").innerHTML = "Looking to Trade";
						$('#state').addClass('others');
					}
					else if(value === 6){
						document.getElementById("status").innerHTML = "Looking to play";
						$('#state').addClass('others');
					}
					else if(value === 0 && state === 0){
						document.getElementById("state").innerHTML = "private";
						$('#state').addClass('private');
					}
					else if(value === 0 && state === 1){
						document.getElementById("state").innerHTML = "Offline";
						$('#state').addClass('offline');
					}
				}
				else if(typeof value === 'object'){
					printData(value);
					}	
			});
		}
	});
	
	
	//http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=CF287EF9D049517AD75478BD1F56D778&steamid=76561198241873986&relationship=friend
	$.ajax({
		dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=CF287EF9D049517AD75478BD1F56D778&steamid=${id}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function printData(datas) {
			$.each(datas, function(key , value){
				if(key === "friends"){
					var count=1;
					var i=1;
					var z=1;
					if(jQuery.inArray(value[0],value) != -1)
						idstring = value[0].steamid;
					while(z != 2)
					{
						if(jQuery.inArray(value[i],value) != -1){
							idstring= idstring + "," + value[i].steamid
							count=count+1;
						}
						else
							z=2;
						//$("#friendlist").append("<br/>"+ value[i].steamid);
						i=i+1;
					}
					document.getElementById("nofriend").innerHTML = count;
					return;
				}		
				else if(typeof value === 'object'){
					printData(value);
				}
			});
		}
	});
	
	
	
	  

setTimeout( function() {
$.ajax({
		dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=CF287EF9D049517AD75478BD1F56D778&steamids=${idstring}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function printData(datas) {
			$.each(datas, function(key , value){
				if(key === "players"){
										
					var i=0;
					var z=1;
					while(z != 2)
					{
						if(jQuery.inArray(value[i],value) != -1){
							//$("#friendlist").append("<br/>"+ value[i].personaname);
							var string = value[i].personaname;
							var friendurl= string.link("https://gamestat.in/profile.php?id="+value[i].steamid+"/");
							$("#friendlist").append("<br/>"+ friendurl);
							
						}	
						else
							z=2;
						i=i+1;
					}	
					return;
				}		
				else if(typeof value === 'object'){
					printData(value);
				}
			});
		}
	});	
		
}, 3000);

	
	
	
	$.ajax({
		dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=730&key=CF287EF9D049517AD75478BD1F56D778&steamid=${id}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function printData(datas) {
			$.each(datas, function(key , value){
				if(key === "achievements"){
					
					
					var i=0;
					while(i != 166)
					{
						if(jQuery.inArray(value[i],value)!=-1)
						if(value[i].achieved === 1)
						$("#achieve").append("<br/>"+ value[i].apiname);
						i=i+1;
					}
					
					return;
				}		
				else if(typeof value === 'object'){
					printData(value);
				}
			});
		}
	});
	
	$.ajax({
		dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=CF287EF9D049517AD75478BD1F56D778&steamids=${id}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function printData(datas) {
			$.each(datas, function(key , value){
				if(key === "CommunityBanned"){
					if(value === false){
					document.getElementById("commban").innerHTML = "In good Standing";
					$('#commban').addClass('online');
					}
					else{
					document.getElementById("commban").innerHTML = "BANNED";
					$('#commban').addClass('offline');
					}
					return;
				}
				else if(key === "VACBanned"){
					if(value === false){
					document.getElementById("vacban").innerHTML = "In good Standing";
					$('#vacban').addClass('online');
					}
					else{
					document.getElementById("vacban").innerHTML = "VAC BANNED";
					$('#vacban').addClass('offline');
					}
					return;
				}
				else if(key === "NumberOfVACBans"){
					document.getElementById("novacban").innerHTML = value;
					return;
				}
				else if(key === "NumberOfGameBans"){
					document.getElementById("nogameban").innerHTML = value;
					return;
				}
				else if(key === "EconomyBan"){
					document.getElementById("ecoban").innerHTML = value;
					return;
				}
				else if(typeof value === 'object'){
					printData(value);
					}	
			});
		}
	});
	
	$.ajax({
		dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=CF287EF9D049517AD75478BD1F56D778&steamid=${id}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function printData(datas) {
			$.each(datas, function(key , value){
				if(key === "game_count"){
					document.getElementById("totalgame").innerHTML = value;
				}
				if(key === "games"){
					var i=0;
					var z=1;
					var m=0;
					while(z != 2){
						if(jQuery.inArray(value[i],value) != -1){
							//tempappid = value[i].appid ;
								
						$("#gamename").append("<br/>"+ value[i].appid);	
						}
						else
							z=2;
						
						i=i+1;
					}
					return;
				}		
				else if(typeof value === 'object'){
					printData(value);
				}
			});
		}
	});
	
	
	/* 		
						$.getJSON('id.json', function (data) {
								
							$.each(data.applist.apps, function(key ,value ){
									
									console
									alert(value.name);
									if(appid === tempappid){
										alert(name);
											
										
										
										
									}	
									else if(typeof value === 'object'){
										printData(value);
									}
							});
										
						});	*/
	
		
		
	
						
	
	
	
});