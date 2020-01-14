$(function(){
	$('.m_btn').click(function(){
		$('.menu_img').animate({
			left: 0
			})
	})
	$('.menu_img a').click(function(){
			$('.menu_img').animate({
				left:'-100%'
			})
	})
	
	
	$('.s_btn').click(function(){
		$('.m_sch').animate({
			right: 0
			})
	})
	$('.sch_form #closeBtn').click(function(){
			$('.sch_form .m_sch').animate({
				right:'-100%'
			})
	})
	
	// visual 
	$('.main_v:not(:first)').hide()
	
	$('.indi li').click(function(){
		
		n = $(this).index() + 1
		if( $(this).hasClass('on') == false){
			$('.main_v').fadeOut()
		}
		
		$('.main_v.v'+n).fadeIn()
		
		$('.indi li').removeClass('on')
		$(this).addClass('on')
	})
	
	var n = 1
    
    var rolling = setInterval(main_v,3000)
    
    function main_v(){
        n++
        if( n == 3 ){
           n = 1
        }
        $('.main_v').fadeOut()
        $('.main_v.v'+n).fadeIn()
        
        $('.indi li').removeClass('on')
        $('.indi li:eq('+(n-1)+')').addClass('on')
    }
    
    $('#btnAuto').click(function(){
        if( $(this).hasClass('play') == false ){ 
            $(this).addClass('play')
            clearInterval(rolling)
        } else {
            $(this).removeClass('play')
            rolling = setInterval(main_v,3000)
        }
    })
})