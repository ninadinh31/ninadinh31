window.focus();

$(document).ready(function() {
    var interval_id;
    if (!interval_id) {
        interval_id = setInterval(function () {
            $('.ui.text.shape').shape('flip up');
        }, 1500);
    }

    $(window).focus(function() {
        interval_id = setInterval(function () {
            $('.ui.text.shape').shape('flip up');
        }, 1500);

    });

    $(window).blur(function() {
        clearInterval(interval_id);
    });
});