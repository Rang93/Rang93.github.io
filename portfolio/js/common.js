$(function(){
	$('.project_list li').hide()
	for(i = 0; i <= 9; i++){
		$('.project_list li:eq('+i+')').show()
	}
	
	$('.top_Btn a').click(function(){
		$('html,body').animate({scrollTop : 0 },500);
		return false;
	})
	
	$('.All_list:not(:first)').hide() 
	$('.port_list li:first').addClass('on')
	
	$('.port_list li a').click(function(){
		$('.project_list li').hide()
		var link_id = $(this).attr('href')
		$(link_id).show()
		
		$('.port_list li').removeClass('on')
		$(this).parent().addClass('on')   // parent 는 내가 선택한 부모태크를 뜻한다.
		
		return false;
	})
	
	$('#intro_yr').delay(500).animate({top : -100 + '%'},1000); // INTRO 페이지 효과
	
	//var floatMe = $('.logo');   // 움직이는 효과
	//function runIt() {
    //   floatMe.animate({top:'+=10'}, 1000);
    //   floatMe.animate({top:'-=10'}, 1000, runIt);
	//}
	
    //runIt();
	
	
	// 처음 시작 시 li에 margin 주기
    $('.project_list li:odd').css({marginLeft:30})
    
    $('.port_list li a').click(function(){
        
        // a 클릭 시 해당하는 리스트가 나와라
        var link_class = $(this).attr('href')
        $('.project_list li').hide()
        $( link_class ).show()
        
        // a가 클릭되었을 때 리스트의 여백 설정
        $('.project_list li').css({marginLeft:0})
        $('.project_list li'+link_class+':odd').css({marginLeft:30})   
        
        // all일 경우 모든 li의 여백 설정
        if( link_class == '.All'){
            $('.project_list li').show()
            $('.project_list li').css({marginLeft:0})
            $('.project_list li:odd').css({marginLeft:30})
        }
        return false;

    })

    
	
	
	
	
	
	// paging 제이쿼리
	var link_class='';
    $('.port_list li a').click(function(){
        
        // a 클릭 시 해당하는 리스트가 나와라
        link_class = $(this).attr('href')
        $('.project_list li').hide()
        $( link_class ).show()
        
        // a가 클릭되었을 때 리스트의 여백 설정
        $('.project_list li').css({marginLeft:0})
        $('.project_list li'+link_class+':odd').css({marginLeft:30})   
        
        // all일 경우 모든 li의 여백 설정
        if( link_class == '.All'){
            $('.project_list li').show()
            $('.project_list li').css({marginLeft:0})
            $('.project_list li:odd').css({marginLeft:30})
            link_class = ''
        }
        paging()
        
        var renewURL = location.href;
        var renewURL_num =  $(this).parent().index()+1
        renewURL = renewURL.replace(/\&Ccode=([0-9]+)/ig,'');
        renewURL += '&Ccode='+renewURL_num;
        history.pushState(null, null, renewURL);
		
        return false;

    })
    
	
    paging()
	function paging(){
        var port_li_name = '.project_list li'  // 포트폴리오 리스트 이름
        var paging_li_name = '.paging ' // 페이징 리스트 이름 (뒤에 띄어쓰기 주의)
        var paging_left = '.Btn_l' // left 버튼
        var paging_right = '.Btn_r' // right 버튼
        
        var totalCount = $( port_li_name +link_class ).size(); //전체 건수
        var totalPage = Math.ceil(totalCount/10);//페이지 수
        // var pagegroup = Math.ceil(totalPage/3) 페이지 수
        // var nextBtn = $('.Btn_r')
        var pageNum = 0
        var pagegroupNum = 0 
        // console.log(pagegroup)
        $(paging_li_name + 'li').remove()
        for(i=1; i<=totalPage; i++){
            $(paging_li_name).append('<li>'+i+'</li>')
        } 
        $(paging_li_name + 'li:first').addClass('on') 
        for(img_num = 0; img_num <= totalCount; img_num++){
            if(img_num >= 10){
                $( port_li_name +link_class+':eq('+img_num+')').hide()
            }    
        }


        $(paging_li_name + 'li').click(function(){
            $(paging_li_name + 'li').removeClass('on')
            $(this).addClass('on')

            pageNum = $(this).index()

            $(port_li_name).hide()
            for(img_num = (pageNum*10); img_num <= ((pageNum * 10)+9); img_num++){
                $(port_li_name+link_class+':eq('+img_num+')').show()  
                $(port_li_name+link_class+':eq(odd)').css({marginLeft:30})
            }

            $('html,body').animate({scrollTop : 0 },0);
        })


        $(paging_right).click(function(){
            pageNum++
            if(pageNum >= totalPage -1){
                pageNum = totalPage -1

            }

            $(paging_li_name + 'li').removeClass('on')
            $(paging_li_name + 'li:eq('+pageNum+')').addClass('on')

            $(port_li_name).hide()
            for(img_num = (pageNum*10); img_num <= ((pageNum * 10)+9); img_num++){
                $(port_li_name+link_class+':eq('+img_num+')').show()  
                $(port_li_name+link_class+':eq(odd)').css({marginLeft:30})
            }
        })

        $(paging_left).click(function(){
            pageNum--
            if(pageNum == -1){
                pageNum = 0
            }

            $(paging_li_name + 'li').removeClass('on')
            $(paging_li_name + 'li:eq('+pageNum+')').addClass('on')

            $(port_li_name).hide()
            for(img_num = (pageNum*10); img_num <= ((pageNum * 10)+9); img_num++){
                $(port_li_name+link_class+':eq('+img_num+')').show()  
                $(port_li_name+link_class+':eq(odd)').css({marginLeft:30})
            }
        })
    }
	
	// 상세페이지에서 링크를 클릭한 후 마지막 숫자 가지고 오기
    var port_list_li = '.port_list li'   // 포트폴리오 메뉴 li
    var port_li_name = '.project_list li'   // 포트폴리오 프로젝트 li
    var port_link_url = "href: "+$(location).attr('href')
    var port_link_page = port_link_url.split('=')
    var port_link_num = port_link_page[1]
    
    if( port_link_num != 1 && port_link_num != undefined ){
        link_name = $( port_list_li + ' a:eq('+(port_link_num-1)+')').attr('href')
        $( port_list_li ).removeClass('on')
        $( port_list_li + ':eq('+(port_link_num-1)+')').addClass('on')
        $(port_li_name).hide()
        $(link_name).show()
        link_class = link_name
        console.log(link_class)
        paging()
        $(port_li_name).css({marginLeft:0}) // 여백 정리
        $(port_li_name+link_class+':odd').css({marginLeft:30}) // 여백 정리

    } else if( port_link_num == 1 || port_link_num == undefined) {
        $(port_li_name).show()
        link_class = ''
        paging()
    }
	
	
})