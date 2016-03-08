$(document).ready(function () {
    $("#navToggle a").click(function (e) {
        e.preventDefault();

        $("header > nav").slideToggle("medium");
        $("#logo").toggleClass("menuUp menuDown");
    });


    $("div.header > nav > ul > li > a").click(function (e) {

        if ($(this).siblings().size() > 0) {
            $(this).siblings().slideToggle("fast")
            $(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
        }

    });

});