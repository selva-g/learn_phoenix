$(document).ready(function(){
	console.log("I am here")
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
// ===== floatmenu ==== 


// ===== Scroll to Top ==== 
$(window).scroll(function() {
	if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
		$('#return-to-top').fadeIn(200);    // Fade in the arrow
	} else {
		$('#return-to-top').fadeOut(200);   // Else fade out the arrow
	}
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
	$('body,html').animate({
		scrollTop : 0                       // Scroll to top of body
	}, 500);
  });

  //toggle button
  $('.t-btn').click(function(){
	$('.t-btn').toggleClass('change');
});
//end of toggle button
//b-toggle
function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Read more"; 
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less"; 
	  moreText.style.display = "inline";
	}
  }
  
//end of b toggle