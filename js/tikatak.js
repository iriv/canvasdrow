$(function(){

//    field = new classCanvas($("#field"));
//
//    ch = Math.round(field.canvas.height());
//    cw = Math.round(field.canvas.width());



    tik = new tik();



//    drowFocus(0,0);
//
//    events();

});

function tik(){


    field = new classCanvas($("#field"));
    field_focus = new classCanvas($("#field_focus"));

    ch = Math.round(field.canvas.height());
    cw = Math.round(field.canvas.width());

    this.focusCoordX = 0;
    this.focusCoordY = 0;

    this.curFig = 1; //1 - крестик



    this.drowTable = function(){


        field.changeColor("#fff");

        field.canvas.css({"margin-left":-cw/2});
        field.canvas.css({"margin-top":-ch/2});

        field_focus.canvas.css({"margin-left":-cw/2});
        field_focus.canvas.css({"margin-top":-ch/2});


        field.drowLine(cw/3,0,cw/3,ch);
        field.drowLine(cw/3*2,0,cw/3*2,ch);
        field.drowLine(0,ch/3,cw,ch/3);
        field.drowLine(0,ch/3*2,cw,ch/3*2);

        this.drowFocus();
    }





    this.drowFocus = function(){


        field_focus.clearCanvas();

//        field_focus.changeColor("rgba(250,250,250,0.6)");

        focusH = Math.round(ch/3);
        focusW = Math.round(cw/3);

        if (this.focusCoordX<0) {
            this.focusCoordX=0;
        }

        if(this.focusCoordX>2){
            this.focusCoordX=2;
        }

        if (this.focusCoordY<0) {
            this.focusCoordY=0;
        }

        if(this.focusCoordY>2){
            this.focusCoordY=2;
        }

        field_focus.drowRect(focusW*this.focusCoordX,focusH*this.focusCoordY,focusW,focusH);
    }



    this.events = function(){



        $(document).keydown(function(e){
//        console.log(e.keyCode);


//            240:"left",242:"right",241:"up",243:"down",

//            $("#s").html(e.keyCode);

            switch(e.keyCode){
                case 37: //left
                case 208:
                    tik.focusCoordX--;
                    tik.drowFocus();
                    break;

                case 38://top
                case 209:
                    tik.focusCoordY--;
                    tik.drowFocus();
                    break;

                case 39://right
                case 210:



                    tik.focusCoordX++;
                    tik.drowFocus();


                    break;

                case 40://down
                case 211:
                    tik.focusCoordY++;
                    tik.drowFocus();
                    break;

                case 13://enter

                    tik.set();

                    break;
            }
        });

    }

    this.history = [];

    this.champion = {0:{x:[],y:[]},1:{x:[],y:[]}};

    this.set = function(){

        if (tik.history.indexOf(tik.focusCoordX+":"+tik.focusCoordY) != -1) return true;

        this.history.push(tik.focusCoordX+":"+tik.focusCoordY);

        otstup = 20;

        if (this.curFig == 1){
            field.changeColor("red");
            field.fillSize = 5;
            field.drowLine(focusW * tik.focusCoordX + otstup, focusH * tik.focusCoordY+otstup, focusW * tik.focusCoordX +  focusW-otstup, focusH * tik.focusCoordY +  focusH-otstup);

            field.drowLine(focusW * tik.focusCoordX + focusW - otstup, focusH * tik.focusCoordY + otstup, focusW * tik.focusCoordX + otstup, focusH * tik.focusCoordY + focusH - otstup);

            this.champion[1].x.push(tik.focusCoordX);
            this.champion[1].y.push(tik.focusCoordY);
        }
        else{
//            field.fillSize = 50;
            field.changeColor("blue");
            field.fillSize = 50;
            field.drowEmptyCircle(cw/3*tik.focusCoordX+focusH/2, ch/3*tik.focusCoordY+focusH/2);

            this.champion[0].x.push(tik.focusCoordX);
            this.champion[0].y.push(tik.focusCoordY);
        }


        this.checkLider(tik.champion[1],"X");
        this.checkLider(tik.champion[0],"0");



        this.curFig = (this.curFig == 1) ? 0 : 1;

    };



    this.checkLider =function(obj,champ){

        if (this.check(obj.x) == true || this.check(obj.y) == true){
            $("#s").html(champ +" Winner!!!");
            console.log(champ +" Winner!!!");
        }




        ////////////////////////ПРОВЕРКА ДИОГОНАЛИ

//        mas1 = [0,1,2];
//
//        m=0;
//        for(i in mas1){
//
//            if ($.inArray(mas1[i],obj.x) != -1 && $.inArray(mas1[i],obj.y) !=-1){
//                m++;
//            }
//        }
//
//        if (m == 3 && JSON.stringify(obj.x.sort()) == JSON.stringify(obj.y.sort())){
//            $("#s").html(champ +" Winner!!!");
//            console.log(champ +" Winner!!!");
//        }


    };



    this.check = function(mas){

        m=0;

        for(var i in mas){

            el = mas[i];


            for(j in mas){


                if (mas[j] == el){
                    m++;
                }

            }

            if (m == 3){
                return true;
                break;
            }

            m=0;
        }


    }






    this.drowTable();
    this.events();



}


