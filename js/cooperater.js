(function() {

	$('#cooperater .warp').css({

		width: $(window).innerWidth()
	});

})()

$(window).ready(function() {
	$("#cooperater").mousedown(function(ev) {
		ev.preventDefault();
		var posx1 = parseInt(ev.clientX);
		var distence = posx1 - parseInt($(".parrent_list").css("margin-left"));
		var that = $(".parrent_list");
		$(window).mousemove(function(ev2) {
			var posx2 = parseInt(ev2.clientX);
			var m_l = posx2 - distence;
			if(m_l > 190) {
				m_l = 190;
			} else if(m_l < -750) {
				m_l = -750;
			} else {
				that.css("transition", "none");
			}
			that.css("margin-left", m_l);

			$(window).mouseup(function(ev) {
				$(window).off("mousemove");
				var fml = null;
				if(m_l<=190 && m_l>0){
					fml = 0;
					that.css("transition", "margin-left 0.5s");
				} else if (m_l<-560 && m_l>=-750){
					fml = -560;
					that.css("transition", "margin-left 0.5s");
				} else {
					fml = m_l;
				}
				that.css("margin-left", fml);
			})

		})
	})

})