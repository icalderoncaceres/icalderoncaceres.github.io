var lang="en";
//import lang_obj from '../lang/lang.js';
var lang_obj={
	personal_data:{es:'Datos Personales',en:'Personal Data'},
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
	contactus:{es:'Contactame',en:'Contact me'},
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
	repository:{es:'Repositorio',en:'Repository'},
	repositories:{es:'Repositorios',en:'Repositories'},
	all:{es:'Todos',en:'All'},
	portfolio:{es:'Portafolio',en:'portfolio'},
	by:{es:'Por',en:'By'},
	reset_filters:{es:'Resetear los filtros',en:'Reset filters'},
	go_repo:{es:'Ir repo',en:'Go repo'},
	is_building:{es:'Este repositorio no tiene aún descripción, pronto sera colocado',en:'This repository does not have description yet, soon it will be put'},
	formValidation:{es:'Por favor ingrese todos los campos requeridos',en:'Please enter all required fields'},
	education:{es:'Educación',en:'Education'},
	january:{es:'Enero',en:'January'},
	february:{es:'Febrero',en:'February'},
	march:{es:'Marzo',en:'March'},
	april:{es:'Abril',en:'April'},
	may:{es:'Mayo',en:'May'},
	june:{es:'Junio',en:'June'},
	july:{es:'Julio',en:'July'},	
	august:{es:'Agosto',en:'August'},
	september:{es:'Septiembre',en:'September'},
	october:{es:'Octubre',en:'October'},
	november:{es:'Noviembre',en:'November'},
	december:{es:'Diciembre',en:'December'},
	actually:{es:'Actualmente',en:'Actually'},	
	tsu:{es:'Técnico Superior Universitario en Informática',en:'Senior University Technician in Computer Science'},
	profesor:{es:'Profesor en Informática',en:'Computer Science Teacher'},
	bussinessEng:{es:'Ingles de negocios',en:'Bussiness English'},
	years:{es:'Años',en:'Years'},
	year:{es:'Año',en:'Year'},
	workExperience:{es:'Experiencia Laboral',en:'Work Experience'},
	developer:{es:'Desarrollador',en:'Developer'},
	manager:{es:'Administrador de personal',en:'Personal Managament'},
	skills:{es:'Habilidades',en:'Skills'},
	skillsSpec:{es:'Habilidades Especificas',en:'Specific Skills'},
	skillsOther:{es:'Otras Habilidades',en:'Others Skills'},
	team:{es:'Equipo',en:'Team'},
	teamSkill:{
		es:'Buen compañero de equipo y altamente adaptable a los cambios. Trabajé en proyectos grandes donde era extremadamente importante el trabajo en equipo, para asignar tiempo y roles',
		en:'Good team player and highly adaptable to changes. Worked on large projects where was extremely important a good team playing, to allocate time and roles'		
	},
	projects:{es:'Proyectos',en:'Projects'},
	references:{es:'Referncias',en:'References'},
	interests:{es:'Actividades de Intereses',en:'Interests/Activities'},
	expectations:{es:'Expectativas',en:'Expectations'},
	webDesign:{es:'Diseño web',en:'Web design'},
	native:{es:'Nativo',en:'Native'},
	and:{es:'y',en:'and'},
	svn:{es:'Sistema de control de versiones',en:'Control Version System'},
	mobileDevelopment:{es:'Desarrollo móvil',en:'Mobile development'},
	databases:{es:'Bases de datos',en:'Data Base'}

}

$(document).ready(function(){
	setLanguage(lang);

	$(document).on("click","a#changeLanguage",function(e){
		e.preventDefault();
		lang=lang=="en"?"es":"en";
		setLanguage(lang);
	});

	$(".projects-title>a").click(function(e){
		e.preventDefault();
		$(".is-active").removeClass("is-active");
		$(this).addClass("is-active");
		let options=$("#projects-list>nav>a.panel-block");
		let keyMain=$(this).data("key");
		options.each(function(index,value){
			if($(this).data("keys").indexOf(keyMain)==-1){
				if(!$(this).hasClass("is-hidden")){
					$(this).addClass("is-hidden");
				}
			}else{
				if($(this).hasClass("is-hidden")){
					$(this).removeClass("is-hidden");
				}				
			}
		});
	});

	$("#btn-send").click(function(e){
		e.preventDefault();
		let vacio=false;
		$(".contact-field").each(function(index,value){
			if($(this).val()==""){
				if(!$(this).hasClass("is-danger"))
					$(this).addClass("is-danger");
				vacio=true;
			}else{
				if($(this).hasClass("is-danger"))
					$(this).removeClass("is-danger");
			}
		});
		if(vacio){
			if($("#formValidation").hasClass("is-hidden"))
				$("#formValidation").removeClass("is-hidden");
			return;
		}
		if(!$("#formValidation").hasClass("is-hidden"))
			$("#formValidation").addClass("is-hidden");
		alert("Enviamos");
	});
});

function setLanguage(lang){
	$("translate").each(function(index){
		let text=$(this).data("lng");
		$(this).html(lang_obj[text][lang]);
	});
}

function resetFilters(){
	$(".projects-title>a").first().click();
}

function seeRepo(event,repo){
	event.preventDefault();	
	$("#projects-list .panel-block,.is-active").removeClass('is-active');
	event.target.className="panel-block is-active";
	$("#description-repo").load("asset/readme/readme.html",()=>{
		$("div#readme .link-repository").attr("href",`https://github.com/icalderoncaceres/${repo}`);
		$("div#readme #span-repository").text(`https://github.com/icalderoncaceres/${repo}`);
		setLanguage(lang);
	});
}