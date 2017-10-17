$(document).ready(function(){
	var autoSwitch = true;
	var autoSwitch_speed = 5000; 

	$('.prev').on('click', previousSlide)
	
	function previousSlide(){	
		var currentImg = $('.active');
		var previousImg = currentImg.prev();
		var lastImg = $('.slide').last();

		if(previousImg.length){
			currentImg.removeClass('active');	
			previousImg.addClass('active');
		} else {
			currentImg.removeClass('active');
			lastImg.addClass('active');
		}	
	}

	$('.next').on('click', nextSlide);
	
	function nextSlide(){	
		var currentImg = $('.active');
		var nextImg = currentImg.next();
		var firstImg = $('.slide').first();

		if(nextImg.length){
			currentImg.removeClass('active');
			nextImg.addClass('active');
		} else {
			currentImg.removeClass('active');
			firstImg.addClass('active');			
		}
	}

	var interval;

	function runAutoSwitch(){
		if(autoSwitch == true){
			interval = setInterval(nextSlide,autoSwitch_speed);
		}
	};
	
	function stopAutoSwitch() {
        clearInterval(interval);
    }
	
	$('.container').on('mouseenter', stopAutoSwitch).on('mouseleave', runAutoSwitch);

});
		
	  