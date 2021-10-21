Webcam.set({
    image_format: 'png',
    png_quality: 90,
    width: 350,
    height: 300
});
camera = document.getElementById("camera")
Webcam.attach(camera);

function takesnapshot() {
    Webcam.snap(function(datauri) {
        document.getElementById("result").innerHTML = '<img id ="selfie_image" src="' + datauri + '"/>';

    });
}
console.log('ml5 version:', ml5.version);
var url = "https://teachablemachine.withgoogle.com/models/0a3YxccUi/model.json"
classifier = ml5.imageClassifier(url, modelloaded);

function modelloaded() {
    console.log('model loaded!');
}

function check() {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}