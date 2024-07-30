function showprologue(){
    $("#prologue_container").css("display","inherit");
    $("#prologue_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#prologue_container").removeClass("animated slideInLeft");
    },800);
}
function closeprologue(){
    $("#prologue_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#prologue_container").removeClass("animated slideOutLeft");
        $("#prologue_container").css("display","none");
    },800);
}
function showletstalk(){
    $("#letstalk_container").css("display","inherit");
    $("#letstalk_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#letstalk_container").removeClass("animated slideInRight");
    },800);
}
function closeletstalk(){
    $("#letstalk_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#letstalk_container").removeClass("animated slideOutRight");
        $("#letstalk_container").css("display","none");
    },800);
}
function showcontents(){
    $("#contents_container").css("display","inherit");
    $("#contents_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contents_container").removeClass("animated slideInUp");
    },800);
}
function closecontents(){
    $("#contents_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contents_container").removeClass("animated slideOutDown");
        $("#contents_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#prologue").removeClass("animated fadeIn");
      $("#contents").removeClass("animated fadeIn");
      $("#letstalk").removeClass("animated fadeIn");
    },1000);
},1500);
