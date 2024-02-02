/************/
$(function(){
//	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
//		(function(){
//		window.scrollReveal = new scrollReveal({reset: false});
//	})();
//};
$('.nav li').hover(function(){
          $(this).siblings().removeClass("active");
			$(this).addClass("active");
		$(this).find('.sel_1').slideDown(0);
    },function(){
		$(".nav li").removeClass("active");
			$(".nav_li").addClass("active");
		$(this).find('.sel_1').slideUp(0);
}); 

$(".nav li").click(function(){
           $(".nav_li").attr("id","");
	});
	
$(".w_Box ul li").click(function(){
	$(this).find(".sele_nav").toggle()
})

//$('.posLi3').mouseover(function(){
//		$(this).find('.sel_1').stop().fadeIn();
//	});
//	$('.posLi3').mouseout(function(){
//		$(this).find('.sel_1').stop().fadeOut();
//	});
/**********************************/
				var oS=$(document).height();
				var oWe=$('.w_nav');
				var onOff=true;
$('.burger').click(function(){
	             var w=$(window).width();
					if(onOff){
						if(w<1000){	
							oWe.slideDown(200);
						}
					}else{
						oWe.slideUp(200);
					}
					onOff=!onOff;
		    if (!$(this).hasClass('open')) {
		        openMenu();
		    } else {
		        closeMenu();
		    }
		});

			})
function openMenu() {
		    $('div.burger').addClass('open');
		    $('div.x, div.y, div.z').addClass('collapse');
		    $('.menu li').addClass('animate');
		    setTimeout(function () {
		        $('div.y').hide();
		        $('div.x').addClass('rotate30');
		        $('div.z').addClass('rotate150');
		    }, 70);
		    setTimeout(function () {
		        $('div.x').addClass('rotate45');
		        $('div.z').addClass('rotate135');
		    }, 120);
		}
		function closeMenu() {
		    $('div.burger').removeClass('open');
		    $('div.x').removeClass('rotate45').addClass('rotate30');
		    $('div.z').removeClass('rotate135').addClass('rotate150');
		    $('div.circle').removeClass('expand');
		    $('.menu li').removeClass('animate');
		    setTimeout(function () {
		        $('div.x').removeClass('rotate30');
		        $('div.z').removeClass('rotate150');
		    }, 50);
		    setTimeout(function () {
		        $('div.y').show();
		        $('div.x, div.y, div.z').removeClass('collapse');
		    }, 70);
		}








































