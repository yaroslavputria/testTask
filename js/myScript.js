$(document).ready(function(){
	var widthPage = document.documentElement.clientWidth;
	var resizeFlagForLists = true;
	if (widthPage < 1200 && resizeFlagForLists){
  		$(".list-header").next().hide();
  		resizeFlagForLists = false;
  }
	$(".list-header").click(function(e){
		$(e.target).next().toggle();
	});
	$(window).resize(function(e){
  	widthPage = document.documentElement.clientWidth;
  	if (widthPage < 1200 && resizeFlagForLists){
  		$(".list-header").next().hide();
  		resizeFlagForLists = false;
  	}
	});
});