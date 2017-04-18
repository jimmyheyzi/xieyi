$(document).ready(function(){
	h = document.documentElement.clientHeight || document.body.clientHeight
	$("#index-header").height(h);
	$("#index-serve").height(h);
	$("#about").height(h);
	$("#company").height(h);
	$("#client").height(h);
	$(".item11").css({
		"opacity":0,
	})
	$(".item11").on("mouseenter",function(){
		$(this).stop(true).animate({
			"opacity":1,
		},1000)
	})
	$(".item11").on("mouseleave",function(){
		$(this).stop(true).animate({
			"opacity":0,
		},1000)
	})
	$("#top").click(function() {
		var t = $(document).scrollTop();
		var timer = setInterval(function() {
			$(document).scrollTop(t -= 50);
			if (t <= 0) {
				t = 0;
				clearInterval(timer);
			}
		}, 1);
	})
	var c=0;
	var col=true;
	window.onscroll = function() {
		if ($(document).scrollTop() + h >= $("body:eq(0)").outerHeight()) {
			$("#top").css("bottom", "66px");		
		} else {
			$("#top").css("bottom", "0");
		}
		if($(document).scrollTop()>2*h-100){
			moveFn();
		}
		if($(document).scrollTop()>3*h-100){
			downFn();
		}
	}
})
$("#about1").css("opacity","0");
$("#about3").css("opacity","0");
function moveFn(){
	$("#about1").animate({
		"opacity":1,
		"left":0,
	},1000);
	$("#about3").animate({
		"opacity":1,
		"right":0,
	},1000)
}
var ct1=0,ct2=0,ct3=0,ct4=0,ct5=0,ct6=0,ct7=0;
var ol=true;
function downFn(){
	if(ol){
		ol=false;
		t1=setInterval(function(){
			$(".conmpang-num:eq(0)").text(ct1+=2);
				if(ct1>=1000){
					clearInterval(t1);
				}
			},10)
		t2=setInterval(function(){
			$(".conmpang-num:eq(1)").text(ct2+=1);
				if(ct2>=6){
					clearInterval(t2);
				}
			},833)
		t3=setInterval(function(){
			$(".conmpang-num:eq(2)").text(ct3+=2);
			if(ct3>=76){
				clearInterval(t3);
				}
			},131)
		t4=setInterval(function(){
			$(".conmpang-num:eq(3)").text(ct4+=2);
			if(ct4>=48){
				clearInterval(t4);
				}
			},208)
		t5=setInterval(function(){
			$(".conmpang-num:eq(4)").text(ct5+=320);
			if(ct5>=16000){
				clearInterval(t5);
				}
			},100)
		t6=setInterval(function(){
			$(".conmpang-num:eq(5)").text(ct6+=2);
			if(ct6>=24){
				clearInterval(t6);
				}
			},416)
		t7=setInterval(function(){
			$(".conmpang-num:eq(6)").text(ct7+=4);
			if(ct7>=180){
				clearInterval(t7);
				}
			},111)
	}
}
$(".bg").eq(0).css({
	opacity:1,
	display:"block"
})
var point=1;
var bgtiemr = setInterval(function(){
	$(".bg").eq(point).fadeIn(1000).siblings('.bg').fadeOut(1000)
	$(".point").attr("src","img/index/piont1.png").css({"width":"0.58%","right":"23px"});
	$(".point").eq(point).attr("src","img/index/point.png").css({"width":"0.8%","right":"21px"});
	point++;
	if(point==4){
		point=0;
	}
},3000)
$(".point").click(function(){
	$(".point").attr("src","img/index/piont1.png").css({"width":"0.58%","right":"23px"});
	$(this).attr("src","img/index/point.png").css({"width":"0.8%","right":"21px"});
	point=$(this).attr("point");
	$(".bg").eq(point).fadeIn(1000).siblings('.bg').fadeOut(1000)
})

