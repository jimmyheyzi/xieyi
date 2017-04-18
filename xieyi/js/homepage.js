var h = document.documentElement.clientHeight || document.body.clientHeight
var img = ["khsj", "ggjz", "syjz", "jzjz", "jgsj", "snsj", "dggz", "shbx"];
$("#header").height(h);
$(".nav li:eq(7)").css("border-bottom", "2px solid #cedb00");
$(".bar-nav li span:eq(0)").addClass("border");
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
for (var a = 0; a <2; a++) {
		for (var i = 1; i < 8; i++) {
			addImg(img[a], i);
		}
	}
var c=2;
var col=true;
window.onscroll = function() {
	if ($(document).scrollTop() + h >= $("body:eq(0)").outerHeight()) {
		$("#top").css("bottom", "66px");
		c++;
		if(c<img.length){
			if(col){
				a=c;
				for (var i = 1; i < 8; i++) {
					addImg(img[a], i);
				}
			}			
		}else{
			col=false;
		}
	} else {
		$("#top").css("bottom", "0");
	}
}
var _ul = document.getElementById("water");
var ul = _ul.getElementsByTagName("ul")[0];
var li = ul.getElementsByTagName("li");
var img_src=[];
var j=0;
var bol=false;
function addImg(num, i) {
	var img = document.createElement("img");
	img.onload = function() {
		var min = getMinHeight();
		li[min].appendChild(img);
		ul.style.height = li[getMinHeight()].offsetHeight + "px";	
		img_src[j]=img;
		img.setAttribute("index",j)
		j++;
	}
	img.src = "img/" + num + "/" + i + ".jpg";
}


function getMinHeight() {
	var min = 0;
	for (var i = 1; i < li.length; i++) {
		if (li[min].offsetHeight > li[i].offsetHeight) {
			min = i;
		}
	}
	return min;
}
$("#bar li span:eq(0)").click(function() {
	$(".water-11 img").remove();
	$(".water-1:eq(0)").css("height", "0");
	img_src=[];
	bol=false;
	for (var a = 0; a < img.length; a++) {
		for (var i = 1; i < 8; i++) {
			addImg(img[a], i);
		}
	}
	col=false;
	$("#bar li span").removeClass("border");
	$(this).addClass("border");
})
$("#bar li span:not(.all)").click(function() {
	$(".water-11 img").remove();
	img_src=[];
	bol=true;
	col=false;
	$(".water-1:eq(0)").css("height", "0");
	index = $(this).attr("index");
	for (var i = 1; i < 8; i++) {
		addImg(img[index], i);
	}
	$("#bar li span").removeClass("border");
	$(this).addClass("border");
})

function getData() {
	return Math.floor(Math.random() * 20 + 4);
}

function Hover() {
	$(".water-11").on("mouseenter", "img", function() {
		var left = $(this).position().left;
		var top = $(this).position().top;
		var width = $(this).width();
		var height = $(this).height();
		imgindex=$(this).attr("index");
		imgsrc = $(this).attr("src");
		imgsrc1 = imgsrc.slice(9, 12);
		imgsrc2 = imgsrc1.split(".")[0];
		$("#mask").css({
			"left": left,
			"top": top,
			"width": width,
			"height": height,
			"display": "block",
		}).stop(true).animate({
			"opacity": 0.5,
		}, 400)
	});
	$("#mask").on("mouseleave", function() {
		$("#mask").css({
			"opacity": 0,
			"display": "none"
		});
	})
	$("#gt").on("mouseenter", function() {
		$(this).stop(true).animate({
			"opacity": 0.6,
		}, 200)
	})
	$("#gt").on("mouseleave", function() {
		$(this).stop(true).animate({
			"opacity": 0.2,
		}, 200)
	})
	$("#lt").on("mouseenter", function() {
		$(this).stop(true).animate({
			"opacity": 0.6,
		}, 200)
	})
	$("#lt").on("mouseleave", function() {
		$(this).stop(true).animate({
			"opacity": 0.2,
		}, 200)
	})
}
Hover();
function TabFn(){
	if(imgwidth>imgheight){
			$("#sel-outer").css({
				"width":imgwidth*1.5,
				"height":imgheight*1.5
			})
		}else{
			$("#sel-outer").css({
				"width":imgwidth,
				"height":imgheight
			})
		}
		$("#lt").css("top",$("#sel-outer").height()/2-26);
		$("#gt").css("top",$("#sel-outer").height()/2-26);
}
$("#gt").click(function(){
	imgindex--;
	if(bol){
		if(imgindex>=img_src.length-7){
			 imgwidth=img_src[imgindex].offsetWidth;
			 imgheight=img_src[imgindex].offsetHeight;
			TabFn();
			$("#sel-outer img:eq(0)").attr("src",img_src[imgindex].getAttribute("src"));
		}else{
			imgindex=img_src.length-7;
		}
	}else{
		if(imgindex>=0){
			 imgwidth=img_src[imgindex].offsetWidth;
			 imgheight=img_src[imgindex].offsetHeight;
			TabFn();
			$("#sel-outer img:eq(0)").attr("src",img_src[imgindex].getAttribute("src"));
		}else{
			imgindex=0;
		}
	}
})
$("#lt").click(function(){
	imgindex++;
	if(imgindex<=img_src.length){
		imgwidth=img_src[imgindex].offsetWidth;
		imgheight=img_src[imgindex].offsetHeight;
		TabFn();
		$("#sel-outer img:eq(0)").attr("src",img_src[imgindex].getAttribute("src"));
	}else{
		imgindex=img_src.length;
	}
})
$("#close").click(function() {
	$("#sel-outer").css("display", "none");
	$("#select").css("display", "none");
})
$("#mask").on("click", function() {
	$("#sel-outer").css("display", "block");
	$("#select").css("display", "block");
	$("#sel-outer img:eq(0)").attr("src", imgsrc);
	sel_width = $("#sel-outer img:eq(0)").width();
	sel_height = $("#sel-outer img:eq(0)").height();
	$("#sel-outer").css({
		"height": "100%",
		"width": "100%",
		"opacity": 0
	})
	if (sel_width > sel_height) {
		$("#sel-outer img:eq(0)").css({
			"width": "100%",
			"height": "auto"
		})
		$("#sel-outer").css({
			"width": $("#sel-outer img:eq(0)").width() * 0.5,
			"height": $("#sel-outer img:eq(0)").height() * 0.5,
		})
		$("#sel-outer").animate({
			"opacity": 1,
		}, 600)
		$("#lt").css("top",$("#sel-outer").height()/2-26);
		$("#gt").css("top",$("#sel-outer").height()/2-26);
	} else {
		$("#sel-outer img:eq(0)").css({
			"height": "100%",
			"width": "auto"
		})
		$("#sel-outer").css({
			"height": $("#sel-outer img:eq(0)").height() * 0.9,
			"width": $("#sel-outer img:eq(0)").width() * 0.9,
		})
		$("#sel-outer").animate({
			"opacity": 1,
		}, 600)
		$("#lt").css("top",$("#sel-outer").height()/2-26);
		$("#gt").css("top",$("#sel-outer").height()/2-26);
	}
});
$("#nav img:eq(1)").animate({
	"width": "11.93%",
	"left": "44%",
	"opacity": 1
}, 800);
setTimeout(function() {
	$("#nav img:eq(2)").animate({
		"width": "46.49%",
		"left": "9.51%",
		"opacity": 1
	}, 500);
}, 800)