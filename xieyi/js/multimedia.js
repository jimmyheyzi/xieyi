
$("#classify li:eq(0)").css({
	"color":"black",
	"border-bottom":"2px solid #000"
})
$("#mu-bar li span:eq(0)").css({
	"color":"black",
	"border-bottom":"2px solid #000"
})
window.onscroll = function() {
	if ($(document).scrollTop() + h >= $("body:eq(0)").outerHeight()) {
		$("#top").css("bottom", "66px");
	} else {
		$("#top").css("bottom", "0");
	}
};
$("#top").click(function() {
	var t = $(document).scrollTop();
	var timer = setInterval(function() {
		$(document).scrollTop(t -= 50);
		if (t <= 0) {
			t = 0;
			clearInterval(timer);
		}
	}, 1);
});
$(".product-bar li:eq(1)").css({
	"color":"black",
	"border-bottom":"2px solid #000"
});
$(".mu-main").on("mouseenter","img",function(){
	var m_width=$(this).width();
	var m_height=$(this).height();
	var m_top=$(this).position().top;
	var m_left=$(this).position().left;
	console.log(m_top,m_left);
	$("#mumask").css({
		"top":m_top,
		"left":m_left,
		"width":m_width,
		"height":m_height,
		"display":"block",
	});
	$("#mumask").stop().animate({
		"opacity":1
	},400)
});
$("#mumask").on("mouseleave",function(){
	$(this).css({
		"opacity": 0,
		"display": "none"
	})
});
$("#bigimg img:eq(0)").hover(function(){
	$(".imgyellow").stop().animate({
		"opacity":1,
	},400)
},function(){
	$(".imgyellow").css("opacity","0")
});
$("#mu-bar li span").click(function(){
	$("#mu-bar li span").css({
		"color":"#c1c1c1",
		"border-bottom":"none"
	})
	$(this).css({
		"color":"#000",
		"border-bottom":"2px solid #000000"
	})
});
var qyxc=[["img/mult/x1.jpg","img/mult/x2.jpg","img/mult/x3.jpg"],["img/mult/x4.jpg","img/mult/x5.jpg"],["img/mult/x6.jpg","img/mult/x7.jpg"],["img/mult/x8.jpg","img/mult/x9.jpg"]]
$("#mu-bar li span:not(.fisrt)").click(function(){
//	$(".mu-main img").remove();
//	var img=document.createElement("img");
//	$(".mu-main").appendChild()
})
