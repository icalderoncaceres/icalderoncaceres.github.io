$(document).ready(function(){
	$(".modal").addClass('is-active');
	$("#btn-enter").click(function(e){
		if($("#input-password").val() == '1'){
			$(".modal").removeClass('is-active');
			loadContent();
		}else{
			alert("Lo siento, por favor comuniquese conmigo al +573114694891");
		}
	});
});

function loadContent(){
	//Cargamos el contenido dinamicamente

}