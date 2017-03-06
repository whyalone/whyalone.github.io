$(window).ready(function() {

	var eventcontrol = 0;
	var time_0ld = 0;
	var time_now = 0;
	//nav

	$(window).scroll(function(event) {

		Fnhold(FnScroll, 100);
		$("#nav .warp > ul").css("left", -120);

	})

	$("#search").click(function() {
		$("#search").addClass("search_text");
		$("#search input").attr("type", "text");
	})

	$("#close").click(function(ev) {
		ev.stopPropagation();
		$("#search").removeClass("search_text");
		$("#search input").removeAttr("type");
	})

	$("#menu").click(function(ev) {
		ev.stopPropagation();
		var menu_left = parseInt($("#nav .warp > ul").css("left"));
		if(menu_left == 0) {
			$("#nav .warp > ul").css("left", -120);
		} else {
			$("#nav .warp > ul").css("left", 0);
		}

	})
	
	$("body").click(function(){
		var menu_left = parseInt($("#nav .warp > ul").css("left"));
		
		$("#nav .warp > ul").css("left", -120);
		
		
	})

	function FnScroll() {
		//导航栏高度度动画
		if($(window).scrollTop() > 100) {
			setTimeout(function() {
				$("#nav").css({
					"top": 0,
					"padding": 0,
					"background-color": "rgba(0,0,0,1)"
				});
			}, 100);

		} else {
			setTimeout(function() {
				$("#nav").css({
					"top": 20,
					"padding-top": 8,
					"padding-buttom": 8,
					"background-color": "rgba(0,0,0,0)"
				});
			}, 100);
		}

		//		//视觉差效果
		//		//			console.log($(this).scrollTop()+"_"+$('#ins_qualilty').offset().top+'_'+$(this).innerHeight());
		//		if ($(window).scrollTop() + $(window).innerHeight() > $('#ins_qualilty').offset().top) {
		//
		//			FnBackgroundPosition($('#ins_qualilty'), 0);
		//
		//
		//		}
		//
		//		if ($(window).scrollTop() + $(window).innerHeight() > $('#ins_award').offset().top) {
		//
		//			FnBackgroundPosition($('#ins_award'), 0);
		//		}

	}

	//	function FnBackgroundPosition(obj, adjust) {
	//		//		var a = ($(window).scrollTop() + $(window).innerHeight()- obj.offset().top) - obj.innerHeight() + adjust;
	//		var a = ((2 * obj.innerHeight() * ($(window).scrollTop() + $(window).innerHeight() - obj.offset().top)) / (obj.innerHeight() + $(window).innerHeight())) - obj.innerHeight() + adjust;
	//
	//		setTimeout(function () {
	//			obj.css({
	//				"background-position": "center " + a + 'px'
	//			})
	//		}, 100);
	//	}
	//滚动节流
	function Fnhold(fn, t) {
		if($(window).onScrollTag == undefined) {
			$(window).onScrollTag = true;
		}
		setTimeout(function() {
			$(window).onScrollTag = undefined;
			fn && fn();
		}, t);
	}

})