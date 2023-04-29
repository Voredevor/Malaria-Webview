// Function to render array element on input 
let imageIndex = 1
let index = 1
const changeQuestion = () => {
    if (index < questionsArray.length) {
        questionBox.textContent = questionsArray[index++]
    }else if (index = questionsArray.length){
        console.log(`you clicked yes ${yesClicks} times and clicked no ${noClicks}`)
        document.querySelector('#result-el').style.display = 'block';
        testResult()
    }
}

const switchImage = () => {
    if ( imageIndex < imagesArray.length) {
        image.src = imagesArray[imageIndex++]
    }
}

const testResult = () => {
    const percent = ( yesClicks / totalClicks) * 100
    let message = document.querySelector('#result-output')
    if (percent > 80) {
        message.textContent = 'You have symptoms of SEVERE MALARIA. Please visit the nearest hospital as soon as possible.' 
    } else if (percent > 59) {
        message.textContent = 'You have symptoms of UNCOMPLICATED MALARIA. Please visit the nearest hospital .' 
    } else if ( percent > 39) {
        message.textContent = 'You have symptoms of ASYMPTOMATIC MALARIA. Please visit the nearest hospital .' 
    } else if ( percent > 0) {
        message.textContent = 'You have MILD SYMPTOMS. Can be common cold or stress related defects.' 
    }else {
        message.textContent = 'You have no MALARIA'
    }
    console.log(percent)
}


// Generate Random Facts 
const generateRandomFacts = array => {
    setInterval(() => {
        let randomNumber = Math.floor(Math.random()*array.length);
        dialogBox.style.display = 'block'
        factConsole.textContent = array[randomNumber]

        // console.log(array[randomNumber])
    }, 100000);
}


function videoEnded () {
    videoPlayer.style.display = 'none'
    videoPlayer.style.transition = 'all ease-in-out .5s'

    console.log('Video ended')
}