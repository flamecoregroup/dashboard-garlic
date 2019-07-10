/*------------------------------------------------------------------
[Master Script]
-------------------------------------------------------------------*/

$(document).ready(function(){

	/*------------------------------------------------------------------
	Install Mnel
	------------------------------------------------------------------*/
	console.log("installed mnel@alpha");

	/*------------------------------------------------------------------
	load resize
	------------------------------------------------------------------*/
	// $(window).resize(function(){
	// 	location.reload();
	// });

	/*------------------------------------------------------------------
	Materilize
	------------------------------------------------------------------*/
	M.AutoInit(); 

	/*------------------------------------------------------------------
	Lazy Load
	------------------------------------------------------------------*/
	$('._lazy').lazy();
        
	// $('._lazy').lazy({
	//   effect: "fadeIn",
	//   effectTime: 700,
	//   threshold: 0
	// });

	/*------------------------------------------------------------------
	Mousewheel Alert
	------------------------------------------------------------------*/
	// window.addEventListener("wheel", _mousewheel);

	// function _mousewheel(){
	//     $("#_MW-Alert").addClass("_MW-Alert-active");
	// }
	
	/*------------------------------------------------------------------
	nicescoll
	------------------------------------------------------------------*/
	// $("body").niceScroll({
	// 	zindex:'99999999',
	// 	cursorcolor: "rgba(0,0,0,0.4)",
	// 	cursorwidth:"6px",
	// 	cursorborder:false,
	// 	horizrailenabled: false,
	// 	enablemousewheel: false,
	// });

	// $("._scroll-magnum").niceScroll({
	// 	zindex:'99999999',
	// 	cursorcolor: "rgba(0,0,0,0.4)",
	// 	cursorwidth:"5px",
	// 	cursorborder:false,
	// 	horizrailenabled: false,
	// 	enablemousewheel: false,
	// });

	/*------------------------------------------------------------------
	Slick
	------------------------------------------------------------------*/
	// $("#_slick").slick({
	//     dots: true,
	//     autoplay: true,
	//     autoplaySpeed: 5000,
	//     speed: 800
	// });

	/*------------------------------------------------------------------
	Media Query
	------------------------------------------------------------------*/
	// function _mq(mobile) {
	//   if (mobile.matches) {
	//   	// mobile
	  
	//   } else {
	//     // desktop

	//     // alert('desktop');
	  
	//   }
	// }

	// var mobile = window.matchMedia("(max-width: 1023px)")
	// _mq(mobile)
	// mobile.addListener(_mq);

	/*------------------------------------------------------------------
	Scroll Top
	------------------------------------------------------------------*/
	// $(window).on('scroll', function(){
    //     _scrollTopStuck();
    // });

    // function _scrollTopStuck(){
 
    //     var _scroll_top_stuck = $("#_scroll-top-stuck"),
    //         _scroll_top = $("._scroll-top"),
    //         _scroll = $(this).scrollTop();

    //         if(_scroll > _scroll_top_stuck.offset().top - 0){
    //             _scroll_top.fadeIn(200);
    //         }else{
    //             _scroll_top.fadeOut(200);
    //         }
    // };

});
