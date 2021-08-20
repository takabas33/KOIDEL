$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 1000; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(function(){
$('.container_img').css("opacity",".3");
$(window).scroll(function (){
$('.container_img').each(function(){
var ef = $(this).offset().top;
var sc = $(window).scrollTop();
var wh = $(window).height();
if (sc > ef - wh + 100){
$(this).animate({ 
"opacity": "1"
}, 1000);
}
});
});
});

$(function(){
$('.container2_img').css("opacity",".3");
$(window).scroll(function (){
$('.container2_img').each(function(){
var ef = $(this).offset().top;
var sc = $(window).scrollTop();
var wh = $(window).height();
if (sc > ef - wh + 100){
$(this).animate({ 
"opacity": "1"
}, 1000);
}
});
});
});

$(function(){
$('.phone').css("opacity",".3");
$(window).scroll(function (){
$('.phone').each(function(){
var ef = $(this).offset().top;
var sc = $(window).scrollTop();
var wh = $(window).height();
if (sc > ef - wh + 100){
$(this).animate({ 
"opacity": "1"
}, 1000);
}
});
});
});


$(function(){
$('.container4_img').css("opacity",".3");
$(window).scroll(function (){
$('.container4_img').each(function(){
var ef = $(this).offset().top;
var sc = $(window).scrollTop();
var wh = $(window).height();
if (sc > ef - wh + 100){
$(this).animate({ 
"opacity": "1"
}, 1000);
}
});
});
});