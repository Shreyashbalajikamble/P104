Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90,
})

webcam = document.getElementById("webcam");
Webcam.attach(webcam);

function capture(){
    Webcam.snap(function(image_location){
        document.getElementById("result").innerHTML="<img id='img_result' src='"+image_location+"'>";

    })
}

console.log("ml5.version"+ml5.version);

var model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NEPv0VQrn/model.json", modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded");
}