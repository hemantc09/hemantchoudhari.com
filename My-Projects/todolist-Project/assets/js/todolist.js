/*Title: Todo List Project
Technology: HTML, CSS, JS, JQUERY
programmer: Hemant Choudhari
email: hemantc09@gmail.com
file: todolist.js*/

//check of the specific todos by clicking
 //event on click - all ul has the onclick also when li is clicked 
$("ul").on("click","li",function(){ 
	//toggle the class
	$(this).toggleClass("completed"); 
});

//click X to delete todo
//event on click - all ul has the onclick also when span is clicked 
$("ul").on("click","span",function(event){
	//fadeout for 500 ms and then remove
	$(this).parent().fadeOut(500,function(){ 
		//remvove the li with span
		$(this).remove(); 
	});  
	//helps to stop event bubbling
	event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event){
	//if enter key i.e. character code 13
	if(event.which === 13){ 
		//get the input todo from user
		var todoText  = $(this).val();
		//clear the input
		$(this).val(""); 
		//create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + todoText + "</li>");
	}
})

$("#form-toggle").click(500, function(){
	$("input[type='text']").slideToggle();
});

