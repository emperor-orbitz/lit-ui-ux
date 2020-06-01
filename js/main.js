$(document).ready(function(){
    $("#bronze-toggle").click(function(){
        $(".bronze-body-mobile").toggle();
        $(this).addClass(function(index, currentClass){
            if(currentClass =="arrow"){
                return "arrow-active"
            }
            else{
                $(this).removeClass("arrow-active")
                return "arrow"
            }
        })
    })



    $("#silver-toggle").click(function(){
        $(".silver-body-mobile").toggle();
        $(this).addClass(function(index, currentClass){
            if(currentClass =="arrow"){
                return "arrow-active"
            }
            else{
                $(this).removeClass("arrow-active")
                return "arrow"
            }
        })
    })


    $("#gold-toggle").click(function(){
        $(".gold-body-mobile").toggle();
        $(this).addClass(function(index, currentClass){
            if(currentClass =="arrow"){
                return "arrow-active"
            }
            else{
                $(this).removeClass("arrow-active")
                return "arrow"
            }
        })
    })
})