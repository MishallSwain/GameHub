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
	
	
    var knife ;		var k_taser ;			  var sh_taser;//
	var k_knife ;
    var blinded ;		var decoy ;
    var grenade ;		var molotov ;	
	
    var k_glock  ;     var sh_glock ;         var h_glock;
    var k_deagle ;    var sh_deagle;        var h_deagle;
    var k_fiveseven ;  var sh_fiveseven;     var h_fiveseven;
    var k_elite ;      var sh_elite ;          var h_elite;
    var k_hkp2000 ;   var sh_hkp2000;       var h_hkp2000;
    var k_p250 ;      var sh_p250;          var h_p250;
    var k_tec9 ;      var sh_tec9;          var h_tec9;
	
    var k_xm1014 ;     var sh_xm1014;         var h_xm1014;
	var k_nova ;       var sh_nova;          var h_nova;
	var k_sawedoff ;    var sh_sawedoff;       var h_sawedoff;
	var k_mag7 ;       var sh_mag7;           var h_mag7;
	
    var k_mac10 ;     var sh_mac10;          var h_mac10;
    var k_ump45 ;     var sh_ump45;         var h_ump45;
    var k_p90 ;      var sh_p90;           var h_p90;
	var k_mp7 ;       var sh_mp7;            var h_mp7;
	var k_mp9 ;       var sh_mp9;            var h_mp9;
	var k_bizon ;     var sh_bizon;         var h_bizon;
	
    var k_awp ;      var sh_awp ;           var h_awp;
    var k_ak47 ;     var sh_ak47 ;         var h_ak47;
    var k_m4a1 ;      var sh_m4a1 ;         var h_m4a1;
    var k_aug ;        var sh_aug ;            var h_aug;
    var k_famas ;      var sh_famas ;         var h_famas;
    var k_galilar ;    var sh_galilar;       var h_galilar;
    var k_g3sg1 ;      var sh_g3sg1;          var h_g3sg1;
    var k_sg556 ;      var sh_sg556 ;          var h_sg556;
    var k_scar20 ;     var sh_scar20;         var h_scar20;
	var k_ssg08 ;     var sh_ssg08;		  var h_ssg08;
	
    var k_m249 ;       var sh_m249 ;           var h_m249;
    var k_nagev ;      var sh_nagev;          var h_nagev;
	
	var k_grenade;
	var k_pistols;
	var sh_pistols;
	var h_pistols;
	var k_shotgun;
	var sh_shotgun;
	var h_shotgun;
	var k_submachine;
	var sh_submachine;
	var h_submachine; 
	var k_rifles;
	var sh_rifles;
	var h_rifles;
	var k_machine; 
	var sh_machine;
	var h_machine;
	
	 
	
		
	
		
		
			
			id= userid;
			if(!!getCookie("user")){
			$.ajax({
				 dataType: 'JSONP',
				url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=CF287EF9D049517AD75478BD1F56D778&steamid=${id}`)}`,
				jsonCallback: 'callback',
				type : 'GET',
				error: function() {
				console.log("No Login");
				},
				success: function(datas) {
					console.log(datas)
					var totalStats = datas.playerstats.stats;
					var reqFields9 = ["total_kills_knife"];
					var reqFields10 = ["total_kills_hegrenade"];
					var reqFields11 = ["total_kills_glock"];
					var reqFields12 = ["total_kills_deagle"];
					var reqFields13 = ["total_kills_elite"];
					var reqFields14 = ["total_kills_fiveseven"];
					var reqFields15 = ["total_kills_xm1014"];
					var reqFields16 = ["total_kills_mac10"];
					var reqFields17 = ["total_kills_ump45"];
					var reqFields18 = ["total_kills_p90"];
					var reqFields19 = ["total_kills_awp"];
					var reqFields20 = ["total_kills_ak47"];
					var reqFields21 = ["total_kills_aug"];
					var reqFields22 = ["total_kills_famas"];
					var reqFields23 = ["total_kills_g3sg1"];
					var reqFields24 = ["total_kills_m249"];
					var reqFields25 = ["total_kills_headshot"];
					var reqFields26 = ["total_kills_hkp2000"];
					var reqFields27 = ["total_kills_p250"];
					var reqFields28 = ["total_kills_sg556"];
					var reqFields29 = ["total_kills_scar20"];
					var reqFields30 = ["total_kills_ssg08"];
					var reqFields31 = ["total_kills_mp7"];
					var reqFields32 = ["total_kills_mp9"];
					var reqFields33 = ["total_kills_nova"];
					var reqFields34 = ["total_kills_negev"];
					var reqFields35 = ["total_kills_sawedoff"];
					var reqFields36 = ["total_kills_bizon"];
					var reqFields37 = ["total_kills_tec9"];
					var reqFields38 = ["total_kills_mag7"];
					var reqFields39 = ["total_kills_m4a1"];
					var reqFields40 = ["total_kills_galilar"];
					var reqFields41 = ["total_kills_molotov"];
					var reqFields41a = ["total_kills_enemy_blinded"]
					var reqFields42 = ["total_kills_decoy"];
					var reqFields43 = ["total_kills_taser"];
					var reqFields44 = ["total_shots_deagle"];
					var reqFields45 = ["total_shots_glock"];
					var reqFields46 = ["total_shots_elite"];
					var reqFields47 = ["total_shots_fiveseven"];
					var reqFields48 = ["total_shots_awp"];
					var reqFields49 = ["total_shots_ak47"];
					var reqFields50 = ["total_shots_aug"];
					var reqFields51 = ["total_shots_famas"];
					var reqFields52 = ["total_shots_g3sg1"];
					var reqFields53 = ["total_shots_p90"];
					var reqFields54 = ["total_shots_mac10"];
					var reqFields55 = ["total_shots_ump45"];
					var reqFields56 = ["total_shots_xm1014"];
					var reqFields57 = ["total_shots_m249"];
					var reqFields58 = ["total_shots_hkp2000"];
					var reqFields59 = ["total_shots_p250"];
					var reqFields60 = ["total_shots_sg556"];
					var reqFields61 = ["total_shots_scar20"];
					var reqFields62 = ["total_shots_ssg08"];
					var reqFields63 = ["total_shots_mp7"];
					var reqFields64 = ["total_shots_mp9"];
					var reqFields65 = ["total_shots_nova"];
					var reqFields66 = ["total_shots_negev"];
					var reqFields67 = ["total_shots_sawedoff"];
					var reqFields68 = ["total_shots_bizon"];
					var reqFields69 = ["total_shots_tec9"];
					var reqFields70 = ["total_shots_mag7"];
					var reqFields71 = ["total_shots_m4a1"];
					var reqFields72 = ["total_shots_galilar"];
					var reqFields73 = ["total_shots_taser"];
					var reqFields74 = ["total_hits_deagle"];
					var reqFields75 = ["total_hits_glock"];
					var reqFields76 = ["total_hits_elite"];
					var reqFields77 = ["total_hits_fiveseven"];
					var reqFields78 = ["total_hits_awp"];
					var reqFields79 = ["total_hits_ak47"];
					var reqFields80 = ["total_hits_aug"];
					var reqFields81 = ["total_hits_famas"];
					var reqFields82 = ["total_hits_g3sg1"];
					var reqFields83 = ["total_hits_p90"];
					var reqFields84 = ["total_hits_mac10"];
					var reqFields85 = ["total_hits_ump45"];
					var reqFields86 = ["total_hits_xm1014"];
					var reqFields87 = ["total_hits_m249"];
					var reqFields88 = ["total_hits_hkp2000"];
					var reqFields89 = ["total_hits_p250"];
					var reqFields90 = ["total_hits_sg556"];
					var reqFields91 = ["total_hits_scar20"];
					var reqFields92 = ["total_hits_ssg08"];
					var reqFields93 = ["total_hits_mp7"];
					var reqFields94 = ["total_hits_mp9"];
					var reqFields95 = ["total_hits_nova"];
					var reqFields96 = ["total_hits_negev"];
					var reqFields97 = ["total_hits_sawedoff"];
					var reqFields98 = ["total_hits_bizon"];
					var reqFields99 = ["total_hits_tec9"];
					var reqFields100 = ["total_hits_mag7"];
					var reqFields101 = ["total_hits_m4a1"];
					var reqFields102 = ["total_hits_galilar"];
					var reqFields103 = ["total_hits_taser"];
						
					var filteredStats9 = totalStats.filter((totalStat) => {
						return reqFields9.includes(totalStat.name);
					})
					 $.each(filteredStats9, function(key , order){
						console.log(key + ":" + order);
						knife = order.value;
						
					}); 
					var filteredStats10 = totalStats.filter((totalStat) => {
						return reqFields10.includes(totalStat.name);
					})
					 $.each(filteredStats10, function(key , order){
						
						console.log(key + ":" + order);
						grenade = order.value;
					}); 
					var filteredStats11 = totalStats.filter((totalStat) => {
						return reqFields11.includes(totalStat.name);
					})
					 $.each(filteredStats11, function(key , order){
						
						console.log(key + ":" + order);
						k_glock = order.value;
					}); 
					var filteredStats12 = totalStats.filter((totalStat) => {
						return reqFields12.includes(totalStat.name);
					})
					 $.each(filteredStats12, function(key , order){
						
						console.log(key + ":" + order);
						k_deagle = order.value;
					});
					var filteredStats13 = totalStats.filter((totalStat) => {
						return reqFields13.includes(totalStat.name);
					})
					 $.each(filteredStats13, function(key , order){
						
						console.log(key + ":" + order);
						k_elite = order.value;
					});
					var filteredStats14 = totalStats.filter((totalStat) => {
						return reqFields14.includes(totalStat.name);
					})
					 $.each(filteredStats14, function(key , order){
						
						console.log(key + ":" + order);
						k_fiveseven = order.value;
					});
					var filteredStats15 = totalStats.filter((totalStat) => {
						return reqFields15.includes(totalStat.name);
					})
					 $.each(filteredStats15, function(key , order){
						
						console.log(key + ":" + order);
						k_xm1014 = order.value;
					});
					var filteredStats16 = totalStats.filter((totalStat) => {
						return reqFields16.includes(totalStat.name);
					})
					 $.each(filteredStats16, function(key , order){
						
						console.log(key + ":" + order);
						k_mac10 = order.value;
					});
					var filteredStats17 = totalStats.filter((totalStat) => {
						return reqFields17.includes(totalStat.name);
					})
					 $.each(filteredStats17, function(key , order){
						
						console.log(key + ":" + order);
						k_ump45 = order.value;
					});
					var filteredStats18 = totalStats.filter((totalStat) => {
						return reqFields18.includes(totalStat.name);
					})
					 $.each(filteredStats18, function(key , order){
						
						console.log(key + ":" + order);
						k_p90 = order.value;
					});
					var filteredStats19 = totalStats.filter((totalStat) => {
						return reqFields19.includes(totalStat.name);
					})
					 $.each(filteredStats19, function(key , order){
						
						console.log(key + ":" + order);
						k_awp = order.value;
					});
					var filteredStats20 = totalStats.filter((totalStat) => {
						return reqFields20.includes(totalStat.name);
					})
					 $.each(filteredStats20, function(key , order){
						
						console.log(key + ":" + order);
						k_ak47 = order.value;
					});
					var filteredStats21 = totalStats.filter((totalStat) => {
						return reqFields21.includes(totalStat.name);
					})
					 $.each(filteredStats21, function(key , order){
						
						console.log(key + ":" + order);
						k_aug = order.value;
					});
					var filteredStats22 = totalStats.filter((totalStat) => {
						return reqFields22.includes(totalStat.name);
					})
					 $.each(filteredStats22, function(key , order){
						
						console.log(key + ":" + order);
						k_famas = order.value;
					});
					var filteredStats23 = totalStats.filter((totalStat) => {
						return reqFields23.includes(totalStat.name);
					})
					 $.each(filteredStats23, function(key , order){
						
						console.log(key + ":" + order);
						k_g3sg1 = order.value;
					});
					var filteredStats24 = totalStats.filter((totalStat) => {
						return reqFields24.includes(totalStat.name);
					})
					 $.each(filteredStats24, function(key , order){
						
						console.log(key + ":" + order);
						k_m249 = order.value;
					});
					var filteredStats25 = totalStats.filter((totalStat) => {
						return reqFields25.includes(totalStat.name);
					})
					 $.each(filteredStats25, function(key , order){
						
						console.log(key + ":" + order);
						headshots = order.value;
					});
					var filteredStats26 = totalStats.filter((totalStat) => {
						return reqFields26.includes(totalStat.name);
					})
					 $.each(filteredStats26, function(key , order){
						
						console.log(key + ":" + order);
						k_hkp2000 = order.value;
					});
					var filteredStats27 = totalStats.filter((totalStat) => {
						return reqFields27.includes(totalStat.name);
					})
					 $.each(filteredStats27, function(key , order){
						
						console.log(key + ":" + order);
						k_p250 = order.value;
					});
					var filteredStats28 = totalStats.filter((totalStat) => {
						return reqFields28.includes(totalStat.name);
					})
					 $.each(filteredStats28, function(key , order){
						
						console.log(key + ":" + order);
						k_sg556 = order.value;
					});
					var filteredStats29 = totalStats.filter((totalStat) => {
						return reqFields29.includes(totalStat.name);
					})
					 $.each(filteredStats29, function(key , order){
						
						console.log(key + ":" + order);
						k_scar20 = order.value;
					});
					var filteredStats30 = totalStats.filter((totalStat) => {
						return reqFields30.includes(totalStat.name);
					})
					 $.each(filteredStats30, function(key , order){
						
						console.log(key + ":" + order);
						k_ssg08 = order.value;
					});
					var filteredStats31 = totalStats.filter((totalStat) => {
						return reqFields31.includes(totalStat.name);
					})
					 $.each(filteredStats31, function(key , order){
						
						console.log(key + ":" + order);
						k_mp7 = order.value;
					});
					var filteredStats32 = totalStats.filter((totalStat) => {
						return reqFields32.includes(totalStat.name);
					})
					 $.each(filteredStats32, function(key , order){
						
						console.log(key + ":" + order);
						k_mp9 = order.value;
					});
					var filteredStats33 = totalStats.filter((totalStat) => {
						return reqFields33.includes(totalStat.name);
					})
					 $.each(filteredStats33, function(key , order){
						
						console.log(key + ":" + order);
						k_nova = order.value;
					});
					var filteredStats34 = totalStats.filter((totalStat) => {
						return reqFields34.includes(totalStat.name);
					})
					 $.each(filteredStats34, function(key , order){
						
						console.log(key + ":" + order);
						k_nagev = order.value;
					});
					var filteredStats35 = totalStats.filter((totalStat) => {
						return reqFields35.includes(totalStat.name);
					})
					 $.each(filteredStats35, function(key , order){
						
						console.log(key + ":" + order);
						k_sawedoff = order.value;
					});
					var filteredStats36 = totalStats.filter((totalStat) => {
						return reqFields36.includes(totalStat.name);
					})
					 $.each(filteredStats36, function(key , order){
						
						console.log(key + ":" + order);
						k_bizon = order.value;
					});
					var filteredStats37 = totalStats.filter((totalStat) => {
						return reqFields37.includes(totalStat.name);
					})
					 $.each(filteredStats37, function(key , order){
						
						console.log(key + ":" + order);
						k_tec9 = order.value;
					});
					var filteredStats38 = totalStats.filter((totalStat) => {
						return reqFields38.includes(totalStat.name);
					})
					 $.each(filteredStats38, function(key , order){
						
						console.log(key + ":" + order);
						k_mag7 = order.value;
					});
					var filteredStats39 = totalStats.filter((totalStat) => {
						return reqFields39.includes(totalStat.name);
					})
					 $.each(filteredStats39, function(key , order){
						
						console.log(key + ":" + order);
						k_m4a1 = order.value;
					});
					var filteredStats40 = totalStats.filter((totalStat) => {
						return reqFields40.includes(totalStat.name);
					})
					 $.each(filteredStats40, function(key , order){
						
						console.log(key + ":" + order);
						k_galilar = order.value;
					});
					var filteredStats41 = totalStats.filter((totalStat) => {
						return reqFields41.includes(totalStat.name);
					})
					 $.each(filteredStats41, function(key , order){
						
						console.log(key + ":" + order);
						molotov = order.value;
					});
					var filteredStats41a = totalStats.filter((totalStat) => {
						return reqFields41a.includes(totalStat.name);
					})
					 $.each(filteredStats41a, function(key , order){
						
						console.log(key + ":" + order);
						blinded = order.value;
					});
					var filteredStats42 = totalStats.filter((totalStat) => {
						return reqFields42.includes(totalStat.name);
					})
					 $.each(filteredStats42, function(key , order){
						
						console.log(key + ":" + order);
						decoy = order.value;
					});
					var filteredStats43 = totalStats.filter((totalStat) => {
						return reqFields43.includes(totalStat.name);
					})
					 $.each(filteredStats43, function(key , order){
						
						console.log(key + ":" + order);
						k_taser = order.value;
					});
					var filteredStats44 = totalStats.filter((totalStat) => {
						return reqFields44.includes(totalStat.name);
					})
					 $.each(filteredStats44, function(key , order){
						
						console.log(key + ":" + order);
						sh_deagle = order.value;
					});
					var filteredStats45 = totalStats.filter((totalStat) => {
						return reqFields45.includes(totalStat.name);
					})
					 $.each(filteredStats45, function(key , order){
						
						console.log(key + ":" + order);
						sh_glock = order.value;
					});
					var filteredStats46 = totalStats.filter((totalStat) => {
						return reqFields46.includes(totalStat.name);
					})
					 $.each(filteredStats46, function(key , order){
						
						console.log(key + ":" + order);
						sh_elite = order.value;
					});
					var filteredStats47 = totalStats.filter((totalStat) => {
						return reqFields47.includes(totalStat.name);
					})
					 $.each(filteredStats47, function(key , order){
						
						console.log(key + ":" + order);
						sh_fiveseven = order.value;
					});
					var filteredStats48 = totalStats.filter((totalStat) => {
						return reqFields48.includes(totalStat.name);
					})
					 $.each(filteredStats48, function(key , order){
						
						console.log(key + ":" + order);
						sh_awp = order.value;
					});
					var filteredStats49 = totalStats.filter((totalStat) => {
						return reqFields49.includes(totalStat.name);
					})
					 $.each(filteredStats49, function(key , order){
						
						console.log(key + ":" + order);
						sh_ak47 = order.value;
					});
					var filteredStats50 = totalStats.filter((totalStat) => {
						return reqFields50.includes(totalStat.name);
					})
					 $.each(filteredStats50, function(key , order){
						
						console.log(key + ":" + order);
						sh_aug = order.value;
					});
					var filteredStats51 = totalStats.filter((totalStat) => {
						return reqFields51.includes(totalStat.name);
					})
					 $.each(filteredStats51, function(key , order){
						
						console.log(key + ":" + order);
						sh_famas = order.value;
					});
					var filteredStats52 = totalStats.filter((totalStat) => {
						return reqFields52.includes(totalStat.name);
					})
					 $.each(filteredStats52, function(key , order){
						
						console.log(key + ":" + order);
						sh_g3sg1 = order.value;
					});
					var filteredStats53 = totalStats.filter((totalStat) => {
						return reqFields53.includes(totalStat.name);
					})
					 $.each(filteredStats53, function(key , order){
						
						console.log(key + ":" + order);
						sh_p90 = order.value;
					});
					var filteredStats54 = totalStats.filter((totalStat) => {
						return reqFields54.includes(totalStat.name);
					})
					 $.each(filteredStats54, function(key , order){
						
						console.log(key + ":" + order);
						sh_mac10 = order.value;
					});
					var filteredStats55 = totalStats.filter((totalStat) => {
						return reqFields55.includes(totalStat.name);
					})
					 $.each(filteredStats55, function(key , order){
						
						console.log(key + ":" + order);
						sh_ump45 = order.value;
					});
					var filteredStats56 = totalStats.filter((totalStat) => {
						return reqFields56.includes(totalStat.name);
					})
					 $.each(filteredStats56, function(key , order){
						
						console.log(key + ":" + order);
						sh_xm1014 = order.value;
					});
					var filteredStats57 = totalStats.filter((totalStat) => {
						return reqFields57.includes(totalStat.name);
					})
					 $.each(filteredStats57, function(key , order){
						
						console.log(key + ":" + order);
						sh_m249 = order.value;
					});
					var filteredStats58 = totalStats.filter((totalStat) => {
						return reqFields58.includes(totalStat.name);
					})
					 $.each(filteredStats58, function(key , order){
						
						console.log(key + ":" + order);
						sh_hkp2000 = order.value;
					});
					var filteredStats59 = totalStats.filter((totalStat) => {
						return reqFields59.includes(totalStat.name);
					})
					 $.each(filteredStats59, function(key , order){
						
						console.log(key + ":" + order);
						sh_p250 = order.value;
					});
					var filteredStats60 = totalStats.filter((totalStat) => {
						return reqFields60.includes(totalStat.name);
					})
					 $.each(filteredStats60, function(key , order){
						
						console.log(key + ":" + order);
						sh_sg556 = order.value;
					});
					var filteredStats61 = totalStats.filter((totalStat) => {
						return reqFields61.includes(totalStat.name);
					})
					 $.each(filteredStats61, function(key , order){
						
						console.log(key + ":" + order);
						sh_scar20 = order.value;
					});
					var filteredStats62 = totalStats.filter((totalStat) => {
						return reqFields62.includes(totalStat.name);
					})
					 $.each(filteredStats62, function(key , order){
						
						console.log(key + ":" + order);
						sh_ssg08 = order.value;
					});
					var filteredStats63 = totalStats.filter((totalStat) => {
						return reqFields63.includes(totalStat.name);
					})
					 $.each(filteredStats63, function(key , order){
						
						console.log(key + ":" + order);
						sh_mp7 = order.value;
					});
					var filteredStats64 = totalStats.filter((totalStat) => {
						return reqFields64.includes(totalStat.name);
					})
					 $.each(filteredStats64, function(key , order){
						
						console.log(key + ":" + order);
						sh_mp9 = order.value;
					});
					var filteredStats65 = totalStats.filter((totalStat) => {
						return reqFields65.includes(totalStat.name);
					})
					 $.each(filteredStats65, function(key , order){
						
						console.log(key + ":" + order);
						sh_nova = order.value;
					});
					var filteredStats66 = totalStats.filter((totalStat) => {
						return reqFields66.includes(totalStat.name);
					})
					 $.each(filteredStats66, function(key , order){
						
						console.log(key + ":" + order);
						sh_nagev = order.value;
					});
					var filteredStats67 = totalStats.filter((totalStat) => {
						return reqFields67.includes(totalStat.name);
					})
					 $.each(filteredStats67, function(key , order){
						
						console.log(key + ":" + order);
						sh_sawedoff = order.value;
					});
					var filteredStats68 = totalStats.filter((totalStat) => {
						return reqFields68.includes(totalStat.name);
					})
					 $.each(filteredStats68, function(key , order){
						
						console.log(key + ":" + order);
						sh_bizon = order.value;
					});
					var filteredStats69 = totalStats.filter((totalStat) => {
						return reqFields69.includes(totalStat.name);
					})
					 $.each(filteredStats69, function(key , order){
						
						console.log(key + ":" + order);
						sh_tec9 = order.value;
					});
					var filteredStats70 = totalStats.filter((totalStat) => {
						return reqFields70.includes(totalStat.name);
					})
					 $.each(filteredStats70, function(key , order){
						
						console.log(key + ":" + order);
						sh_mag7 = order.value;
					});
					var filteredStats71 = totalStats.filter((totalStat) => {
						return reqFields71.includes(totalStat.name);
					})
					 $.each(filteredStats71, function(key , order){
						
						console.log(key + ":" + order);
						sh_m4a1 = order.value;
					});
					var filteredStats72 = totalStats.filter((totalStat) => {
						return reqFields72.includes(totalStat.name);
					})
					 $.each(filteredStats72, function(key , order){
						
						console.log(key + ":" + order);
						sh_galilar = order.value;
					});
					var filteredStats73 = totalStats.filter((totalStat) => {
						return reqFields73.includes(totalStat.name);
					})
					 $.each(filteredStats73, function(key , order){
						
						console.log(key + ":" + order);
						sh_taser = order.value;
					});
					
					var filteredStats74 = totalStats.filter((totalStat) => {
						return reqFields74.includes(totalStat.name);
					})
					 $.each(filteredStats74, function(key , order){
						
						console.log(key + ":" + order);
						h_deagle = order.value;
					});
					var filteredStats75 = totalStats.filter((totalStat) => {
						return reqFields75.includes(totalStat.name);
					})
					 $.each(filteredStats75, function(key , order){
						
						console.log(key + ":" + order);
						h_glock = order.value;
					});
					var filteredStats76 = totalStats.filter((totalStat) => {
						return reqFields76.includes(totalStat.name);
					})
					 $.each(filteredStats76, function(key , order){
						
						console.log(key + ":" + order);
						h_elite = order.value;
					});
					var filteredStats77 = totalStats.filter((totalStat) => {
						return reqFields77.includes(totalStat.name);
					})
					 $.each(filteredStats77, function(key , order){
						
						console.log(key + ":" + order);
						h_fiveseven = order.value;
					});
					var filteredStats78 = totalStats.filter((totalStat) => {
						return reqFields78.includes(totalStat.name);
					})
					 $.each(filteredStats78, function(key , order){
						
						console.log(key + ":" + order);
						h_awp = order.value;
					});
					var filteredStats79 = totalStats.filter((totalStat) => {
						return reqFields79.includes(totalStat.name);
					})
					 $.each(filteredStats79, function(key , order){
						
						console.log(key + ":" + order);
						h_ak47 = order.value;
					});
					var filteredStats80 = totalStats.filter((totalStat) => {
						return reqFields80.includes(totalStat.name);
					})
					 $.each(filteredStats80, function(key , order){
						
						console.log(key + ":" + order);
						h_aug = order.value;
					});
					var filteredStats81 = totalStats.filter((totalStat) => {
						return reqFields81.includes(totalStat.name);
					})
					 $.each(filteredStats81, function(key , order){
						
						console.log(key + ":" + order);
						h_famas = order.value;
					});
					var filteredStats82 = totalStats.filter((totalStat) => {
						return reqFields82.includes(totalStat.name);
					})
					 $.each(filteredStats82, function(key , order){
						
						console.log(key + ":" + order);
						h_g3sg1 = order.value;
					});
					var filteredStats83 = totalStats.filter((totalStat) => {
						return reqFields83.includes(totalStat.name);
					})
					 $.each(filteredStats83, function(key , order){
						
						console.log(key + ":" + order);
						h_p90 = order.value;
					});
					var filteredStats84 = totalStats.filter((totalStat) => {
						return reqFields84.includes(totalStat.name);
					})
					 $.each(filteredStats84, function(key , order){
						
						console.log(key + ":" + order);
						h_mac10 = order.value;
					});
					var filteredStats85 = totalStats.filter((totalStat) => {
						return reqFields85.includes(totalStat.name);
					})
					 $.each(filteredStats85, function(key , order){
						
						console.log(key + ":" + order);
						h_ump45 = order.value;
					});
					var filteredStats86 = totalStats.filter((totalStat) => {
						return reqFields86.includes(totalStat.name);
					})
					 $.each(filteredStats86, function(key , order){
						
						console.log(key + ":" + order);
						h_xm1014 = order.value;
					});
					var filteredStats87 = totalStats.filter((totalStat) => {
						return reqFields87.includes(totalStat.name);
					})
					 $.each(filteredStats87, function(key , order){
						
						console.log(key + ":" + order);
						h_m249 = order.value;
					});
					var filteredStats88 = totalStats.filter((totalStat) => {
						return reqFields88.includes(totalStat.name);
					})
					 $.each(filteredStats88, function(key , order){
						
						console.log(key + ":" + order);
						h_hkp2000 = order.value;
					});
					var filteredStats89 = totalStats.filter((totalStat) => {
						return reqFields89.includes(totalStat.name);
					})
					 $.each(filteredStats89, function(key , order){
						
						console.log(key + ":" + order);
						h_p250 = order.value;
					});
					var filteredStats90 = totalStats.filter((totalStat) => {
						return reqFields90.includes(totalStat.name);
					})
					 $.each(filteredStats90, function(key , order){
						
						console.log(key + ":" + order);
						h_sg556 = order.value;
					});
					var filteredStats91 = totalStats.filter((totalStat) => {
						return reqFields91.includes(totalStat.name);
					})
					 $.each(filteredStats91, function(key , order){
						
						console.log(key + ":" + order);
						h_scar20 = order.value;
					});
					var filteredStats92 = totalStats.filter((totalStat) => {
						return reqFields92.includes(totalStat.name);
					})
					 $.each(filteredStats92, function(key , order){
						
						console.log(key + ":" + order);
						h_ssg08 = order.value;
					});
					var filteredStats93 = totalStats.filter((totalStat) => {
						return reqFields93.includes(totalStat.name);
					})
					 $.each(filteredStats93, function(key , order){
						
						console.log(key + ":" + order);
						h_mp7 = order.value;
					});
					var filteredStats94 = totalStats.filter((totalStat) => {
						return reqFields94.includes(totalStat.name);
					})
					 $.each(filteredStats94, function(key , order){
						
						console.log(key + ":" + order);
						h_mp9 = order.value;
					});
					var filteredStats95 = totalStats.filter((totalStat) => {
						return reqFields95.includes(totalStat.name);
					})
					 $.each(filteredStats95, function(key , order){
						
						console.log(key + ":" + order);
						h_nova = order.value;
					});
					var filteredStats96 = totalStats.filter((totalStat) => {
						return reqFields96.includes(totalStat.name);
					})
					 $.each(filteredStats96, function(key , order){
						
						console.log(key + ":" + order);
						h_nagev = order.value;
					});
					var filteredStats97 = totalStats.filter((totalStat) => {
						return reqFields97.includes(totalStat.name);
					})
					 $.each(filteredStats97, function(key , order){
						
						console.log(key + ":" + order);
						h_sawedoff = order.value;
					});
					var filteredStats98 = totalStats.filter((totalStat) => {
						return reqFields98.includes(totalStat.name);
					})
					 $.each(filteredStats98, function(key , order){
						
						console.log(key + ":" + order);
						h_bizon = order.value;
					});
					var filteredStats99 = totalStats.filter((totalStat) => {
						return reqFields99.includes(totalStat.name);
					})
					 $.each(filteredStats99, function(key , order){
						
						console.log(key + ":" + order);
						h_tec9 = order.value;
					});
					var filteredStats100 = totalStats.filter((totalStat) => {
						return reqFields100.includes(totalStat.name);
					})
					 $.each(filteredStats100, function(key , order){
						
						console.log(key + ":" + order);
						h_mag10 = order.value;
					});
					var filteredStats101 = totalStats.filter((totalStat) => {
						return reqFields101.includes(totalStat.name);
					})
					 $.each(filteredStats101, function(key , order){
						
						console.log(key + ":" + order);
						h_m4a1 = order.value;
					});
					var filteredStats102 = totalStats.filter((totalStat) => {
						return reqFields102.includes(totalStat.name);
					})
					 $.each(filteredStats102, function(key , order){
						
						console.log(key + ":" + order);
						h_galilar = order.value;
					});
					var filteredStats103 = totalStats.filter((totalStat) => {
						return reqFields103.includes(totalStat.name);
					})
					 $.each(filteredStats103, function(key , order){
						
						console.log(key + ":" + order);
						h_taser = order.value;
					});
					knife = check( knife );
					 k_taser = check( k_taser );
					 sh_taser = check( sh_taser );
					 k_knife = check( k_knife );
					 blinded = check( blinded );
					 decoy = check( decoy );
					 grenade = check( grenade );
					 molotov = check( molotov );
					 k_glock = check( k_glock );
					 sh_glock = check( sh_glock );
					 h_glock = check( h_glock );
					 k_deagle = check( k_deagle );
					 sh_deagle = check( sh_deagle );
					 h_deagle = check( h_deagle );
					 k_fiveseven = check( k_fiveseven );
					 sh_fiveseven = check( sh_fiveseven );
					 h_fiveseven = check( h_fiveseven );
					 k_elite = check( k_elite );
					 sh_elite = check( sh_elite );
					 h_elite = check( h_elite );
					 k_hkp2000 = check( k_hkp2000 );
					 sh_hkp2000 = check( sh_hkp2000 );
					 h_hkp2000 = check( h_hkp2000 );
					 k_p250 = check( k_p250 );
					 sh_p250 = check( sh_p250 );
					 h_p250 = check( h_p250 );
					 k_tec9 = check( k_tec9 );
					 sh_tec9 = check( sh_tec9 );
					 h_tec9 = check( h_tec9 );
					 k_xm1014 = check( k_xm1014 );
					 sh_xm1014 = check( sh_xm1014 );
					 h_xm1014 = check( h_xm1014 );
					 k_nova = check( k_nova );
					 sh_nova = check( sh_nova );
					 h_nova = check( h_nova );
					 k_sawedoff = check( k_sawedoff );
					 sh_sawedoff = check( sh_sawedoff );
					 h_sawedoff = check( h_sawedoff );
					 k_mag7 = check( k_mag7 );
					 sh_mag7 = check( sh_mag7 );
					 h_mag7 = check( h_mag7 );//alert("mag7"+h_mag7);
					 k_mac10 = check( k_mac10 );
					 sh_mac10 = check( sh_mac10 );
					 h_mac10 = check( h_mac10 );
					 k_ump45 = check( k_ump45 );
					 sh_ump45 = check( sh_ump45 );
					 h_ump45 = check( h_ump45 );
					 k_p90 = check( k_p90 );
					 sh_p90 = check( sh_p90 );
					 h_p90 = check( h_p90 );
					 k_mp7 = check( k_mp7 );
					 sh_mp7 = check( sh_mp7 );
					 h_mp7 = check( h_mp7 );
					 k_mp9 = check( k_mp9 );//alert("mp9"+k_mp9);
					 sh_mp9 = check( sh_mp9 );
					 h_mp9 = check( h_mp9 );
					 k_bizon = check( k_bizon );
					 sh_bizon = check( sh_bizon );
					 h_bizon = check( h_bizon );
					 k_awp = check( k_awp );
					 sh_awp = check( sh_awp );
					 h_awp = check( h_awp );
					 k_ak47 = check( k_ak47 );
					 sh_ak47 = check( sh_ak47 );
					 h_ak47 = check( h_ak47 );
					 k_m4a1 = check( k_m4a1 );
					 sh_m4a1 = check( sh_m4a1 );
					 h_m4a1 = check( h_m4a1 );
					 k_aug = check( k_aug );
					 h_aug = check( h_aug );
					 h_aug = check( h_aug );
					 k_famas = check( k_famas );
					 sh_famas = check( sh_famas );
					 h_famas = check( h_famas );
					 k_galilar = check( k_galilar );
					 sh_galilar = check( sh_galilar );
					 h_galilar = check( h_galilar );
					 k_g3sg1 = check( k_g3sg1 );//alert("g3sg1"+k_g3sg1);
					 sh_g3sg1 = check( sh_g3sg1 );
					 h_g3sg1 = check( h_g3sg1 );
					 k_sg556 = check( k_sg556 );
					 sh_sg556 = check( sh_sg556 );
					 h_sg556 = check( h_sg556 );
					 k_scar20 = check( k_scar20 );
					 sh_scar20 = check( sh_scar20 );
					 h_scar20 = check( h_scar20 );
					 k_ssg08 = check( k_ssg08 );
					 sh_ssg08 = check( sh_ssg08 );
					 h_ssg08 = check( h_ssg08 );
					 k_m249 = check( k_m249 );
					 sh_m249 = check( sh_m249 );
					 h_m249 = check( h_m249 );
					 k_nagev = check( k_nagev );
					 sh_nagev = check( sh_nagev );
					 h_nagev = check( h_nagev );
					 k_grenade = check( k_grenade );
					 /*k_pistols = check( k_pistols );
					 sh_pistols = check( sh_pistols );
					 h_pistols = check( h_pistols );
					 k_shotgun = check( k_shotgun );
					 sh_shotgun = check( sh_shotgun );
					 h_shotgun = check( h_shotgun );
					 k_submachine = check( k_submachine );
					 sh_submachine = check( sh_submachine );
					 h_submachine = check( h_submachine );
					 k_rifles = check( k_rifles );
					 sh_rifles = check( sh_rifles );
					 h_rifles = check( h_rifles );
					 k_machine = check( k_machine );
					 sh_machine = check( sh_machine );
					 h_machine = check( h_machine );*/
					 
					k_knife = (knife +k_taser);
					k_grenade = (grenade + decoy + blinded + molotov);
					k_pistols = (k_deagle + k_fiveseven + k_glock + k_elite + k_hkp2000 + k_p250 + k_tec9);
					sh_pistols = (sh_deagle + sh_fiveseven + sh_glock + sh_elite + sh_hkp2000 + sh_p250 + sh_tec9);
					h_pistols = (h_deagle + h_fiveseven + h_glock + h_elite + h_hkp2000 + h_p250 + h_tec9);
					k_shotgun = (k_xm1014 + k_nova + k_sawedoff + k_mag7);
					sh_shotgun = (sh_xm1014 + sh_nova + sh_sawedoff + sh_mag7);
					h_shotgun = (h_xm1014 + h_nova + h_sawedoff + h_mag7);
					k_submachine = (k_mac10 + k_p90 + k_ump45 + k_p90 + k_mp7 + k_mp9 + k_bizon);
					sh_submachine = (sh_mac10 + sh_p90 + sh_ump45 + sh_p90 + sh_mp7 + sh_mp9 + sh_bizon);
					h_submachine = (h_mac10 + h_p90 + h_ump45 + h_p90 + h_mp7 + h_mp9 + h_bizon); 
					k_rifles = (k_ak47 + k_aug + k_awp + k_famas + k_g3sg1 + k_m4a1 + k_galilar + k_sg556 + k_scar20 + k_ssg08);
					sh_rifles = (sh_ak47 + sh_aug + sh_awp + sh_famas + sh_g3sg1 + sh_m4a1 + sh_galilar + sh_sg556 + sh_scar20 + sh_ssg08);
					h_rifles = (h_ak47 + h_aug + h_awp + h_famas + h_g3sg1 + h_m4a1 + h_galilar + h_sg556 + h_scar20 + h_ssg08);
					k_machine = (k_m249 + k_nagev); 
					sh_machine = (sh_m249 + sh_nagev);
					h_machine = (h_m249 + h_nagev);
				},	
				complete: function(datas){
					guntable();
				}
				
			});	
 }	
