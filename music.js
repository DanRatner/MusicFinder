/*
    Daniel Ratner
    danielratner@my.smccd.edu
    CIS 114 OL
    music.js
    Final
    21 May 2020
*/

"use strict";
$(document).ready(function(){
    $("#submit").click(function() {
        var input = document.getElementById("artistName").value
        input = encodeURIComponent(input)
        var searchTerm = "http://itunes.apple.com/search?term="

        searchTerm = searchTerm.concat(input,"&country=US&media=music&entity=album&limit=20")

        console.log(searchTerm)

        
        fetch(searchTerm)
            .then(
                function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    var html = ""
                $.each(data.results, function(i, item){
                    html += "<div class='row'><div class='column'><img src=" + item.artworkUrl100 + " class='movieImage'>"
                    html += "<p> Artist: <a href=" + item.artistViewUrl + "> " + item.artistName + "</a></p>"
                    html += "<p> Album: <a href=" + item.collectionViewUrl + ">" + item.collectionName + "</a></p>"
                    html += "<p> Price: " + item.collectionPrice + " " + item.currency + "</p>"
                    html += "<p> Primary Genre: " + item.primaryGenreName + "</p></div></div>"
                    
                    
                    
                });
                $("#Movies").html(html)
                });

                }
            )
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    });
});