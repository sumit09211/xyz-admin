(function ($) {
    "use strict";
    $(document).ready(function () {

        // bootstrap dropdown form
        $('.dropdown-menu>form').click(function(e){
            e.stopPropagation();
        });

        /*==Nice Scroll ==*/
        if ($.fn.niceScroll) {
            $(".leftside-navigation").niceScroll({
                cursorcolor: "#1FB5AD",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $(".leftside-navigation").getNiceScroll().resize();
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();
        }

        /*==Sidebar Toggle==*/

        // $(".leftside-navigation .sub-menu > a").click(function () {
        //     var o = ($(this).offset());
        //     var diff = 80 - o.top;
        //     if (diff > 0)
        //         $(".leftside-navigation").scrollTo("-=" + Math.abs(diff), 500);
        //     else
        //         $(".leftside-navigation").scrollTo("+=" + Math.abs(diff), 500);
        // });


        // Sidebar Dropdown

        function sidebarDropdown() {
            $(".sidebar-menu .sub-menu > a").off("click").on("click", function(e){
                var _this = $(this);
                var parent = _this.parent();
                var nextElement = _this.next();
                nextElement.slideToggle();
                parent.siblings().find(".sub").slideUp();
                if(parent.hasClass("active")){
                    parent.removeClass("active");
                } else {
                    parent.addClass("active").siblings().removeClass("active");
                }
                e.stopPropagation();
            });
        }


        function sidebarClassToggle(){
            var ww = $(window).outerWidth();
            if(ww > 767){
                if($("body").hasClass("sidebar-collapse")){
                    $("body").removeClass("sidebar-collapse");
                    sidebarDropdown();
                    $(".logo").show();
                    $(".logo-mini").hide();
                    $(".leftside-navigation").getNiceScroll().hide();
                } else {
                    $("body").addClass("sidebar-collapse");
                    $(".sidebar-menu .sub-menu > a").off("click");
                    $(".logo-mini").show();
                    $(".logo").hide();
                    $(".leftside-navigation").getNiceScroll().show();
                }
            } else {
                if($("body").hasClass("sidebar-open")){
                    $("body").removeClass("sidebar-open");
                } else {
                    $("body").addClass("sidebar-open");
                }
            }
        }
        $('.sidebar-toggle-box').on("click", sidebarClassToggle);
        $(window).on("load", function(){
            if(!$("body").hasClass("sidebar-collapse")){
                sidebarDropdown();
                $(".logo").show();
                $(".logo-mini").hide();
                $(".leftside-navigation").getNiceScroll().hide();
            }
        });

        $(".leftside-navigation").niceScroll({
            cursorcolor: "#1FB5AD",
            cursorborder: "0px solid #fff",
            cursorborderradius: "0px",
            cursorwidth: "3px"
        });

        // $('#sidebar').toggleClass('hide-left-bar');
        // if ($('#sidebar').hasClass('hide-left-bar')) {
        //     $(".leftside-navigation").getNiceScroll().hide();
        // }
        // $(".leftside-navigation").getNiceScroll().show();
        // $('#main-content').toggleClass('merge-left');
        // e.stopPropagation();

    });



})(jQuery);
