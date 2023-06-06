





let canvasHolder = document.getElementById("canvas-holder");
let canvas; 

let camera2d;
let debugWindow;

let images = [];
function preload(){
    images = [  
                loadImage("./assets/picture.jpg"),
                loadImage("./assets/man.jpg")
             ];
}

function setup(){
    //init
    canvas = createCanvas(100,100);
    background(0,255,0);
    canvas.parent("canvas-holder");
    //noSmooth();
    resizeCanvas(canvasHolder.clientWidth, canvasHolder.clientHeight);

    camera2d = new Camera2D();

    camera2d.addDebugValue('camera2d', "");
    camera2d.addDebugValue('FPS', () => frameRate().toFixed(2));
    camera2d.addDebugValue('Cam X', () => camera2d.x.toFixed(2));
    camera2d.addDebugValue('Cam Y', () => camera2d.y.toFixed(2));
    camera2d.addDebugValue('Cam scale', () => camera2d.scale.toFixed(2));
}


function draw(){
    background(0);


    push();
    camera2d.update();
        

    camera2d.showUnboundedImage(images[0]);
    camera2d.showUnboundedImage(images[1], {
        xOffset : width*0.5,
        yOffset : height*0.5,
        imageWidth : 200,
        imageHeight : 200
    });
    
    image(images[1],-50,-30,1000,1000);


    camera2d.applyTransformations();
    pop();

    //grids and debug
    camera2d.showDebugValues();
    image(camera2d.graphics, 0, 0, width, height);




}

  
function windowResized() {
    resizeCanvas(canvasHolder.clientWidth, canvasHolder.clientHeight);
    
    camera2d.setResolution(width,height);
}







