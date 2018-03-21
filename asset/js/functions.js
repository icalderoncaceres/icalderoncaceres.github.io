var lang="en";
//import lang_obj from '../lang/lang.js';
var lang_obj={
	home:{es:"Inicio",en:"Home"},
	styles:{es:"Estilos",en:"Styles"},
	cv:{es:"Curriculum",en:"CV"},
	projects:{es:"Proyectos",en:"Projects"},
	codes:{es:"Códigos",en:"Codes"},
	news:{es:"Noticias",en:"News"},
	firstLanguage:{es:"Español",en:"English"},
	secondLanguage:{es:"Ingles",en:"Spanish"},
	welcome:{es:" les da la bienvenida",en:" gives you welcome"},
	thanks:{
		es:"Muchas gracias por visitar esté sitio, el cual tiene la finalidad de compartir noticias, códigos e información en general relacionado con el desarrollo de software",
		en:"Thank you very much for visiting this site, which has the purpose of sharing news, codes and information in general related to software development",
	},
	socialNetworks:{es:'Por favor visita mis redes sociales',en:'Please visit my social networks'},
	contactus:{es:'Contactanos',en:'Contact us'},
	name:{es:'Nombre',en:'Name'},
	nameValidation:{es:'Este nombre de no es válido',en:'This name is not valid'},
	emailValidation:{es:'Este email no es válido',en:'This email is not valid'},
	email:{es:'Correo electónico',en:'Email'},
	subject:{es:'Asunto',en:'Subject'},
	select:{es:'Seleccione',en:'Select'},
	question:{es:'Pregunta',en:'Question'},
	suggestion:{es:'Sugerencia',en:'Suggestion'},
	otherSubject:{es:'Otro asunto',en:'Other subject'},
	message:{es:'Mensaje',en:'Message'},
	send:{es:'Enviar',en:'Send'},
	cancel:{es:'Cancelar',en:'Cancel'},
	repositories:{es:'Repositorios',en:'repositories'},
	all:{es:'Todos',en:'All'}
}

$(document).ready(function(){
	setLanguage(lang);

	$(document).on("click","a#changeLanguage",function(e){
		e.preventDefault();
		lang=lang=="en"?"es":"en";
		setLanguage(lang);
	});
});

function setLanguage(lang){
	$("translate").each(function(index){
		let text=$(this).data("lng");
		$(this).html(lang_obj[text][lang]);
	});
}