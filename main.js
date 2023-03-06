function setup()
{
    canvas = createCanvas(600 , 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(600 , 600)
    video.hide()
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on("pose" , gotPoses)

}
function draw()
{
    image(video , 0 , 0 , 600 , 500)
    image(mustache , noseX - 60 , noseY - 75 , 120 , 120)
}
function takePicture()
{
    save("filterImage.png")
}
function modelLoaded()
{
    console.log("It's donezos")
}
function gotPoses(results)
{
    if (results.length > 0) {
        console.log(results)
        console.log("nose x  =" +results[0].pose.nose.x)
        console.log("nose y  =" +results[0].pose.nose.y)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
}
noseX = 0
noseY = 0
function preload()
{
    mustache = loadImage("mustache.png")
}