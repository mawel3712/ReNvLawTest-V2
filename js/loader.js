/**
 * Created by Blue Oracle on 4/17/14.
 */
$(document).ready(function(){
    //initial
    $('#content').load(".html")

});

$("a").click(function(){
    var page = $(this).attr('href');
    $("#content").load(page);

});




