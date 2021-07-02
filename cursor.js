$(window).ready(function () {

    let mouseX = 0;
    let mouseY = 0;
    let xp = 0;
    let yp = 0;

    $(document).mousemove(function (e) {
        $(".cursor").css({
            transform: 'translate(' + (e.clientX - 10) + 'px, ' + (e.clientY - 10) + 'px)'
        });
        mouseX = e.clientX - 10;
        mouseY = e.clientY - 10;
    });

    setInterval(function () {
        xp += ((mouseX - xp) / 6);
        yp += ((mouseY - yp) / 6);
        $(".cursor-lazy").css({ transform: 'translateX(' + (xp - 15) + 'px) translateY(' + (yp - 15) + 'px)' });
    }, 20);
})