$(document).ready(function(){
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

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
  }

  $('.cat-item').click(function(){
	let value=$(this).attr('data-filter');
	if(value=='all'){                                //gallery filter
		$('.filter').show(500);
	}
	 else{
	 $('.filter').not('.' +value).hide(500);
	 $('.filter').filter('.'+value).show(500);
	 }

	 
$('.cat-item').click(function(){
	$(this).addClass('active-item').siblings().removeClass('active-item');
});


});


