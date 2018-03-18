 $(function (){
	var $data = $('#data');
	//var str="click here";
	
	

			$( document ).ajaxStart(function() {
			$( "#loading" ).show();
			$( "#data" ).hide();
			});

			$( document ).ajaxStop(function() {
			$( "#loading" ).hide();
			$( "#data" ).show();
			});
			
	$("#getTop100").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=top100forever`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				
				
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	
	$("#getTop100owned").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=top100owned`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	
	$("#Trending").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=top100in2weeks`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	
	$("#EarlyAccess").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=genre&genre=Early+Access`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
					var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	
	$("#Racing").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=genre&genre=Racing`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	
	$("#Action").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=genre&genre=Action`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	$("#Adventure").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=genre&genre=Adventure`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	$("#Indie").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=genre&genre=Indie`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	$("#Multiplayer").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=genre&genre=Multiplayer`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	
	$("#Rpg").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=genre&genre=RPG`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	$("#Free").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=genre&genre=Free`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	$("#Simulation").click(function() { 
	
		$.ajax({
			 dataType: 'JSONP',
			url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://steamspy.com/api.php?request=genre&genre=Simulation`)}`,
			jsonCallback: 'callback',
			type : 'GET',
			
			
			success: function(datas) {
				console.log(datas);
				$.each(datas, function(key, value){
				var str=value.name;
				var url = str.link("http://tyson.scroch.com/MAXIMIZED-Project/GamePage.php?id="+value.appid+"");
				$data.append("<li> "   + key + "  "+url+"</li>");
				})
				
				
			}
		});
	
	});
	
	
	
	
});