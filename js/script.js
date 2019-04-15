// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
function search () {
    var userIpt = $("#search-term").val();
    var giphy_url = "https://api.giphy.com/v1/gifs/search?q=" + userIpt + "&rating=pg&api_key=dc6zaTOxFJmzC&limit=50";
    $.ajax({
        url: giphy_url,
        method: "GET",
        success: function(response) {
            var a = response["data"].length;
            var num = Math.floor(Math.random() * a);
            var source = response["data"][num].images.original.url;
            var source2 = response["data"][num].url;
            $("h3").html("<a href='" + source2 +"' target='_blank'><img src='" + source + "'></a>");
        }
    });
    $("#load").show();
}


$("body").on("keydown", function (e) {
    if (e.keyCode === 13) {
        search(e);
    }
});

function load(){
    var source,
        source2;
    
    var userIpt = $("#search-term").val();
    var giphy_url = "https://api.giphy.com/v1/gifs/search?q=" + userIpt + "&rating=pg&api_key=dc6zaTOxFJmzC&limit=50";
    
    
    for(var i = 0; i < 24; i++){
        $.ajax({
            url: giphy_url,
            method: "GET",
            success: function(response) {
                source = response["data"][i].images.original.url;
                source2 = response["data"][i].url;
            }
        });
        $("h3").html("<a href='" + source2 +"' target='_blank'><img src='" + source + "'></a>");
    }
}