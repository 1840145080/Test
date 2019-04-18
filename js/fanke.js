$(function(){
	var index=0;
	var width=$(".imgage>li").width();
//	console.log(width)
     var animation=null;
       animation=function(){
    	index = index > 4 ? 0:index;
    	$(".imgage").stop().animate({
    		left:-width*index
    	},100);
    	$('.num>li').eq(index).addClass('color').siblings().removeClass('color');
    }
    var zhuan=null;
    zhuan=setInterval(function(){
    		index++;
    	animation();
    	},1300)
    $(".box").hover(function(){
    	$(".sec").show();
    	
    	clearInterval(zhuan)
    },function(){
    	$(".sec").hide();
    	zhuan=setInterval(function(){
    		index++;
	    	animation();
	    	},1300)
    })
    $(".num>li").mouseenter(function(){
    	index=$(this).index();
    	animation();
    })
    $(".left").click(function(){
//  	alert("a")
    	index--;
    	index = index < 0 ? 2:index;
    	animation();
    })
      $(".right").click(function(){
    	index++;
    	animation();
    })
      
      
     $(document).on('scroll',function(){//鼠标的滚动事件
				var scr=$(document).scrollTop();//获取被卷走的页面的高度
				console.log(scr);
				if(scr>=100){
					$('nav').stop().animate({top:scr},1);
					$('.back').show(500);
					
				}else{
					$('.back').hide();
					$('nav').stop().animate({top:100},0);
				};
				$('.back').click(function(){
					$(document).scrollTop(0);
				});
			})
      
})
