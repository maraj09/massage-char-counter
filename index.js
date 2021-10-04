$(document).ready(function(){
    $('#textarea').keyup(function(){
	
	var str = $('#textarea').val();

    var limit1 = isUnicodeFunc(str) ?  70 : 100;
	var limit2 = isUnicodeFunc(str) ? 140 : 200;
	var limit3 = isUnicodeFunc(str) ? 210 : 300;
	var limit4 = isUnicodeFunc(str) ? 280 : 400;
	var limit5 = isUnicodeFunc(str) ? 350 : 500;
	var invalid = "INVALID MASSAGE";

	var chars = str.length; 

	var msg = (chars == 0) ? 0 :
					((chars <= limit1) ? 1 :
						((chars > limit1 && chars <= limit2) ? 2 :
							((chars > limit2 && chars <= limit3) ? 3 :
								(chars > limit3 && chars <= limit4) ? 4 :
									(chars > limit4 && chars <= limit5) ? 5 :
										invalid))); 
	
	$('.len').html(chars);
	$('.massage').html(msg);
	
	if (msg === 'INVALID MASSAGE') { 
		alert('This message is too long. Please decrease characters to send message');
		$('.massage').css({ "color": "red"});
		$(".show").css({ "display": "none"});
	} else {
		$('.massage').css({ "color": "black"});
		$(".show").removeClass("hide");
		$(".show").css({ "display": "inline-block"});
	}
	
	
    });

    function isUnicodeFunc(string) { 
	for (var i = 0; i < string.length; i++) {
	if (string.charCodeAt(i) > 127) return true;
	}
	return false;
    }
});

