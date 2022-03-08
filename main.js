nose_x = 0;
nose_y = 0;
mus_x = 0;
mus_y = 0;
hat_x = 0;
hat_y = 0;

function preload(){
    mus = loadImage('https://i.postimg.cc/MKvXXjZn/mustache-prev-ui.png')
}

function setup() {
    canvas = createCanvas (400, 300);
        canvas.center();
        videos = createCapture (VIDEO);
        videos.size(300, 300);
        videos.center();
        videos.hide();

        poseNet = ml5.poseNet(videos, model_loaded);
        poseNet.on('pose', gotPoses);
    }

    function model_loaded(){
        console.log("Model Loaded!");
    }

    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            console.log("nose_x =" + results[0].pose.nose.x);
            console.log("nose_y =" + results[0].pose.nose.y);
            mus_x = results[0].pose.nose.x+8;
            mus_y = results[0].pose.nose.y-8;            
        }
    }

function draw(){
    image(videos,0,0,400,300);
    image(mus,mus_x,mus_y,70,50);
}

function snapshot(){
    save("mushtache_filter_image.jpg");
}