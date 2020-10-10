$(document).ready(function(){

    //Adjust Main Section Height
    $("#main").height($("#main").height() - 128);

    //Adjust QR Code Size
    qr_height = $("#qrcode").height();
    qr_width = $("#qrcode").width();
    if (qr_height > qr_width) {
        $("#qrcode").height(qr_width);
    }
    else {
        $("#qrcode").width(qr_height);
    }

});