$("a").click 
(
    function (evt)
    {
        //YOUR CODE HERE

        evt.preventDefault(); 
        return false;  
    } 
);

//
// Change menu on scroll
//
function init() {
	if($(window).width() > 1024){
	    window.addEventListener('scroll', function(e){
	        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
	            shrinkOn = 378
	        if (distanceY > shrinkOn) {
	        $('.blueBanner').addClass('navbar-fixed-top');
	        $('.navRow .navbar').addClass('hideMenu');
	        } else {
	            if ($('.blueBanner').hasClass('navbar-fixed-top')) {
	                $('.blueBanner').removeClass('navbar-fixed-top');
	            }
	            if ($('.navRow .navbar').hasClass('hideMenu')) {
	                $('.navRow .navbar').removeClass('hideMenu');
	            }
	        }
	    });
	} else {
		$('.blueBanner').addClass('navbar-fixed-top');
	}
}
window.onload = init();

//
// Menu Scroll
//
function scrollToAnchor(aid){
    var aTag = $("div."+ aid +"");
    $('html,body').animate({scrollTop: (aTag.offset().top - 100)},'slow');
}

$(".sponsors").click(function(e) {
   		scrollToAnchor('sponsorRow');
        e.preventDefault(); 
        return false;  
});
$(".schedule").click(function(e) {
   		scrollToAnchor('scheduleHead');
        e.preventDefault(); 
        return false;  
});
$(".team").click(function(e) {
   		scrollToAnchor('teamHead');
        e.preventDefault(); 
        return false;  
});
$(".contact").click(function(e) {
   		scrollToAnchor('contactHead');
        e.preventDefault(); 
        return false;  
});

//
// Schedule Slider
//
$('.singleEvent.expandRow .expandButton').click(function(e){
	if ($('.row.scheduleRow').hasClass('open')) {
		$('.row.scheduleRow, .singleEvent.expandRow .expandButton').removeClass('open');	
	}
	else {
		$('.row.scheduleRow, .singleEvent.expandRow .expandButton').addClass('open');
	}
	
});

//
// Team Sliders
//
$('.singleTeam.expandRow .expandButton').click(function(e){
	if ($(this).hasClass('brad')) {
		if ($(this).hasClass('open')) {
			$('.teamRow .singleTeam.brad, .singleTeam.expandRow .expandButton.brad').removeClass('open');	
		}
		else {
			$('.teamRow .singleTeam.brad, .singleTeam.expandRow .expandButton.brad').addClass('open');
		}
	}
	if ($(this).hasClass('brett')) {
		if ($(this).hasClass('open')) {
			$('.teamRow .singleTeam.brett, .singleTeam.expandRow .expandButton.brett').removeClass('open');
		}
		else {
			$('.teamRow .singleTeam.brett, .singleTeam.expandRow .expandButton.brett').addClass('open');
		}
	}
	if ($(this).hasClass('mark')) {
		if ($(this).hasClass('open')) {
			$('.teamRow .singleTeam.mark, .singleTeam.expandRow .expandButton.mark').removeClass('open');
		}
		else {
			$('.teamRow .singleTeam.mark, .singleTeam.expandRow .expandButton.mark').addClass('open');
		}
	}
	if ($(this).hasClass('geoff')) {
		if ($(this).hasClass('open')) {
			$('.teamRow .singleTeam.geoff, .singleTeam.expandRow .expandButton.geoff').removeClass('open');
		}
		else {
			$('.teamRow .singleTeam.geoff, .singleTeam.expandRow .expandButton.geoff').addClass('open');
		}
	}
	
});