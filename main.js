
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    
    var width = screen.width;
    var height = screen.height;
    var newWidth = screen.width - 70;
    var newHeight = screen.height - 300;
    if (width < 992)
    {
document.getElementById("myCanvas").width = newWidth;
document.getElementById("myCanvas").height = newHeight;
document.body.style.overflow = "hidden";
    }
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e){

         current_position_of_touch_x =e.touches[0]. clientX - canvas.offsetLeft;
         current_position_of_touch_y =e.touches[0].clientY - canvas.offsetTop;

      

        
        
        ctx.moveTo(last_position_of_x, last_position_of_y);

        
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

