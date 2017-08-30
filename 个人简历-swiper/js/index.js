window.onload=function(){
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', //垂直
    loop: true, //无缝循环
    onSlideChangeEnd: function(swiper){ //切换到某一屏后的回调函数

      var index=swiper.activeIndex;
      //当前添加类名 其他删除
      $('.swiper-slide').removeClass('current').eq(index).addClass('current');

      //如果当前是第一屏 控制第一屏的动画
      if(index==1 || index==4){
        $('.grjl').addClass('zoomInDown');
      }else{
        $('.grjl').removeClass('zoomInDown');
      }

    }

  })


    $('.music').click(function(){
      $(this).toggleClass('play');
      // 转成成js对象
      var audio=$('.audio1').get(0);
      //音频控制
      if(audio.paused){
        audio.play();
      }else{
        audio.pause();
      }
    })
}

