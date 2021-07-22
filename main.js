noseX = 0;
noseY = 0;

function preload() {
    nose_filter = loadImage('https://i.postimg.cc/024dqDL5/nose.png');
}

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 450);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet is intialized")
}

function draw() {
    image(video, 0, 0, 600, 450);
    image(nose_filter, noseX, noseY, 80, 90);
}

function take_snapshot() {
    save(YouJokerNumber1.png);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 36;
        noseY = results[0].pose.nose.y - 55;
        console.log("noseX=" + noseX);
        console.log("noseY=" + noseY);
    }
}