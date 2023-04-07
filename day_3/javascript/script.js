var openWin = function () {
    open('../HTML/imgs.html', '_blank', ' width=600,height=600')
}

var imgNum = 5
var srcArr = new Array()
for (var i = 0; i < imgNum; i++) {
    srcArr[i] = `../images/img${i+1}.jpg`
}
// console.log(srcArr)

// var imgArr = document.getElementsByTagName("img")
// var imgArr = document.querySelector("img")

// console.log(imgArr)

var currentSrcIndex = 0

function displayImg(index) {
    // imgArr[0].src = srcArr[index]
    // imgArr.src = srcArr[index]
    document.images[0].src = srcArr[index]
    currentSrcIndex = index

}

function imgNext() {
    stopSlide()
    if (currentSrcIndex === srcArr.length - 1) {
        alert("this is last image")
    } else {
        displayImg(currentSrcIndex + 1)
    }
}

function prevNext() {
    stopSlide()
    if (currentSrcIndex === 0) {
        alert("this is first image")
    } else {
        displayImg(currentSrcIndex - 1)
    }
}


var slideID
var slideRunning = false

function slideShow() {
    if (!slideRunning) {
        slideRunning = true
        var slideBack = false
        slideID = setInterval(function () {
            if (currentSrcIndex < srcArr.length - 1 && !slideBack || currentSrcIndex === 0) {
                displayImg(currentSrcIndex + 1)
                slideBack = false
            } else if (currentSrcIndex > 0 && slideBack) {
                displayImg(currentSrcIndex - 1)
            } else {
                slideBack = true
            }
        }, 1000)
    }
}

function stopSlide() {
    clearInterval(slideID)
    slideRunning = false
}


// var buttonArr = document.querySelectorAll('[type= "button"]')
var buttonArr = document.getElementsByTagName('input')
// console.log (buttonArr)
buttonArr[0].onclick = imgNext
buttonArr[1].onclick = slideShow
buttonArr[2].onclick = stopSlide
buttonArr[3].onclick = prevNext



// var timerID = setInterval (function(){

//     document.querySelector('img').style.left = (parseInt(getComputedStyle(document.images[0].left))-10 ) + "px" 

//     if (parseInt(document.querySelector('img').style.left)= 0 + "px"){
//         clearInterval(timerID)
//         }
// },100)

// function EnterEqual (){
//     answerInp.value = answerInp.value.substring(0,answerInp.value.length-1)
// }














for(var i =(parseInt(getComputedStyle(document.images[0].left)));i=0;i-10 ){
    document.querySelector('img').style.left = ((i-10 ) + "px")
}

