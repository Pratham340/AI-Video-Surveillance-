object=[];
status="";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas=createCanvas(450,360);
    canvas.center();
}
function draw(){
    image(video,0,0,450,360);

    if(status != ""){
        objectDetector.detect(video,gotResult);
        for (i=0; i < object.length; i++) {
            document.getElementById("status").innerHTML="Status: Object Detected:";
            document.getElementById("objects").innerHTML="No.of Objects Detected: "+object.length;
            fill("blue");
            percent=floor(object[i].confidence*100);
            text(object[i].label+""+percent+"%",object[i].x+15,object[i].y+15);
            noFill();
            stroke("red");
            rect(object[i].x , object[i].y , object[i].width , object[i].height); 
            
        }
    }
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("ModelLoaded!... :)");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResult(error,results) {
    if(results){
        console.log(results);
        object=results;
    }
    else{
        console.log(error);
    }
    }

    email1 = localStorage.getItem("email1");
    document.getElementById("user_name").innerHTML= "<h1>Welcome "+email1+"!</h1>";