$(document).ready(function(){
		// Adaptive header menu toggle
	$('.header-menu-toggle-btn').on('click', function(e){
        e.preventDefault();
        $('body, html').addClass('lockscroll');
    });
	$('.close-adaptive-menu').on('click', function(e){
        e.preventDefault();
        $('body, html').removeClass('lockscroll');
    });


	$('.fancy-modal').fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none'
	});

	$('.modal-trigger').fancybox({
		padding : 0,
    	wrapCSS: 'form-modal-wrap'
	});

	$(".tel-input").mask("9(999) 999-99-99");

//цель для кнопки заказа в таблице
	$('a[href="#order-feedback"]')
	.attr('id', 'table-btn-order' )
	.attr("onclick", "yaCounter35972830.reachGoal('press_order_table_button'); return true;" );



	$('.adaptive-header-top-menu ul li a').on('click', function(){
		$(this).next().slideToggle();
	});





	$(window).on('load resize', function() {
	  $(".menu-item-has-children>a").one('click', function() {
	    if ($(window).width() > '960') {
	      $(this).next().slideDown();
	    }
			return false;
	  });
	});



	if($(window).width() > 960){
		var headerH = $('.header').outerHeight();
		$(window).scroll(function(){
			if($(this).scrollTop() > headerH){
				$('.hide-header-wrap').fadeIn();
			}
			else{
				$('.hide-header-wrap').fadeOut();
			}
		});
	}

	// $('.main-slider').owlCarousel({
	// 	items: 1,
	//     loop: true,
	//     nav: true,
	//     dots: true
	// });

	$('.sertificate-slider').owlCarousel({
		items: 3,
		margin: 45,
	    loop: true,
	    nav: true,
	    dots: true,
		responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	if($(window).width() > 767){
		$('.clients-slider').owlCarousel({
			items: 4,
			margin: 45,
		    loop: true,
		    nav: true,
		    dots: false,
			responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		});
	}
	else{
		$('.clients-slider').owlCarousel({
			items: 4,
			margin: 45,
		    loop: true,
		    nav: true,
		    dots: true,
			responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		});
	}



    //Fade alerts on click
	$('.alert span').on('click', function(){
		$(this).parent().fadeOut();
	});

	// Tabs
	$('.tabs-list a').on('click', function(e){
    	e.preventDefault();

    	if ($(this).hasClass('active')) return false;
    	var obj = $(this).closest('.tabs-wrap'),
            indexEl = obj.find('.tabs-list a.active').index();

		obj.find('.tabs-list a').eq(indexEl).removeClass('active');
        $(this).addClass('active');
        obj.find('.tabs-content-item').eq(indexEl).hide();
        obj.find('.tabs-content-item').eq($(this).index()).fadeIn();
    });

});