else{
	
} 



function guntable(){
	
	document.getElementById("kills_ak").innerHTML = (k_ak47);
	document.getElementById("kills_m4").innerHTML = (k_m4a1);
	document.getElementById("kills_awp").innerHTML = (k_awp);
	document.getElementById("kills_aug").innerHTML = (k_aug);
	document.getElementById("kills_sg").innerHTML = (k_sg556);
	document.getElementById("kills_famas").innerHTML = (k_famas);
	document.getElementById("kills_galil").innerHTML = (k_galilar);
	document.getElementById("kills_scar").innerHTML = (k_scar20);
	document.getElementById("kills_g3").innerHTML = (k_g3sg1);
	document.getElementById("kills_ssg").innerHTML = (k_ssg08);
	document.getElementById("kills_mac10").innerHTML = (k_mac10);
	document.getElementById("kills_mp7").innerHTML = (k_mp7);
	document.getElementById("kills_p90").innerHTML = (k_p90);
	document.getElementById("kills_ump").innerHTML = (k_ump45);
	document.getElementById("kills_mp9").innerHTML = (k_mp9);
	document.getElementById("kills_bizon").innerHTML = (k_bizon);
	document.getElementById("kills_negev").innerHTML = (k_nagev);
	document.getElementById("kills_m249").innerHTML = (k_m249);
	document.getElementById("kills_usp").innerHTML = (k_hkp2000);
	document.getElementById("kills_deagle").innerHTML = (k_deagle);
	document.getElementById("kills_tec9").innerHTML = (k_tec9);
	document.getElementById("kills_57").innerHTML = (k_fiveseven);
	document.getElementById("kills_p250").innerHTML = (k_p250);
	document.getElementById("kills_elite").innerHTML = (k_elite);
	document.getElementById("kills_glock").innerHTML = (k_glock);
	document.getElementById("kills_nova").innerHTML = (k_nova);
	document.getElementById("kills_xm").innerHTML = (k_xm1014);
	document.getElementById("kills_mag7").innerHTML = (k_mag7);
	document.getElementById("kills_sawed").innerHTML = (k_sawedoff);
	
	
	
	
	
	document.getElementById("shots_ak").innerHTML = (sh_ak47);
	document.getElementById("shots_m4").innerHTML = (sh_m4a1);
	document.getElementById("shots_awp").innerHTML = (sh_awp);
	document.getElementById("shots_aug").innerHTML = (sh_aug);
	document.getElementById("shots_sg").innerHTML = (sh_sg556);
	document.getElementById("shots_famas").innerHTML = (sh_famas);
	document.getElementById("shots_galil").innerHTML = (sh_galilar);
	document.getElementById("shots_scar").innerHTML = (sh_scar20);
	document.getElementById("shots_g3").innerHTML = (sh_g3sg1);
	document.getElementById("shots_ssg").innerHTML = (sh_ssg08);
	document.getElementById("shots_mac10").innerHTML = (sh_mac10);
	document.getElementById("shots_mp7").innerHTML = (sh_mp7);
	document.getElementById("shots_p90").innerHTML = (sh_p90);
	document.getElementById("shots_ump").innerHTML = (sh_ump45);
	document.getElementById("shots_mp9").innerHTML = (sh_mp9);
	document.getElementById("shots_bizon").innerHTML = (sh_bizon);
	document.getElementById("shots_negev").innerHTML = (sh_nagev);
	document.getElementById("shots_m249").innerHTML = (sh_m249);
	document.getElementById("shots_usp").innerHTML = (sh_hkp2000);
	document.getElementById("shots_deagle").innerHTML = (sh_deagle);
	document.getElementById("shots_tec9").innerHTML = (sh_tec9);
	document.getElementById("shots_57").innerHTML = (sh_fiveseven);
	document.getElementById("shots_p250").innerHTML = (sh_p250);
	document.getElementById("shots_elite").innerHTML = (sh_elite);
	document.getElementById("shots_glock").innerHTML = (sh_glock);
	document.getElementById("shots_nova").innerHTML = (sh_nova);
	document.getElementById("shots_xm").innerHTML = (sh_xm1014);
	document.getElementById("shots_mag7").innerHTML = (sh_mag7);
	document.getElementById("shots_sawed").innerHTML = (sh_sawedoff);
	
	
	
	document.getElementById("hits_ak").innerHTML = (h_ak47);
	document.getElementById("hits_m4").innerHTML = (h_m4a1);
	document.getElementById("hits_awp").innerHTML = (h_awp);
	document.getElementById("hits_aug").innerHTML = (h_aug);
	document.getElementById("hits_sg").innerHTML = (h_sg556);
	document.getElementById("hits_famas").innerHTML = (h_famas);
	document.getElementById("hits_galil").innerHTML = (h_galilar);
	document.getElementById("hits_scar").innerHTML = (h_scar20);
	document.getElementById("hits_g3").innerHTML = (h_g3sg1);
	document.getElementById("hits_ssg").innerHTML = (h_ssg08);
	document.getElementById("hits_mac10").innerHTML = (h_mac10);
	document.getElementById("hits_mp7").innerHTML = (h_mp7);
	document.getElementById("hits_p90").innerHTML = (h_p90);
	document.getElementById("hits_ump").innerHTML = (h_ump45);
	document.getElementById("hits_mp9").innerHTML = (h_mp9);
	document.getElementById("hits_bizon").innerHTML = (h_bizon);
	document.getElementById("hits_negev").innerHTML = (h_nagev);
	document.getElementById("hits_m249").innerHTML = (h_m249);
	document.getElementById("hits_usp").innerHTML = (h_hkp2000);
	document.getElementById("hits_deagle").innerHTML = (h_deagle);
	document.getElementById("hits_tec9").innerHTML = (h_tec9);
	document.getElementById("hits_57").innerHTML = (h_fiveseven);
	document.getElementById("hits_p250").innerHTML = (h_p250);
	document.getElementById("hits_elite").innerHTML = (h_elite);
	document.getElementById("hits_glock").innerHTML = (h_glock);
	document.getElementById("hits_nova").innerHTML = (h_nova);
	document.getElementById("hits_xm").innerHTML = (h_xm1014);
	document.getElementById("hits_mag7").innerHTML = (h_mag7);
	document.getElementById("hits_sawed").innerHTML = (h_sawedoff);
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
					GunStat(sid);
			}
				
			
			});	
		
	}
	else if(id64!=false){
		GunStat(id64);
		
	}
	else{
		alert("enter valid id");
	}
});	

