previsao1 = "";
previsao2 = "";

webcam.set({
    width: 350,
    height: 300,
    image_formate: 'png',
    png_qualyt: 90
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_img" src="' > +data_uri + '"/>'
    });
}

classifier = ml5.imageClassifier(modelLoaded);
function modelLoaded() {
    console.log("modelo carregado!");
}

function speak() {
    var synth = window.speechkSynthesis;
    dadosFala1 = "a primeira previsão é" + previsao1;
    dadosFala2 = "e a segunda previsão é" + previsao2;
}