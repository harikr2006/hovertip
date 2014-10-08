// JavaScript Document
(function ($) {
    $.fn.hovertip = function (options) {
        var defaults = $.extend({ 
			setAttr:"title",           
            classId: 'xhover',
            speed: 300,
            padxy: 5,
            bgcolor: "#000",
            borderRadius: 3,
            textColor: "#fff",
			maxWidth:100,
			fontSize:12,
			fontFamily:"Halvetica",
			Border:"1px solid #ccc",
			boxShadow:"0px 0px 3px #000",
			topSpace:20
        },options);	
		
		var config = {
			zIndex:'9999',
			wordWrap:"break-word"
			}	
		return this.each(
			function(){
		var $wrapper = "<div id='" + defaults.classId + "'></div>";
        var xtitle;
		var o=options;
		
		$(this).on('mousemove',function(e){ $('#' + defaults.classId)
                    .css({"top": +e.pageY + (defaults.topSpace) + "px",
                        "left": +e.pageX - ($('#' + defaults.classId).width()/2) + "px"})})
		
		
        $(this).on('mouseover',
            function (e) {
                xtitle = $(this).attr(defaults.setAttr);
                //console.log($('#mypop').length);
                if ($('#' + defaults.classId).length <= 0) {
                    $(this).parent().append($wrapper).find('#' + defaults.classId).hide();
                }
                $('#' + defaults.classId).append(xtitle);
                $('#' + defaults.classId)
                    .css({						
                        "position": "fixed",
                        "top": +e.pageY + (10) + "px",
                        "left": +e.pageX - ($('#' + defaults.classId).width()/2) + "px",
                        "padding": defaults.padxy,
                        "background": defaults.bgcolor,
                        "border-radius": defaults.borderRadius,
                        "color": defaults.textColor,						
						"max-width":defaults.maxWidth+"px",
						"font-size":defaults.fontSize+"px",
						"font-family":defaults.fontFamily,
						"box-shadow":defaults.boxShadow,
						"border":defaults.Border,
						"z-index":config.zIndex,
						"word-wrap":config.wordWrap
                    }).fadeTo(defaults.speed, 1);					
				$(this).css({"cursor":"pointer"});
                $(this).removeAttr(defaults.setAttr);
            }
        );
        $(this).on('mouseout',
            function () {
                $('#' + defaults.classId).fadeTo(defaults.speed, 0);
                $('#' + defaults.classId).remove();
                $(this).attr(defaults.setAttr, xtitle);
            })}		
		);
    }
}(jQuery));
