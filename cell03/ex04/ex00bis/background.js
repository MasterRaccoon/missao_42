$(document).ready(function(){

    function random(number) {
    return Math.floor(Math.random() * (number + 1));
    }

    $("#btn").on("click", function(){
        $("#bd").css("background-color", "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")")

    })
        
   });