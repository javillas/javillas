$(window).scroll(function() {
		$('#left1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideRight");
			}
		});
	});

		$(window).scroll(function() {
		$('#left2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideRight");
			}
		});
	});

		$(window).scroll(function() {
		$('#right1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideLeft");
			}
		});
	});

		$(window).scroll(function() {
		$('#right2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).addClass("slideLeft");
			}
		});
	});