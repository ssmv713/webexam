$(document).ready(function(){
    var count = 0;
    //animate ({스타일변화}, 스피드, function(){애니메이션 끝나고 처리될 일 함수})
    setInterval(function(){
        $('.aniSlide').animate({
            "marginLeft" : "-=1200"
        },400,function(){
            $('.aniSlide > div').eq(0).appendTo($('.aniSlide'))
            //맨뒤로 옮기기 --> appendTo
            $('.aniSide').css('margin-left',0)
            //엄마다시 원장복귀
        })
        },3000)
})