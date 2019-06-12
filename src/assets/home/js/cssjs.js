$(function() {
	$(".con-right-down-con ul li:even").addClass("js");
	$(".con-right-down-con ul li:odd").addClass("os");
	
	
	var doscroll = function() {
		var $parent = $('.gj-content-list');
		var $first = $parent.find('li:first');
		var height = $first.height();
		$first.animate({
			height: 0 //或者改成： marginTop: -height + 'px'
		}, 500, function() { // 动画结束后，把它插到最后，形成无缝
			$first.css('height', height).appendTo($parent);
			// $first.css('marginTop', 0).appendTo($parent);
		});
	};
	setInterval(function() {
		doscroll()
	}, 2000);
})