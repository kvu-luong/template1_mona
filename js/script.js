$(document).ready(function () {
    var video1 = document.getElementById("myVideo1");
    var video2 = document.getElementById("myVideo2");
    var video3 = document.getElementById("myVideo3");
    var video4 = document.getElementById("myVideo4");

    var btn1 = document.getElementById("01");
    var btn2 = document.getElementById("02");
    var btn3 = document.getElementById("03");
    var btn4 = document.getElementById("04");

    btn1.on("click", function () {
        if (video1.paused) {
            video1.play();
        } else {
            video1.pause();
        }
    });
});