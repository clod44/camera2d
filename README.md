# camera2d
 p5js Drag&Zoom camera along with basic hud for debugging values

 [Try Here](https://clod44.github.io/camera2d/)

<hr>

## depencies
 - [p5js](https://p5js.org/) (local file)


## init
```js
let camera2d;
function setup(){
    createCanvas(100,100);
    //init camera
    camera2d = new Camera2D(?width, ?height);

    //add debug values to keep track of automaticly
    // "() => value" if "value" itself doesn't update
    camera2d.addDebugValue('camera2d', "");
    camera2d.addDebugValue('FPS', () => frameRate().toFixed(2));
    camera2d.addDebugValue('Cam X', () => camera2d.x.toFixed(2));
    camera2d.addDebugValue('Cam Y', () => camera2d.y.toFixed(2));
    camera2d.addDebugValue('Cam scale', () => camera2d.scale.toFixed(2));
}
```

## usage
```js
function draw(){
    background(0);

    //start camera transformation here
    push();
    camera2d.update();
    
    /////////////////////////////////
    //show some graphics on the screen here
    //?UnboundedImage creates mirroring infinite world illusion with adjustable repeating sizes
    camera2d.showUnboundedImage(images[0]);
    camera2d.showUnboundedImage(images[1], {
        xOffset : width*0.5,
        yOffset : height*0.5,
        imageWidth : 200,
        imageHeight : 200
    });
    
    //show some normal images if you want
    image(images[1],-50,-30,1000,1000);
    /////////////////////////////////
    
    //end camera transformation
    camera2d.applyTransformations();
    pop();

    //?show grid and debug values
    image(camera2d.graphics, 0, 0, width, height);
}
```
use `camera2d.setResolution()` to change the camera's viewport dimensions.

ToDo
- [ ] find the clicked point's coords in the transformed images
- [ ] dont forget this list   
