noseX = 0
noseY = 0

function preload(){
clown_nose = loadImage('https://i.postimg.cc/CLKLCSv9/nose-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotposes)
}

function modelLoaded(){
    console.log("PoseNet is Inisialised")
}
    
function gotposes(results){

    if(results.length > 0 ){
        console.log(results)
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log(noseX , noseY)
    }
}


function draw(){
    background("white")
    image(video,0,0,300,300)
    image(clown_nose , noseX , noseY , 30 , 30)
}

function takeSnapshot(){
    save("myFilterImg.png")
}