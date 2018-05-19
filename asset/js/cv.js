$(document).ready(function(){
	$(document).scroll(function(event){
		$("#cv-menu li.is-active").removeClass("is-active");
		if($(document).scrollTop()<$("#education-section").position().top){
			$("#cv-menu li:nth-child(1)").addClass("is-active");
		}else if($(document).scrollTop()<$("#work-experience").position().top){
			$("#cv-menu li:nth-child(3)").addClass("is-active");
		}else if($(document).scrollTop()<$("#specific-skills").position().top){
			$("#cv-menu li:nth-child(5)").addClass("is-active");
		}else if($(document).scrollTop()<$("#others-skills").position().top){
			$("#cv-menu li:nth-child(7)").addClass("is-active");
		}else if($(document).scrollTop()<$("#projects").position().top){
			$("#cv-menu li:nth-child(9)").addClass("is-active");
		}else if($(document).scrollTop()<$("#interests").position().top){
			$("#cv-menu li:nth-child(11)").addClass("is-active");
		}else if($(document).scrollTop()<$("#expectations").position().top){
			$("#cv-menu li:nth-child(13)").addClass("is-active");
		}else{
			$("#cv-menu li:nth-child(15)").addClass("is-active");
		}
	});
});