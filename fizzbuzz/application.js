$(document).ready(function() {


	runFizzBuzz()

	function runFizzBuzz() {
		var strprompt = prompt("Please pick a number.");

		if (!strprompt || isNaN(strprompt) || (strprompt - Math.floor(strprompt)) != 0) {
			alert("You have not entered a whole number.\n\n" + "Please reload page and enter a whole number when prompted.");
			} 
		else {

			var fizz = function(number1) {return (number1 % 3) === 0};

			var buzz = function(number1) {return (number1 % 5) === 0};

			for (i = 1; i <= strprompt; i++) 
			{
				if (fizz(i) && buzz(i)) {$("body").append("<p>FizzBuzz</p>");} 
				else if (fizz(i)) 
					{$("body").append("<p>Fizz</p>");} 
				else if (buzz(i)) 
					{$("body").append("<p>Buzz</p>");} 
				else {$("body").append("<p>" + i + "</p>");}
			};
		};
	};
	
	$(".start").on("click",function(){runFizzBuzz();});
	
});