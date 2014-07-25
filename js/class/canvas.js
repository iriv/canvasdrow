function classCanvas(canvasObj) {

    this.fillSize=1;


    this.canvas = canvasObj;
    this.obj = this.canvas[0].getContext('2d');



    this.changeColor=function(color){
        this.obj.fillStyle = color;
        this.obj.strokeStyle = color;
    };

    this.drowCircle = function(x,y){
        this.obj.beginPath();
        this.obj.arc(x, y, this.fillSize, 0, Math.PI * 2, false);
        this.obj.closePath();
        this.obj.fill(); // Заливка окружности
    };

    this.drowEmptyCircle = function(x,y){
        this.obj.beginPath();
        this.obj.arc(x, y, this.fillSize, 0, Math.PI * 2, false);
        this.obj.closePath();
//        this.obj.strokeStyle = '#999';
        this.obj.stroke();
    };

    this.drowLine=function(x, y, xto, yto){
        this.obj.beginPath();
        this.obj.lineWidth = this.fillSize*2;
        this.obj.moveTo(x, y);
        this.obj.lineTo(xto, yto);
        this.obj.stroke();
    };


    this.drowRect = function(x,y,w,h){
        this.obj.lineWidth = this.fillSize*5;
//        this.obj.lineWidth="6";
        this.obj.strokeStyle="yellow";
//        this.obj.rect(x,y,w,h);
//        this.obj.fillRect(x,y,w,h);
        this.obj.strokeRect(x,y,w,h);

//        this.obj.stroke();
    };

    this.loadImg = function(imgObj, x, y){
        this.obj.drawImage(imgObj, x, y);
    };

    this.clearArea = function(x, y, w, h){
//        console.log(this.canvas.height());
        this.obj.clearRect(x,y,w,h);
    };

    this.clearCanvas = function(){
//        console.log(this.canvas.height());
        this.obj.clearRect(0,0,this.canvas.width(),this.canvas.height());
    };



}