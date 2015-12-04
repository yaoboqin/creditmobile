$(function () {
  'use strict';
  $(document).on("pageInit", "#about", function(e, id, page) {
    var btn = $(".item-credit .item-box"),
      arrow,detail;
    btn.on("touchstart", function(){ 
      arrow = $(this).find("span.iconabout");
      detail = $(this).siblings(".detail");
      if(arrow.hasClass("icon-xialajiantou")){ 
        arrow.addClass("icon-shangla");
        arrow.removeClass("icon-xialajiantou");
        detail.show();
      }else{ 
        arrow.removeClass("icon-shangla");
        arrow.addClass("icon-xialajiantou");
        detail.hide();
      }
      
    })
  })

  $.init();
});
  