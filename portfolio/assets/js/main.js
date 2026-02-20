$(function(){

    /**
     * @버튼종류에따른필터
     */
    $('.sort-area button').click(function(){
        dataVal = $(this).data('filter');
        $(this).addClass('on').siblings().removeClass('on')
        $('.project-item').removeClass('on');
        if(dataVal == 'all'){
            $('.project-item').addClass('on');
        }else{
            $('.project-item').each(function(i,el){
                if($(this).data('filter').indexOf(dataVal) >= 0 ){
                    $(this).addClass('on')
                }
            })
        }
    })

    /**
     * @grid교체
     */
    $('.set-area button').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        if($(this).hasClass('grid-two')){
            $('.project-list').addClass('sort');
        }else{
            $('.project-list').removeClass('sort');
        }
    })

    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.sc-project').offset().top
        }, 500);
    });

    $('.menu a').click(function (e) {
        // e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });

    $('.logo a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

});