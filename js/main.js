/*导航栏随页面出现对应颜色*/
$(window).scroll(function(){
          height = $(window).scrollTop();
          if(height > 10 && height < 500){
            $('#nav-ul-li1>a').css("color","#337ab7");
          }else{
          	 $('#nav-ul-li1>a').css("color","white");
          };
          	if(height>=500 && height < 980){
          	  $('#nav-ul-li2>a').css("color","#337ab7");	
          }else{
          	 $('#nav-ul-li2>a').css("color","white");
          }; 
            if(height>=980 && height < 1500){
          	  $('#nav-ul-li3>a').css("color","#337ab7");	
          }else{
          	 $('#nav-ul-li3>a').css("color","white");
          };
            if(height>=1500 && height < 2030){
          	  $('#nav-ul-li4>a').css("color","#337ab7");	
          }else{
          	 $('#nav-ul-li4>a').css("color","white");
          }; 
            if(height>=2030 && height < 2600){
          	  $('#nav-ul-li5>a').css("color","#337ab7");	
          }else{
          	 $('#nav-ul-li5>a').css("color","white");
          };  
});
/*点击导航栏页面的平滑效果*/
$(function(){
   $("#nav-ul-li1").click(function(){
     $('body').animate({scrollTop:0},'swing');  
});
   $("#nav-ul-li2").click(function(){
     $('body').animate({scrollTop:510},'swing');  
});
   $("#nav-ul-li3").click(function(){
     $('body').animate({scrollTop:980},'swing');  
});
   $("#nav-ul-li4").click(function(){
     $('body').animate({scrollTop:1700},'swing');  
});
   $("#nav-ul-li5").click(function(){
     $('body').animate({scrollTop:2030},'swing');  
});
   /*点击轮播图*/
    $("#Teams .slideleft").click(function(){
     var li=$(".picwrap>ul");
     li.animate({left:"-=180px"},1000,function(){
     	li.css({left:"0px"}).find("li:first").appendTo(li);
     });
  });
     $("#Teams .slideright").click(function(){
     var li=$(".picwrap>ul");
     li.animate({left:"+=180px"},1000,function(){
     	li.css({left:"0px"}).find("li:last").prependTo(li);
     });
  });
     $("#Teams .slideright").click(function(){
     var li=$(".luctus>ul");
     li.animate({left:"+=180px"},1000,function(){
     	li.css({left:"0px"}).find("li:last").prependTo(li);
     });
  });
     $("#Teams .slideleft").click(function(){
     var li=$(".luctus>ul");
     li.animate({left:"-=180px"},1000,function(){
     	li.css({left:"0px"}).find("li:first").appendTo(li);
     });
  });
     /*点击home图标效果*/
     $(".homeicon span").click(function(){
       width = $(window).width();
       $(this).css("background","url('images/icon_home.png') bottom no-repeat");
       $(".homeicon-ul").toggle();
       if(width>1011){
       	$(".homeicon-ul").css("display","none");
       }
     });
     /*滚动出现返回顶部按钮*/
     $(window).scroll(function(){
          height = $(window).scrollTop();
          if(height > 300){
            $('.backtop').fadeIn();
          }else{
            $('.backtop').fadeOut();
          };  
});
/*backtop返回顶部的平滑动画*/
     $(".backtop").click(function(){
       $('body').animate({scrollTop:0},'swing');  
     });


});
