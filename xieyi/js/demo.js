var h = document.documentElement.clientHeight || document.body.clientHeight
$(".jian:eq(0)").click(function() {
	$("#contact").css("display", "none")
	$("#wechat div").css({"background-color":"black","opacity":"0.2"})
})
$("#wechat div,#wechat img").click(function(){
	$("#wechat div").css({"background-color":"black","opacity":"0.2"})
	$(this).css({"background-color":"white","opacity":"0.5"})
})
$("#wechat div:eq(0)").click(function() {
	$("#contact").css("display", "block");
	$(".contact-main:eq(0)").css("display", "block");
	$(".ewm:eq(0)").css("display", "none");
})
$("#wechat div:eq(1)").click(function() {
	$("#contact").css("display", "block");
	$(".contact-main:eq(0)").css("display", "none");
	$(".ewm:eq(0)").css("display", "block");
})
$("#wechat div:eq(2)").click(function() {
	$("#contact").css("display", "block");
	$(".contact-main:eq(0)").css("display", "none");
	$(".ewm:eq(0)").css("display", "block");
})
if(window.navigator.userAgent.indexOf("MSIE")>-1){
	$(".contact-main input:eq(0)").val("姓名*")
	$(".contact-main input:eq(1)").val("固定电话:")
	$(".contact-main input:eq(2)").val("手机号:")
	$(".contact-main input:eq(3)").val("电子邮件:")
	$(".contact-main input").css("color", "#c1c1c1");
	$(".contact-main input").on("focus", function() {
		if ($(this).val() == $(this).attr("index")) {
			$(this).val(null);
			$(this).css("color", "black");
		}	
	})
	$(".contact-main input").on("blur", function() {
		if (!$(this).val()) {
			conindex = $(this).attr("index");
			$(this).val(conindex);
			$(this).css("color", "#c1c1c1");
		}
	})
	$("#texta").text("留言内容:")
	$("#texta").css("color", "#c1c1c1");
	$("#texta").on("focus", function() {
		if ($(this).text()==$(this).attr("index")) {
			$(this).text("");
			$(this).css("color", "black");
		}
	})
	$("#texta").on("blur", function() {
		if (!$(this).text()){
			conindex1 = $(this).attr("index");
			$(this).text(conindex1);
			$(this).css("color", "#c1c1c1");
		}
	})
}
$(".logo:eq(0)").click(function(){
	window.location.href="index.html";
})