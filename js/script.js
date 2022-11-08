$(function(){
    
    $("#create").click(function(){
        $(".area").addClass("box")
    });

    $("#toggle_one").click(function(){
        $(".box").toggle(1000)
    });

    $("#toggle_two").click(function(){
        $(".box").fadeToggle(1000)
    });
    
    $("#undo").click(function(){
        $(".area").removeClass("box")
    });

});
