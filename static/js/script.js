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

    //Submit Text
    $("#submit_button").click(function() {
        var qr_text = document.getElementById("input_text").value;
        var data = {"text": qr_text};
        $.post("/qrgen", JSON.stringify({"text": qr_text}), function(resp){
            $("#qr").attr("src", "/static/img/qr.webp");
            $("#qr").attr("src", "/static/img/result.png");
            $("#download_link").attr("download", qr_text)
        });
    });

});