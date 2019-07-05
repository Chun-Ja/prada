$(function(){
  $('html, body').stop().animate({scrollTop :0},0);//문서 로딩시 초기화

    $('#nav nav>ul>li').on('click',function(){//클릭 이벤트
        var idx= $(this).index();//li의 인덱스 주소 구하기
        var section = $('.art').eq(idx); //arti 선택하기
        var offsetTop = section.offset().top;//arti의 상단 주소 찾기
        $('html, body').stop()
                .animate({
                    scrollTop :offsetTop
                }, 500);//arti의 상단으로 스크롤하기
        return false;
    });

    $(window).scroll(function(){//스크롤 이벤트
        var scltop = $(window).scrollTop();//스크롤 거리 구하기
        $.each($('.art'), function(idx, item){//each함수를 이용한 반복
            var $target   = $('.art').eq(idx);
            var    targetTop = $target.offset().top;

            if (scltop >= targetTop) {
                $('#nav nav>ul>li').removeClass('on');
                $('#nav nav>ul>li').eq(idx).addClass('on');
            }
            if (( scltop < 200)) {
                $('#nav nav>ul>li').removeClass('on');
            }
        });
    });
  var swiper = new Swiper('.swiper-container', {
    width:550,
    height:500,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

