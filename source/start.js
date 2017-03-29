window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback,element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();
function startup(){
  screen = document.getElementById("mat");
  paint_brush = screen.getContext("2d");
  screen.addEventListener("mousedown", mouseDown, false);
  screen.addEventListener("mouseup", mouseUp, false);
  screen.addEventListener("mousemove", mouseMove, false);
  screen.addEventListener("mouseout", mouseOut, false);
  paint_brush.drawImage(back_ground_start,0,0,800,600);
  (function animationLOOP() {
        draw_state();
        requestAnimFrame(animationLOOP, screen);
  })();
}
