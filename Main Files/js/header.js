
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
	 var id = getCookie("user");
	var url;
	if(!!getCookie("user")){
	$.ajax({
		dataType: 'JSONP',
		url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=CF287EF9D049517AD75478BD1F56D778&steamids=${id}`)}`,
		jsonCallback: 'callback',
		type : 'GET',
		
		success: function printData(datas) {
			$.each(datas, function(key , value){
				if(key === "avatarmedium"){
					url = "https://gamestat.in/profile.php?id=" + id ;
					document.getElementById("getprofile").src = value;
					$("#goprofile").attr("href", url);
					//$(pfp).append("");
					return;
				}
				else if(typeof value === 'object'){
					printData(value);
				}	
			});
		}
	});
	}
	
		
	

	
	$("#getprofile").click(function() {
		
		url = "https://gamestat.in/profile.php?id=" + id ;
		location.replace(url);
	});	



		
});


