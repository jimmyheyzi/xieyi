$(".nav li:eq(5)").css("border-bottom", "2px solid #cedb00");
$("#classify li:eq(0)").css({
	"color":"black",
	"border-bottom":"2px solid #000"
})
window.onscroll = function() {
	if ($(document).scrollTop() + h >= $("body:eq(0)").outerHeight()) {
		$("#top").css("bottom", "66px");
	} else {
		$("#top").css("bottom", "0");
	}
}
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
var liindex=0;
$(".mid-right img").click(function(){
	index=$(this).attr("src");
	if(liindex==0){
		cindex=index.replace(/xx/,"dd");
	}else if(liindex==1){
		cindex=index.replace(/x/,"d");
	}else{
		cindex=index.replace(/xxx/,"ddd");
	}
	$(".mid-left img").attr("src",cindex);
})
$(".mid-right img").hover(function(){
	$(this).stop().animate({
		"opacity":0.5,
	},400);
},function(){
	$(this).stop().animate({
		"opacity":1,
	},400);
})
var liimgsrc=[["img/intera/dd1.jpg","img/intera/xx1.jpg","img/intera/xx2.jpg","img/intera/xx3.jpg","img/intera/xx4.jpg","img/intera/xx5.jpg","img/intera/xx6.jpg"],["img/intera/d1.jpg","img/intera/x1.jpg","img/intera/x2.jpg","img/intera/x3.jpg","img/intera/x4.jpg","img/intera/x5.jpg","img/intera/x6.jpg"],["img/intera/ddd1.jpg","img/intera/xxx1.jpg","img/intera/xxx2.jpg","img/intera/xxx3.jpg","img/intera/xxx4.jpg","img/intera/xxx5.jpg","img/intera/xxx6.jpg"]]
$("#classify li").click(function(){
	liindex=$(this).attr("index");
	$(".mid-left img").attr("src",liimgsrc[liindex][0]);
	$(".mid-right img:eq(0)").attr("src",liimgsrc[liindex][1]);
	$(".mid-right img:eq(1)").attr("src",liimgsrc[liindex][2]);
	$(".mid-right img:eq(2)").attr("src",liimgsrc[liindex][3]);
	$(".mid-right img:eq(3)").attr("src",liimgsrc[liindex][4]);
	$(".mid-right img:eq(4)").attr("src",liimgsrc[liindex][5]);
	$(".mid-right img:eq(5)").attr("src",liimgsrc[liindex][6]);
	$("#classify li").css({
		"color":"#c1c1c1",
		"border-bottom":"none"
	})
	$(this).css({
		"color":"#000",
		"border-bottom":"2px solid #000000"
	})
})
