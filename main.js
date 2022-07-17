song1="";
song2="";
rwx=0;
rwy=0;
lwx=0;
lwy=0;
scorelw=0
scorerw=0


function setup(){
c1=createCanvas(500,350);
c1.center();
v1=createCapture(VIDEO);
v1.hide();
pn=ml5.poseNet(v1,modelLoaded)
pn.on("pose",gotPoses)

}

function modelLoaded(){

console.log("Model is Loaded");

}

function draw(){

image(v1,0,0,500,350);

}

function preload(){

song1=loadSound("Bella-Ciao-Money-Heist.mp3")
song2=loadSound("Harry Potter Theme Song I English (1).mp3") 

}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    rwx=results[0].pose.rightWrist.x;
    console.log("Right Wrist X Position is ",rwx)
    rwy=results[0].pose.rightWrist.y;
    console.log("Right Wrist Y Position is ",rwy)
    lwx=results[0].pose.leftWrist.x;
    console.log("Left Wrist X Position is ",lwx)
    lwy=results[0].pose.leftWrist.y;
    console.log("Left Wrist Y Position is ",lwy)
    scorelw=results[0].pose.keypoints[9].score;
    console.log("The score of left wrist is ",scorelw)
    scorerw=results[0].pose.keypoints[10].score;
    console.log("The Score of right wrist is ",scorerw)
}



}

