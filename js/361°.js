$(function() {
	//整屏滚动
	var flag = true;
	var index = 0;
	document.addEventListener('mousewheel', function(event) {
		var h = $('body').height();
		event.preventDefault();
		if(flag) {
			flag = false;
			if(event.deltaY > 0) {
				index++;
				index = index > 2 ? 2 : index;
				$("html,body").stop().animate({
					"scrollTop": (h * index)
				}, 1000, function() {
					flag = true;
				})
				$(".num>ul>li").eq(index).addClass("active").siblings().removeClass("active");
			} else {
				flag = false;
				index--;
				index = index < 0 ? 0 : index;
				$(".num>ul>li").eq(index).addClass("active").siblings().removeClass("active")
				$("html,body").stop().animate({
					"scrollTop": h * index
				}, 1000, function() {
					flag = true;
				});
			}
		};
	})

	$(".num>ul>li").click(function() {
		var h1 = $('body').height();
		index = $(this).index();
		$(".num>ul>li").eq(index).addClass("active").siblings().removeClass("active");
		$("html,body").stop().animate({
			"scrollTop": h1 * index
		}, 1000);
	})
	$("html,body").stop().animate({
		"scrollTop": index
	}, 1000);

	//下拉菜单
	$("#kuang").hover(function() {
		$(".kuang").slideDown();
	}, function() {
		$(".kuang").slideUp();
	})
	$(".kuang").hover(function() {
		$(".kuang").stop()
	})

	//轮播图	
	var index1 = 0;
	var width = $(".imgage>li").width();
	//	console.log(width)
	var animation = null;
	animation = function() {
		index1 = index1 > 2 ? 0 : index1;
		$(".imgage").stop().animate({
			left: -width * index1
		}, 100);
		$('.number>li').eq(index1).addClass('color').siblings().removeClass('color');
	}
	var zhuan = null;
	zhuan = setInterval(function() {
		index1++;
		animation();
	}, 1300)
	$(".a-bottom").hover(function() {
		//  	$(".sec").show();

		clearInterval(zhuan)
	}, function() {
		//  	$(".sec").hide();
		zhuan = setInterval(function() {
			index1++;
			animation();
		}, 1300)
	})
	$(".number>li").mouseenter(function() {
		index1 = $(this).index();
		animation();
	})

	//第二模块字符上升
	$(".x1").mouseenter(function() {
		$(".x4").slideDown();
	})

	$(".x1").mouseleave(function() {
		$(".x4").slideUp();
	})
	$(".x2").mouseenter(function() {
		$(".x5").slideDown();
	})

	$(".x2").mouseleave(function() {
		$(".x5").slideUp();
	})
	$(".x3").mouseenter(function() {
		$(".x6").slideDown();
	})
	$(".x3").mouseleave(function() {
		$(".x6").slideUp();
	})

    //手风琴
    $('#sfq>ul>li').mouseenter(function() {
					//hasClass()检查当前的元素是否含有某个特定的类，如果有，则返回true。
					if(!$(this).hasClass('cool')) {
						$('#sfq>ul>li').removeClass('cool');
						$(this).addClass('cool');

						$('.cool').stop().animate({
							width: 700
						}, 500, 'linear');
						//linear:每一步的距离和前一步都是相同的，也就是等速
						$('#sfq>ul>li').not('.cool').stop().animate({
							//从包含所有段落的集合中删除 类名 为 "cool" 的段落：
							width: 100
						}, 500, 'linear');
					}
				});
				
				$('#sfq').mouseleave(function(){  
						$('#sfq>ul>li').removeClass('cool');
						$('#sfq>ul>li').not('.cool').stop().animate({
							//从包含所有段落的集合中删除 类名 为 "cool" 的段落：
							width: 100
						}, 500, 'linear');
				})





})