$(window).load(function(){
	var $win = $(this);
	
	$win.resize(function() {
		// 取得相關的寬高，接著再判斷比例設定縮放
		var winWidth = $win.width(); 


		if(winWidth > 640) {
			$(".movie").replaceWith(function(){
				return "<div class='movie'><iframe width='433' height='273' src='https://www.youtube.com/embed/4YlvKNu_UUE?rel=0&amp;showinfo=0&autoplay=1&loop=1&mute=true&playlist=xow5nmd6PRA' frameborder='0' allowfullscreen></iframe></div>";
    		});
		} else {
			$(".movie").replaceWith(function(){
				return "<div class='movie'><iframe width='433' height='273' style='display:none;' src='https://www.youtube.com/embed/4YlvKNu_UUE?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe></div>";
    		});
		}
	}).resize();
});