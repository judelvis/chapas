
/**
* Popup window launcher
*
* @url - Url address for the popup window
* @title - Popup window title
* @w - Width of the window
* @h - Height of the window
*/
function ozyPopupWindow(url, title, w, h) {
	"use strict";
	var left = (screen.width/2)-(w/2), top = (screen.height/2)-(h/2);
	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

/**
* To check iOS devices and versions
*/
function ozyGetOsVersion() {
	"use strict";
    var agent = window.navigator.userAgent.toLowerCase(),
        start = agent.indexOf( 'os ' );

    if ( /iphone|ipod|ipad/.test( agent ) && start > -1 ) {
        return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
    } else {
        return 0;
    };

};

/**
* To test if a link is external or not
*
* @_link String - The url need to be tested
*/
/*function ozyIsLinkExternal(_link) {
	"use strict";
	var comp = new RegExp(location.host);
	return comp.test(_link);
}*/

/**
* ozyReplaceAll
*
* To replace all matching string
*
* @findstr String - What to find
* @replacestr String - What to replace with found
* @str String - String will be searched
*/
function ozyReplaceAll(findstr, replacestr, str) { 
	var re = new RegExp(findstr, 'g'); 
	str = str.replace(re, replacestr); 
	return str; 
}

jQuery(document).resize(function() {
	"use strict";
	if('classic' === headerType.menu_type) { // re init superfish menu		
		jQuery('ul.sf-menu').supersubs({minWidth:8,maxWidth:16,extraWidth:1}).superfish({
			delay: 200,
			animation: {height:'show'},
			speed: 125,
			autoArrows: true
		});
	}
});

jQuery(document).ready(function($) {
	"use strict";

	var sidr_side = 'right', ozyMainWindowWidth, subMenuWidth, subMenuOffset, newSubMenuPosition, ozyClickDrag, ozyIosVersion, ozyCurrentVideoContainer, ozyCurrentVideoContainerShield;
	
	/**
	* Primary navigation menu init
	*/
	if('classic' === headerType.menu_type) { // superfish
		jQuery('ul.sf-menu').supersubs({minWidth:8,maxWidth:16,extraWidth:1}).superfish({
			delay:       200,
			animation:   {height:'show'},
			speed:       125,
			autoArrows:  true
		});
	} else if('mega' === headerType.menu_type) { // dc mega menu
		jQuery('.mega-menu').dcMegaMenu({
			rowItems: '5',
			speed: 100,
			effect: 'fade',
			fullWidth: true
		});
	}
	
	switch(headerType.style) {
		case 'v1':
			/* 2/3/4th level menu  offscreen fix */
			ozyMainWindowWidth = $(window).width();
			
			$('.sf-menu ul li').mouseover(function(){	
				/* checks if third level menu exist */
				var subMenuExist = $(this).find('.sub-menu').length;            
				if( subMenuExist > 0){
					subMenuWidth = $(this).find('.sub-menu').width();
					subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;
				
					/* if sub menu is off screen, give new position */
					if((subMenuOffset + subMenuWidth) > ozyMainWindowWidth){                  
						newSubMenuPosition = subMenuWidth; // + 3
						$(this).find('.sub-menu').css({
							left: -newSubMenuPosition,
							top: '0'
						});
					}
				}
			});
		
			break;
		case 'v2':
			sidr_side = 'left';
			break;
		default:
			break;
	}
	
	/**
	* Timeline More Info link fix
	*/
	$(document).ajaxComplete(function() {
		if($('body').hasClass('page-template-page-portfolio-timeline-php')) {
			$("a").each(function() {
				if($(this).hasClass('timeline-go-link')) {
					$(this).live("touchstart", function(){ window.location = $(this).attr('href'); });
				}
			});
		}
	});
	
	/**
	* Sidr (side menu) init
	*/	
	ozyIosVersion = parseInt(ozyGetOsVersion());	
	
	jQuery('#sidr-menu').sidr( { 
		side: sidr_side,
		name: 'sidr',
		speed: 400,
		onOpen: function() {
			if (jQuery().royalSlider) {
				$('#sidr .ozy-testimonials:not(.fixed)').each(function() {
					var slider = $(this).data('royalSlider');
					slider.updateSliderSize(true);
					$(this).addClass('fixed');
				});
			}
		}
	} );

	$(window).resize(function() {
		$.sidr('close', 'sidr'); // Close
    });
	
	$(document).on("click", function(e) {
		if(parseInt(ozyIosVersion) === 0 || 
		parseInt(ozyIosVersion) >= 7 ) {
			var sidr_div = $("#sidr");
			if (!sidr_div.is(e.target) && !sidr_div.has(e.target).length) {
				$.sidr('close', 'sidr'); // Close
			}
		}
	});
	
	/* on mobile devices */
	$(document).on("touchstart", function(e) {
		var sidr_div = $("#sidr");
		if (!sidr_div.is(e.target) && !sidr_div.has(e.target).length) {
			$.sidr('close', 'sidr'); // Close
		}		
	});

	/* this block help to sidr work as expected on iOS devices. */
    if (parseInt(ozyIosVersion) > 0) {
		jQuery('#sidr-menu').click(function(e){
			if($(this).data('opened') == '1') {
				if(parseInt(ozyIosVersion) < 7) { //ios 6 need special process, since header and footer position as fixed
					$('#header,#footer').css('left', '0px');
				}
				$.sidr('close', 'sidr'); // Close
				$(this).data('opened', '0');
			}else{
				if(parseInt(ozyIosVersion) < 7) { //ios 6 need special process, since header and footer position as fixed
					$('#header,#footer').css('left', '-260px');
				}
				$.sidr('open', 'sidr'); // Open
				$(this).data('opened', '1');
			}
			e.preventDefault();
		});
	}
	
	/**
	* Waypoint animations
	*/
	if ('undefined' !== typeof $.fn.waypoint) {
	    $('.ozy-waypoint-animate').waypoint(function() {
			$(this).addClass('ozy-start-animation');
		},{ 
			offset: '85%'
		});
		$('.ozy-lazy-load-img').waypoint(function() {
			if($(this).data('loaded') == '0'){
				var img = document.createElement('img'), $this = $(this);
				$(img).load(function() {
					$this.data('loaded', '1').find('.loading').animate({'opacity':0}, 200, 'easeInOutExpo', function(){ $(this).remove(); });
					$this.height('inherit').append(img);
					$this.find('img').animate({'opacity':1}, 400, 'easeInOutExpo');
				});
				img.src = $(this).data('src');
				img.style.opacity = 0;				
			}
		},{ 
			offset: '100%'
		});		
	}
	
	/**
	* Tooltip plugin init
	*/	
	$(function(){
		//$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10, defaultPosition: "top", delay: 1});
		$('.tooltip').tooltipsy();
	});

	/**
	* Inline royal slider init
	*/	
	if (jQuery().royalSlider) {
		$('.postGallerySlider').royalSlider({
			transitionSpeed: 800,
			slidesSpacing: 0,
			autoHeight: true,
			autoScaleSlider: false,
			arrowsNav: true,
			arrowsNavAutoHide: false,
			fadeinLoadedSlide: false,
			controlNavigationSpacing: 0,
			/*controlNavigation: 'none',*/
			imageScaleMode: 'fill',
			imageAlignCenter: true,
			blockLoop: true,
			loop: false,
			numImagesToPreload: 2,
			keyboardNavEnabled: true,
			block: {
				delay: 400
			},
			autoPlay: {
				enabled: true,
				pauseOnHover: true,
				delay: 3300
			}
		});		
	}
	
	/**
	* Horizontal grid folio 'go' button fix
	*/
	$(document).on('mouseover', '.hg-link-to-go', function() { 
		$(this).parents('div').find('.fa-long-arrow-right').stop().animate({opacity: 0.5}, 'slow');
	});
	$(document).on('mouseout', '.hg-link-to-go', function() { 
		$(this).parents('div').find('.fa-long-arrow-right').stop().animate({opacity: 1}, 'slow');
	});	
	
	//blog post like function
	$(document).on('click', '.blog-like-link', function(e) {
		ajax_favorite_like($(this).data('post_id'), 'like', 'blog', this);
		e.preventDefault();
    });
	
	/**
	* Prevent fancybox launch on drag-drop event (accordion scroll)
	*/
	ozyClickDrag = null;
	jQuery(".as-panel a").mousedown(function() {
		jQuery(this).addClass("hovered");
		ozyClickDrag = $(this);
		jQuery(".as-panel a").mousemove(function() {
			jQuery(this).removeClass("hovered");
		});
	});	

	/**
	* FancyBox initialization
	*/
	$('.woocommerce-page a.zoom').each(function() { $(this).attr('rel', 'product-gallery'); }); //WooCommerce Version 2.1.6 fancybox fix
	jQuery(".wp-caption>p").click(  function(){ jQuery(this).prev('a').attr('title', jQuery(this).text()).click(); } ); 
	jQuery(".fancybox, .wp-caption>a, .woocommerce-page .zoom").fancybox({
		beforeLoad: function() {
			if (ozyClickDrag!==null && !($(ozyClickDrag).hasClass("hovered") ) ) {
				$.fancybox.cancel();
				return;
			}
			var $this = $('#'+this.element[0].id);
			if($this.data('description')) {
				this.title = '<h3 class="heading-font">' + this.title + '</h3><p>' + $this.data('description') + '</p>';
			}				
		},
		beforeShow: function () {
		},
		padding : 0,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {},
			media: {},
			thumbs : {
				width: 50,
				height: 50
			}			
		}
	});

	/**
	* page-gallery-simple-vertical.php
	*/
	jQuery(".ozy-lazy-load-img").fancybox({
		beforeLoad: function() {
			var $this = $('#'+this.element[0].id);
			if($this.data('description')) {
				this.title = '<h3 class="heading-font">' + this.title + '</h3><p>' + $this.data('description') + '</p>';
			}				
		},
		padding : 0,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {},
			media: {}	
		}
	});	
	
	/**
	* page-gallery-megafolio.php fancybox
	*/	
	$(".fancybox-gallery-megafolio").each(function(){
		$(this)
			.attr('rel', 'gallery')
			.fancybox({
			title: '<h3 class="heading-font">' + this.title + '</h3>' + ($(this).data('description') !== 'undefined' ? '<p>' + $(this).data('description') + '</p>': ''),
			beforeShow: function () {
				if (this.title) {
					var title_clean = ozyReplaceAll('<h3 class="heading-font">', '', this.title);
					title_clean = ozyReplaceAll('</h3>', '', title_clean);
					title_clean = ozyReplaceAll('<p>', '\n', title_clean);
					title_clean = ozyReplaceAll('</p>', '', title_clean);

					if($.addthis) {
						var add_this_str = '<div class="addthis_toolbox addthis_default_style addthis_32x32_style" style="float:right;width:184px;">';
						add_this_str += '<a class="addthis_button_facebook"></a>';
						add_this_str += '<a class="addthis_button_twitter"></a>';
						add_this_str += '<a class="addthis_button_pinterest_share"></a>';
						add_this_str += '<a class="addthis_button_google_plusone_share"></a>';
						add_this_str += '<a class="addthis_button_compact"></a>';
						add_this_str += '</div>';
						
						this.title = add_this_str + this.title;
					}
				}
			},
			afterShow: function () {
				if($.addthis) { addthis.toolbox('.addthis_toolbox'); } //render addthis buttons 
			},
			padding: 0,
			helpers: {
				title: {
					type: 'inside'
				},
				buttons: {}
			}
		});
	});
	
	/**
	* Back to top button
	*/
	$(window).scroll(function() {
		if($(this).scrollTop() >= 100) {
			$('#to-top-button').fadeIn('fast');	
		} else {
			$('#to-top-button').fadeOut('fast');
		}
	});

	$('#to-top-button').click(function(e) {
		e.preventDefault();
		$('body,html').animate({scrollTop:0},800);
	});
	
	/**
	* Footer language switcher
	*/	
	jQuery('#footer-language-switcher').click(function(){
		var el = jQuery('#footer-language-switcher-option'),
			curHeight = el.height();
		if(jQuery(this).hasClass('open')) {
			el.height(curHeight).animate({top: 0}, 50);
		}else{
			el.height(curHeight).animate({bottom: 0, top: -curHeight}, 50);
		}
		
		jQuery(this).toggleClass('open');
	});
		
	jQuery('.footer-language-switcher-box').mouseout(function() {
		window.t = setTimeout(function() {
			var el = jQuery('#footer-language-switcher-option'),
				curHeight = el.height();
			el.height(curHeight).animate({bottom: 0, top: 0}, 50);
			jQuery('#footer-language-switcher').removeClass('open');
		}, 1000);
	}).mouseover(function(){
		if(window.t){
			clearTimeout(window.t);
			window.t = undefined;
		}
	});
	
	/**
	* Sidr (side menu) 'Custom Menu' widget handler, turns it into an accordion menu
	*/
	$('#sidr .menu li a').click(function (e) {
		if($(this).parent('li').hasClass('menu-item-has-children')) {
			e.preventDefault();
		}
		var ullist = $(this).parent().children('ul:first');
		ullist.slideToggle();
	}).click();
	
	/**
	* Horizontal Grid folio Navigation Tips window
	*/
	// are we on horizontal grid folio page?
	if($('#horizontalGridFolioContainer').length > 0){
		jQuery("#fancybox-drag-info").fancybox().trigger('click');
		setTimeout('close_fancybox()', 3000);
	}	
	
	/**
	* Video gallery single page
	*/
	if(typeof ozyContrastJsOptions !== "undefined"  && 
		typeof ozyContrastJsOptions.ozy_current_page !== "undefined"  && 
		ozyContrastJsOptions.ozy_current_page === 'single-video') {

		ozy_single_video_window_resize();
		jQuery(window).resize(function() {
			ozy_single_video_window_resize();			
		});
	
		/* show meta infomation button */	
		jQuery("#single-video-show-meta").hover(
			function() {
				jQuery('.single-video-metabar').stop().animate({'opacity': '1'}, 600, 'easeInOutExpo');
			},
			function() {
				jQuery('.single-video-metabar').stop().animate({'opacity': '0'}, 600, 'easeInOutExpo');
			}
		);
		
		/* share buttons */
		jQuery(document).on('click', '.single-video-soc', function(e) {
			ozyPopupWindow(jQuery(this).attr('href'), 'Share', 640, 440);			
			e.preventDefault();
		});
		
		/* prevent default event on single-video-show-meta button */
		jQuery('#single-video-show-meta').click(function(e) {
            e.preventDefault();
        });
		
		/* fullscreen button handling */
		if (window.fullScreenApi.supportsFullScreen) {
			jQuery('#single-video-fullscreen').click(function(e) {
				window.fullScreenApi.requestFullScreen( document.getElementById('ozy-full-video-wrapper') );
				ozy_single_video_window_resize();
				e.preventDefault();
			});
		} else {
			jQuery('#single-video-fullscreen').remove();
		}

	}
	
});

