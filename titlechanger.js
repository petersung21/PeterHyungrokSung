var txt = [ 'University of Waterloo Student',
            'Full Stack Developer',
			'Android Developer',
            'Computer Engineer',
			'Web Developer',
			'MEAN Stack Developer'],
	n = txt.length,
	$course = $('#course'),
	$span,
	c = -1;

// CREATE SPANS INSIDE SPAN
for(var i=0; i<txt.length; i++) $course.append($('<span />',{text:txt[i]}));
// HIDE AND COLLECT THEM
$span = $("span", $course).hide();

(function loop(){
	c = ++c % n;
	$course.animate({width: $span.eq( c ).width() });
	$span.stop().fadeOut().eq(c).fadeIn().delay(1500).show(0, loop);
}());
