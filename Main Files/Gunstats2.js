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
	 
	$("#favv").hide();
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
					$("#favv").show();
					fullChart();
					favgun();
				}
				
			});	
 }	
else{
	
} 


function favgun(){
	var xyz = Math.max(k_ak47,k_awp, k_m4a1);
	if(xyz === k_ak47){
		document.getElementById("favgunname").innerHTML= "AK 47";
		document.getElementById("favgunimg").src= "ak.png";
		$("#favgunkill").append("  " +k_ak47);
	}
	else if(xyz === k_awp){
		document.getElementById("favgunname").innerHTML= "AWP";
		document.getElementById("favgunimg").src= "awp.png";
		$("#favgunkill").append(" " +k_awp);
	}
	else if(xyz === k_m4a1){
		document.getElementById("favgunname").innerHTML= "M4A1/M4A4";
		document.getElementById("favgunimg").src= "m4a4.png";
		$("#favgunkill").append(" " +k_m4a1);
	}
	
	
	var total_hits= h_rifles + h_submachine + h_shotgun + h_pistols;
	var total_shots= sh_rifles + sh_submachine + sh_shotgun + sh_pistols;
	var accuracy = (total_hits/total_shots)*100;
	$("#accuracy").append( (accuracy).toFixed(2) + "%");
	
}


 function fullChart(){
    CanvasJS.addColorSet("shades",
                [
                "#00FF00",
                "#FF0000"                
                ]);
	setTimeout(function() {
	
	var chart4 = new CanvasJS.Chart("gunKills",
    {
      interactivityEnabled: true,
      animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Kills per Category",
        fontColor: "white"
      },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      toolTip:{   
        content: "{legendText}: {y}"      
      },
      data: [
      {
       startAngle: -90, 
       type: "pie",
       showInLegend: true,
        dataPoints: [      
        {  y: k_knife,  legendText: "Knife"},        
        {  y: k_grenade,  legendText: "Grenade"},
        {  y: k_pistols,  legendText: "Pistol"},        
        {  y: k_shotgun,  legendText: "Shotgun"},
        {  y: k_submachine,  legendText: "SubMachine Gun"},        
        {  y: k_rifles,  legendText: "Rifle"},
        {  y: k_machine,  legendText: "Machine Gun"}
        ]
      }
      ]
    });
	
	var chart3 = new CanvasJS.Chart("knifeKills",
    {
      interactivityEnabled: true,
      animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Kills/Taser kills",
        fontColor: "white"
      },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      toolTip:{   
        content: "{legendText}: {y}"      
      },
      data: [
      {
       startAngle: -90, 
       type: "pie",
       showInLegend: true,
        dataPoints: [      
        {  y: k_knife,  legendText: "Knife"},        
        {  y: k_taser,  legendText: "Taser"}
        ]
      }
      ]
    });
	
	var chart5 = new CanvasJS.Chart("grenadeKills",
    {
      interactivityEnabled: true,
      animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Gear",
        fontColor: "white"
      },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      toolTip:{   
        content: "{legendText}: {y}"      
      },
      data: [
      {
       startAngle: -90, 
       type: "pie",
       showInLegend: true,
        dataPoints: [      
        {  y: grenade,  legendText: "Grenade"},        
        {  y: molotov,  legendText: "Molotov"},
        {  y: decoy,  legendText: "Decoy"},
        {  y: blinded,  legendText: "Binded Enemy"}
        ]
      }
      ]
    });

    var chart6 = new CanvasJS.Chart("pistolKills",
    {
      interactivityEnabled: true,
      animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Pistol",
        fontColor: "white"
      },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      toolTip:{   
        content: "{legendText}: {y}"      
      },
      data: [
      {
       startAngle: -90, 
       type: "pie",
       showInLegend: true,
        dataPoints: [      
        {  y: k_deagle,  legendText: "Deagle"},        
        {  y: k_fiveseven,  legendText: "FiveSeven"},
        {  y: k_glock,  legendText: "Glock"},
        {  y: k_elite,  legendText: "Elite"},
        {  y: k_hkp2000,  legendText: "USP"},
        {  y: k_tec9,  legendText: "Tec9"},
        {  y: k_p250,  legendText: "p250"}
        ]
      }
      ]
    });
	
	var chart7 = new CanvasJS.Chart("shotgunKills",
    {
      interactivityEnabled: true,
      animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Shotguns",
        fontColor: "white"
      },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      toolTip:{   
        content: "{legendText}: {y}"      
      },
      data: [
      {
       startAngle: -90, 
       type: "pie",
       showInLegend: true,
        dataPoints: [      
        {  y: k_xm1014,  legendText: "XM1014"},        
        {  y: k_nova,  legendText: "Nova"},
        {  y: k_sawedoff,  legendText: "Sawedoff"},
        {  y: k_mag7,  legendText: "Mag7"}
        ]
      }
      ]
    });
	
	var chart8 = new CanvasJS.Chart("subKills",
    {
      interactivityEnabled: true,
      animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Sub-Machine Gun",
        fontColor: "white"
      },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      toolTip:{   
        content: "{legendText}: {y}"      
      },
      data: [
      {
       startAngle: -90, 
       type: "pie",
       showInLegend: true,
        dataPoints: [      
        {  y: k_mac10,  legendText: "Deagle"},        
        {  y: k_ump45,  legendText: "FiveSeven"},
        {  y: k_p90,  legendText: "Glock"},
        {  y: k_mp7,  legendText: "Elite"},
        {  y: k_mp9,  legendText: "USP"},
        {  y: k_bizon,  legendText: "Tec9"}
        ]
      }
      ]
    });

    var chart9 = new CanvasJS.Chart("rifleKills",
    {
      interactivityEnabled: true,
      animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Rifles",
        fontColor: "white"
      },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      toolTip:{   
        content: "{legendText}: {y}"      
      },
      data: [
      {
       startAngle: -90, 
       type: "pie",
       showInLegend: true,
        dataPoints: [      
        {  y: k_ak47,  legendText: "Ak47"},        
        {  y: k_aug,  legendText: "Aug"},
        {  y: k_awp,  legendText: "AWP"},        
        {  y: k_famas,  legendText: "Famas"},
        {  y: k_g3sg1,  legendText: "G3G1"},
        {  y: k_sg556,  legendText: "SG556"},        
        {  y: k_scar20,  legendText: "SCAR20"},
        {  y: k_ssg08,  legendText: "SSG08"},        
        {  y: k_m4a1,  legendText: "M4A1"},
        {  y: k_galilar,  legendText: "Galilar"}
        ]
      }
      ]
    });
	
	var chart10 = new CanvasJS.Chart("machineKills",
    {
      interactivityEnabled: true,
      animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Machine Gun",
        fontColor: "white"
      },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      toolTip:{   
        content: "{legendText}: {y}"      
      },
      data: [
      {
       startAngle: -90, 
       type: "pie",
       showInLegend: true,
        dataPoints: [      
        {  y: k_m249,  legendText: "M249"},        
        {  y: k_nagev,  legendText: "Nagev"}
        ]
      }
      ]
    });
	
	var chart2 = new CanvasJS.Chart("SHKratioTaser",
    {  
	  animationEnabled: true,
      colorSet: "shades",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Shot-Kill Taser",
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
       {  y: k_taser, legendText:"Kills" },
       {  y: sh_taser, legendText:"Shots" }
       ]
     }
     ]
    });
	
	var chart21 = new CanvasJS.Chart("SHKratioPistol",
    {  
	  animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Shot-Hit-Kill Pistols",
        fontColor: "white"
      },
	  axisX:{
          labelFontColor: "white"
      },
      axisY:{
		logarithmic: true,
        gridThickness: 1,
        gridDashType: "shortDot",
        gridColor: "white",
        labelFontColor: "white"
		//maximum: Math.max(sh_glock,sh_deagle,sh_elite,sh_fiveseven,sh_hkp2000,sh_p250,sh_tec9)
      },
	  dataPointMaxWidth: 100,
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      data: [{        
        type: "column",
        dataPoints: [
        {  y: sh_glock, label: "shots"},
        {  y: sh_deagle, label: "shots"},
        {  y: sh_elite, label: "shots"},
        {  y: sh_fiveseven, label: "shots"},
        {  y: sh_hkp2000, label: "shots"},
        {  y: sh_p250, label: "shots"},
        {  y: sh_tec9, label: "shots"}
        ]
      },
      {        
        type: "column",
        dataPoints: [
        {  y: h_glock, label: "hits"},
        {  y: h_deagle, label: "hits"},
        {  y: h_elite, label: "hits"},
        {  y: h_fiveseven, label: "hits"},
        {  y: h_hkp2000, label: "hits"},
        {  y: h_p250, label: "hits"},
        {  y: h_tec9, label: "hits"}
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {  y: k_glock, label: "kills"},
        {  y: k_deagle, label: "kills"},
        {  y: k_elite, label: "kills"},
        {  y: k_fiveseven, label: "kills"},
        {  y: k_hkp2000, label: "kills"},
        {  y: k_p250, label: "kills"},
        {  y: k_tec9, label: "kills"}
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {   label: "Glock"},
        {   label: "Deagle"},
        {   label: "Elite"},
        {   label: "FiveSeven"},
        {   label: "USP"},
        {   label: "P250"},
        {   label: "Tec9"}
        ]
      }
      ]
    });
	
	var chart22 = new CanvasJS.Chart("SHKratioShot",
    {  
	  zoomEnabled: true,
	  animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Shot-Hit-Kill Shotguns",
        fontColor: "white"
      },
	  axisX:{
          labelFontColor: "white"
      },
      axisY:{
		logarithmic: true,
        gridThickness: 1,
        gridDashType: "shortDot",
        gridColor: "white",
        labelFontColor: "white"
		//maximum: Math.max(sh_xm1014,sh_nova,sh_sawedoff,sh_mag7)
      },
	  dataPointMaxWidth: 100,
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      data: [{        
        type: "column",
        dataPoints: [
        {  y: sh_xm1014, label: "shots"},
        {  y: sh_nova, label: "shots"},
        {  y: sh_sawedoff, label: "shots"},
        {  y: sh_mag7, label: "shots"}
        ]
      },
      {        
        type: "column",
        dataPoints: [
        {  y: h_xm1014, label: "hits"},
        {  y: h_nova, label: "hits"},
        {  y: h_sawedoff, label: "hits"},
        {  y: h_mag7, label: "hits"}
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {  y: k_xm1014, label: "kills"},
        {  y: k_nova, label: "kills"},
        {  y: k_sawedoff, label: "kills"},
        {  y: k_mag7, label: "kills"}
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {  label: "XM1014"},
        {  label: "Nova"},
        {  label: "Sawedoff"},
        {  label: "Mag7"}
        ]
      }
      ]
    });
	
	var chart23 = new CanvasJS.Chart("SHKratioSub",
    {  
	  zoomEnabled: true,
	  animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Shot-Hit-Kill SubMachine Guns",
        fontColor: "white"
      },
	  axisX:{
          labelFontColor: "white"
      },
      axisY:{
		logarithmic: true,
        gridThickness: 1,
        gridDashType: "shortDot",
        gridColor: "white",
        labelFontColor: "white"
		//maximum: Math.max(sh_mac10,sh_ump45,sh_p90,sh_mp7,sh_mp9,sh_bizon)
      },
	  dataPointMaxWidth: 100,
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      data: [{        
        type: "column",
        dataPoints: [
        {  y: sh_mac10, label: "shots"},
        {  y: sh_ump45, label: "shots"},
        {  y: sh_p90, label: "shots"},
        {  y: sh_mp7, label: "shots"},
        {  y: sh_mp9, label: "shots"},
        {  y: sh_bizon, label: "shots"},
        ]
      },
      {        
        type: "column",
        dataPoints: [
        {  y: h_mac10, label: "hits"},
        {  y: h_ump45, label: "hits"},
        {  y: h_p90, label: "hits"},
        {  y: h_mp7, label: "hits"},
        {  y: h_mp9, label: "hits"},
        {  y: h_bizon, label: "hits"},
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {  y: k_mac10, label: "kills"},
        {  y: k_ump45, label: "kills"},
        {  y: k_p90, label: "kills"},
        {  y: k_mp7, label: "kills"},
        {  y: k_mp9, label: "kills"},
        {  y: k_bizon, label: "kills"},
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {  label: "Mac10"},
        {  label: "Ump45"},
        {  label: "P90"},
        {  label: "MP7"},
        {  label: "MP9"},
        {  label: "Bizon"},
        ]
      }
      ]
    });
	
	var chart24 = new CanvasJS.Chart("SHKratioRifle",
    {  
	  zoomEnabled: true,
	  animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Shot-Hit-Kill Rifles",
        fontColor: "white"
      },
	  axisX:{
          labelFontColor: "white"
      },
      axisY:{
		logarithmic: true,
        gridThickness: 1,
        gridDashType: "shortDot",
        gridColor: "white",
        labelFontColor: "white"
		//maximum: Math.max(sh_awp,sh_aug,sh_ak47,sh_famas,sh_g3sg1,sh_sg556,sh_scar20,sh_ssg08,sh_m4a1,sh_galilar)
      },
	  dataPointMaxWidth: 100,
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      data: [{        
        type: "column",
        dataPoints: [
        {   y: sh_awp, label: "shots"},
        {   y: sh_ak47, label: "shots"},
        {   y: sh_aug, label: "shots"},
        {   y: sh_famas, label: "shots"},
        {   y: sh_g3sg1, label: "shots"},
        {   y: sh_sg556, label: "shots"},
        {   y: sh_scar20, label: "shots"},
        {   y: sh_ssg08, label: "shots"},
        {   y: sh_m4a1, label: "shots"},
        {   y: sh_galilar, label: "shots"}
        ]
      },
      {        
        type: "column",
        dataPoints: [
        {   y: h_awp, label: "hits"},
        {   y: h_ak47, label: "hits"},
        {   y: h_aug, label: "hits"},
        {   y: h_famas, label: "hits"},
        {   y: h_g3sg1, label: "hits"},
        {   y: h_sg556, label: "hits"},
        {   y: h_scar20, label: "hits"},
        {   y: h_ssg08, label: "hits"},
        {   y: h_m4a1, label: "hits"},
        {   y: h_galilar, label: "hits"}
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {   y: k_awp, label: "kills"},
        {   y: k_ak47, label: "kills"},
        {   y: k_aug, label: "kills"},
        {   y: k_famas, label: "kills"},
        {   y: k_g3sg1, label: "kills"},
        {   y: k_sg556, label: "kills"},
        {   y: k_scar20, label: "kills"},
        {   y: k_ssg08, label: "kills"},
        {   y: k_m4a1, label: "kills"},
        {   y: k_galilar, label: "kills"}
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {   label: "AWP"},
        {   label: "Ak47"},
        {   label: "Aug"},
        {   label: "Famas"},
        {   label: "G3SG1"},
        {   label: "SG556"},
        {   label: "SCAR20"},
        {   label: "SSG08"},
        {   label: "M4A1"},
        {   label: "Galilar"}
        ]
      }
      ]
    });
	
	var chart25 = new CanvasJS.Chart("SHKratioMachine",
    {  
	  zoomEnabled: true,
	  animationEnabled: true,
      colorSet: "guns",
      backgroundColor: "rgba(0,0,0,0.6)",
      title:{
        text: "Shot-Hit-Kill Machine Guns",
        fontColor: "white"
      },
	  axisX:{
          labelFontColor: "white"
      },
      axisY:{
		logarithmic: true,
        gridThickness: 1,
        gridDashType: "shortDot",
        gridColor: "white",
        labelFontColor: "white"
		//maximum: Math.max(sh_m249,sh_nagev)
      },
	  dataPointMaxWidth: 100,
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontColor: "white"
      },
      data: [{        
        type: "column",
        dataPoints: [
        {  y: sh_m249, label: "shots"},
        {  y: sh_nagev, label: "shots"}
        ]
      },
      {        
        type: "column",
        dataPoints: [
        {  y: h_m249, label: "hits"},
        {  y: h_nagev, label: "hits"}
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {  y: k_m249, label: "kills"},
        {  y: k_nagev, label: "kills"}
        ]
      },
	  {        
        type: "column",
        dataPoints: [
        {  label: "M249"},
        {  label: "Nagev"}
        ]
      }
      ]
    });
	
	chart4.render();
	chart5.render();
	chart6.render();
	chart7.render();
	chart8.render();
	chart9.render();
	chart10.render();
	chart2.render();
	chart3.render();
	chart21.render();
	chart22.render();
	chart23.render();
	chart24.render();
	chart25.render();
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
					GunStat(sid);
					$("#hidethisshit").hide();
					$("#favv").show();
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
					fullChart();
					favgun();
					
				}
			});	
	
	
}
	

});


