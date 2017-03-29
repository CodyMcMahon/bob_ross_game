function mouseDown(e){
    me.mouse_down = 1;
    if(me.x > 435 && me.y > 447 && me.x < 480 && me.y < 493){
      me.color = "green";
    }
    if(me.x > 520 && me.y > 443 && me.x < 564 && me.y < 488){
      me.color = "blue";
    }
    if(me.x > 432 && me.y > 528 && me.x < 481 && me.y < 582){
      me.color = "brown";
    }
    if(me.x > 515 && me.y > 522 && me.x < 566 && me.y < 579){
      me.color = "red";
    }
}
function mouseUp(e){
    me.mouse_down = 0;
}
function mouseMove(e){
    me.x =  e.clientX - screen.getBoundingClientRect().left;
    me.y = e.clientY;// - screen.getBoundingClientRect().right;
    draw_state();
}
function mouseOut(e){
    me.mouse_down = 0;
}
