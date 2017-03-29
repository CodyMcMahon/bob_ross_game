function get_color(c){
  switch(c){
    case "blue":return color_blue;
    case "red":return color_red;
    case "brown":return color_brown;
    case "green":return color_green;
    
  }

}

function draw_state(){
  console.log(''+me.x+' '+me.y);
  if(me.mouse_down){
    paint_brush.drawImage(get_color(me.color),me.x-5,me.y-5,10,10);
  }
  paint_brush.drawImage(back_ground_refresh,0,0,800,600);
}
