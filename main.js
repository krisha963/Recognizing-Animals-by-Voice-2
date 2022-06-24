function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json", modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
dog=0;
cat=0;
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;
        document.getElementById("result_count").innerHTML = "Detected Dog: " + dog + " Detected Cat: " + cat;
        document.getElementById("result_label").innerHTML = "Detected voice is of: " + results;
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img = document.getElementById("img");
        if(results[0].label == "barking"){
            img.src = "dog.gif";
            dog++;
        }
        if(results[0].label == "meowing"){
            img.src = "cat.gif";
            cat++;
        }
        else{
            img.src = "listen.png";
        }
    }
}