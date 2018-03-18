var video1;
var video2;

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

$(document).ready(function() {
	
			$( document ).ajaxStart(function() {
			$( "#full-loader" ).show();
			});

			/*$( document ).ajaxStop(function() {
			$( "#full-loader" ).remove();
			});*/
			
	$(".bvid1").click(function(){
		var video = document.getElementById('vid-play');
		video.pause();
		var sources = video.getElementsByTagName('source');
		//video1 = "http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256666633\/movie480.webm?t=1468353490";//change to video 1
		if(sources[0].src != video1){
			sources[0].src = video1;
			video.load();
		}else
			video.play();
	});
		
	$(".bvid2").click(function(){
		var video = document.getElementById('vid-play');
		video.pause();
		var sources = video.getElementsByTagName('source');
		//video2 = "http:\/\/cdn.akamai.steamstatic.com\/steam\/apps\/256676540\/movie480.webm?t=1481922273";//change to video 2
		if(sources[0].src != video2){
			sources[0].src = video2;
			video.load();
		}else
			video.play();
	});
});

 $(function (){
	var appid = getParameterByName('id');
	var string="Click here to buy";
		var buyurl= string.link("http://store.steampowered.com/app/"+appid+"/");
		//document.getElementById("buy").innerHTML = buyurl;
		$("#buy").append(" <b>"+buyurl+"</b>");
	$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://store.steampowered.com/api/appdetails?appids=${appid}`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			success: function printData(datas) {
				
				$.each(datas, function(key , value){
				if(key === "success"){
				if(value==false)
				{
					alert("Enter Valid APPID");
					window.location.replace("http://tyson.scroch.com");
					
				}
				return;
				}
				else if(key === "pc_requirements"){
					//$(windows).append("<li> PC Requirements : " + value.minimum +  "</li> ")
					document.getElementById("windows").innerHTML = value.minimum;
					
					return;
				}
				else if(key === "mac_requirements"){
					//$(mac).append("<li> Mac Requirements : "  + value.minimum +  "</li> ")
					document.getElementById("mac").innerHTML = value.minimum;
					return;
				}
				else if(key === "linux_requirements"){
					//$(linux).append("<li> Linux Requirements :  "  + value.minimum +  "</li> ")
					document.getElementById("linux").innerHTML = value.minimum;
					return;
				}
				else if(key === "developers"){
					
					document.getElementById("game_developers").innerHTML = value;
					return;
				}
				else if(key === "publishers"){
					
					document.getElementById("game_publishers").innerHTML = value;
					return;
				}
				else if(key === "detailed_description"){
					
					document.getElementById("detailed_description").innerHTML = value;
					return;
				}
				else if(key === "release_date"){
					
					document.getElementById("release_date").innerHTML = value.date;
					return;
				}
				else if(key === "metacritic"){
					
					document.getElementById("meta_score").innerHTML = value.score;
					var str="Read review";
					var url = str.link(""+value.url+"");
					document.getElementById("meta_review").innerHTML = url;
					//alert(value.url);
					return;
				}
				else if(key === "genres"){
					
					if(jQuery.inArray(value[0],value)!=-1)	
						document.getElementById("genre").innerHTML = value[0].description ;
					if(jQuery.inArray(value[1],value)!=-1)
						//document.getElementById("genre2").innerHTML = "," + value[1].description;
						$("#genre").append(", "+ value[1].description);
					if(jQuery.inArray(value[2],value)!=-1)
						//document.getElementById("genre3").innerHTML = "," + value[2].description;
						$("#genre").append(", "+ value[2].description);
					if(jQuery.inArray(value[3],value)!=-1)
						//document.getElementById("genre4").innerHTML = "," + value[3].description;
						$("#genre").append(", "+ value[3].description);
					
					return;
				}
				else if(key === "movies"){
					//alert(value[0].webm[480]);
					if(jQuery.inArray(value[0],value)!=-1)
					video1 = value[0].webm[480];
					if(jQuery.inArray(value[1],value)!=-1)
					video2 = value[1].webm[480];
					if(jQuery.inArray(value[0],value)!=-1)
					$('.vid1').css('background-image', 'url(' + value[0].thumbnail + ')');
					if(jQuery.inArray(value[1],value)!=-1)
					$('.vid2').css('background-image', 'url(' + value[1].thumbnail + ')');
					
					return;
				}
				else if(key === "screenshots"){
					//var ss= value[0].path_thumbnail;
					if(jQuery.inArray(value[0],value)!=-1)
					$('.gimg1').css('background-image', 'url(' + value[0].path_full + ')');
					if(jQuery.inArray(value[2],value)!=-1)
					$('.gimg2').css('background-image', 'url(' + value[1].path_full + ')');
					if(jQuery.inArray(value[3],value)!=-1)
					$('.gimg3').css('background-image', 'url(' + value[2].path_full + ')');
					if(jQuery.inArray(value[4],value)!=-1)
					$('.gimg4').css('background-image', 'url(' + value[3].path_full + ')');
					if(jQuery.inArray(value[5],value)!=-1)
					$('.gimg5').css('background-image', 'url(' + value[4].path_full + ')');
					if(jQuery.inArray(value[6],value)!=-1)
					$('.gimg6').css('background-image', 'url(' + value[5].path_full + ')');
					
					//set vid1 and vid2
					
					$(".headImage").css("background-image", $('.gimg1').css("background-image"));
					return;
				}
				else if(key === "is_free"){
					free=value;
					if(free==true)
					{
						$("#mrp1").hide();
						$("#current_price1").hide();
						$("#discount1").hide();
						document.getElementById("mrp").innerHTML = "<b> FREE TO PLAY</b>";
					}
					return;
				}
				else if(key === "price_overview"){
					document.getElementById("price_overview").innerHTML = "Price Details";
					document.getElementById("mrp").innerHTML = (value.initial)/100 + " " + value.currency;
					document.getElementById("current_price").innerHTML = (value.final)/100 + " " + value.currency;
					document.getElementById("discount").innerHTML = value.discount_percent + "%";
					return;
				}
				
				else if(key === "supported_languages"){
					
					document.getElementById("supported_languages").innerHTML = value;
					return;
				}
				else if(typeof value === 'object'){
					printData(value);
				}	
			});
		},
		complete: function(datas){
			$( "#full-loader" ).remove();
		}
			
	});
	
	
	
	$.ajax({
		 dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appid}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function(datas) {
			console.log(datas);
			document.getElementById("playing").innerHTML=datas.response.player_count ;
			/*$.each(datas.tags, function(key , value){
				//alert(key);
				if(key === "response"){
					alert(value.player_count);
					document.getElementById("playing").innerHTML=value ;
					return;
				}
								
				else if(typeof value === 'object'){
					printData(value);
				}
			});*/
		}
	});
	
	
	
	
	
	$.ajax({
		 dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=3`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function(datas) {
			console.log(datas);
			
			document.getElementById("first_news").innerHTML = datas.appnews.newsitems[0].contents;
			document.getElementById("first_news_title").innerHTML = datas.appnews.newsitems[0].title;
			document.getElementById("second_news").innerHTML = datas.appnews.newsitems[1].contents;
			document.getElementById("second_news_title").innerHTML = datas.appnews.newsitems[1].title;
			document.getElementById("third_news").innerHTML = datas.appnews.newsitems[2].contents;
			document.getElementById("third_news_title").innerHTML = datas.appnews.newsitems[2].title;
			
		}
	});
		
	$.ajax({
		 dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=appdetails&appid=${appid}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		
		success: function(datas) {
			console.log(datas);
			document.getElementById("game_title").innerHTML = datas.name;
			document.getElementById("headtitle").innerHTML = datas.name;
			
			
		}
	});
	$.ajax({
		 dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=appdetails&appid=${appid}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function printData(datas) {
			
			$.each(datas.tags, function(key , value){
				//alert(key);
				if(key === "FPS"){
					$(tagss).append("<p class='tag'>"+key+"</p>");
					return;
				}
				else if(key === "Multiplayer"){
					$(tagss).append("<p class='tag'>"+key+"</p>");
					return;
				}
				else if(key === "e-sports"){
					$(tagss).append("<p class='tag'>"+key+"</p>");
					return;
				}
				else if(key === "Strategy"){
					$(tagss).append("<p class='tag'>"+key+"</p>");
					return;
				}		
				else if(key === "Racing"){
					$(tagss).append("<p class='tag'>"+key+"</p>");
					return;
				}
				else if(key === "Singleplayer"){
					$(tagss).append("<p class='tag'>"+key+"</p>");
					return;
				}
				else if(key === "RPG"){
					$(tagss).append("<p class='tag'>"+key+"</p>");
					return;
				}
				else if(key === "Survival"){
					$(tagss).append("<p class='tag'>"+key+"</p>");
					return;
				}
				else if(key === "Co-op"){
					$(tagss).append("<p class='tag'>"+key+"</p>");
					return;
				}
				else if(key === "Zombies"){
					
					$(tagss).append("<p class='tag'>"+key+"</p>");
					
					return;
				}				
				else if(typeof value === 'object'){
					printData(value);
				}
			});
		}
	});
});