function GunStat(id){
	
	$.ajax({
				 dataType: 'JSONP',
				url: `https://json2jsonp.com/?url=${encodeURIComponent(`http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=CF287EF9D049517AD75478BD1F56D778&steamid=${id}`)}`,
				jsonCallback: 'callback',
				type : 'GET',
				success: function(datas) {
					console.log(datas)
					var totalStats = datas.playerstats.stats;
					var reqFields9 = ["total_kills_knife"];
					var reqFields10 = ["total_kills_hegrenade"];
					var reqFields11 = ["total_kills_glock"];
					var reqFields12 = ["total_kills_deagle"];
					var reqFields13 = ["total_kills_elite"];
					var reqFields14 = ["total_kills_fiveseven"];
					var reqFields15 = ["total_kills_xm1014"];
					var reqFields16 = ["total_kills_mac10"];
					var reqFields17 = ["total_kills_ump45"];
					var reqFields18 = ["total_kills_p90"];
					var reqFields19 = ["total_kills_awp"];
					var reqFields20 = ["total_kills_ak47"];
					var reqFields21 = ["total_kills_aug"];
					var reqFields22 = ["total_kills_famas"];
					var reqFields23 = ["total_kills_g3sg1"];
					var reqFields24 = ["total_kills_m249"];
					var reqFields25 = ["total_kills_headshot"];
					var reqFields26 = ["total_kills_hkp2000"];
					var reqFields27 = ["total_kills_p250"];
					var reqFields28 = ["total_kills_sg556"];
					var reqFields29 = ["total_kills_scar20"];
					var reqFields30 = ["total_kills_ssg08"];
					var reqFields31 = ["total_kills_mp7"];
					var reqFields32 = ["total_kills_mp9"];
					var reqFields33 = ["total_kills_nova"];
					var reqFields34 = ["total_kills_negev"];
					var reqFields35 = ["total_kills_sawedoff"];
					var reqFields36 = ["total_kills_bizon"];
					var reqFields37 = ["total_kills_tec9"];
					var reqFields38 = ["total_kills_mag7"];
					var reqFields39 = ["total_kills_m4a1"];
					var reqFields40 = ["total_kills_galilar"];
					var reqFields41 = ["total_kills_molotov"];
					var reqFields41a = ["total_kills_enemy_blinded"]
					var reqFields42 = ["total_kills_decoy"];
					var reqFields43 = ["total_kills_taser"];
					var reqFields44 = ["total_shots_deagle"];
					var reqFields45 = ["total_shots_glock"];
					var reqFields46 = ["total_shots_elite"];
					var reqFields47 = ["total_shots_fiveseven"];
					var reqFields48 = ["total_shots_awp"];
					var reqFields49 = ["total_shots_ak47"];
					var reqFields50 = ["total_shots_aug"];
					var reqFields51 = ["total_shots_famas"];
					var reqFields52 = ["total_shots_g3sg1"];
					var reqFields53 = ["total_shots_p90"];
					var reqFields54 = ["total_shots_mac10"];
					var reqFields55 = ["total_shots_ump45"];
					var reqFields56 = ["total_shots_xm1014"];
					var reqFields57 = ["total_shots_m249"];
					var reqFields58 = ["total_shots_hkp2000"];
					var reqFields59 = ["total_shots_p250"];
					var reqFields60 = ["total_shots_sg556"];
					var reqFields61 = ["total_shots_scar20"];
					var reqFields62 = ["total_shots_ssg08"];
					var reqFields63 = ["total_shots_mp7"];
					var reqFields64 = ["total_shots_mp9"];
					var reqFields65 = ["total_shots_nova"];
					var reqFields66 = ["total_shots_negev"];
					var reqFields67 = ["total_shots_sawedoff"];
					var reqFields68 = ["total_shots_bizon"];
					var reqFields69 = ["total_shots_tec9"];
					var reqFields70 = ["total_shots_mag7"];
					var reqFields71 = ["total_shots_m4a1"];
					var reqFields72 = ["total_shots_galilar"];
					var reqFields73 = ["total_shots_taser"];
					var reqFields74 = ["total_hits_deagle"];
					var reqFields75 = ["total_hits_glock"];
					var reqFields76 = ["total_hits_elite"];
					var reqFields77 = ["total_hits_fiveseven"];
					var reqFields78 = ["total_hits_awp"];
					var reqFields79 = ["total_hits_ak47"];
					var reqFields80 = ["total_hits_aug"];
					var reqFields81 = ["total_hits_famas"];
					var reqFields82 = ["total_hits_g3sg1"];
					var reqFields83 = ["total_hits_p90"];
					var reqFields84 = ["total_hits_mac10"];
					var reqFields85 = ["total_hits_ump45"];
					var reqFields86 = ["total_hits_xm1014"];
					var reqFields87 = ["total_hits_m249"];
					var reqFields88 = ["total_hits_hkp2000"];
					var reqFields89 = ["total_hits_p250"];
					var reqFields90 = ["total_hits_sg556"];
					var reqFields91 = ["total_hits_scar20"];
					var reqFields92 = ["total_hits_ssg08"];
					var reqFields93 = ["total_hits_mp7"];
					var reqFields94 = ["total_hits_mp9"];
					var reqFields95 = ["total_hits_nova"];
					var reqFields96 = ["total_hits_negev"];
					var reqFields97 = ["total_hits_sawedoff"];
					var reqFields98 = ["total_hits_bizon"];
					var reqFields99 = ["total_hits_tec9"];
					var reqFields100 = ["total_hits_mag7"];
					var reqFields101 = ["total_hits_m4a1"];
					var reqFields102 = ["total_hits_galilar"];
					var reqFields103 = ["total_hits_taser"];
						
					var filteredStats9 = totalStats.filter((totalStat) => {
						return reqFields9.includes(totalStat.name);
					})
					 $.each(filteredStats9, function(key , order){
						console.log(key + ":" + order);
						knife = order.value;
						
					}); 
					var filteredStats10 = totalStats.filter((totalStat) => {
						return reqFields10.includes(totalStat.name);
					})
					 $.each(filteredStats10, function(key , order){
						
						console.log(key + ":" + order);
						grenade = order.value;
					}); 
					var filteredStats11 = totalStats.filter((totalStat) => {
						return reqFields11.includes(totalStat.name);
					})
					 $.each(filteredStats11, function(key , order){
						
						console.log(key + ":" + order);
						k_glock = order.value;
					}); 
					var filteredStats12 = totalStats.filter((totalStat) => {
						return reqFields12.includes(totalStat.name);
					})
					 $.each(filteredStats12, function(key , order){
						
						console.log(key + ":" + order);
						k_deagle = order.value;
					});
					var filteredStats13 = totalStats.filter((totalStat) => {
						return reqFields13.includes(totalStat.name);
					})
					 $.each(filteredStats13, function(key , order){
						
						console.log(key + ":" + order);
						k_elite = order.value;
					});
					var filteredStats14 = totalStats.filter((totalStat) => {
						return reqFields14.includes(totalStat.name);
					})
					 $.each(filteredStats14, function(key , order){
						
						console.log(key + ":" + order);
						k_fiveseven = order.value;
					});
					var filteredStats15 = totalStats.filter((totalStat) => {
						return reqFields15.includes(totalStat.name);
					})
					 $.each(filteredStats15, function(key , order){
						
						console.log(key + ":" + order);
						k_xm1014 = order.value;
					});
					var filteredStats16 = totalStats.filter((totalStat) => {
						return reqFields16.includes(totalStat.name);
					})
					 $.each(filteredStats16, function(key , order){
						
						console.log(key + ":" + order);
						k_mac10 = order.value;
					});
					var filteredStats17 = totalStats.filter((totalStat) => {
						return reqFields17.includes(totalStat.name);
					})
					 $.each(filteredStats17, function(key , order){
						
						console.log(key + ":" + order);
						k_ump45 = order.value;
					});
					var filteredStats18 = totalStats.filter((totalStat) => {
						return reqFields18.includes(totalStat.name);
					})
					 $.each(filteredStats18, function(key , order){
						
						console.log(key + ":" + order);
						k_p90 = order.value;
					});
					var filteredStats19 = totalStats.filter((totalStat) => {
						return reqFields19.includes(totalStat.name);
					})
					 $.each(filteredStats19, function(key , order){
						
						console.log(key + ":" + order);
						k_awp = order.value;
					});
					var filteredStats20 = totalStats.filter((totalStat) => {
						return reqFields20.includes(totalStat.name);
					})
					 $.each(filteredStats20, function(key , order){
						
						console.log(key + ":" + order);
						k_ak47 = order.value;
					});
					var filteredStats21 = totalStats.filter((totalStat) => {
						return reqFields21.includes(totalStat.name);
					})
					 $.each(filteredStats21, function(key , order){
						
						console.log(key + ":" + order);
						k_aug = order.value;
					});
					var filteredStats22 = totalStats.filter((totalStat) => {
						return reqFields22.includes(totalStat.name);
					})
					 $.each(filteredStats22, function(key , order){
						
						console.log(key + ":" + order);
						k_famas = order.value;
					});
					var filteredStats23 = totalStats.filter((totalStat) => {
						return reqFields23.includes(totalStat.name);
					})
					 $.each(filteredStats23, function(key , order){
						
						console.log(key + ":" + order);
						k_g3sg1 = order.value;
					});
					var filteredStats24 = totalStats.filter((totalStat) => {
						return reqFields24.includes(totalStat.name);
					})
					 $.each(filteredStats24, function(key , order){
						
						console.log(key + ":" + order);
						k_m249 = order.value;
					});
					var filteredStats25 = totalStats.filter((totalStat) => {
						return reqFields25.includes(totalStat.name);
					})
					 $.each(filteredStats25, function(key , order){
						
						console.log(key + ":" + order);
						headshots = order.value;
					});
					var filteredStats26 = totalStats.filter((totalStat) => {
						return reqFields26.includes(totalStat.name);
					})
					 $.each(filteredStats26, function(key , order){
						
						console.log(key + ":" + order);
						k_hkp2000 = order.value;
					});
					var filteredStats27 = totalStats.filter((totalStat) => {
						return reqFields27.includes(totalStat.name);
					})
					 $.each(filteredStats27, function(key , order){
						
						console.log(key + ":" + order);
						k_p250 = order.value;
					});
					var filteredStats28 = totalStats.filter((totalStat) => {
						return reqFields28.includes(totalStat.name);
					})
					 $.each(filteredStats28, function(key , order){
						
						console.log(key + ":" + order);
						k_sg556 = order.value;
					});
					var filteredStats29 = totalStats.filter((totalStat) => {
						return reqFields29.includes(totalStat.name);
					})
					 $.each(filteredStats29, function(key , order){
						
						console.log(key + ":" + order);
						k_scar20 = order.value;
					});
					var filteredStats30 = totalStats.filter((totalStat) => {
						return reqFields30.includes(totalStat.name);
					})
					 $.each(filteredStats30, function(key , order){
						
						console.log(key + ":" + order);
						k_ssg08 = order.value;
					});
					var filteredStats31 = totalStats.filter((totalStat) => {
						return reqFields31.includes(totalStat.name);
					})
					 $.each(filteredStats31, function(key , order){
						
						console.log(key + ":" + order);
						k_mp7 = order.value;
					});
					var filteredStats32 = totalStats.filter((totalStat) => {
						return reqFields32.includes(totalStat.name);
					})
					 $.each(filteredStats32, function(key , order){
						
						console.log(key + ":" + order);
						k_mp9 = order.value;
					});
					var filteredStats33 = totalStats.filter((totalStat) => {
						return reqFields33.includes(totalStat.name);
					})
					 $.each(filteredStats33, function(key , order){
						
						console.log(key + ":" + order);
						k_nova = order.value;
					});
					var filteredStats34 = totalStats.filter((totalStat) => {
						return reqFields34.includes(totalStat.name);
					})
					 $.each(filteredStats34, function(key , order){
						
						console.log(key + ":" + order);
						k_nagev = order.value;
					});
					var filteredStats35 = totalStats.filter((totalStat) => {
						return reqFields35.includes(totalStat.name);
					})
					 $.each(filteredStats35, function(key , order){
						
						console.log(key + ":" + order);
						k_sawedoff = order.value;
					});
					var filteredStats36 = totalStats.filter((totalStat) => {
						return reqFields36.includes(totalStat.name);
					})
					 $.each(filteredStats36, function(key , order){
						
						console.log(key + ":" + order);
						k_bizon = order.value;
					});
					var filteredStats37 = totalStats.filter((totalStat) => {
						return reqFields37.includes(totalStat.name);
					})
					 $.each(filteredStats37, function(key , order){
						
						console.log(key + ":" + order);
						k_tec9 = order.value;
					});
					var filteredStats38 = totalStats.filter((totalStat) => {
						return reqFields38.includes(totalStat.name);
					})
					 $.each(filteredStats38, function(key , order){
						
						console.log(key + ":" + order);
						k_mag7 = order.value;
					});
					var filteredStats39 = totalStats.filter((totalStat) => {
						return reqFields39.includes(totalStat.name);
					})
					 $.each(filteredStats39, function(key , order){
						
						console.log(key + ":" + order);
						k_m4a1 = order.value;
					});
					var filteredStats40 = totalStats.filter((totalStat) => {
						return reqFields40.includes(totalStat.name);
					})
					 $.each(filteredStats40, function(key , order){
						
						console.log(key + ":" + order);
						k_galilar = order.value;
					});
					var filteredStats41 = totalStats.filter((totalStat) => {
						return reqFields41.includes(totalStat.name);
					})
					 $.each(filteredStats41, function(key , order){
						
						console.log(key + ":" + order);
						molotov = order.value;
					});
					var filteredStats41a = totalStats.filter((totalStat) => {
						return reqFields41a.includes(totalStat.name);
					})
					 $.each(filteredStats41a, function(key , order){
						
						console.log(key + ":" + order);
						blinded = order.value;
					});
					var filteredStats42 = totalStats.filter((totalStat) => {
						return reqFields42.includes(totalStat.name);
					})
					 $.each(filteredStats42, function(key , order){
						
						console.log(key + ":" + order);
						decoy = order.value;
					});
					var filteredStats43 = totalStats.filter((totalStat) => {
						return reqFields43.includes(totalStat.name);
					})
					 $.each(filteredStats43, function(key , order){
						
						console.log(key + ":" + order);
						k_taser = order.value;
					});
					var filteredStats44 = totalStats.filter((totalStat) => {
						return reqFields44.includes(totalStat.name);
					})
					 $.each(filteredStats44, function(key , order){
						
						console.log(key + ":" + order);
						sh_deagle = order.value;
					});
					var filteredStats45 = totalStats.filter((totalStat) => {
						return reqFields45.includes(totalStat.name);
					})
					 $.each(filteredStats45, function(key , order){
						
						console.log(key + ":" + order);
						sh_glock = order.value;
					});
					var filteredStats46 = totalStats.filter((totalStat) => {
						return reqFields46.includes(totalStat.name);
					})
					 $.each(filteredStats46, function(key , order){
						
						console.log(key + ":" + order);
						sh_elite = order.value;
					});
					var filteredStats47 = totalStats.filter((totalStat) => {
						return reqFields47.includes(totalStat.name);
					})
					 $.each(filteredStats47, function(key , order){
						
						console.log(key + ":" + order);
						sh_fiveseven = order.value;
					});
					var filteredStats48 = totalStats.filter((totalStat) => {
						return reqFields48.includes(totalStat.name);
					})
					 $.each(filteredStats48, function(key , order){
						
						console.log(key + ":" + order);
						sh_awp = order.value;
					});
					var filteredStats49 = totalStats.filter((totalStat) => {
						return reqFields49.includes(totalStat.name);
					})
					 $.each(filteredStats49, function(key , order){
						
						console.log(key + ":" + order);
						sh_ak47 = order.value;
					});
					var filteredStats50 = totalStats.filter((totalStat) => {
						return reqFields50.includes(totalStat.name);
					})
					 $.each(filteredStats50, function(key , order){
						
						console.log(key + ":" + order);
						sh_aug = order.value;
					});
					var filteredStats51 = totalStats.filter((totalStat) => {
						return reqFields51.includes(totalStat.name);
					})
					 $.each(filteredStats51, function(key , order){
						
						console.log(key + ":" + order);
						sh_famas = order.value;
					});
					var filteredStats52 = totalStats.filter((totalStat) => {
						return reqFields52.includes(totalStat.name);
					})
					 $.each(filteredStats52, function(key , order){
						
						console.log(key + ":" + order);
						sh_g3sg1 = order.value;
					});
					var filteredStats53 = totalStats.filter((totalStat) => {
						return reqFields53.includes(totalStat.name);
					})
					 $.each(filteredStats53, function(key , order){
						
						console.log(key + ":" + order);
						sh_p90 = order.value;
					});
					var filteredStats54 = totalStats.filter((totalStat) => {
						return reqFields54.includes(totalStat.name);
					})
					 $.each(filteredStats54, function(key , order){
						
						console.log(key + ":" + order);
						sh_mac10 = order.value;
					});
					var filteredStats55 = totalStats.filter((totalStat) => {
						return reqFields55.includes(totalStat.name);
					})
					 $.each(filteredStats55, function(key , order){
						
						console.log(key + ":" + order);
						sh_ump45 = order.value;
					});
					var filteredStats56 = totalStats.filter((totalStat) => {
						return reqFields56.includes(totalStat.name);
					})
					 $.each(filteredStats56, function(key , order){
						
						console.log(key + ":" + order);
						sh_xm1014 = order.value;
					});
					var filteredStats57 = totalStats.filter((totalStat) => {
						return reqFields57.includes(totalStat.name);
					})
					 $.each(filteredStats57, function(key , order){
						
						console.log(key + ":" + order);
						sh_m249 = order.value;
					});
					var filteredStats58 = totalStats.filter((totalStat) => {
						return reqFields58.includes(totalStat.name);
					})
					 $.each(filteredStats58, function(key , order){
						
						console.log(key + ":" + order);
						sh_hkp2000 = order.value;
					});
					var filteredStats59 = totalStats.filter((totalStat) => {
						return reqFields59.includes(totalStat.name);
					})
					 $.each(filteredStats59, function(key , order){
						
						console.log(key + ":" + order);
						sh_p250 = order.value;
					});
					var filteredStats60 = totalStats.filter((totalStat) => {
						return reqFields60.includes(totalStat.name);
					})
					 $.each(filteredStats60, function(key , order){
						
						console.log(key + ":" + order);
						sh_sg556 = order.value;
					});
					var filteredStats61 = totalStats.filter((totalStat) => {
						return reqFields61.includes(totalStat.name);
					})
					 $.each(filteredStats61, function(key , order){
						
						console.log(key + ":" + order);
						sh_scar20 = order.value;
					});
					var filteredStats62 = totalStats.filter((totalStat) => {
						return reqFields62.includes(totalStat.name);
					})
					 $.each(filteredStats62, function(key , order){
						
						console.log(key + ":" + order);
						sh_ssg08 = order.value;
					});
					var filteredStats63 = totalStats.filter((totalStat) => {
						return reqFields63.includes(totalStat.name);
					})
					 $.each(filteredStats63, function(key , order){
						
						console.log(key + ":" + order);
						sh_mp7 = order.value;
					});
					var filteredStats64 = totalStats.filter((totalStat) => {
						return reqFields64.includes(totalStat.name);
					})
					 $.each(filteredStats64, function(key , order){
						
						console.log(key + ":" + order);
						sh_mp9 = order.value;
					});
					var filteredStats65 = totalStats.filter((totalStat) => {
						return reqFields65.includes(totalStat.name);
					})
					 $.each(filteredStats65, function(key , order){
						
						console.log(key + ":" + order);
						sh_nova = order.value;
					});
					var filteredStats66 = totalStats.filter((totalStat) => {
						return reqFields66.includes(totalStat.name);
					})
					 $.each(filteredStats66, function(key , order){
						
						console.log(key + ":" + order);
						sh_nagev = order.value;
					});
					var filteredStats67 = totalStats.filter((totalStat) => {
						return reqFields67.includes(totalStat.name);
					})
					 $.each(filteredStats67, function(key , order){
						
						console.log(key + ":" + order);
						sh_sawedoff = order.value;
					});
					var filteredStats68 = totalStats.filter((totalStat) => {
						return reqFields68.includes(totalStat.name);
					})
					 $.each(filteredStats68, function(key , order){
						
						console.log(key + ":" + order);
						sh_bizon = order.value;
					});
					var filteredStats69 = totalStats.filter((totalStat) => {
						return reqFields69.includes(totalStat.name);
					})
					 $.each(filteredStats69, function(key , order){
						
						console.log(key + ":" + order);
						sh_tec9 = order.value;
					});
					var filteredStats70 = totalStats.filter((totalStat) => {
						return reqFields70.includes(totalStat.name);
					})
					 $.each(filteredStats70, function(key , order){
						
						console.log(key + ":" + order);
						sh_mag7 = order.value;
					});
					var filteredStats71 = totalStats.filter((totalStat) => {
						return reqFields71.includes(totalStat.name);
					})
					 $.each(filteredStats71, function(key , order){
						
						console.log(key + ":" + order);
						sh_m4a1 = order.value;
					});
					var filteredStats72 = totalStats.filter((totalStat) => {
						return reqFields72.includes(totalStat.name);
					})
					 $.each(filteredStats72, function(key , order){
						
						console.log(key + ":" + order);
						sh_galilar = order.value;
					});
					var filteredStats73 = totalStats.filter((totalStat) => {
						return reqFields73.includes(totalStat.name);
					})
					 $.each(filteredStats73, function(key , order){
						
						console.log(key + ":" + order);
						sh_taser = order.value;
					});
					
					var filteredStats74 = totalStats.filter((totalStat) => {
						return reqFields74.includes(totalStat.name);
					})
					 $.each(filteredStats74, function(key , order){
						
						console.log(key + ":" + order);
						h_deagle = order.value;
					});
					var filteredStats75 = totalStats.filter((totalStat) => {
						return reqFields75.includes(totalStat.name);
					})
					 $.each(filteredStats75, function(key , order){
						
						console.log(key + ":" + order);
						h_glock = order.value;
					});
					var filteredStats76 = totalStats.filter((totalStat) => {
						return reqFields76.includes(totalStat.name);
					})
					 $.each(filteredStats76, function(key , order){
						
						console.log(key + ":" + order);
						h_elite = order.value;
					});
					var filteredStats77 = totalStats.filter((totalStat) => {
						return reqFields77.includes(totalStat.name);
					})
					 $.each(filteredStats77, function(key , order){
						
						console.log(key + ":" + order);
						h_fiveseven = order.value;
					});
					var filteredStats78 = totalStats.filter((totalStat) => {
						return reqFields78.includes(totalStat.name);
					})
					 $.each(filteredStats78, function(key , order){
						
						console.log(key + ":" + order);
						h_awp = order.value;
					});
					var filteredStats79 = totalStats.filter((totalStat) => {
						return reqFields79.includes(totalStat.name);
					})
					 $.each(filteredStats79, function(key , order){
						
						console.log(key + ":" + order);
						h_ak47 = order.value;
					});
					var filteredStats80 = totalStats.filter((totalStat) => {
						return reqFields80.includes(totalStat.name);
					})
					 $.each(filteredStats80, function(key , order){
						
						console.log(key + ":" + order);
						h_aug = order.value;
					});
					var filteredStats81 = totalStats.filter((totalStat) => {
						return reqFields81.includes(totalStat.name);
					})
					 $.each(filteredStats81, function(key , order){
						
						console.log(key + ":" + order);
						h_famas = order.value;
					});
					var filteredStats82 = totalStats.filter((totalStat) => {
						return reqFields82.includes(totalStat.name);
					})
					 $.each(filteredStats82, function(key , order){
						
						console.log(key + ":" + order);
						h_g3sg1 = order.value;
					});
					var filteredStats83 = totalStats.filter((totalStat) => {
						return reqFields83.includes(totalStat.name);
					})
					 $.each(filteredStats83, function(key , order){
						
						console.log(key + ":" + order);
						h_p90 = order.value;
					});
					var filteredStats84 = totalStats.filter((totalStat) => {
						return reqFields84.includes(totalStat.name);
					})
					 $.each(filteredStats84, function(key , order){
						
						console.log(key + ":" + order);
						h_mac10 = order.value;
					});
					var filteredStats85 = totalStats.filter((totalStat) => {
						return reqFields85.includes(totalStat.name);
					})
					 $.each(filteredStats85, function(key , order){
						
						console.log(key + ":" + order);
						h_ump45 = order.value;
					});
					var filteredStats86 = totalStats.filter((totalStat) => {
						return reqFields86.includes(totalStat.name);
					})
					 $.each(filteredStats86, function(key , order){
						
						console.log(key + ":" + order);
						h_xm1014 = order.value;
					});
					var filteredStats87 = totalStats.filter((totalStat) => {
						return reqFields87.includes(totalStat.name);
					})
					 $.each(filteredStats87, function(key , order){
						
						console.log(key + ":" + order);
						h_m249 = order.value;
					});
					var filteredStats88 = totalStats.filter((totalStat) => {
						return reqFields88.includes(totalStat.name);
					})
					 $.each(filteredStats88, function(key , order){
						
						console.log(key + ":" + order);
						h_hkp2000 = order.value;
					});
					var filteredStats89 = totalStats.filter((totalStat) => {
						return reqFields89.includes(totalStat.name);
					})
					 $.each(filteredStats89, function(key , order){
						
						console.log(key + ":" + order);
						h_p250 = order.value;
					});
					var filteredStats90 = totalStats.filter((totalStat) => {
						return reqFields90.includes(totalStat.name);
					})
					 $.each(filteredStats90, function(key , order){
						
						console.log(key + ":" + order);
						h_sg556 = order.value;
					});
					var filteredStats91 = totalStats.filter((totalStat) => {
						return reqFields91.includes(totalStat.name);
					})
					 $.each(filteredStats91, function(key , order){
						
						console.log(key + ":" + order);
						h_scar20 = order.value;
					});
					var filteredStats92 = totalStats.filter((totalStat) => {
						return reqFields92.includes(totalStat.name);
					})
					 $.each(filteredStats92, function(key , order){
						
						console.log(key + ":" + order);
						h_ssg08 = order.value;
					});
					var filteredStats93 = totalStats.filter((totalStat) => {
						return reqFields93.includes(totalStat.name);
					})
					 $.each(filteredStats93, function(key , order){
						
						console.log(key + ":" + order);
						h_mp7 = order.value;
					});
					var filteredStats94 = totalStats.filter((totalStat) => {
						return reqFields94.includes(totalStat.name);
					})
					 $.each(filteredStats94, function(key , order){
						
						console.log(key + ":" + order);
						h_mp9 = order.value;
					});
					var filteredStats95 = totalStats.filter((totalStat) => {
						return reqFields95.includes(totalStat.name);
					})
					 $.each(filteredStats95, function(key , order){
						
						console.log(key + ":" + order);
						h_nova = order.value;
					});
					var filteredStats96 = totalStats.filter((totalStat) => {
						return reqFields96.includes(totalStat.name);
					})
					 $.each(filteredStats96, function(key , order){
						
						console.log(key + ":" + order);
						h_nagev = order.value;
					});
					var filteredStats97 = totalStats.filter((totalStat) => {
						return reqFields97.includes(totalStat.name);
					})
					 $.each(filteredStats97, function(key , order){
						
						console.log(key + ":" + order);
						h_sawedoff = order.value;
					});
					var filteredStats98 = totalStats.filter((totalStat) => {
						return reqFields98.includes(totalStat.name);
					})
					 $.each(filteredStats98, function(key , order){
						
						console.log(key + ":" + order);
						h_bizon = order.value;
					});
					var filteredStats99 = totalStats.filter((totalStat) => {
						return reqFields99.includes(totalStat.name);
					})
					 $.each(filteredStats99, function(key , order){
						
						console.log(key + ":" + order);
						h_tec9 = order.value;
					});
					var filteredStats100 = totalStats.filter((totalStat) => {
						return reqFields100.includes(totalStat.name);
					})
					 $.each(filteredStats100, function(key , order){
						
						console.log(key + ":" + order);
						h_mag10 = order.value;
					});
					var filteredStats101 = totalStats.filter((totalStat) => {
						return reqFields101.includes(totalStat.name);
					})
					 $.each(filteredStats101, function(key , order){
						
						console.log(key + ":" + order);
						h_m4a1 = order.value;
					});
					var filteredStats102 = totalStats.filter((totalStat) => {
						return reqFields102.includes(totalStat.name);
					})
					 $.each(filteredStats102, function(key , order){
						
						console.log(key + ":" + order);
						h_galilar = order.value;
					});
					var filteredStats103 = totalStats.filter((totalStat) => {
						return reqFields103.includes(totalStat.name);
					})
					 $.each(filteredStats103, function(key , order){
						
						console.log(key + ":" + order);
						h_taser = order.value;
					});
					knife = check( knife );
					 k_taser = check( k_taser );
					 sh_taser = check( sh_taser );
					 k_knife = check( k_knife );
					 blinded = check( blinded );
					 decoy = check( decoy );
					 grenade = check( grenade );
					 molotov = check( molotov );
					 k_glock = check( k_glock );
					 sh_glock = check( sh_glock );
					 h_glock = check( h_glock );
					 k_deagle = check( k_deagle );
					 sh_deagle = check( sh_deagle );
					 h_deagle = check( h_deagle );
					 k_fiveseven = check( k_fiveseven );
					 sh_fiveseven = check( sh_fiveseven );
					 h_fiveseven = check( h_fiveseven );
					 k_elite = check( k_elite );
					 sh_elite = check( sh_elite );
					 h_elite = check( h_elite );
					 k_hkp2000 = check( k_hkp2000 );
					 sh_hkp2000 = check( sh_hkp2000 );
					 h_hkp2000 = check( h_hkp2000 );
					 k_p250 = check( k_p250 );
					 sh_p250 = check( sh_p250 );
					 h_p250 = check( h_p250 );
					 k_tec9 = check( k_tec9 );
					 sh_tec9 = check( sh_tec9 );
					 h_tec9 = check( h_tec9 );
					 k_xm1014 = check( k_xm1014 );
					 sh_xm1014 = check( sh_xm1014 );
					 h_xm1014 = check( h_xm1014 );
					 k_nova = check( k_nova );
					 sh_nova = check( sh_nova );
					 h_nova = check( h_nova );
					 k_sawedoff = check( k_sawedoff );
					 sh_sawedoff = check( sh_sawedoff );
					 h_sawedoff = check( h_sawedoff );
					 k_mag7 = check( k_mag7 );
					 sh_mag7 = check( sh_mag7 );
					 h_mag7 = check( h_mag7 );//alert("mag7"+h_mag7);
					 k_mac10 = check( k_mac10 );
					 sh_mac10 = check( sh_mac10 );
					 h_mac10 = check( h_mac10 );
					 k_ump45 = check( k_ump45 );
					 sh_ump45 = check( sh_ump45 );
					 h_ump45 = check( h_ump45 );
					 k_p90 = check( k_p90 );
					 sh_p90 = check( sh_p90 );
					 h_p90 = check( h_p90 );
					 k_mp7 = check( k_mp7 );
					 sh_mp7 = check( sh_mp7 );
					 h_mp7 = check( h_mp7 );
					 k_mp9 = check( k_mp9 );//alert("mp9"+k_mp9);
					 sh_mp9 = check( sh_mp9 );
					 h_mp9 = check( h_mp9 );
					 k_bizon = check( k_bizon );
					 sh_bizon = check( sh_bizon );
					 h_bizon = check( h_bizon );
					 k_awp = check( k_awp );
					 sh_awp = check( sh_awp );
					 h_awp = check( h_awp );
					 k_ak47 = check( k_ak47 );
					 sh_ak47 = check( sh_ak47 );
					 h_ak47 = check( h_ak47 );
					 k_m4a1 = check( k_m4a1 );
					 sh_m4a1 = check( sh_m4a1 );
					 h_m4a1 = check( h_m4a1 );
					 k_aug = check( k_aug );
					 h_aug = check( h_aug );
					 h_aug = check( h_aug );
					 k_famas = check( k_famas );
					 sh_famas = check( sh_famas );
					 h_famas = check( h_famas );
					 k_galilar = check( k_galilar );
					 sh_galilar = check( sh_galilar );
					 h_galilar = check( h_galilar );
					 k_g3sg1 = check( k_g3sg1 );//alert("g3sg1"+k_g3sg1);
					 sh_g3sg1 = check( sh_g3sg1 );
					 h_g3sg1 = check( h_g3sg1 );
					 k_sg556 = check( k_sg556 );
					 sh_sg556 = check( sh_sg556 );
					 h_sg556 = check( h_sg556 );
					 k_scar20 = check( k_scar20 );
					 sh_scar20 = check( sh_scar20 );
					 h_scar20 = check( h_scar20 );
					 k_ssg08 = check( k_ssg08 );
					 sh_ssg08 = check( sh_ssg08 );
					 h_ssg08 = check( h_ssg08 );
					 k_m249 = check( k_m249 );
					 sh_m249 = check( sh_m249 );
					 h_m249 = check( h_m249 );
					 k_nagev = check( k_nagev );
					 sh_nagev = check( sh_nagev );
					 h_nagev = check( h_nagev );
					 k_grenade = check( k_grenade );
					 /*k_pistols = check( k_pistols );
					 sh_pistols = check( sh_pistols );
					 h_pistols = check( h_pistols );
					 k_shotgun = check( k_shotgun );
					 sh_shotgun = check( sh_shotgun );
					 h_shotgun = check( h_shotgun );
					 k_submachine = check( k_submachine );
					 sh_submachine = check( sh_submachine );
					 h_submachine = check( h_submachine );
					 k_rifles = check( k_rifles );
					 sh_rifles = check( sh_rifles );
					 h_rifles = check( h_rifles );
					 k_machine = check( k_machine );
					 sh_machine = check( sh_machine );
					 h_machine = check( h_machine );*/
					 
					k_knife = (knife +k_taser);
					k_grenade = (grenade + decoy + blinded + molotov);
					k_pistols = (k_deagle + k_fiveseven + k_glock + k_elite + k_hkp2000 + k_p250 + k_tec9);
					sh_pistols = (sh_deagle + sh_fiveseven + sh_glock + sh_elite + sh_hkp2000 + sh_p250 + sh_tec9);
					h_pistols = (h_deagle + h_fiveseven + h_glock + h_elite + h_hkp2000 + h_p250 + h_tec9);
					k_shotgun = (k_xm1014 + k_nova + k_sawedoff + k_mag7);
					sh_shotgun = (sh_xm1014 + sh_nova + sh_sawedoff + sh_mag7);
					h_shotgun = (h_xm1014 + h_nova + h_sawedoff + h_mag7);
					k_submachine = (k_mac10 + k_p90 + k_ump45 + k_p90 + k_mp7 + k_mp9 + k_bizon);
					sh_submachine = (sh_mac10 + sh_p90 + sh_ump45 + sh_p90 + sh_mp7 + sh_mp9 + sh_bizon);
					h_submachine = (h_mac10 + h_p90 + h_ump45 + h_p90 + h_mp7 + h_mp9 + h_bizon); 
					k_rifles = (k_ak47 + k_aug + k_awp + k_famas + k_g3sg1 + k_m4a1 + k_galilar + k_sg556 + k_scar20 + k_ssg08);
					sh_rifles = (sh_ak47 + sh_aug + sh_awp + sh_famas + sh_g3sg1 + sh_m4a1 + sh_galilar + sh_sg556 + sh_scar20 + sh_ssg08);
					h_rifles = (h_ak47 + h_aug + h_awp + h_famas + h_g3sg1 + h_m4a1 + h_galilar + h_sg556 + h_scar20 + h_ssg08);
					k_machine = (k_m249 + k_nagev); 
					sh_machine = (sh_m249 + sh_nagev);
					h_machine = (h_m249 + h_nagev);
				},	
				complete: function(datas){
					guntable();
				}
			});	
	
	
}
	

});


