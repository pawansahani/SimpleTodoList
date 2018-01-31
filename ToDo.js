$(document).ready(function(){
	$("ul").on("click","li",function(){
        $(this).toggleClass("gray");
       // $(this).hide();
	});
	$("ul").on("click","span",function(event){
		$(this).parent().fadeOut(1000,function(){
			$(this).remove();
		})
		event.stopPropagation();
	});
	$("input").keypress(function(event){
		if(event.which===13)
		{
			$("ul").append("<li><span>X</span> "+$("input").val()+"</li>");
			$("input").val("");
		}
	});

	});
