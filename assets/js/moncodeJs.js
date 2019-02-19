// JavaScript Document
$("document").ready(function () {

	$(".entrermodal").val('');
	//$("body").css({backgroundColor: "red"});
	//$("body").append('hello');
	$('#maboitededialogue').modal('show');
	// $(".entrermodal").val('');

	var prenom = $(".entrermodal").val();


	$("#maboitededialogue .btn-secondary").click(function () {
		if (prenom !== null) {
			var prenom = $(".entrermodal").val();
			console.log(prenom);
			//var bienvenue = "Bonjour " + prenom;
			$("#specialbonjour").text("Bonjour " + prenom);
			$("#specialbonjour").css({ backgroundColor:"yellow", fontSize:"22px",});
			//$("body").prepend(bienvenue);
		} else {
		 $("#specialbonjour").val(" ");/* ne se vide pas au click du bouton close*/
		}

											});
	
	
});
