$(function(){
	//���˵�
	var top = $(".sec-mainL").offset().top+$(".sec-mainL").outerHeight();
	$(".sec-mainNav").children("li").hover(
		function(){
			/*����ʾ�����˵�*/
			$(this).siblings().removeClass("hover");
			$(this).addClass("hover");
			$(this).siblings().find(".menu-panel").hide();
			$(this).find(".menu-panel").show();
			//�ж��������˵��Ƿ񳬳��˵��߶�
			var litop = $(this).find(".menu-panel").offset().top + $(this).find(".menu-panel").outerHeight();
			if(litop>top){
				$(this).find(".menu-panel").css("top","-"+(litop-top)+"px");
			}
		},
		function(){
			$(this).removeClass("hover");
			$(this).find(".menu-panel").hide();
		}
	);
	

	/**
	 * @ͼƬ�ֲ�
	 */
	var page = -1;//���ÿ�ʼ�ֲ���һ��ͼƬ
	var len = 4;//�趨ͼƬ����
	var stop = false;//�����ֲ��Ƿ�ֹͣ

	/**�����ֲ�����**/
	function slide(){
		if(!stop){
			page++;//��ǰ�ֲ���1����һ��ͼƬ��ʾ��
			if(page == len){
				page = 0;//��page����ͼƬ����ʱ���ӵ�һ��ͼƬ��ʼ����
				$(".silde").animate({"left":"0"},300);
			}
			$(".silde").animate({"left":"-"+page*666+"px"},300);
			$(".silde-page li").removeClass("on");
			$(".silde-page li").eq(page).addClass("on");
		}
		setTimeout(slide,3000);
	}
	slide();
	/**���ֲ�ͼ  **/
	$(".focus").mouseover(function(){
		stop = true;//ֹͣ�ֲ�
	}).mouseout(function(){
		stop = false;//����뿪 ��ʼ�ֲ�
	});
	/**��ť��**/
	$(".silde-page li").mouseover(function(){
		page = $(this).index();//��page ���óɵ�ǰ�����ť�� �±�ֵ
		$(".silde").stop(true,true).animate({"left":"-"+page*666+"px"},300);
		$(".silde-page li").removeClass("on");
		$(".silde-page li").eq(page).addClass("on");
	});


	//�Ҳ�������ʽ
	$(".login").hover(
		function(){ 
			$(".search-all").css("overflow","visible");
			$(this).find(".search-all").stop(true,true).animate({"opacity":"1","height":"140px"},500);
		},
		function(){
			$(".search-all").css("overflow","hidden");
			$(this).find(".search-all").stop(true,true).animate({"opacity":"0","height":"0"},500);
			$(".search-all .btm:visible").hide();
		}
	);
		
	$(".search-all a").click(function(){
		if($(this).find(".btm").is(":hidden")){
			$(".search-all .btm:visible").hide();
			$(this).css("zIndex","2");
			$(this).siblings().css("zIndex","1");
			$(this).find(".btm").show("fast");
		}else{
			var self = $(this);
			$(this).find(".btm").hide("fast",function(){
				self.css("zIndex","1");
			});
		}	
	});

	//�Ҳ�����
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$(".ad").hide();
			$(".rightMenu").animate({"bottom":"50px"},300);
		}else{
			$(".ad").show();
			$(".rightMenu").stop(true,true).css("bottom","-150px");
		}
	});
	//��òʱ���΢����
	rightMenu($(".menu-edu"),"700","120");//�ʱ�
	rightMenu($(".menu-wx"),"186","96");//΢��
	//��òʱ���΢�Ŷ�������
	$(".rightMenuHover").hover(
		function(){
			if(rightMenuTime) clearTimeout(rightMenuTime);
			$(this).show();
		},
		function(){
			$(this).hide();
		}
	);
	//���ض���
	$(".backTop").click(function(){
		$("html,body").animate({"scrollTop":"0"},500);
	});
	
});
var rightMenuTime=null;
//��òʱ���΢��
function rightMenu(obj,w,h){
	obj.hover(
		function(){
			if(rightMenuTime) clearTimeout(rightMenuTime);
			var index = $(".rightMenuBtn").index($(this));//��ȡindexֵ
			//���еĶ�����������
			$(".rightMenuHover").hide();
			//����������ʾ
			$(".rightMenuHover").eq(index).css({"width":0,"height":0,"opacity":0,"display":"block"}).stop(true,true).delay(50).animate({"width":w+"px","height":h+"px","opacity":1},300,function(){
				$(".rightMenuHover").eq(index).attr("style","display:block")
			});
		},
		function(){
			rightMenuTime = setTimeout(function(){
				$(".rightMenuHover").stop(true,true).hide();
			},100);
		}
	);
}


