function init() {
	$('#navlist li').hide();
	 showTheList();

	 
	 $("#resumeBox").fancybox({
        'width'             : '75%',
        'height'            : '100%',
        'autoScale'         : false,
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'type'              : 'iframe',
		'overlayOpacity': '0.9',
		'overlayColor':'#000'
    });
	
	 $("#linkedInBox").fancybox({
        'width'             : '75%',
        'height'            : '100%',
        'autoScale'         : false,
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'type'              : 'iframe'
    });
	
	$("#comingSoonBox").fancybox({
        'width'             : '75%',
        'height'            : '100%',
        'autoScale'         : false,
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'type'              : 'iframe'
    });
	
	$("#aboutMeBox").fancybox({
        'width'             : '13',
        'height'            : '100%',
        'autoScale'         : false,
        'transitionIn'      : 'none',
        'transitionOut'     : 'none',
        'type'              : 'iframe',
		'overlayOpacity': '0.9',
		'overlayColor':'#000',
		'titlePosition' : 'over'
    });
	$('#quote1').hide();
	window.onload = function() {
      $('#quote1').delay(300).fadeIn(1000,function(){});
	}
}
	
function showTheList() {
  var i = 1;
  function showOne() {
    $('ul li').eq(i-1).delay(250).fadeIn(300, function() {
		i++;
        showOne();
    });
  }
  showOne();
 }

 
 $(document).ready(function() { init();});