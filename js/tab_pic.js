(function() {
	
	$(".slider0_or").css("display", 'block');
	setTimeout(function() {
		$(".slider0_or").addClass("slider0");
	}, 0)
	
	$('#tab_pic').css({
		height: $(window).innerHeight()
	});

})()

$(window).ready(function() {

	var tab_num = 0;

	$("#tab_pic .btn_l").click(function() {
		
		$(".slider"+ tab_num + "_or").css("opacity", '0');
		
		$(".slider"+ tab_num + "_or").css("display", 'none');
		$(".slider" + tab_num + "_or").removeClass("slider"+tab_num);
		
		tab_num--;
		
		if(tab_num==-1){
			tab_num = 3;
		}
		$(".slider" + tab_num + "_or").css("display", 'block');
		setTimeout(function() {
			$(".slider" + tab_num + "_or").addClass("slider"+tab_num);
		}, 0)

	})
	
	$("#tab_pic .btn_r").click(function() {

		$(".slider"+ tab_num + "_or").css("display", 'none');
		$(".slider" + tab_num + "_or").removeClass("slider"+tab_num);
		
		tab_num++;
		
		if(tab_num==4){
			tab_num = 0;
		}
		$(".slider" + tab_num + "_or").css("display", 'block');
		setTimeout(function() {
			$(".slider" + tab_num + "_or").addClass("slider"+tab_num);
		}, 0)

	})
	
})