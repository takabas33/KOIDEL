var $w = $(window);
var $d = $('#oh');
$w.scroll(function(){
  $d.css('left',formula400())
});
function formula400(){
  return Math.sin($w.scrollTop()/100)*100
}
