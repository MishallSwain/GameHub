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
	
	if(!!getCookie("user")}{	
			url = "https://gamestat.in/profile.php?id=" + userid ;
			location.replace(url);
		
	}

		
});