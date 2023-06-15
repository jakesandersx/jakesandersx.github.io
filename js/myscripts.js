$(document).ready(function() {
    let pos = 700;
    $("#main_info li").each(function(i) {
        $(this).delay(i * 250).animate({
            left: pos,
            opacity: 1
        }, 1000);
        pos += 75;
    });
});
