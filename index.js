// var from index.html
const dialogBox = document.querySelector('#dialog-el')
const factConsole = document.querySelector('#fact-el')
const closeDialogBox = document.querySelector('#close-dialog-el')
const videoPlayer = document.querySelector('#intro-video-el')


// Vars from checkmalaria
const startCheck = document.getElementById('#start-el')
const questionBox = document.querySelector('#question-el')
const firstOption = document.querySelector('#option-one-el')
const secondOption = document.querySelector('#option-two-el')
const image = document.querySelector('#image-el')
const totalClicks = 11
let yesClicks = 0
let noClicks = 0

const questionsArray = [ 
    'Do you Experience shaking shills that range from moderate to severe?', 
    'Do you have fever above 101 F (38 C)?', 
    'Do you experience incessant sweating?', 
    'Are you having headaches?', 
    'Are you feeling nauseous?',
    'Do you vomit?', 
    'Are you experiencing abdominal pain?', 
    'Are you having diarrhea?', 
    'Do you have anaemia?', 
    'Are you having muscle pain?', 
    'Do you feel your health deteriorating?', 
]

const imagesArray = [
    '../images/0.jfif', 
    '../images/1.jfif', 
    '../images/2.jfif', 
    '../images/3.jfif', 
    '../images/4.jfif', 
    '../images/5.jfif', 
    '../images/6.jfif', 
    '../images/7.jfif', 
    '../images/8.jfif', 
    '../images/9.jfif', 
    '../images/10.jfif'
]

const factsArray = [
    'The word MALARIA means BAD AIR.',
    'Malaria is spread by parasites.',
    'Malaria is most commonly found in Africa and parts of Southeast Asia.',
    'Malaria can pass from human to human.',
    'When infected with malaria, symptoms can range from none to severe.',
    'Malaria infects an average of 200 million people each year.',
    'The best cure for malaria is prevention',
    'Mortality rates are falling.',
    'There is a promising vaccine currently being tested',
    'In 2012, malaria caused an estimated 627 000 deaths, mostly among African children.',
    'Nearly 300,000 children under the age of five die of malaria died in 2016 equivalent to nearly 800 young lives lost each day.',
]

// generate random facts 

generateRandomFacts(factsArray)


// Setting default properties for image and question element 
image.src = imagesArray[0]
questionBox.textContent = questionsArray[0]
// questionBox.innerHTML = questionsArray[0]

firstOption.addEventListener('click', () => {
    yesClicks += 1
    changeQuestion()
    switchImage()
    // console.log(`True ${yesClicks} times`)
});
secondOption.addEventListener('click', () => {
    noClicks += 1
    changeQuestion()
    switchImage()
    // console.log(`False ${noClicks} times`)
});
console.log(questionsArray.length)

// debugger

function closeDialog() {
    dialogBox.style.display = 'none'
    console.log('clicked')
}

