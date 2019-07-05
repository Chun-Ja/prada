$(function(){
  $("#search").hide();
  $("#menu").hide();
  $("#lang").hide();
  $("#cur").hide();
  $("#foot").hide();
  

  $(".serach_btn").on("click",function(){
    $("#search").toggle(200);
  });

  $(".menu_btn").on("click",function(){
    $("#menu").toggle(200);
    $("#search").hide();
  });

  $(".ham_menu").on("click",function(){
    $("#menu").toggle(200);
    $("#search").hide();
  });

  $("#lang_btn").on("click",function(){
    $("#lang").toggle();
    $("#cur").hide();
    $("#foot").hide();
  });
  $("#cur_btn").on("click",function(){
    $("#cur").toggle();
    $("#lang").hide();
    $("#foot").hide();
  });
  
  $(".close_btn").on("click",function(){
    $("#menu").hide();
  });

  $("#bott_btn").on("click",function(){
    $("#foot").toggle();
    $("#lang").hide();
    $("#cur").hide();
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $('.sli_txt>ul>li').on('mouseover',function(){
    $('.sli_txt>ul>li').removeClass('on');
    $(this).addClass('on');
    var thisIndex=$(this).index();
    console.log(thisIndex);
    swiper.slideTo(thisIndex, 500, false);
    
  });
  swiper.on('slideChange', function(){
  var n=swiper.activeIndex;
  $('.sli_txt>ul>li').removeClass('on');
  $('.sli_txt>ul>li').eq(n).addClass('on');
  });


  });
