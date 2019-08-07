//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
    //fadeout li
    $(this).parent().fadeOut(500, function(){
        //remove li
        $(this).remove();
    });
    //stop from click to propagate to other elements
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new Todo tetxt from input
         var todoText = $(this).val();
         $(this).val("");
         //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
    }
});


$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
})