// création du cookie. à ajouter sur toutes les pages du site
// Récupère les paramètres de l'url 
function getParameter(theParameter) {
  var params = window.location.search.substr(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var p=params[i].split('=');
     if (p[0] == theParameter) {
      return decodeURIComponent(p[1]);
    }
  }
  return false;
}
url_src = getParameter('utm_source');
url_mdm = getParameter('utm_medium');
url_cpn = getParameter('utm_campaign');

	// test
	test = "\nGet url parameters in variables: ?utm_source="+url_src+"&utm_medium="+url_mdm+"&utm_campaign="+url_cpn;
	document.write(test);

var pepites = new Object();
var pate_cookie = Cookies.get('cookie_utms');

// si on a au moins un utm et le cookie n'existe pas
if((url_src!== false || url_mdm!==false || url_cpn!==false) && (pate_cookie == null || pate_cookie == "" )) {
	if(url_src!== false){ 
		pepites["source"] = url_src; 
	}
	if(url_mdm!==false){
		pepites["medium"] = url_mdm; 
	}
	if (url_cpn!==false) {
		pepites["campaign"] = url_cpn;
	}
	Cookies.set('cookie_utms', pepites, { expires: 120 } );
}

// sinon si on a au moins un utm et le cookie existe
else if((url_src!== false || url_mdm!==false || url_cpn!==false) && (pate_cookie != null || pate_cookie != "")) {
	pate_cookie_choco = JSON.parse(pate_cookie);


	if(pate_cookie_choco["source"] != undefined) {
		if(url_src!== false && pate_cookie_choco["source"].indexOf(url_src) != -1 ){
			pepites["source"] = pate_cookie_choco["source"]; 
		}
		else if(url_src!== false){
		pepites["source"] = pate_cookie_choco["source"]+"-"+url_src; 
		}
		else if ( url_src == false && pate_cookie_choco["source"] != undefined) { 
		pepites["source"] = pate_cookie_choco["source"]; 
		}
	}									 
	else if ( url_src!== false ) { 
			pepites["source"] = url_src; 
	}

	if(pate_cookie_choco["medium"] != undefined) {
		if(url_mdm!== false && pate_cookie_choco["medium"].indexOf(url_mdm) != -1 ){
			pepites["medium"] = pate_cookie_choco["medium"];
		}
		else if(url_mdm!== false ) { 
		pepites["medium"] = pate_cookie_choco["medium"]+"-"+url_mdm; 
		}
		else if(url_mdm == false){
		pepites["medium"] = pate_cookie_choco["medium"]; 
		}
	}
	else if(url_mdm!== false){
		pepites["medium"] = url_mdm; 
	}

	if(pate_cookie_choco["campaign"] != undefined) {
		if(url_cpn!== false && pate_cookie_choco["campaign"].indexOf(url_cpn) != -1 ){
			pepites["campaign"] = pate_cookie_choco["campaign"];
		}
		else if(url_cpn!== false) { 
		pepites["campaign"] = pate_cookie_choco["campaign"]+"-"+url_cpn; 
		}  
		else if(url_cpn == false){
			pepites["campaign"] = pate_cookie_choco["campaign"]; 
		} 
	}
	else if(url_cpn!== false){
		pepites["campaign"] = url_cpn; 
	}
	Cookies.set('cookie_utms', pepites, { expires: 120 } );
}

// récupération des paramètres du cookie sur sa page
var cookie = Cookies.get('cookie_utms');
if(cookie != undefined){
	cookie_choco = JSON.parse(cookie);
	cookie_src = cookie_choco["source"];
	cookie_mdm = cookie_choco["medium"];
	cookie_cpn = cookie_choco["campaign"];

	// il est maintenant possible d'utiliser les données de votre cookie comme bon vous semble :)
}
