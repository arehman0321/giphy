// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
var userIpt,
    giphy_url,
    a,
    num,
    source,
    source2;


$("button").click(function(){
    userIpt = $("#search-term").val();
    giphy_url = "https://api.giphy.com/v1/gifs/search?q=" + userIpt + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: giphy_url,
        method: "GET",
        success: function(response) {
            a = response["data"].length;
            num = Math.floor(Math.random() * a);
            source = response["data"][num].images.original.url;
            source2 = response["data"][num].url;
            $("h3").html("<a href='" + source2 +"' target='_blank'><img src='" + source + "'></a>");
        }
    });
});



