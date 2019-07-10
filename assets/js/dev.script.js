$("._tab-main-list").on("click", "._tab-main", function(e) {
	e.preventDefault();
	
  $("._tab-main").removeClass("_tab-main-active");
	$("._tab-main-content").removeClass("_show-main");
	$(this).addClass("_tab-main-active");
	$($(this).attr('href')).addClass("_show-main");	
});

$("._tab-list").on("click", "._tab", function(e) {
	e.preventDefault();
	
  $("._tab").removeClass("_tab-active");
	$("._tab-content").removeClass("_show");
	$(this).addClass("_tab-active");
	$($(this).attr('href')).addClass("_show");	
});

$("#_tab-nav-toggle").on('click', function(){
	$("._tab-main-stuck").toggleClass("_tab-main-stuck-active");
	$("._tab-nav-icon").toggleClass("_tab-nav-active");
});