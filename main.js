function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(600,320);
  video = createCapture(VIDEO);
  video.hide();
  Classifier = ml5.imageClassifier("Mobilenet",modelLoaded);
}
function modelLoaded(){
  console.log("Dummy");
}
function draw(){
  image(video,0,0,300,300);
  Classifier.classify(video,gotResult);
}
function gotResult(error,result){
  if(error){
    console.error(error);
  }else{
    console.log(result);
    document.getElementById("ObjectName").innerHTML = result[0].label;
    document.getElementById('Accuracy').innerHTML = result[0].confidence.toFixed(5) * 100 + "%";
  }
}