/**
* ozy_single_video_window_resize
*
* Helps to resize video (iframe) element in order to content size 
*/
function ozy_single_video_window_resize() {
	"use strict";
	var h = jQuery('#header').outerHeight(true) + jQuery('#footer').height(); h = window.innerHeight - h;	// + jQuery('.single-video-infobar').outerHeight(true)
	if((navigator.userAgent.match(/msie|trident/i))) { h = h + 6; }
	jQuery('.post-content,.ozy-full-video-wrapper').height(h);
}

/**
* close_fancybox
*
* Helps to close open Fancybox windows
*/
function close_fancybox(){
	jQuery.fancybox.close();
}

/********************DEMO STUF**********************/

jQuery(document).ready(function($) {
	
	var color_str = '<style type="text/css" id="demo-css">#content a,#sidebar a,#footer a,.alternate-text-color{color:##color##;}#menu-primary-menu>li:hover>a,#menu-primary-menu>li.current_page_item>a,#menu-primary-menu>li.current-menu-parent>a,#menu-primary-menu>li.mega-menu-hover>a,#logo *{color:##color##;}input:not([type=submit]):not([type=file]):focus,textarea:focus{border-color:##color##;}.mega-entry-innerwrap .post-format,.post-title>span{background-color:##color##;background-color:##color##;}.ozy-accordion>h6.ui-accordion-header>span,.ozy-tabs .ozy-nav .ui-tabs-selected a,.ozy-tabs .ozy-nav .ui-tabs-active a,.ozy-toggle span.ui-icon{background-color:##color## !important;background-color:##color## !important;}.ozy-tabs .ozy-nav .ui-tabs-selected a,.ozy-tabs .ozy-nav .ui-tabs-active a{border-color:##color##;border-color:##color##;}input:not([type=submit]):not([type=file]):hover, textarea:hover, input:not([type=submit]):not([type=file]):focus, textarea:focus{border-color:##color##;}#menu-primary-menu>li:hover>a, #menu-primary-menu>li.current_page_item>a, #menu-primary-menu>li.current-menu-parent>a, #menu-primary-menu>li.mega-menu-hover>a, #logo *{color:##color##;}.woocommerce div.product .woocommerce-tabs ul.tabs li.active,.woocommerce-page div.product .woocommerce-tabs ul.tabs li.active,.woocommerce #content div.product .woocommerce-tabs ul.tabs li.active,.woocommerce-page #content div.product .woocommerce-tabs ul.tabs li.active{background-color:##color## !important;background-color:##color## !important;border-color:##color## !important;border-color:##color## !important;}</style>', content_color_str = '<style type="text/css" id="demo-css-layout">#header,#footer footer,#main .container,.main-bg-color,#footer-language-switcher,input:not([type=submit]):not([type=file]), textarea{background-color:##color## !important;}</style>',re = new RegExp('##color##', 'g');;
	
	$('#accent-color>a').click(function(e) {
		$('#demo-css').remove();
		$(color_str.replace(re, $(this).attr('href'))).appendTo('head');
        e.preventDefault();
    });
	
	$('#layout-color>a').click(function(e) {
		$('#demo-css-layout').remove();
		$(content_color_str.replace(re, $(this).attr('href'))).appendTo('head');
        e.preventDefault();		
    });	

	$('#body-color>a').click(function(e) {
		$('body').css('background-color', $(this).attr('href'));
        e.preventDefault();		
    });	
	
	// are we on horizontal grid folio page?
	/*if($('#horizontalGridFolioContainer').length > 0){
		jQuery("#fancybox-drag-info").fancybox().trigger('click');
		setTimeout('close_fancybox()', 3000);
	}*/
	
	setTimeout(function(){ jQuery('.demo-box').stop().animate({left:-170}, 400, 'easeInOutExpo').removeClass('box-opened'); }, 1000);
	
	jQuery('.demo-box>a').click(function(e) {
    	if($('.demo-box').hasClass('box-opened')) {
			$('.demo-box').stop().animate({left:-170}, 400, 'easeInOutExpo').removeClass('box-opened');
		}else{
			$('.demo-box').stop().animate({left:0}, 400, 'easeInOutExpo').addClass('box-opened');
		}
		e.preventDefault();
    });
});