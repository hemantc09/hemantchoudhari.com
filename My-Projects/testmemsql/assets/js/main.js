/*by hemantc09@gmail.com*/

//email validation function
function checkEmail(str){
	var re = /\S+@\S+\.\S+/;
    if(!re.test(str)){
		document.getElementById("BusinessEmail").style.border = "1px solid red";
		document.getElementById("emailError").innerHTML="<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> Please make sure this isn&#39t a personal email address";
		document.getElementById("emailError").style.fontSize = "14px";
		return false;
	}
		
		
}


//form  validation function
function validateForm() {
	event.preventDefault();
	var BusinessEmailVal = document.forms["customerForm"]["BusinessEmail"].value;
	var ddl = document.getElementById("selectSize");
 	var selectedValue = ddl.options[ddl.selectedIndex].value;
	var radios = document.getElementsByName('solution');
	var checked = false;
	//validate email validation and dispaly error accordingly
  	if (checkEmail(BusinessEmailVal)) {
		document.getElementById("emailError").innerHTML="Please make sure this isn&#39t a personal email address";
  	}
	else {
		
	}
	
	//validate the option user selected and display error accordingly
	if (selectedValue == "selectOption")
   	{
		document.getElementById("selectError").innerHTML="Please select Business size option";
		document.getElementById("selectError").style.fontSize = "14px";
   	}
	//if business size greater than 1-10
	else if(selectedValue > 1) {
		for(var i = 1 ; i <= radios.length ; i++)
  		{
		  for (var j = 0, length = radios.length; j < length; j++) 
		  {
			  //validate if user has selected their solution they want
			 if (radios[j].checked ) 
			 {
				console.log('radios checked', radios[j].value);
				checked = true;
				document.querySelector(".h1-BookADdemo").innerHTML = "Awesome! We&#39ll contact you shortly" ;
				document.querySelector(".p-secondaryContent").innerHTML = " We&#39ll send you an email with available times to meet." ;
				document.querySelector(".calendar").innerHTML = "<i class='fa fa-calendar-check-o' aria-hidden='true'></i> ";
				document.getElementById('customerForm').style.visibility = 'hidden';
				break;
			 }
		   }
			if(!checked)
       		{
				//if user is not selected solution show the error 
				document.getElementById("solutionError").innerHTML="Please select solution";
				 break;
       		}	   	
		}  
	}
	//if business size equal 1-10
	else if(selectedValue == 1) {
		
		for(var i = 1 ; i <= radios.length ; i++)
  		{
		  for (var j = 0, length = radios.length; j < length; j++) 
		  {
			 //validate if user has selected their solution they want
			 if (radios[j].checked) 
			 {
				if(radios[j].value == "Document storage" || radios[j].value == "Price" || radios[j].value == "Full text search" ){
					console.log('radios checked', radios[j].value);
				  	checked = true;
					//show the new failure content if the all data valid and user is not qualified
					document.querySelector(".h1-BookADdemo").innerHTML = "Oh no! All our consultants are busy" ;
					document.querySelector(".p-secondaryContent").innerHTML = "We&#39ll let you know when the next one is available";
					document.querySelector(".calendar").innerHTML = "<i class='fa fa-calendar-times-o' aria-hidden='true'></i>";
					document.getElementById('customerForm').style.visibility = 'hidden';
				  break;
				}
				 else {
					checked = true;
					console.log(BusinessEmailVal);
					//show the new success content if the all data valid and user is not qualified
					document.querySelector(".h1-BookADdemo").innerHTML = "Awesome! We&#39ll contact you shortly" ;
					document.querySelector(".p-secondaryContent").innerHTML = " We&#39ll send you an email with available times to meet." ;
					document.querySelector(".calendar").innerHTML = "<i class='fa fa-calendar-check-o' aria-hidden='true'></i> ";
					document.getElementById('customerForm').style.visibility = 'hidden';
				 }
			 }
		   }
			if(!checked)
       		{
				//show solution error if the user is not selected solution
				document.getElementById("solutionError").innerHTML="Please select solution";
				document.getElementById("solutionError").style.fontSize = "14px";
				 break;
       		}	   	
		}  
	}
}
	