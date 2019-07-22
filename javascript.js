$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});

function scrollto(div)
{
 $('html,body').animate(
 {
  scrollTop: $("#"+div).offset().top
 },'slow');
}