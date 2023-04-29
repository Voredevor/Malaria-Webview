// Calling each item in array

var div4 = document.querySelector('#div4');
var question4 = document.querySelector('#btn4');
question4.addEventListener('click', switch4);

var listContent = ['Apple', 'Banana', 'Orange', 'Mango', 'Papaya'];

firstOption.textContent = questionsArray.option1
console.log(questionsArray)

// Trial one 

let startIndex = 0;
function switch4() {

    if(startIndex < listContent.length){
       let newElement = document.createElement('Li');
       div4.appendChild(newElement);
       newElement.textContent = listContent[startIndex];
      startIndex++;

    }

}
for (let i = 0; i < questionsArray.length; i++) {
  questionBox.textContent = questionsArray[i];
  
}


questionsArray.forEach(question => {
        questionBox.textContent = question
    });

    function switch4() {
    if(startIndex < questionBox.length){
        questionBox.textContent = questionsArray[startIndex++];
    //   return startIndex++;
    }

}

// Image array 
var images = ["https://placehold.it/50x50","https://placehold.it/25x25","https://placehold.it/75x75"];

var target = document.getElementById('target');

images.forEach(function(imgSrc){
  var newImg = document.createElement("img");
  newImg.src = imgSrc;
  target.appendChild(newImg);
})

//Malaria facts credits 
//https://borgenproject.org/10-facts-malaria/


var Video = function () { 
  this.video = document.querySelector("#my-video")
};

var Main = function () {
    var myVideo = new Video();

    myVideo.video.addEventListener("ended", function () { console.log("It's over!"); });

    myVideo.video.addEventListener("ended", function () {
        console.log("Play something else.");
    });
};

Main();

document.getElementById('intro-video-el').addEventListener('ended',myHandler,false);
    function myHandler() {
        console.log('done')
        // What you want to do after the event
    }