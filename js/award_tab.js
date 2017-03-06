$(window).ready(function(){ 
	
	var award_tab = 0;
	var w_w = $(window).innerWidth();
	
	$("#ins_award .btn_l").ontouchend(function(){ 
		award_tab++;
		if(award_tab==3){
			award_tab=2;
		}
		$(".award_list").css("margin-left",award_tab*(-100)+"%");
	})
	
		$("#ins_award .btn_r").ontouchend(function(){ 
		award_tab--;
		if(award_tab==-1){
			award_tab=0;
		}
		$(".award_list").css("margin-left",award_tab*(-100)+"%");
	})
	
})
