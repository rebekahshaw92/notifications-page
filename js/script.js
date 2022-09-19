$(document).ready(() => {
    $(".markAll").click(() => {
        $(".dot").hide();
        $(".card").css("background-color","white");
        $(".badge").text("0");
    })
})