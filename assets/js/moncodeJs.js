/* Jquery*/
$("document").ready(function () {

	$("#logo").animate({
		left: '135px',
		width: '200px',
		height: '67px',
		opacity: 1
	}, 5000);
	$(".jumbotron").fadeIn(5000);
	$('.seconde').fadeIn(2000);
	$(".entrermodal").val('');

	$('#maboitededialogue').modal('show');


	var prenom = $(".entrermodal").val();


	$("#maboitededialogue .btn-secondary").click(function () {
		if (prenom !== null) {
			var prenom = " Bonjour " + $(".entrermodal").val();
			console.log(prenom);
			//var bienvenue = "Bonjour " + prenom;
			$("#specialbonjour").text(prenom);
			$("#specialbonjour").css({
				backgroundColor: "yellow",
				fontSize: "22px",
			});
			//$("body").prepend(bienvenue);

		} else {

			var vide = $("#specialbonjour").val(" ");
			$("#specialbonjour").text(vide);
			console.log(vide); /* ne se vide pas au click bouton close*/
		}

	});



});

/*horloge*/
/* "Nous sommes le { date et heure }, le restaurant est donc { ouvert / fermé }" en fonction de l'heure et la date de consultation du site.*/

/*new Date(year, month, day, hours, minutes, seconds, milliseconds)*/
/*var madate = new Date();
$("#div_horloge").text("Nous sommes le " + madate.toDateString()); // convertit la date sous un format normal sans UTC*/




/*javascript*/
/*
<div id="div_horloge"> </div>

window.onload=function() {
  horloge('div_horloge');
};

function horloge(el) {
  if(typeof el=="string") { el = document.getElementById(el); }
  function actualiser() {
    var date = new Date();
    var str = date.getHours();
    str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
    str += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
    el.innerHTML = str;
  }
  actualiser();
  setInterval(actualiser,1000);
}
*/
/* javascript Date*/
(function () {

	var madate = new Date(); // creer la date 

	var semaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

	console.log(madate.getDay()); // affiche 3 donc jeudi aujourd'hui

	var jour = semaine[madate.getDay() - 1]; // enleve -1 car lundi c 0	

	var datec = madate.getDate();

	var ans = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

	var mois = ans[madate.getMonth()]; // renvois l'index du mois 

	var annee = madate.getFullYear(); // renvois 2019

	var heure = madate.getHours(); // renvois heure 13h ex

	var minute = madate.getMinutes(); // renvois nombre de minutes 45 ex

	document.getElementById("divhorloge").innerHTML = " Nous sommes le " + jour + " " + datec + " " + mois + " " + annee + ", " + heure + "h" + minute;

	/********* compare Date ************/
	console.log(jour);

	if (jour !== 'dimanche' && jour !== 'lundi' && 12 < heure && heure < 22) {
		document.getElementById("ouvertferme").innerHTML = "Le restaurant est donc OUVERT ";
		document.getElementById("ouvertferme").style.backgroundColor = "white";

		document.getElementById("ouvertferme").style.padding = "10px";
	} else {
		document.getElementById("ouvertferme").innerHTML = "Le restaurant est donc FERME ";
		document.getElementById("ouvertferme").style.backgroundColor = "white";

		document.getElementById("ouvertferme").style.padding = "10px";
	}


})();
