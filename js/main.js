$(function(){


    $('#color1').colorPicker( {onColorChange : function(id, newValue) {
            area_main.changeColor(newValue);
        }
    });


    $('#color2').colorPicker( {onColorChange : function(id, newValue) {
            $("#area").css("background-color",newValue);
        }
    });


    $("#area_cursor").mouseout(function(){
        area_cursor.obj.clearRect(0,0,800,600);
    });


    var status_press = 0;

    area_main = new classCanvas($("#area"));
    area_cursor = new classCanvas($("#area_cursor"));

    $(document).mousedown(function(){
        status_press = 1;

    });

    $(document).mouseup(function(){
        status_press = 0;
    });


    area_cursor.canvas.click(function(){
        area_main.drowCircle(posX,posY);
    })


    area_cursor.canvas.mousemove(function(e){

        posX = e.pageX - $(this).offset().left - 1;
        posY = e.pageY - $(this).offset().top - 1;


        area_cursor.obj.clearRect(0,0,800,600);
        area_cursor.drowEmptyCircle(posX,posY);


        if (status_press == 1){

            area_main.drowCircle(posX,posY);

            if (typeof posXh != "undefined"){

                area_main.drowLine(posXh,posYh,posX,posY);

            }
        }
        posXh = posX;
        posYh = posY;

    });

    $("#colors li").click(function(){
        area.changeColor($(this).attr("class"));
    });


    $("#panelImages").click(function(){
        img = new Image();
        img.src = "img/192-raskraska.gif";
        img.style.height = '10px';

        $(img).load(function(){
            area_main.loadImg(this,0,0,this.width,this.height );
        });
    });

});