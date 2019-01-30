$(function() {

	$(".navbar a, footer a").on("click", function(event){

		event.preventDefault();
		var hash = this.hash;

		$('html,body').animate({scrollTop: $(hash).offset().top} , 500, function(){window.location.hash = hash;})

	});

})