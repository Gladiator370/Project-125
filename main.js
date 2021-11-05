noseX=0
noseY=0
difference=0
leftwristX = 0
rightwristX=0

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550)
    canvas.position(550,150)
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotreslt)
}
function draw(){
    background('#969A97')
    fill("#F90093")
    stroke("#F90093")
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML = "Width and Height of a sqaure will be ="+difference + "px"
}
function modelloaded(){
    console.log('poseNet is loaded!');
}
function gotreslt(results){  
        if(results.length < 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX ="+ noseX + "noseY =" + noseY );

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX)
    console.log("leftwristX =" + leftwristX + "rightwristX =" + rightwristX +"difference =" + difference );
}
}   